import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const RippleEffectHero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#0d0d0d] text-white overflow-hidden">
      {/* Particle ripple animation */}
      <Particles
        id="ripples"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: '#0d0d0d',
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#00BFFF', // DeepSkyBlue
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.6,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 15,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'bubble',
              },
              onClick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 200,
                size: 10,
                duration: 2,
                opacity: 1,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          Exploring ideas. Creating ripples. Developing beautifully interactive experiences.
        </p>
      </div>
    </div>
  );
};

export default RippleEffectHero;
