
import { Text } from "@/components/ui/text"
import OurStoryImage from "@/assets/Image-ourstory.png"

export default function OurStory() {
    return (
        <div className="w-full max-h-[55vh] flex px-4 py-12 md:py-24 overflow-visible relative">
            <Text title="Our story" className="hidden md:block md:text-right overflow-visible md:absolute md:right-8 md:-translate-y-18 md:z-30">
            </Text>
            <div className="flex flex-row items-center gap-6 max-w-7xl mx-auto bg-[#533629] rounded-2xl p-6 md:p-12 backdrop-blur-sm overflow-visible md:relative md:z-10">
                <img
                    src={OurStoryImage}
                    alt="Our Story"
                    className="hidden md:block md:w-1/2 object-contain md:relative md:-translate-x-20 md:translate-y-15 md:-mr-12 md:z-20"
                />
                <Text description1="Reka is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customers palate.">
                </Text>

            </div>
        </div>
    )
}

