import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="bg-[#000000]">
            <div className="container flex items-center justify-between mx-auto py-4 px-6">
                <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="images/logo (1).png" className="h-10 w-36" alt="Movie Logo" />
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to={"/"} className="text-[#e50914]">Home</Link>
                    <Link to={"/add-movie"} className="text-white hover:text-[#e50914]">Add Movie</Link>
                    <Link to={"/display-movie"} className="text-white hover:text-[#e50914]">Display Movie</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
