import { Layout } from '~/components/layout'

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-8 py-12">
        <h1 className="text-4xl font-bold text-[var(--color-text-heading)]">Welcome to Torn Tools</h1>
        <p className="text-[var(--color-text)] max-w-md text-center">
          A collection of tools and utilities built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </Layout>
  )
}

export default App