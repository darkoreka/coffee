import { Outlet } from "react-router-dom"
import Navbar from "./header"
import Footer from "./footer"

export default function Layout() {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <Navbar />

            <main className="flex-1 px-4 py-8 max-w-7xl mx-auto">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}