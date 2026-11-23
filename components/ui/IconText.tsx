import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface IconTextProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  text: React.ReactNode;
  iconClassName?: string;
  textClassName?: string;
}

export function IconText({
  icon: Icon,
  text,
  iconClassName,
  textClassName,
  className,
  ...props
}: IconTextProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <Icon
        className={cn("h-5 w-5 shrink-0 text-[#C5A059]", iconClassName)}
        aria-hidden="true"
      />
      <span className={cn("text-sm font-medium text-[#1A202C]", textClassName)}>
        {text}
      </span>
    </div>
  )
}
