import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Portfolio from "./components/Portfolio";
import LogoAnimation from "./components/LogoAnimation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <Portfolio />
    <LogoAnimation />
    <Contact />
    </div>
  );
}

export default App;
