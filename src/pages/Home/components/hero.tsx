import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";


export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-center mt-30 px-6 py-12">
                <Text
                    className="flex flex-col text-center md:text-left"
                    title={"Reka's Coffee"}
                    description1={"Today's good mood is sponsored by coffee search for your coffee now"}
                />
                <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4">
                    <Button variant="default" size="lg">
                        Shop Now
                    </Button>
                    <Button variant="secondary" size="lg">
                        Catalog
                    </Button >
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-start justify-center px-6 py-8">
                <img
                    src="/src/assets/Hero Img .png"
                    alt="Hero"
                    className="hidden md:block max-w-[700px] object-contain z-0 -mt-8 md:-mt-16"
                />

            </div>
        </div>
    )
}