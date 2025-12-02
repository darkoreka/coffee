import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'

const nav = [
    { name: 'Home', to: '/' },
    { name: 'Showroom', to: '/showroom' },
    { name: 'Reviews', to: '/reviews' },
]

export default function Header() {
    return (
        <Disclosure as="nav" className="w-full bg-primary-900/60 backdrop-blur z-40">
            <div className="w-full px-4">
                <div className="mx-auto max-w-full flex items-center py-3 md:py-4">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-18 w-auto" />
                    </div>
                    <div className="flex-1" />
                    <div className="hidden sm:flex items-center gap-3 pr-2">
                        {nav.map((item) => (
                            <Button key={item.to} to={item.to} variant="navbar" className="px-3 py-1.5" activeVariant="navbarActive">
                                {item.name}
                            </Button>
                        ))}
                    </div>
                    <div className="sm:hidden ml-2">
                        <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/5 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6 group-data-open:hidden" />
                            <XMarkIcon className="h-6 w-6 hidden group-data-open:block" />
                        </DisclosureButton>
                    </div>
                </div>
                <DisclosurePanel className="sm:hidden px-4 pb-4">
                    <div className="space-y-2">
                        {nav.map((item) => (
                            <Button key={item.to} to={item.to} variant="navbar" className="w-full justify-start block px-3 py-2" activeVariant="navbarActive">
                                {item.name}
                            </Button>
                        ))}
                    </div>
                </DisclosurePanel>
            </div>
        </Disclosure>
    )
}