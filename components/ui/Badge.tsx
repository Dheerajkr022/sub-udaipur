import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A059]",
  {
    variants: {
      variant: {
        default:
          "border-[#C5A059]/30 bg-[#FAF8F5] text-[#A38038] shadow-sm",
        secondary:
          "border-gray-200 bg-gray-100 text-gray-700 shadow-sm",
        destructive:
          "border-red-500/30 bg-red-50 text-red-700",
        outline: "border-[#C5A059]/40 text-[#1A202C]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
