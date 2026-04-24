import { ApiKeyGate } from "~/components/api-key-gate"
import { Pages } from "~/components/layout/pages"

export function ToolsMarketDealer() {
  return (
    <Pages
      title="Market Dealer"
      subtitle="Compare your bazaar prices with market rates."
    >
      <ApiKeyGate>
        <section className="flex flex-col gap-6">
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold mb-2">Market Dealer Tool</h2>
            <p className="text-sm">
              This tool helps you find profitable deals by comparing your bazaar
              inventory prices with current market rates.
            </p>
          </div>
        </section>
      </ApiKeyGate>
    </Pages>
  )
}
