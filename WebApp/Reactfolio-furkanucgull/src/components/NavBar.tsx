import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="sticky top-0 bg-gradient-to-r from-slate-700 via-zinc-800 to-zinc-800 p-4 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-PlaywriteDKLoopet ml-12 sm:ml-2">
                        Furkan
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
