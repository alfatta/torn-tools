import { useEffect, useState, type ReactNode } from "react"
import { ThemeContext } from "../hooks/use-theme"
import type { Theme } from "../hooks/use-theme"

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [systemDark, setSystemDark] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const storedTheme = (typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null) as Theme | null
  const [theme, setTheme] = useState<Theme>(storedTheme ?? "system")

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    if (theme === "system") {
      root.classList.toggle("dark", systemDark)
    } else {
      root.classList.toggle("dark", theme === "dark")
    }
  }, [theme, systemDark])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}