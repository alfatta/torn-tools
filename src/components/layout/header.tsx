import { Link } from "react-router-dom"
import { Sun, Moon, Laptop, ChevronDown, Settings } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuSub,
} from "~/components/ui/navigation-menu"
import { useTheme } from "~/hooks/use-theme"

type MenuItem = {
  label: string
  to?: string
  children?: { label: string; to: string }[]
}

const menuItems: MenuItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Tools",
    children: [
      { label: "Market Dealer", to: "/tools/market-dealer" },
    ],
  },
  { label: "ToS", to: "/tos" },
]

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
        <NavigationMenu>
          {menuItems.map((item) =>
            item.children ? (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuSub
                  trigger={
                    <button className="inline-flex items-center gap-1 text-sm font-medium hover:text-accent px-3 py-2">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  }
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className="block px-3 py-2 text-sm font-medium hover:bg-accent-bg hover:text-accent rounded-md"
                    >
                      {child.label}
                    </Link>
                  ))}
                </NavigationMenuSub>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={item.label}>
                <Link
                  to={item.to!}
                  className="px-3 py-2 text-sm font-medium hover:text-accent"
                >
                  {item.label}
                </Link>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" onClick={cycleTheme}>
            <ThemeIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
