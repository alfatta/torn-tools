import { type VariantProps, cva } from "class-variance-authority"
import { type ButtonHTMLAttributes } from "react"
import { cn } from "~/lib/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90",
        outline: "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-accent-bg)] hover:text-[var(--color-text-heading)]",
        ghost: "hover:bg-[var(--color-accent-bg)] hover:text-[var(--color-text-heading)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}