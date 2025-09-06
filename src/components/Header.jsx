import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const { pathname } = useLocation();
    const [menu, setMenu] = useState(false);

    return (
        <header className="bg-[#000000]">
            <div className="container mx-auto">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="images/logo (1).png" className="h-10 w-36" alt="Movie Logo" />
                    </Link>

                    <div className="hidden md:block">
                        <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
                            <li>
                                <Link to={"/"} className={`${pathname === "/" ? "text-[#e50914]" : "text-white"} hover:text-[#e50914]`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/add-movie"} className={`${pathname === "/add-movie" ? "text-[#e50914]" : "text-white"} hover:text-[#e50914]`}>Add Movie</Link>
                            </li>
                            <li>
                                <Link to={"/display-movie"} className={`${pathname === "/display-movie" || pathname.includes("/description") ? "text-[#e50914]" : "text-white"} hover:text-[#e50914]`}>Display Movie</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setMenu(!menu)} className="text-white text-2xl">
                            {menu ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {menu && (
                    <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-[#000000] z-50 p-6 overflow-y-auto">
                        <ul className="flex flex-col space-y-4 p-2 font-semibold">
                            <li>
                                <Link to={"/"} onClick={() => setMenu(false)} className={`${pathname === "/" ? "text-[#e50914]" : "text-white"}`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/add-movie"} onClick={() => setMenu(false)} className={`${pathname === "/add-movie" ? "text-[#e50914]" : "text-white"}`}>Add Movie</Link>
                            </li>
                            <li>
                                <Link to={"/display-movie"} onClick={() => setMenu(false)} className={`${pathname === "/display-movie" || pathname.includes("/description") ? "text-[#e50914]" : "text-white"}`}>Display Movie</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
