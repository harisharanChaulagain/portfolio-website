import { Element } from "react-scroll";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

const App = () => {
  return (
    <div>
      <Element name="home">
        <Header />
      </Element>
      <Home />
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
