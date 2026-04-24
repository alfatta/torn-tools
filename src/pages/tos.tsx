import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"

export function ToS() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <h1 className="text-3xl font-bold text-[var(--color-text-heading)]">Terms of Service</h1>
      <p className="text-sm text-[var(--color-text-muted)]">
        Last updated: April 2026
      </p>

      <div className="rounded-lg bg-[var(--color-background-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-heading)]">API Key Usage Disclosure</h2>
        <p className="mb-4 text-[var(--color-text)]">
          When you provide your Torn API key to use this tool, please be aware of the following:
        </p>

        <div className="overflow-hidden rounded-lg border border-[var(--color-border)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--color-background)]">
              <tr>
                <th className="border-b border-[var(--color-border)] px-4 py-3 text-left font-medium text-[var(--color-text-heading)]">Category</th>
                <th className="border-b border-[var(--color-border)] px-4 py-3 text-left font-medium text-[var(--color-text-heading)]">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              <tr>
                <td className="px-4 py-3 font-medium text-[var(--color-text-heading)]">Data Storage</td>
                <td className="px-4 py-3 text-[var(--color-text)]">Only locally (in your browser)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[var(--color-text-heading)]">Data Sharing</td>
                <td className="px-4 py-3 text-[var(--color-text)]">Nobody - your data stays on your device</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[var(--color-text-heading)]">Purpose of Use</td>
                <td className="px-4 py-3 text-[var(--color-text)]">Personal gain (market price optimization)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[var(--color-text-heading)]">Key Storage</td>
                <td className="px-4 py-3 text-[var(--color-text)]">Stored locally in your browser, never shared with anyone</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[var(--color-text-heading)]">Key Access Level</td>
                <td className="px-4 py-3 text-[var(--color-text)]">Limited Access (user: bazaar, inventory; market: itemmarket)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4 text-[var(--color-text)]">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-heading)]">Data Control</h2>
          <p>
            You maintain full control of your data. Everything is stored locally in your browser.
            No data is ever sent to our servers or shared with any third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-heading)]">API Key Security</h2>
          <p>
            Your API key is stored solely in your browser&apos;s localStorage and is never transmitted
            to anyone except the official Torn API to fetch your game data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-heading)]">Rate Limiting</h2>
          <p>
            This tool respects Torn&apos;s API rate limits (100 requests per minute). We cache data
            when possible to minimize API calls.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-[var(--color-text-heading)]">Compliance</h2>
          <p>
            This tool complies with Torn&apos;s API Terms of Service. By using this tool, you agree to
            these terms and acknowledge the data handling practices described above.
          </p>
        </section>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 p-4">
        <CheckCircle className="h-5 w-5 text-[var(--color-accent)]" />
        <span className="text-sm text-[var(--color-text)]">
          Your privacy is our priority. No data leaves your device except what you directly request from Torn&apos;s API.
        </span>
      </div>

      <div className="text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
