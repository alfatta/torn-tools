import { useState } from "react"
import { Eye, EyeOff, Check, X } from "lucide-react"
import { Pages } from "~/components/layout/pages"
import { Button } from "~/components/ui/button"
import { useApiKey } from "~/hooks/use-api-key"

export function SettingsPage() {
  const { apiKey, setApiKey } = useApiKey()
  const [inputValue, setInputValue] = useState(apiKey)
  const [showKey, setShowKey] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setApiKey(inputValue)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const handleClear = () => {
    setInputValue("")
    setApiKey("")
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  return (
    <Pages title="Settings" subtitle="Configure your Torn Tools preferences.">
      <section className="flex flex-col gap-6">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-4">API Key</h2>
          <p className="text-sm mb-4">
            Enter your Torn City API key to enable personalized features. Your
            API key is stored locally and never shared.{" "}
            <a
              href="https://www.torn.com/preferences.php#tab=api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Get your API key from here
            </a>
            .
          </p>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type={showKey ? "text" : "password"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your API key"
                className="w-full h-10 px-3 pr-10 rounded-lg border border-[var(--color-border)] bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <Button onClick={handleSave} disabled={inputValue === apiKey}>
              <Check className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" onClick={handleClear}>
              <X className="h-4 w-4" />
              Clear
            </Button>
          </div>
          {isSaved && (
            <p className="text-sm text-green-500 mt-2">
              Settings saved successfully.
            </p>
          )}
        </div>
      </section>
    </Pages>
  )
}
