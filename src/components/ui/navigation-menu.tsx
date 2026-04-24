import { cva } from "class-variance-authority"
import { type HTMLAttributes, type ReactNode } from "react"
import { cn } from "~/lib/cn"

const navigationMenuVariants = cva(
  "relative inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "",
        ghost: "hover:bg-accent-bg hover:text-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type NavigationMenuProps = HTMLAttributes<HTMLElement> & {
  variant?: "default" | "ghost"
}

export function NavigationMenu({
  className,
  variant = "default",
  ...props
}: NavigationMenuProps) {
  return (
    <nav
      className={cn(navigationMenuVariants({ variant, className }))}
      {...props}
    />
  )
}

type NavigationMenuItemProps = HTMLAttributes<HTMLElement> & {
  variant?: "default" | "ghost"
}

export function NavigationMenuItem({
  className,
  variant = "default",
  ...props
}: NavigationMenuItemProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 hover:text-accent",
        variant === "ghost" && "hover:bg-accent-bg hover:text-accent",
        className
      )}
      {...props}
    />
  )
}

type NavigationMenuTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost"
}

export function NavigationMenuTrigger({
  className,
  variant = "default",
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent",
        variant === "ghost" && "hover:bg-accent-bg hover:text-accent",
        className
      )}
      {...props}
    />
  )
}

type NavigationMenuContentProps = HTMLAttributes<HTMLDivElement>

export function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuContentProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full -translate-x-1/2 z-50 mt-2 min-w-48 rounded-lg border bg-background p-2 shadow-lg focus-visible:outline-none",
        className
      )}
      {...props}
    />
  )
}

interface NavigationMenuLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
}

export function NavigationMenuLink({
  className,
  asChild,
  ...props
}: NavigationMenuLinkProps) {
  if (asChild) {
    return (
      <div
        className={cn(
          "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 hover:bg-accent-bg hover:text-accent",
          className
        )}
      >
        <a {...props} />
      </div>
    )
  }
  return (
    <a
      className={cn(
        "block select-none rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 hover:bg-accent-bg hover:text-accent",
        className
      )}
      {...props}
    />
  )
}

interface NavigationMenuSubProps {
  trigger: ReactNode
  children: ReactNode
  className?: string
}

export function NavigationMenuSub({
  trigger,
  children,
  className,
}: NavigationMenuSubProps) {
  return (
    <div className="relative group">
      {trigger}
      <div
        className={cn(
          "absolute left-1/2 top-full -translate-x-1/2 z-50 mt-2 min-w-48 rounded-lg border bg-background p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
