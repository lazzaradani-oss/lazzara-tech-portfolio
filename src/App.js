import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarryBackground from "./StarryBackground";
import ConstellationMap from "./components/ConstellationMap";
import MusicGalaxy from "./components/MusicGalaxy";
import Hero from "./components/Hero";

function App() {
  const [view, setView] = useState("map");

  // Helper to determine if we are looking at a project detail module
  const isProjectView = [
    "IDENTITY_DESIGN", 
    "BLUE_JAY_UX", 
    "AI_SIMULATOR", 
    "STUDIO_CRAFT", 
    "CREATIVE_NEBULA"
  ].includes(view);

  const renderProjectDetails = () => {
    switch (view) {
      case "IDENTITY_DESIGN":
        return (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Philosophy & Core UVP</span>
              <h2 className="text-3xl font-serif text-white tracking-wide">The Identity Design</h2>
              <p className="text-xs font-mono text-slate-500">Timeline: Core Philosophy & Architecture Anchor</p>
            </div>
            <hr className="border-slate-800" />
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                Welcome to my digital portfolio! My name is Danielle Lazzara. The <strong>Web Developer</strong> to this entire digital constellation you're exploring through.
                </p>
              <p>
                With a designer's brain, coder's wit and an intuition that flows between both worlds, I also take on the world of <strong> Design Consulting</strong> to help businesses and individuals architect digital experiences that are not only visually stunning but also deeply aligned with human psychology and behavior.
                </p>
              <p>
                I am a <strong>Creative Technologist</strong>and <strong>Design Consultant</strong>, specializing in <strong>Behavioral User Experience (UX)</strong>.  Utilizing psychology principles and narrative anchors, such as <strong>The Blue Jay Journey</strong>, to beautifully capture audience attention, reduce system onboarding friction, and maintain long-term user engagement.
              </p>
              <p>
                Inspired by <strong>Jungian philosophy</strong>—specifically the principle of <strong>Identity</strong> not as one dimensional, but a multi-dimensional entity and <strong>flowing with the river</strong>, as change is the only constant. True identity is a process, not a product. Like a river, you are a continuous flow of experiences, thoughts, and cells. You are not the exact same person you were a decade ago, or even yesterday, yet there is an unbroken current of consciousness—a deep narrative thread—that makes you you.
              </p>
              <p>
                Like a river, my portfolio is an ever-changing platform that evolves alongside <strong>my living dialogue with technology—a space where I create generative art and engineer systems that translate raw human emotion, personal narratives, and psychological depth into fluid, intuitive digital landscapes and algorithmic soundscapes.</strong>
              </p>
              <p> 
                Design state-of-the-art architectures from scratch. This structure honors human dignity, captures attention effortlessly, and removes systemic cognitive friction before a line of code is even executed.
              </p>
            </div>
          
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg font-mono text-xs text-slate-400 space-y-1">
              <p className="text-cyan-400 font-bold">{"// Behavioral Architecture Strategy:"}</p>
              <p>• Systems Thinking & Root Cause Analysis (RCA)</p>
              <p>• Humanistic Design & Natural Cognitive Flow Architecture</p>
            </div>
          </div>
        );

      case "BLUE_JAY_UX":
        return (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Flagship UX Case Study</span>
              <h2 className="text-3xl font-serif text-white tracking-wide">The Blue Jay Journey</h2>
              <p className="text-xs font-mono text-slate-500">Timeline: Behavioral Science Integration (2019 – 2025)</p>
            </div>
            <hr className="border-slate-800" />
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                Born out of clinical behavioral frameworks (ABA), <strong>The Blue Jay Journey</strong> is a programmatic methodology that treats user navigation as a living narrative path. 
              </p>
              <p>
                Flipping the script of traditional, rigid technology. <strong>The Blue Jay Journey</strong> designs and implements frameworks around the organic, fragile, and beautifully complex nature of human psychology. 
              </p>
            </div>

            {/* Human-Centric Clinical Framework */}
            <div className="border border-slate-800 bg-slate-950/40 p-4 rounded-lg space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">
                {"// The ABC Data Framework (Clinical Architecture)"}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Utilizing Antecedent-Behavior-Consequence mapping to audit user friction. By engineering proactive environmental adjustments (Antecedents), the interface gently guides user actions (Behaviors) and completely eliminates the cognitive penalties or system crashes (Consequences) that exploit human operational vulnerability.
              </p>
            </div>

            {/* Spiritual & Philosophical Framework */}
            <div className="border border-slate-800 bg-slate-950/40 p-4 rounded-lg space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-indigo-400 font-bold uppercase">
                {"// Jungian Theory (Archetypal Architecture)"}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Honoring the collective unconscious by treating digital interfaces as symbolic landscapes. The Blue Jay acts as a native archetypal guide, anchoring individual attention, stabilizing focus, and facilitating a state of psychological "flow" that mirrors the organic movement of a river.
              </p>
            </div>
          </div>
        );

      case "AI_SIMULATOR":
        return (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Technical Engineering Module</span>
              <h2 className="text-3xl font-serif text-white tracking-wide">AI Automation Simulator</h2>
              <p className="text-xs font-mono text-slate-500">Timeline: Applied AI & Logic Automation (2025 – 2026)</p>
            </div>
            <hr className="border-slate-800" />
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                A powerful diagnostic web application engineered completely from scratch to bridge business diagnostics with automated programmatic execution.
              </p>
              <p>
                Built using <strong>Python</strong> and <strong>Streamlit</strong>, this simulator parses corporate operational inefficiencies, runs structured logic validation arrays, and outputs precise, production-ready tech-stack optimization maps. 
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
                <li>Integrated workflow logic testing structures designed to demonstrate real-time conditional processing.</li>
                <li>Utilized clean code guidelines managed directly via VS Code and tracked natively with GitHub.</li>
              </ul>

              {/* Clickable CTA Button */}
              <div className="pt-2">
                <a 
                  href="https://lazzara-automation-simulator.streamlit.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center justify-center w-full px-5 py-3 font-mono text-xs font-bold tracking-widest text-black bg-cyan-400 rounded-md hover:bg-cyan-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(34,211,238,0.3)] uppercase group"
                >
                  Wake Up the Simulator
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">➔</span>
                </a>
              </div>
            </div>
            
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg font-mono text-xs text-slate-400 space-y-1">
              <p className="text-cyan-400 font-bold">{"// Technology Stack Coded From Scratch //"}</p>
              <p>Python, Streamlit, Logic Mapping, JSON Data Structures, Prompt Engineering</p>
            </div>
          </div>
        );

      case "STUDIO_CRAFT":
        return (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Commercial Operations & Systems Translation</span>
              <h2 className="text-3xl font-serif text-white tracking-wide">Studio Craft</h2>
              <p className="text-xs font-mono text-slate-500">Timeline: Commercial Production Deployment (2015 – 2025)</p>
            </div>
            <hr className="border-slate-800" />
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                <strong>Studio Craft</strong> details the raw backend translation of highly complex, multi-variant real-world human operational requirements into elegant digital products.
              </p>
              
              <div className="border border-slate-800 bg-slate-950/80 p-4 rounded-lg space-y-2">
                <h4 className="text-sm font-bold text-white font-mono">&gt; <a href="https://morning-light-studio.lovable.app/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Morning Light Studio</a></h4>
                <p className="text-sm text-slate-400">
                  Transformed consumer wellness journeys into flawless automated logic arrays. Engineered the translation of scheduling parameters, booking data streams, and CRM integrations using webhook routing and conditional logic to increase long-term customer retention by 25%.
                </p>
              </div>

              <div className="border border-slate-800 bg-slate-950/80 p-4 rounded-lg space-y-2">
                <h4 className="text-sm font-bold text-white font-mono">&gt; <a href="https://pawsandshine.lovable.app/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Paws & Shine</a></h4>
                <p className="text-sm text-slate-400">
                  Applied behavioral architecture to logistical operations. Designed and built an end-to-end service management layout that translated multi-tiered pricing indices, dog breed classification models, and dispatch constraints into structured programmatic logic.
                </p>
              </div>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg font-mono text-xs text-slate-400 space-y-1">
              <p className="text-cyan-400 font-bold">{"// Integration Ecosystem Mastery:"}</p>
              <p>Make.com, Zapier, Webhooks, API Integrations, HubSpot CRM, UI/UX Prototyping</p>
            </div>
          </div>
        );

      case "STUDIO_SOUND":
        return (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-pink-400 tracking-widest uppercase">Multi-Agent Generative Art</span>
              <h2 className="text-3xl font-serif text-white tracking-wide">STUDIO_SOUNDa</h2>
              <p className="text-xs font-mono text-slate-500">Timeline: AI Music Engineering & Asset Distribution (2026)</p>
            </div>
            <hr className="border-slate-800" />
            <div className="space-y-4 leading-relaxed text-slate-300">
              <p>
                An interactive generative storefront module designed to translate personal, deeply introspective journal structures and spiritual symbols into structured audio frameworks using advanced prompt engineering models and a programmatic <strong>Suno API</strong> pipeline.
              </p>
              <p>
                By engineering backend orchestration scripts, emotional text metadata is parsed dynamically to trigger multi-genre tracks like <em>"Sanctuary"</em> and <em>"The Humane Transaction."</em> These productions map out the complex landscapes of transpersonal psychology and creative self-actualization.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
                <li>Engineered custom parameter automation maps to feed raw lyric configurations safely into generative endpoints without degradation.</li>
                <li>Monetized, copyrighted, and scaled original audio assets globally under the independent label imprint <strong>WildHunny</strong> via DistroKid.</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg font-mono text-xs text-slate-400 space-y-1">
              <p className="text-pink-400 font-bold">{"// Cognitive Audio Integration Stack:"}</p>
              <p>Suno API Pipelines, Multi-Agent Orchestration, Dynamic Prompt Structures, DistroKid Production Architecture</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-cyan-500/30">
      {/* Background stays beneath everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarryBackground />
      </div>

      <main className="relative z-10 w-full min-h-screen bg-transparent">
        <AnimatePresence mode="wait">
          {/* Render the map layout if view is "map" or if a specific node is actively inspected */}
          {(view === "map" || isProjectView) && (
            <motion.div key="map" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-screen">
              
              {/* Direct arrow assignment ensures hook reference is locked in securely */}
              <ConstellationMap setView={(id) => setView(id)} />

              {/* Slid-out Panel Display Overlay when a Node is Active */}
              <AnimatePresence>
                {isProjectView && (
                  <motion.div 
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 120 }}
                    className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-black/90 backdrop-blur-md border-l border-slate-800 p-8 overflow-y-auto z-50 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
                  >
                    <button 
                      onClick={() => setView("map")} 
                      className="mb-8 font-mono text-xs text-cyan-400 tracking-widest uppercase hover:text-white transition-colors"
                    >
                      [ ← RETURN TO MAP ]
                    </button>
                    {renderProjectDetails()}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {view === "music-galaxy" && (
            <motion.div key="music" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <MusicGalaxy setView={setView} />
            </motion.div>
          )}

          {view === "mars" && (
            <motion.div key="mars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <button onClick={() => setView("map")} className="p-10 font-mono text-cyan-400 uppercase">[ ← RETURN ]</button>
              <Hero />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;