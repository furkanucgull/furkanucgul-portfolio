import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const DropDownMenu = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleToggleMenu = () => {
        setToggle(!toggle);
    };

    return (
        <div className="relative inline-block sm:hidden text-left ">
            <button
                onClick={handleToggleMenu}
                className="inline-flex justify-center w-full p-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-blue-700"
                id="menu-button"
                aria-expanded={toggle}
                aria-haspopup="true"
            >
                <RxHamburgerMenu size={20} />
            </button>
            {toggle && (
                <div
                    className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-gradient-to-r from-slate-500 to-slate-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        <ul className="space-y-2 text-center" role="menu">
                            <li>
                                <a
                                    onClick={() => navigate("/")}
                                    className="block px-4 py-2 text-white cursor-pointer hover:bg-gray-100 text-xl font-PirataOne"
                                    role="menuitem"
                                    tabIndex={0}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => navigate("/projects")}
                                    className="block px-4 py-2 text-white cursor-pointer hover:bg-gray-100 text-xl font-PirataOne"
                                    role="menuitem"
                                    tabIndex={0}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-4 py-2 text-white cursor-pointer hover:bg-gray-100 text-xl font-PirataOne"
                                    role="menuitem"
                                    tabIndex={0}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block px-4 py-2 text-white cursor-pointer hover:bg-gray-100 text-xl font-PirataOne"
                                    role="menuitem"
                                    tabIndex={0}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDownMenu;
