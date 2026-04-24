import { useState, useEffect } from "react"
import { ApiKeyContext } from "~/hooks/use-api-key"

const API_KEY_STORAGE_KEY = "torn-tools-api-key"

export function ApiKeyProvider({ children }: { children: React.ReactNode }) {
  const [apiKey, setApiKeyState] = useState<string>(() => {
    return localStorage.getItem(API_KEY_STORAGE_KEY) ?? ""
  })

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem(API_KEY_STORAGE_KEY, apiKey)
    } else {
      localStorage.removeItem(API_KEY_STORAGE_KEY)
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
