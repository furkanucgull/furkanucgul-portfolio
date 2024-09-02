import { useNavigate } from "react-router-dom";
import profileImage from "../images/Furkan.jpg";

const AboutMe = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="About-Me sm:flex flex-col sm:flex-row gap-12 sm:gap-40 sm:p-20 p-6 sm:justify-between sm:mb-52">
                <div className="text-area sm:max-w-lg">
                    <h1 className="font-NewAmsterdam text-white text-2xl sm:text-5xl italic text-center">ABOUT ME...</h1>
                    <div className="mt-3 leading-relaxed">
                        <p className="text-white">
                            I am a <span className="text-yellow-400 font-semibold">creative</span> and
                            <span className="text-yellow-400 font-semibold"> driven Full-Stack Developer</span> with a passion for crafting elegant solutions to complex problems.
                            I hold a <span className="text-yellow-400 font-semibold">Bachelor of Science in Energy Engineering</span> from
                            <span className="underline decoration-sky-500 font-semibold"> Gazi University</span> and am enthusiastic about building
                            <span className="text-yellow-400 font-semibold"> functional and engaging web applications</span>. As a dedicated team player,
                            I believe in the power of <span className="italic">collaboration</span> to achieve collective success. My experience in
                            <span className="text-yellow-400 font-semibold"> software development</span> has enabled me to enhance client efficiency through
                            <span className="italic text-yellow-400 font-semibold"> user-centric design</span>, testing, and implementation. I am always eager to
                            <span className="underline decoration-sky-500"> expand my programming skills</span> and contribute effectively to
                            <span className="text-yellow-400 font-semibold"> impactful projects</span>.
                        </p>
                    </div>
                </div>
                <img
                    className="w-56 h-56 sm:w-80 sm:h-80 object-cover rounded-full border-4 mt-5 border-gray-300 shadow-md transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
                    src={profileImage}
                    alt="Profile of Furkan"
                />
            </div>
            <p className="text-white">click for resume</p>
            <button onClick={() => navigate("/resume")}> click</button>
        </>
    );
};

export default AboutMe;
