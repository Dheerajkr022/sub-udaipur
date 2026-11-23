import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#C5A059] hover:bg-[#B88A3B] text-white font-bold shadow-md shadow-[#C5A059]/20 transition-all",
        destructive:
          "bg-red-700 text-white hover:bg-red-800",
        outline:
          "border border-[#C5A059] text-[#A38038] hover:bg-[#C5A059] hover:text-white transition-all font-semibold",
        secondary:
          "bg-white border border-[#E5E7EB] text-[#1F2937] hover:bg-[#F9FAFB] hover:border-[#C5A059]/60 transition-all font-semibold shadow-sm",
        ghost: "hover:bg-gray-100 hover:text-[#A38038] text-[#4B5563]",
        link: "text-[#C5A059] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
