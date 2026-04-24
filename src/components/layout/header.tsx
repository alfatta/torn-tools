import { Link } from "react-router-dom"
import { Sun, Moon, Laptop } from "lucide-react"
import { Button } from "~/components/ui/button"
import { useTheme } from "~/lib/use-theme"

export function Header() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Laptop

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60">
      <div className="flex h-14 items-center justify-between px-4">
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium text-[var(--color-text-heading)] hover:text-[var(--color-accent)] transition-colors">Home</Link>
          <Link to="/about" className="font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">About</Link>
          <a href="#" className="font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors hidden sm:inline">Projects</a>
          <a href="#" className="font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors hidden sm:inline">Contact</a>
        </nav>
        <Button variant="ghost" size="icon" onClick={cycleTheme}>
          <ThemeIcon className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}