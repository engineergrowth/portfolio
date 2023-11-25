import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Greeting from "./components/Greeting.jsx";
import Tech from "./components/Tech.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
const App = () => {

  return (
    <>
        <Navbar />
        <Greeting />
        <Tech />
        <About />
        <Projects />
    </>
  )
}

export default App
