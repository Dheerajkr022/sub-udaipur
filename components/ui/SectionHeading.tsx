import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 mb-8 md:mb-12",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-serif text-[#111827]">
        {title}
      </h2>
      <div className={cn("h-0.5 w-14 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] mt-1 mb-2 rounded-full", centered ? "mx-auto" : "")} />
      {subtitle && (
        <p className="text-base md:text-lg text-[#6B7280] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
