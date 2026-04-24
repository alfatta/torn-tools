import { type VariantProps, cva } from "class-variance-authority"
import type { HTMLAttributes } from "react"
import { cn } from "~/lib/cn"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-lg border px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent text-white",
        secondary: "border-transparent text-text-heading",
        outline: "border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props} />
  )
}