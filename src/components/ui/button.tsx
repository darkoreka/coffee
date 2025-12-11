import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { NavLink } from 'react-router-dom'
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "font-[Leiko] inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "rounded-full bg-secondary text-primary hover:bg-secondary/80 ring ring-yellow-500",
                secondary:
                    "rounded-full bg-primary shadow-xs text-secondary hover:bg-primary/50 ring ring-yellow-400",
                navbar: "bg-none text-secondary",
                navbarActive: "rounded-b-lg bg-primary shadow-xs text-secondary",
                ghost: "bg-transparent ",
            },
            size: {
                default: "h-11 px-5 py-3 has-[>svg]:px-4",
                sm: "h-10 gap-1.5 px-4 has-[>svg]:px-3",
                lg: "h-12 px-8 has-[>svg]:px-6",
                icon: "size-11",
                "icon-sm": "size-10",
                "icon-lg": "size-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    to,
    activeVariant,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
        to?: string
        activeVariant?: VariantProps<typeof buttonVariants>['variant']
    }) {
    const Comp = asChild ? Slot : "button"

    const childrenArray = React.Children.toArray(props.children).filter((child) => {
        return !(typeof child === 'string' && child.trim() === '')
    })

    if (to) {
        const { children, ...rest } = props as any;
        return (
            <NavLink
                to={to}
                {...rest}
                className={({ isActive }) =>
                    cn(
                        buttonVariants({
                            variant: isActive
                                ? activeVariant ?? variant ?? "navbarActive"
                                : variant ?? "navbar",
                            size,
                            className,
                        })
                    )
                }
            >
                {children}
            </NavLink>
        );
    }

    if (asChild) {
        if (childrenArray.length === 1) {
            const { children, ...rest } = props as any
            return (
                <Slot
                    data-slot="button"
                    className={cn(buttonVariants({ variant, size, className }))}
                    {...rest}
                >
                    {childrenArray[0]}
                </Slot>
            )
        }

        if (childrenArray.length > 1) {
            console.warn('Button asChild received multiple children falling back to button element.')
        }

    }

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
