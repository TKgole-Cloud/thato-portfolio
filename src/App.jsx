import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/skills";
import Projects from "./sections/Projects";
import Resume from "./sections/resume";
import Certifications from "./sections/certifications";
import Feedback from "./sections/feedback";
import Contact from "./sections/contact";
import Footer from "./sections/Footer";
import { ScrollProgress, ScrollToTop } from "./components/ScrollUtils";

function App() {
  return (
    <div className="min-h-screen gradient-hero text-gray-200 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Certifications />
        <Feedback />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;