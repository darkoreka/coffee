import footerImage from '@/assets/Footer Img.png'
import footerBg from '@/assets/Bg footer.png'
import { Text } from '@/components/ui/text'

export default function Footer() {
    return (
        <footer
            className="text-[#F8E4BF]"
            style={{ backgroundImage: `url(${footerBg})` }}
        >
            <div className="bg-[#2b1a14]/80">
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 space-y-8">

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 justify-center">
                        <div className="hidden md:flex items-center md:items-start justify-center md:justify-start">
                            <img className="w-32 md:w-40" src={footerImage} alt="Vintage coffee grinder illustration" />
                        </div>

                        <div className="space-y-3">
                            <Text asChild className="text-lg font-semibold font-leiko"><h3>About</h3></Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">Our Story</Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">FAQ</Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">Careers</Text>
                        </div>

                        <div className="space-y-3">
                            <Text asChild className="text-lg font-semibold font-leiko"><h3>Customer Resources</h3></Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">Menu</Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">Locations</Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">Support</Text>
                        </div>

                        <div className="space-y-3">
                            <Text asChild className="text-lg font-semibold font-leiko"><h3>Services</h3></Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">Payment Options</Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">Refunds & Exchanges</Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90">Limitation Of Liability</Text>
                        </div>

                        <div className="space-y-3">
                            <Text asChild className="text-lg font-semibold font-leiko"><h3>Contact</h3></Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90 flex items-start gap-2">
                                <span className="font-semibold">Address:</span>
                                <span>Muscel street - Romania</span>
                            </Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90 flex items-center gap-2">
                                <span className="font-semibold">Email:</span>
                                <span>RekaCoffee@Coffee.com</span>
                            </Text>
                            <Text className="text-sm text-[#e9d6b4] font-leiko opacity-90 flex items-center gap-2">
                                <span className="font-semibold">Phone:</span>
                                <span>+1-222-34-Reka</span>
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
