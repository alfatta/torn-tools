import { useMemo } from "react";

import { ApiKeyGate } from "~/components/api-key-gate";
import { Pages } from "~/components/layout/pages";
import { useApiUserInventory, type UserInventoryItem } from "~/services/user-inventory";

export function ToolsMarketDealer() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } = useApiUserInventory(true);

  const items = useMemo(() => {
    const pages = data?.pages;
    if (!pages) return [];
    return pages.flatMap((page: { inventory: { items: UserInventoryItem[] } }) => page.inventory.items);
  }, [data]);

  const totalValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  }, [items]);

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

          <div className="rounded-lg border">
            <div className="border-b p-4">
              <h3 className="text-lg font-semibold">Your Inventory</h3>
              <p className="text-sm text-gray-500">
                {items.length} items • Total quantity: {totalValue.toLocaleString()}
              </p>
            </div>

            {isLoading ? (
              <div className="p-4 text-center">Loading...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted text-left text-sm">
                    <tr>
                      <th className="p-3">Item</th>
                      <th className="p-3">Qty</th>
                      <th className="p-3">Equipped</th>
                      <th className="p-3">Faction Owned</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.uid ?? item.id} className="border-t">
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">{item.amount.toLocaleString()}</td>
                        <td className="p-3">{item.equipped ? "Yes" : "No"}</td>
                        <td className="p-3">{item.faction_owned ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {hasNextPage && (
              <div className="border-t p-4 text-center">
                <button
                  className="btn btn-secondary"
                  onClick={() => void fetchNextPage()}
                  disabled={isFetching}
                >
                  {isFetching ? "Loading more..." : "Load more"}
                </button>
              </div>
            )}
          </div>
        </section>
      </ApiKeyGate>
    </Pages>
  );
}