import "./App.css";
import About from "./components/About";
// import Chat from "./components/Chat";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Chat /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
