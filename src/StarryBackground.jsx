import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarryBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-full h-full pointer-events-none" // Force absolute stretch and allow clicks to pass through
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        // ... rest of your options are absolutely perfect!
        fpsLimit: 120,
        particles: {
          color: { value: ["#22D3EE", "#FB923C", "#ffffff"] },
          links: {
            enable: true,
            color: "#22D3EE",
            distance: 150,
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
          },
          number: { value: 100, density: { enable: true, area: 800 } },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: { enable: true, speed: 1, sync: false },
          },
          shape: { type: "circle" },
          size: { value: { min: 0.5, max: 2 } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 200, links: { opacity: 0.4 } } },
        },
      }}
    />
  );
};

export default StarryBackground;
