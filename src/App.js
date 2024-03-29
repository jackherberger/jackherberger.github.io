import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
