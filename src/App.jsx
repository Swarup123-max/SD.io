import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
// import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import ParticlesBackground from "@/components/ParticlesBackground"
import Roboimage from "@/components/Roboimage.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
      <ParticlesBackground/>
        <Hero />
        <About />
        <Projects />
        {/* <Roboimage/> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
