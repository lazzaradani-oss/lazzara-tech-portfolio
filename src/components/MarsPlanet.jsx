import { motion } from "framer-motion";

const MarsPlanet = ({ setView }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      className="absolute top-[15%] left-[10%] z-20 cursor-grab active:cursor-grabbing group"
      onClick={() => setView("mars")} // Link to About Me
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        default: { duration: 1 },
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="absolute inset-0 rounded-full bg-orange-600/30 blur-2xl group-hover:bg-orange-500/50 transition-all duration-500" />

      <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-black border border-orange-300/50 shadow-[0_0_50px_rgba(249,115,22,0.4)] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        <span className="text-white font-bold tracking-widest text-xs md:text-sm uppercase mb-1">
          Origin
        </span>
        <span className="text-orange-200 font-light text-[10px] md:text-xs">
          DANIELLE LAZZARA
        </span>
      </div>

      {/* Hover Data Dossier */}
      <div className="absolute top-1/2 left-full ml-6 -translate-y-1/2 w-64 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
        <div className="bg-black/80 backdrop-blur-xl border-l-2 border-orange-500 p-3 shadow-xl">
          <p className="text-orange-400 text-[10px] font-mono mb-2 uppercase tracking-tighter">
            {">"} INITIALIZING BIO_DATA...
          </p>
          <p className="text-slate-200 text-xs leading-relaxed">
            Trained RBT bridging behavioral science with AI automation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MarsPlanet;
