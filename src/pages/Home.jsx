const Home = () => {
    return (
        <section className="bg-[#0f1014] text-white min-h-screen flex items-center">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                <div className="md:w-6/12">
                    <p className="uppercase text-red-500 font-semibold">Action Thriller</p>
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight mt-3">
                        Elephant Walk At Sunset
                    </h1>
                    <p className="mt-5 text-gray-300">
                        Streamlab is a long established fact that a reader will be distracted 
                        by the readable content of a page when Streamlab at its layout Streamlab.
                    </p>
                    <div className="flex gap-5 mt-8">
                        <button className="bg-[#e50914] px-6 py-3 rounded-md font-semibold hover:bg-red-700">
                             Play Now
                        </button>
                        <button className="border border-gray-400 px-6 py-3 rounded-md font-semibold hover:border-white">
                            Watch Later
                        </button>
                    </div>
                </div>

                <div className="md:w-6/12 flex justify-center">
                    <img src="/images/home-image.jpg" alt="Hero Movie" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    )
}

export default Home
