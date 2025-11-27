import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ShowRomm() {
    const [navActive, setNavActive] = useState(false)
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-8">
            <Button variant="default">Click me</Button>
            <Button variant="secondary">Click me</Button>
            <Button
                variant={navActive ? 'navbarActive' : 'navbar'}
                onClick={() => setNavActive((v) => !v)}
                aria-pressed={navActive}
            >
                Click me
            </Button>
        </div>
    )
}