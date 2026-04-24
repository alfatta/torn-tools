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
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex items-center justify-between p-4">
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="font-medium hover:text-accent">Home</Link>
          <Link to="/tos" className="font-medium hover:text-accent">ToS</Link>
        </nav>
        <Button variant="ghost" size="icon" onClick={cycleTheme}>
          <ThemeIcon className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}