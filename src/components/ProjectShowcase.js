import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiChevronDown, HiChevronUp } from "react-icons/hi";

const ProjectShowcase = ({ activeProject, data }) => {
  const [openSpecs, setOpenSpecs] = useState({});
  if (!data) return null;

  const toggleSpecs = (index) => {
    setOpenSpecs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="max-w-6xl mx-auto bg-transparent">
      <div className="mb-12 border-b border-[#ff7e5f]/30 pb-6">
        <span className="text-[10px] text-[#ff7e5f] font-mono tracking-[0.3em] uppercase">
          Node_Selected: {activeProject}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 font-mono uppercase italic">
          _{data.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-[#0a1425]/40 border border-[#a5b4fc]/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl transition-all hover:border-[#ff7e5f]/50"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#a5b4fc]/20 group-hover:bg-[#ff7e5f]" />
            <div className="flex justify-between items-start mb-6 gap-4">
              <h3 className="text-xl md:text-2xl font-bold text-white font-mono uppercase leading-tight">
                {project.name}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 border border-[#ff7e5f] text-[#ff7e5f] rounded-lg font-mono text-[10px] uppercase hover:bg-[#ff7e5f] hover:text-white transition-all"
              >
                <HiExternalLink className="text-sm" /> Live_Logic
              </a>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <h4 className="text-[#ff7e5f] font-bold text-[9px] uppercase tracking-widest mb-1">
                  01_PROBLEM
                </h4>
                <p className="text-gray-300 text-xs">{project.problem}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <h4 className="text-[#a5b4fc] font-bold text-[9px] uppercase tracking-widest mb-1">
                  02_SOLUTION
                </h4>
                <p className="text-gray-300 text-xs">{project.solution}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                <h4 className="text-emerald-400 font-bold text-[9px] uppercase tracking-widest mb-1">
                  03_VALUE
                </h4>
                <p className="text-gray-300 text-xs">{project.value}</p>
              </div>
            </div>

            <button
              onClick={() => toggleSpecs(index)}
              className="w-full flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <span className="text-[#a5b4fc] font-mono text-[10px] uppercase tracking-widest">
                Technical_Specs
              </span>
              {openSpecs[index] ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            <AnimatePresence>
              {openSpecs[index] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-2 overflow-hidden bg-black/60 p-4 border border-[#ff7e5f]/20 rounded-xl"
                >
                  <p className="text-[#ff7e5f] font-mono text-[10px] leading-relaxed italic uppercase">
                    {project.specs}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
