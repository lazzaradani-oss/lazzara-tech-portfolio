import React from "react";
import { motion } from "framer-motion";

const MusicGalaxy = ({ setView }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-transparent p-10">
      <button
        onClick={() => setView("map")}
        className="absolute top-10 left-10 font-mono text-purple-400 hover:brightness-125 transition-all"
      >
        [ ← ESCAPE_NEBULA ]
      </button>

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-mono tracking-tighter italic text-white uppercase">
          _Creative_Nebula
        </h1>
        <p className="text-purple-300 font-mono text-xs tracking-widest mt-2">
          SONGWRITING & SONIC AUTOMATION
        </p>
      </div>

      {/* Galaxy Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-purple-900/20 border border-purple-500/30 p-8 rounded-full backdrop-blur-xl aspect-square flex flex-col items-center justify-center text-center shadow-[0_0_50px_-12px_rgba(168,85,247,0.4)]"
        >
          <h2 className="text-xl font-bold font-mono text-white mb-2">
            SANCTUARY
          </h2>
          <p className="text-purple-200 text-[10px] font-mono tracking-widest uppercase italic">
            80s Dark Wave / Neon-Goth
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-blue-900/20 border border-blue-500/30 p-8 rounded-full backdrop-blur-xl aspect-square flex flex-col items-center justify-center text-center shadow-[0_0_50px_-12px_rgba(59,130,246,0.4)]"
        >
          <h2 className="text-xl font-bold font-mono text-white mb-2">
            RACCOON EYES
          </h2>
          <p className="text-blue-200 text-[10px] font-mono tracking-widest uppercase italic">
            Dreamwave / Lo-Fi
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MusicGalaxy;
