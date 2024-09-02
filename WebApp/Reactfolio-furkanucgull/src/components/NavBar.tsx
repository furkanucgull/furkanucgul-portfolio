import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { TbHexagonLetterFFilled } from "react-icons/tb";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="sticky top-0 bg-gradient-to-r from-slate-800 via-zinc-800 to-zinc-800 p-4 z-50 w-full">
                <div className="container mx-auto flex justify-between items-center w-full">
                    <div className="text-white flex   ml-12 sm:ml-2">
                        <TbHexagonLetterFFilled size={35} /> <span className="mt-2 text-2xl">.</span> <span className=" mt-0.5 ml-1 font-PlaywriteDKLoopet text-2xl"> Ucgul</span>
                    </div>
                    <DropDownMenu />
                    <ul className="hidden sm:flex space-x-4 gap-5">
                        <li>
                            <a
                                onClick={() => navigate("/")}
                                className="text-white cursor-pointer hover:text-gray-200 sm:text-2xl font-PirataOne"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate("/projects")}
                                className="text-white cursor-pointer hover:text-gray-200 sm:text-2xl font-PirataOne"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate("/skills")}
                                className="text-white cursor-pointer hover:text-gray-200 sm:text-2xl font-PirataOne"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate("/contact")}
                                className="text-white cursor-pointer hover:text-gray-200 sm:text-2xl font-PirataOne"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
