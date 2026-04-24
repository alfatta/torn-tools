import { CheckCircle } from "lucide-react"
import { Pages } from "~/components/layout/pages"

export function ToS() {
  return (
    <Pages title="Terms of Service" subtitle="Last updated: April 2026">
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">API Key Usage Disclosure</h2>
        <p>
          When you provide your Torn API key to use this tool, please be aware of the following:
        </p>
      </section>

      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm divide-y [&_td]:px-4 [&_td]:py-3 ">
          <tr>
            <td className="font-medium">Data Storage</td>
            <td>Only locally (in your browser)</td>
          </tr>
          <tr>
            <td className="font-medium">Data Sharing</td>
            <td>Nobody - your data stays on your device</td>
          </tr>
          <tr>
            <td className="font-medium">Purpose of Use</td>
            <td>Personal gain (market price optimization)</td>
          </tr>
          <tr>
            <td className="font-medium">Key Storage</td>
            <td>Stored locally in your browser, never shared with anyone</td>
          </tr>
          <tr>
            <td className="font-medium">Key Access Level</td>
            <td>Limited Access (user: bazaar, inventory; market: itemmarket)</td>
          </tr>
        </table>
      </div>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Data Control</h2>
        <p>
          You maintain full control of your data. Everything is stored locally in your browser.
          No data is ever sent to our servers or shared with any third parties.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">API Key Security</h2>
        <p>
          Your API key is stored solely in your browser&apos;s localStorage and is never transmitted
          to anyone except the official Torn API to fetch your game data.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Rate Limiting</h2>
        <p>
          This tool respects Torn&apos;s API rate limits (100 requests per minute). We cache data
          when possible to minimize API calls.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Compliance</h2>
        <p>
          This tool complies with Torn&apos;s API Terms of Service. By using this tool, you agree to
          these terms and acknowledge the data handling practices described above.
        </p>
      </section>

      <div className="flex items-center gap-4 rounded-lg border border-accent/30 bg-accent/10 p-4">
        <CheckCircle className="h-5 w-5 text-accent" />
        <span className="text-sm">
          Your privacy is our priority. No data leaves your device except what you directly request from Torn&apos;s API.
        </span>
      </div>
    </Pages>
  )
}
