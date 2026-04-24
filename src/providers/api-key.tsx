import { useState, useEffect } from "react"
import { LS_API_KEY } from "~/constants"
import { ApiKeyContext } from "~/hooks/use-api-key"

export function ApiKeyProvider({ children }: { children: React.ReactNode }) {
  const [apiKey, setApiKeyState] = useState<string>(() => {
    return localStorage.getItem(LS_API_KEY) ?? ""
  })

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem(LS_API_KEY, apiKey)
    } else {
      localStorage.removeItem(LS_API_KEY)
    }
  }, [apiKey])

  const setApiKey = (key: string) => {
    setApiKeyState(key)
  }

  return (
    <ApiKeyContext.Provider value={{ apiKey, setApiKey }}>
      {children}
    </ApiKeyContext.Provider>
  )
}
