import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Greeting from "./components/Greeting.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
const App = () => {

  return (
    <>
        <Navbar />
        <Greeting />
        <Skills />
        <About />
        <Projects />
    </>
  )
}

export default App
