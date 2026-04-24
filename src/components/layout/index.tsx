import type { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-svh flex-col w-4/5 max-w-3xl mx-auto border-x border-border divide-y divide-border">
      <Header />
      <main className="flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  )
}