import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: {
                default: 'out',
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold">Hi, I'm Alex</h1>
        <p className="mt-4 text-xl">Frontend Developer & UI Enthusiast</p>
      </div>
    </div>
  );
};

export default Hero;
