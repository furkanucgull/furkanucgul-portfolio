import reactsv from "../images/reactjs.svg";
import jssv from "../images/js.svg";
import git from "../images/git-icon.svg";
import typescript from "../images/typescript.svg";
import tailwind from "../images/tailwind.svg";
import html from "../images/html.svg";
import asp from "../images/dotnet-svgrepo-com.svg";
import sql from "../images/microsoft-sql-server-logo-svgrepo-com.svg";
import netlify from "../images/netlify-svgrepo-com.svg";
import azure from "../images/azure-svgrepo-com.svg";

const Tools = () => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <h1 className="text-white sm:text-6xl">Tools Of The Present And Future</h1>
                <p className="text-gray-400 text-center font-Poppins">Frontend technologies I prefer using</p>
            </div>
            <div className="pics flex flex-col items-center justify-center gap-10  mt-12">
                <div className="flex flex-row items-center justify-center sm:gap-60 gap-6 ">
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-16  h-16" src={reactsv} alt="" />
                        <p className="text-white text-center mt-2"> React js</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-16 h-16" src={typescript} alt="" />
                        <p className="text-white text-center mt-2"> TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-16 h-16" src={git} alt="" />
                        <p className="text-white text-center mt-2"> Git</p>
                    </div>

                </div>
                <div className="flex flex-row items-center justify-center sm:gap-60 gap-6  ">
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-16  h-16" src={tailwind} alt="" />
                        <p className="text-white text-center mt-2"> TailwindCss</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-16  h-16" src={html} alt="" />
                        <p className="text-white text-center mt-2"> HTML5</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-16 h-16" src={jssv} alt="" />
                        <p className="text-white text-center mt-2"> JavaScript</p>
                    </div>

                </div>

            </div>
            <div className="flex flex-col gap-6">

                <p className="text-gray-400 text-center mt-20 font-Poppins">Backend technologies I prefer using</p>
                <div className="pics flex flex-col items-center justify-center gap-10  mt-12">
                    <div className="flex flex-row items-center justify-center sm:gap-60 gap-6 ">
                        <div className="flex flex-col items-center justify-center">
                            <img className="w-16  h-16" src={sql} alt="" />
                            <p className="text-white text-center mt-2"> MsSQL</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img className="w-16  h-16" src={asp} alt="" />
                            <p className="text-white text-center mt-2"> .Net</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <p className="text-gray-400 text-center mt-20 font-Poppins">Other technologies </p>
                <div className="pics flex flex-col items-center justify-center gap-10  mt-12">
                    <div className="flex flex-row items-center justify-center sm:gap-60 gap-6 ">
                        <div className="flex flex-col items-center justify-center">
                            <img className="w-16  h-16" src={netlify} alt="" />
                            <p className="text-white text-center mt-2"> Netlify</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img className="w-16  h-16" src={azure} alt="" />
                            <p className="text-white text-center mt-2 "> Microsoft Azure</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Tools;