import { Outlet } from "react-router-dom"
import Navbar from "./header"
import Footer from "./footer"

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
            <Navbar />

            <main className="flex-1 w-full px-4 py-8">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}