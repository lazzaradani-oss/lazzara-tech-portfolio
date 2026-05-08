import React from "react";
import { motion } from "framer-motion";
import MarsPlanet from "./MarsPlanet";

const ConstellationMap = ({ setView }) => {
  const projects = [
    { id: "hamal", name: "HAMAL", top: "25%", left: "60%" },
    { id: "sheratan", name: "SHERATAN", top: "45%", left: "65%" },
    { id: "mesarthim", name: "MESARTHIM", top: "65%", left: "60%" },
  ];

  return (
    <div className="relative w-full h-full bg-transparent">
      {/* Mars/Origin Node */}
      <MarsPlanet setView={setView} />

      {/* Project Star Nodes */}
      {projects.map((proj) => (
        <motion.div
          key={proj.id}
          className="absolute flex flex-col items-center cursor-pointer group"
          style={{ top: proj.top, left: proj.left }}
          onClick={() => setView(proj.id)}
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_#22d3ee]" />
          <span className="text-[10px] text-slate-400 font-mono mt-2 tracking-widest group-hover:text-cyan-400 transition-colors">
            {proj.name}
          </span>
        </motion.div>
      ))}

      {/* Music Nebula Portal: Pulsing on the side */}
      <motion.div
        className="absolute bottom-[10%] right-[5%] cursor-pointer group flex flex-col items-center"
        onClick={() => setView("music-galaxy")}
        animate={{
          scale: [1, 1.05, 1],
          filter: [
            "drop-shadow(0 0 5px #7a00ff)",
            "drop-shadow(0 0 20px #7a00ff)",
            "drop-shadow(0 0 5px #7a00ff)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-12 h-12 rounded-full border border-purple-500/50 flex items-center justify-center bg-purple-900/10 backdrop-blur-sm">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        </div>
        <span className="text-[9px] text-purple-300 font-mono mt-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
          Creative_Nebula
        </span>
      </motion.div>
    </div>
  );
};

export default ConstellationMap;
