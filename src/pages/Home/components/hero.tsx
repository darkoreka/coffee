

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex items-start justify-center mt-30 px-6 py-12">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold">Reka's coffee</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground">Fresh roasting, exceptional flavor.</p>
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