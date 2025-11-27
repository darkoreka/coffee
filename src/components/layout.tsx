import { Outlet } from "react-router-dom"
import Navbar from "./header"

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 bg-none">
                <Outlet />
            </main>

            <footer className="h-6 md:h-8 bg-white" />
        </div>
    )
}