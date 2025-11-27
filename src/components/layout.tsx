import { Outlet } from "react-router-dom"
import Navbar from "./header"

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="w-max-[1400px] bg-none">
                <Outlet />
            </main>

            <footer />
        </>
    )
}