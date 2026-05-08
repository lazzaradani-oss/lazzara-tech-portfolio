import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Hero from "./components/Hero";
import StarryBackground from "./StarryBackground";
import ConstellationMap from "./components/ConstellationMap";
import TechStack from "./components/TechStack";
import ProjectShowcase from "./components/ProjectShowcase";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Contact from "./components/Contact";
import MusicGalaxy from "./components/MusicGalaxy";

const starData = {
  mesarthim: {
    title: "TripleTen_Projects",
    subtitle: "SOFTWARE ENGINEERING & DATA ANALYSIS",
    projects: [
      {
        name: "Weather-Based Sales & Staffing",
        tech: "PYTHON | GEMINI AI | API INTEGRATION",
        problem:
          "Retail businesses struggle to predict demand fluctuations based on weather patterns.",
        solution:
          "Designed an automated workflow delivering operational briefings at 7:00 AM using OpenWeather API and Gemini AI.",
        value:
          "Reduces manual oversight and improves demand prediction accuracy.",
        specs: "Python, OpenWeather API, Gemini AI, Postman, Zapier.",
        link: "https://automation-of-weather-ba-depyjla.gamma.site/",
      },
      {
        name: "Paws & Shine Platform",
        tech: "REACT | SUPABASE | ADOBE FIREFLY",
        problem:
          "Pet grooming businesses needed modern digital storefronts with service bookings.",
        solution:
          "Developed a service-centric application with Supabase backend and AI-generated brand assets.",
        value: "Simplified booking process and improved local SEO visibility.",
        specs: "React, Supabase, Midjourney, Adobe Firefly, Local SEO.",
        link: "https://pawsandshine.lovable.app/",
      },
      {
        name: "Morning Light Studio",
        tech: "REACT | TAILWIND | SHADCN",
        problem:
          "Wellness businesses needed high-converting digital storefronts with complex booking workflows.",
        solution:
          "Engineered a responsive React application focusing on a 'Patient Journey' funnel.",
        value:
          "Created a seamless booking experience with integrated payment processing.",
        specs: "React 18, Lovable, Tailwind CSS, Shadcn UI, Supabase.",
        link: "https://morning-light-studio.lovable.app/",
      },
    ],
  },
  hamal: {
    title: "AI_Automation",
    subtitle: "MULTI-AGENT SYSTEMS",
    projects: [
      {
        name: "AI Automation Simulator",
        tech: "PYTHON | STREAMLIT | LOGIC MODELING",
        problem:
          "Businesses struggle to quantify ROI for AI adoption in manual workflows.",
        solution:
          "Developed a Python-based diagnostic tool to quantify ROI for AI adoption and optimize technical roadmaps.",
        value:
          "Provides 100% accurate tech stack recommendations and actionable strategies.",
        specs: "Python, Streamlit, Logic Modeling, ROI calculation engine.",
        link: "https://lazzara-automation-simulator.streamlit.app/",
      },
    ],
  },
  sheratan: {
    title: "Behavioral_Science",
    subtitle: "RBT CLINICAL LOGIC",
    projects: [
      {
        name: "Clinical Competency Tracker",
        tech: "REACT | SUPABASE | POSTGRES",
        problem:
          "RBTs lack a centralized way to track skill acquisition during sessions.",
        solution:
          "A mobile-first tracker that logs behavioral milestones and calculates mastery percentages.",
        value:
          "Eliminates manual paperwork and provides instant data for BCBA reviews.",
        specs: "React Hooks, Supabase Auth, PostgreSQL, BEM Logic.",
        link: "https://github.com/DanielleLazzara",
      },
    ],
  },
};

function App() {
  const [view, setView] = useState("map");
  const backToOrbit = () => setView("map");

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-[#ff7e5f]/30">
      {/* 1. BACKGROUND LAYER */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <StarryBackground />
      </div>

      {/* 2. MAIN CONTENT LAYER */}
      <main className="relative z-10 w-full bg-transparent">
        <AnimatePresence mode="wait">
          {view === "map" && (
            <motion.section
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-screen w-full"
            >
              <ConstellationMap setView={setView} />
            </motion.section>
          )}

          {view === "mars" && (
            <motion.section
              key="mars"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="relative w-full min-h-screen pt-16 px-6"
            >
              <button
                onClick={backToOrbit}
                className="mb-8 font-mono text-[#ff7e5f]"
              >
                [ ← RETURN TO ORBIT ]
              </button>
              <Hero />
              <TechStack />
              <Contact />
            </motion.section>
          )}

          {view === "music-galaxy" && (
            <motion.section
              key="music"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="h-screen w-full"
            >
              <MusicGalaxy setView={setView} />
            </motion.section>
          )}

          {["hamal", "sheratan", "mesarthim"].includes(view) && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="relative w-full min-h-screen pt-16 px-6"
            >
              <button
                onClick={backToOrbit}
                className="mb-8 font-mono text-cyan-400"
              >
                [ ← TERMINAL_EXIT ]
              </button>
              <ProjectShowcase activeProject={view} data={starData[view]} />
              <ExperienceTimeline />
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
