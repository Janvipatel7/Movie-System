const Home = () => {
    return (
        <section className="bg-[#0f1014] text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <div className="md:w-6/12 text-center md:text-left">
                    <p className="uppercase text-red-500 font-semibold">Action Thriller</p>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-3">
                        Elephant Walk At Sunset
                    </h1>
                    <p className="mt-5 text-gray-300 max-w-xl mx-auto md:mx-0">
                        Streamlab is a long established fact that a reader will be distracted
                        by the readable content of a page when Streamlab at its layout Streamlab.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 justify-center md:justify-start">
                        <button className="bg-[#e50914] px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                            Play Now
                        </button>
                        <button className="border border-gray-400 px-6 py-3 rounded-md font-semibold hover:border-white transition">
                            Watch Later
                        </button>
                    </div>
                </div>
                <div className="md:w-6/12 flex justify-center">
                    <img
                        src="/images/home-image.jpg"
                        alt="Hero Movie"
                        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Home
