import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { useApiKey } from "~/hooks/use-api-key"

interface ApiKeyGateProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ApiKeyGate({ children, fallback }: ApiKeyGateProps) {
  const { apiKey } = useApiKey()

  // todo: check isValidAPIKey by api
  if (!apiKey) {
    if (fallback) {
      return <>{fallback}</>
    }
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 text-center border border-accent bg-accent/5 rounded-xl">
        <p className="text-muted-foreground">API key is required to access this feature.</p>
        <Link
          to="/settings"
          className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90"
        >
          Set API Key
        </Link>
      </div>
    )
  }

  return <>{children}</>
}