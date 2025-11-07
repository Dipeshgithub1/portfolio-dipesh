import "./App.css";
import About from "./components/About";
// import Chat from "./components/Chat";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="font-sans">
      <CustomCursor />
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
