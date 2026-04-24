import { Pages } from "~/components/layout/pages";

export function Home() {
  return (
    <Pages
      title="Welcome to Torn Tools"
      subtitle="A collection of tools and utilities for Torn City players."
    >
      <section className="flex flex-col gap-6">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-2">About Torn Tools</h2>
          <p className="text-sm">
            Torn Tools is a companion web application for Torn City - a browser-based MMORPG.
            The goal is to build tools that help players faster their progress in the game.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-2">Privacy First</h2>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>All data stored locally only (localStorage)</li>
            <li>User API keys never shared with anyone</li>
            <li>No server-side data processing</li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
          <ol className="text-sm list-decimal list-inside space-y-1">
            <li>Go to Settings and enter your Torn API key</li>
            <li>Your API key is stored locally and never leaves your browser</li>
            <li>Use the Market tool to compare your bazaar prices with market rates</li>
          </ol>
        </div>
      </section>
    </Pages>
  )
}
