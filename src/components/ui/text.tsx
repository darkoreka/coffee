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

const titleVariants = cva(
    "font-bold text-[#F8E4BF]",
    {
        variants: {
            size: {
                sm: "text-xl md:text-2xl",
                default: "text-6xl md:text-8xl",
                lg: "text-7xl md:text-9xl",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

type TextProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof textVariants> & {
        title?: React.ReactNode
        titleSize?: VariantProps<typeof titleVariants>["size"]
        description1?: React.ReactNode
        description2?: React.ReactNode
        asChild?: boolean
    }

function Text({
    className,
    title,
    titleSize = "default",
    description1,
    description2,
    align,
    variant,
    asChild = false,
    ...props
}: TextProps) {
    const Comp = asChild ? Slot : "div"

    const childrenArray = React.Children.toArray(props.children).filter((child) => {
        return !(typeof child === 'string' && child.trim() === '')
    })

    if (asChild) {
        if (childrenArray.length === 1) {
            const { children, ...rest } = props as any
            return (
                <Slot className={cn(textVariants({ align, variant, className }))} {...rest}>
                    {childrenArray[0]}
                </Slot>
            )
        }

        if (childrenArray.length > 1) {
            console.warn('Text asChild received multiple children — falling back to wrapper element.')
        }
    }

    return (
        <Comp className={cn(textVariants({ align, variant, className }))} {...props}>
            {props.children}

            {title && (
                <h1 style={{
                    fontFamily: 'Dancing Script'
                }}
                    className={cn(titleVariants({ size: titleSize }))}>{title}</h1>
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

export { Text, textVariants, titleVariants }

export default Text
