import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import KPIs from "./components/KPIs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <KPIs />
      <Contact />
      <Footer />
    </>
  );
}
