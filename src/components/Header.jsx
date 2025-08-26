import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav className="bg-[#000000]">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="images/logo.png" className="h-8" alt="movie Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </Link>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#e50914] md:dark:text-[#e50914]" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-[#e50914] md:dark:hover:text-[#e50914] dark:text-white">Add Movie</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-[#e50914] md:dark:hover:text-[#e50914] dark:text-white">Display Movie</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header