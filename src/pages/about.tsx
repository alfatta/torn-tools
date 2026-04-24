import { Layout } from "~/components/layout"

export function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-8 py-12">
        <h1 className="text-4xl font-bold text-[var(--color-text-heading)]">About</h1>
        <p className="text-[var(--color-text)] max-w-md text-center">
          About page content coming soon.
        </p>
      </div>
    </Layout>
  )
}
