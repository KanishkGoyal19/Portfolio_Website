"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; 

export default function TsParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      defaultThemes: {},
      fullScreen: {
        enable: true,
        zIndex: -10,
      },

      detectRetina: false,
      fpsLimit: 30,

      particles: {
        color: { value: "#ffffff" },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: true,
          speed: 0.1,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 1,
          },
          value: { min: 0.2, max: 0.6 },
        },
        shape: {
          type: "star",
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="hidden md:block"
      />
    );
  }

  return <></>;
}
