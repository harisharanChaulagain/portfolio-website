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
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
