import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva(
    "leading-relaxed",
    {
        variants: {
            variant: {
                default: "",
                subtle: "opacity-90",
            },
            align: {
                left: "text-left",
                center: "text-center",
                right: "text-right",
            },
        },
        defaultVariants: {
            variant: "default",
            align: "left",
        },
    }
)

type TextProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof textVariants> & {
        title?: React.ReactNode
        description1?: React.ReactNode
        description2?: React.ReactNode
        asChild?: boolean
    }

function Text({
    className,
    title,
    description1,
    description2,
    align,
    variant,
    asChild = false,
    ...props
}: TextProps) {
    const Comp = asChild ? Slot : "div"

    return (
        <Comp className={cn(textVariants({ align, variant, className }))} {...props}>
            {title && (
                <h1 style={
                    { fontFamily: 'Dancing Script' }
                }
                className="text-6xl md:text-8xl font-bold text-[#F8E4BF]">{title}</h1>
            )}

            {description1 && (
                <p className="mt-4 text-lg md:text-xl text-[#9A816E] font-leiko">{description1}</p>
            )}

            {description2 && (
                <p className="mt-1 text-base md:text-lg text-white">{description2}</p>
            )}
        </Comp>
    )
}

export { Text, textVariants }

export default Text
