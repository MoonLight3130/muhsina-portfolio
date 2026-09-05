import React from 'react';
import profileImg from '../assets/profile.png';

export default function HeroNeonFrame() {
  return (
    <div className="relative w-full max-w-[430px] sm:max-w-[480px] lg:max-w-[500px] mx-auto aspect-[4/4.8] flex items-end justify-center select-none">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600/20 via-purple-600/15 to-blue-500/20 rounded-3xl filter blur-3xl opacity-70 pointer-events-none" />

      {/* Floating Star / Sparkle Particles matching screenshot */}
      <div className="absolute -top-6 right-10 w-2 h-2 rounded-full bg-white/80 shadow-[0_0_10px_#ffffff] star-particle" />
      <div className="absolute top-1/4 -right-4 w-1.5 h-1.5 rounded-full bg-fuchsia-400/90 shadow-[0_0_8px_#d946ef] star-particle" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/3 -left-6 w-2 h-2 rounded-full bg-cyan-300/80 shadow-[0_0_10px_#38bdf8] star-particle" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-20 -right-2 w-1.5 h-1.5 rounded-full bg-purple-300/70 shadow-[0_0_6px_#c084fc] star-particle" style={{ animationDelay: '3.1s' }} />

      {/* Abstract Glowing Neon Curves (SVG matching the flowing light trails in screenshot) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        viewBox="0 0 500 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Background Neon Ribbon */}
        <path
          d="M 60,350 C 40,220 120,80 320,70 C 460,65 480,240 450,420 C 420,530 350,560 260,560"
          stroke="url(#purpleCyanGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="neon-glow-line opacity-75"
        />

        {/* Secondary Delicate Swirling Neon Ribbon */}
        <path
          d="M 120,420 C 30,320 80,140 280,100 C 420,70 470,220 440,360 C 410,480 340,540 220,540"
          stroke="url(#magentaCyanGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="neon-blue-glow-line opacity-80"
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="purpleCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="40%" stopColor="#d946ef" />
            <stop offset="75%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="magentaCyanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="35%" stopColor="#d946ef" />
            <stop offset="70%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Rectangular Neon Frame Container matching the reference */}
      <div className="relative w-[86%] h-[88%] rounded-[32px] p-[2.5px] overflow-hidden flex items-end justify-center bg-gradient-to-br from-fuchsia-500 via-purple-600 to-sky-400 shadow-[0_0_35px_rgba(217,70,239,0.5),0_0_60px_rgba(56,189,248,0.25)]">
        {/* Inner Glass Frame Backing */}
        <div className="absolute inset-[2px] rounded-[30px] bg-gradient-to-b from-[#110a22]/70 via-[#0a0715]/90 to-[#06040c] overflow-hidden" />

        {/* Light flare reflections inside frame */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent pointer-events-none" />

        {/* The Developer Portrait Image */}
        <div className="relative z-20 w-full h-full flex items-end justify-center">
          <img
            src={profileImg}
            alt="Chandni Chauhan - Frontend Developer"
            className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            loading="eager"
          />
        </div>

        {/* Bottom subtle neon rim highlight */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 shadow-[0_0_15px_#d946ef] z-30" />
      </div>
    </div>
  );
}
