import { Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import { ScrollProgress, ScrollToTop } from "./components/ScrollUtils";

/* 🏠 Home page sections */
import Hero from "./sections/Hero";
import QuickProfile from "./sections/QuickProfile";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Approach from "./sections/Approach";
import Skills from "./sections/skills";
import Certifications from "./sections/certifications";
import LookingFor from "./sections/LookingFor";
import Feedback from "./sections/feedback";
import Contact from "./sections/contact";

/* 📄 Detail pages */
import ProjectDetail from "./pages/ProjectDetail";

function HomePage() {
  return (
    <>
      <Hero />
      <QuickProfile />
      <About />
      <Projects />
      <Approach />
      <Skills />
      <Certifications />
      <LookingFor />
      <Feedback />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen gradient-hero text-gray-200 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;