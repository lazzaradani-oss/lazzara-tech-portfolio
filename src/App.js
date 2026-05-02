import StarryBackground from "./StarryBackground";
import React from "react";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import ProjectShowcase from "./components/ProjectShowcase";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <StarryBackground />
      <Hero />
      <TechStack />
      <ProjectShowcase />
      <ExperienceTimeline />
      <Contact />
    </div>
  );
}

export default App;
