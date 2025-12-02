import { Outlet } from "react-router-dom"
import Navbar from "./header"

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
            <Navbar />

            <main className="flex-1 w-full px-4 py-8">
                <Outlet />
            </main>

            <footer className="h-6 md:h-8 w-full bg-white" />
        </div>
    )
}