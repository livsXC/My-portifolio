import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HeroSection from "./Pages/Home/sections/HeroSection/HeroSection";
import AboutSection from "./Pages/Home/sections/AboutSection/AboutSection";
import SwiperSection from "./Pages/Home/sections/SwiperSection/SwiperSection";
import ExperiencesSection from "./Pages/Home/sections/ExperiencesSection/ExperiencesSection";
import ProjectsSection from "./Pages/Home/sections/ProjectsSection/ProjectsSection";

const App: React.FC = () => {
  return (
    <>
      {/* Navbar fixa no topo */}
      <Navbar />

      <main>
        <section id="inicio">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SwiperSection />
        </section>

        <section id="experience">
          <ExperiencesSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>
      </main>

      {/* Rodapé */}
      <Footer />
    </>
  );
};

export default App;
