import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import heroImage from "@/assets/Hero Img .png";


export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-20 px-6 py-2">
                <Text
                    className="flex flex-col text-center"
                    title={"Reka's Coffee"}
                    description1={"Today's good mood is sponsored by coffee search for your coffee now"}
                />
                <div className="flex flex-row justify-center mt-8 space-x-4">
                    <Button variant="default" size="lg">
                        Shop Now
                    </Button>
                    <Button variant="secondary" size="lg">
                        Catalog
                    </Button >
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
                <img
                    src={heroImage}
                    alt="Hero"
                    className="hidden md:block max-w-[700px]"
                />

            </div>
        </div>
    )
}