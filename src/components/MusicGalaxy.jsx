import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiPlay,
  HiPause,
  HiShoppingCart,
  HiArrowRight,
  HiMinusSm,
  HiPlusSm,
  HiShieldCheck,
} from "react-icons/hi";

const MusicGalaxy = ({ setView }) => {
  const [playing, setPlaying] = useState(null);
  const [cart, setCart] = useState([]);

  // GLITCH EFFECTS DATA
  const isGlitched = Math.random() > 0.85; // Randomized occasional text glitch

  const songs = [
    {
      id: 1,
      title: "SANCTUARY",
      price: 1.29,
      genre: "Neon-Goth",
      color: "from-purple-600",
      description: "Dark Wave synthesis for augmented reality.",
      glitch: "S_@NC*TU~ARY",
    },
    {
      id: 2,
      title: "RACCOON EYES",
      price: 1.29,
      genre: "Dreamwave",
      color: "from-blue-600",
      description: "Lo-Fi logic for digital ghosts.",
      glitch: "RA_CC%%ON__EYE$S",
    },
  ];

  const addToCart = (item) => setCart([...cart, { ...item, type: "single" }]);
  const addBundleToCart = () =>
    setCart([
      ...cart,
      { id: 99, title: "FULL_NEBULA_COLLECTION", price: 9.99, type: "bundle" },
    ]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-black p-6 overflow-y-auto">
      {/* 1. PERSISTENT SVG NOISE FILTER (Hidden but active) */}
      <svg className="absolute invisible w-0 h-0">
        <filter id="cyberNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 -1 0"
          />
        </filter>
      </svg>

      {/* HEADER UNIT */}
      <div className="w-full max-w-7xl flex items-center justify-between mt-6 mb-16 p-4 border border-cyan-500/10 bg-black/40 rounded-full backdrop-blur-md">
        <button
          onClick={() => setView("map")}
          className="font-mono text-[10px] text-cyan-400 hover:brightness-125 transition-all tracking-[0.2em]"
        >
          [ ← ESCAPE_NEBULA ]
        </button>
        <div className="font-mono text-[10px] uppercase flex items-center gap-2">
          <HiShieldCheck className="text-cyan-400" />
          <span className="text-gray-500">Node_Secure:</span>{" "}
          <span className="text-cyan-400">ARIES_MUSIC_TERMINAL</span>
        </div>
      </div>

      {/* 2. GLITCH TITLE ASSEMBLY */}
      <div className="text-center mb-24 relative">
        <h1 className="text-7xl font-bold font-mono tracking-tighter italic text-white uppercase relative">
          <span className="absolute inset-0 text-cyan-400 blur-sm opacity-50 translate-x-[-1px] animate-pulse">
            _SONIC_STORE
          </span>
          <span className="relative">_SONIC_STORE</span>
        </h1>
        <p className="text-cyan-200 font-mono text-[10px] tracking-[0.5em] mt-3 uppercase">
          {isGlitched
            ? "HI_GH END V[IR]TUAL V//INY$L"
            : "HIGH-END VIRTUAL VINYL SELECTION"}
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 max-w-7xl w-full mb-32">
        {songs.map((song) => (
          <motion.div
            key={song.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative flex flex-col md:flex-row items-center gap-10 p-10 bg-[#0a0a0a]/60 border border-cyan-500/10 rounded-3xl hover:border-cyan-500/30 transition-all backdrop-blur-xl"
          >
            {/* 3D VINYL UNIT */}
            <div className="relative w-72 h-72 flex-shrink-0">
              <motion.div
                animate={playing === song.id ? { rotate: 360 } : { rotate: 0 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                // Chromatic Aberration Shift on active vinyl
                className={`absolute inset-0 rounded-full bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 shadow-2xl flex items-center justify-center border border-white/5 ${playing === song.id ? "animate-chromatic" : ""}`}
                style={{ filter: "url(#cyberNoise) blur(0.5px)" }} // Applying SVG noise
              >
                <div className="absolute inset-2 rounded-full border border-white/5 opacity-30" />
                <div className="absolute inset-6 rounded-full border border-white/5 opacity-20" />
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${song.color} to-black flex flex-col items-center justify-center p-2 text-center border-2 border-white/5`}
                >
                  <p className="text-[7px] font-mono text-white leading-tight uppercase font-bold tracking-widest">
                    {isGlitched && Math.random() > 0.5
                      ? song.glitch
                      : song.title}
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-black border border-white/20 z-10" />
              </motion.div>
              <button
                onClick={() => setPlaying(playing === song.id ? null : song.id)}
                className="absolute inset-0 m-auto w-14 h-14 bg-white/5 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform z-20 border border-white/20 hover:border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                {playing === song.id ? (
                  <HiPause size={28} />
                ) : (
                  <HiPlay size={28} className="ml-1" />
                )}
              </button>
            </div>

            {/* PRODUCT DATA UNIT */}
            <div className="flex-grow font-mono space-y-4 text-center md:text-left relative">
              {/* Dynamic Glitch Text */}
              <h2 className="text-3xl font-bold text-white italic tracking-tighter uppercase relative">
                <span className="absolute text-cyan-400/20 translate-x-[-1px] blur-[1px]">
                  {isGlitched ? song.glitch : song.title}
                </span>
                {isGlitched ? song.glitch : song.title}
              </h2>
              <p className="text-cyan-400 text-[10px] tracking-[0.3em] uppercase italic bg-cyan-900/30 px-3 py-1 rounded-md inline-block">
                {song.genre}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                {song.description}
              </p>

              <div className="flex items-center gap-5 justify-center md:justify-start pt-3">
                <p className="text-white text-3xl font-bold tracking-tight">
                  ${song.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(song)}
                  className="px-6 py-2.5 bg-transparent border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 rounded-full text-[10px] tracking-widest uppercase transition-all flex items-center gap-2"
                >
                  <HiShoppingCart /> Add_to_Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. CART & UPSELL HUB (Sticky at bottom) */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            className="fixed bottom-8 max-w-6xl w-full bg-[#030303]/90 border border-cyan-500/20 p-10 rounded-[40px] backdrop-blur-3xl shadow-[0_0_80px_-15px_rgba(34,211,238,0.2)] flex flex-col lg:flex-row items-center justify-between gap-10 z-50 mx-4"
          >
            {/* Cart Summary */}
            <div className="font-mono space-y-2 text-center lg:text-left">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                Active_Reservation:
              </p>
              <p className="text-3xl font-bold text-white tracking-tighter">
                ${totalPrice}{" "}
                <span className="text-xs text-gray-500 font-normal">
                  [{cart.length} ITEMS]
                </span>
              </p>
            </div>

            {/* UPSELL / BUNDLE LOGIC UNIT */}
            <div className="relative group p-6 bg-cyan-900/10 border border-cyan-500/20 rounded-2xl flex flex-col md:flex-row items-center gap-8 w-full lg:w-auto">
              <HiPlusSm className="absolute -top-4 -left-4 text-cyan-400 bg-black p-1 rounded-full text-2xl" />
              <div>
                <span className="text-[9px] text-cyan-400 font-mono tracking-[0.3em] uppercase">
                  SYSTEM_UPSELL:: BUNDLE_DETECTED
                </span>
                <h3 className="text-xl font-bold text-white font-mono uppercase italic tracking-tight">
                  Full_Nebula_Collection [LIMITED]
                </h3>
                <p className="text-gray-400 text-[10px] font-mono mt-1">
                  Unlock all data tracks + exclusive AR artwork asset.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-cyan-400 font-mono font-bold text-2xl tracking-tighter">
                    $9.99
                  </p>
                  <p className="text-gray-500 line-through text-xs font-mono">
                    $24.00
                  </p>
                </div>
                <button
                  onClick={addBundleToCart}
                  className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-mono text-[10px] tracking-widest font-bold rounded-full uppercase transition-all"
                >
                  <HiShoppingCart className="inline mr-1" /> Load_Bundle
                </button>
              </div>
            </div>

            <button className="px-10 py-5 bg-cyan-500 hover:scale-105 text-black font-mono font-bold rounded-full flex items-center gap-2 transition-all shadow-lg shadow-cyan-900/40 text-xs uppercase tracking-widest">
              Initiate_Checkout <HiArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicGalaxy;
