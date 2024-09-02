import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./components/Resume";

const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />


        </Routes>
    );
};

export default RouterConfig;