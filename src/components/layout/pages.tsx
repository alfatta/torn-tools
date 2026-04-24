import type { ReactNode } from "react";

interface PagesProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function Pages({ title, subtitle, children }: PagesProps) {
  return (
    <div className="px-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-sm">{subtitle}</p>
      )}
      {children && (
        <div className="flex flex-col gap-4">
          {children}
        </div>
      )}
    </div>
  )
}