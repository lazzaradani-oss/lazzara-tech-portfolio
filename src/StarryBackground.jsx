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
            className="fixed inset-0 -z-10" 
            options={{
                background: { color: { value: "#0B1120" } },
                fpsLimit: 120,
                particles: {
                    color: { value: ["#22D3EE", "#FB923C"] },
                    links: {
                        enable: true,
                        color: "#22D3EE",
                        distance: 150,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.8,
                        direction: "none",
                        random: true,
                    },
                    number: { value: 100, density: { enable: true } },
                    opacity: { value: 0.5 },
                    shape: { 
                        type: ["circle", "triangle", "polygon"],
                    },
                    size: { value: { min: 1, max: 3 } },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                    },
                    modes: {
                        grab: { distance: 200, links: { opacity: 0.5 } },
                    },
                },
            }}
        />
    );
};

export default StarryBackground;