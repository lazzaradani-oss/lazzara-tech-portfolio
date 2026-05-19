import React from 'react';
import { motion } from 'framer-motion';

const ConstellationMap = ({ setView }) => {
  // Synchronized node array matching your App.js uppercase routing constants
  const nodes = [
    { id: "IDENTITY_DESIGN", label: "IDENTITY_DESIGN", color: "#ff6b6b", x: "23%", y: "30%" },
    { id: "STUDIO_CRAFT", label: "STUDIO_CRAFT", color: "#00d2ff", x: "71%", y: "41%" },
    { id: "BLUE_JAY_UX", label: "BLUE_JAY_UX", color: "#ffffff", x: "43%", y: "61%" },
    { id: "AI_SIMULATOR", label: "AI_SIMULATOR", color: "#ffffff", x: "62%", y: "76%" },
    { id: "STUDIO_SOUND", label: "STUDIO_SOUND", color: "#ec4899", x: "80%", y: "22%" }
  ];

  return (
    <div className="relative w-full h-screen bg-[#030303] overflow-hidden">
      {/* Interactive Star Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
          onClick={() => setView(node.id)}
          style={{ left: node.x, top: node.y, backgroundColor: node.color }}
          className="absolute w-5 h-5 rounded-full cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.6)] flex items-center justify-center group z-10 -translate-x-1/2 -translate-y-1/2"
        >
          {/* Strict Text Labels matching your upgraded resume terminology */}
          <span className="absolute top-8 font-mono text-[11px] tracking-widest text-slate-400 uppercase opacity-80 group-hover:text-cyan-400 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap select-none">
            {node.label}
          </span>
        </motion.div>
      ))}

      {/* SVG Path Streams connecting the architecture layers */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        {/* Core River Path Routing */}
        <line x1="23%" y1="30%" x2="43%" y2="61%" stroke="white" strokeWidth="1.5" />
        <line x1="43%" y1="61%" x2="62%" y2="76%" stroke="white" strokeWidth="1.5" />
        <line x1="62%" y1="76%" x2="71%" y2="41%" stroke="white" strokeWidth="1.5" />
        
        {/* Generative Nebula Audio Loop Stream */}
        <line x1="71%" y1="41%" x2="80%" y2="22%" stroke="#ec4899" strokeWidth="1" strokeDasharray="4" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default ConstellationMap;