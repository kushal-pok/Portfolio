import React, { useState, useEffect } from "react";
import kushalImage from "../assets/kushal.jpg";

const Hero = () => {
  // Typing Effect Logic for the Name
  const fullName = "Kushal Pokhrel";
  const [displayedName, setDisplayedName] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
      } else {
        setIsTypingDone(true);
        clearInterval(typingInterval);
      }
    }, 120); // Adjust typing speed here (in ms)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080812] px-6 pt-20"
    >
      {/* Dynamic Custom Keyframe Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.08); }
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Dynamic Animated Ambient Background Glows */}
      <div className="animate-pulse-glow absolute left-[-150px] top-[15%] h-[350px] w-[350px] rounded-full bg-indigo-600/30 blur-[130px] pointer-events-none" />
      <div className="animate-pulse-glow absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/30 blur-[130px] pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Subtle Interactive Radial Mesh Background Grid */}
      <div className="absolute inset-0 -z-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:50px_50px]" />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* ================= LEFT SIDE: INTRO & CTA ================= */}
        <div className="text-center md:text-left">

          {/* Greeting Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 backdrop-blur-md">
            <span>👋</span>
            <span>Hello, I'm</span>
          </div>

          {/* Name with Typing Effect */}
          <h1 className="min-h-[72px] text-5xl font-extrabold tracking-tight text-white sm:min-h-[88px] sm:text-6xl lg:min-h-[100px] lg:text-7xl">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {displayedName}
            </span>
            {!isTypingDone && (
              <span className="animate-pulse text-indigo-400 ml-1">|</span>
            )}
          </h1>

          {/* Role Title */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:mx-0">
            I build modern, responsive, and interactive websites using React and modern web technologies.
            I specialize in transforming creative concepts into sleek, high-performance digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 transition duration-300 hover:scale-105 hover:bg-indigo-500 hover:shadow-indigo-500/50"
            >
              <span>View My Projects</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-indigo-400 hover:bg-indigo-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition duration-300 hover:scale-110 hover:text-white"
            >
              GitHub
            </a>

            <span className="text-gray-600">•</span>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition duration-300 hover:scale-110 hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE: ANIMATED IMAGE & FLOATING SKILLS ================= */}
        <div className="relative flex items-center justify-center py-10">

          {/* Spinning Outer Ring Effect */}
          <div className="animate-spin-slow absolute h-80 w-80 rounded-full border border-dashed border-indigo-500/30 sm:h-96 sm:w-96 pointer-events-none" />

          {/* Glowing Aura behind profile */}
          <div className="animate-pulse-glow absolute h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl pointer-events-none" />

          {/* Main Profile Circle Frame */}
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent shadow-2xl shadow-indigo-500/20 sm:h-80 sm:w-80">
            {/* Inner Image Container */}
            <div className="flex h-52 w-52 items-center justify-center overflow-hidden rounded-full border-4 border-indigo-500/40 bg-white/5 shadow-2xl shadow-indigo-500/30 backdrop-blur-sm sm:h-64 sm:w-64">
              <img
                src={kushalImage}
                alt="Kushal Pokhrel"
                className="h-full w-full rounded-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
          </div>

          {/* --- ALWAYS MOVING SKILL BADGES --- */}

          {/* React Badge (Floating Top Left) */}
          <div className="animate-float-slow absolute -left-2 top-6 rounded-xl border border-indigo-500/30 bg-[#0c0c1e]/80 px-4 py-2.5 text-sm font-medium text-indigo-300 shadow-xl shadow-indigo-500/10 backdrop-blur-md transition duration-300 hover:scale-110">
            ⚛️ React
          </div>

          {/* JavaScript Badge (Floating Bottom Right) */}
          <div className="animate-float-reverse absolute -right-2 bottom-12 rounded-xl border border-yellow-500/30 bg-[#0c0c1e]/80 px-4 py-2.5 text-sm font-medium text-yellow-300 shadow-xl shadow-yellow-500/10 backdrop-blur-md transition duration-300 hover:scale-110">
            💻 JavaScript
          </div>

          {/* UI/UX Badge (Floating Bottom Left) */}
          <div className="animate-float-slow absolute bottom-2 left-6 rounded-xl border border-purple-500/30 bg-[#0c0c1e]/80 px-4 py-2.5 text-sm font-medium text-purple-300 shadow-xl shadow-purple-500/10 backdrop-blur-md transition duration-300 hover:scale-110">
            🎨 UI/UX
          </div>

          {/* Tailwind CSS Badge (Floating Top Right - Additional Extra Skill) */}
          <div className="animate-float-reverse absolute right-4 top-2 rounded-xl border border-cyan-500/30 bg-[#0c0c1e]/80 px-3.5 py-2 text-xs font-medium text-cyan-300 shadow-xl backdrop-blur-md transition duration-300 hover:scale-110">
            🌊 Tailwind
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center text-gray-500 transition duration-300 hover:text-indigo-400 sm:flex"
      >
        <span className="mb-2 text-xs font-light tracking-widest uppercase">Scroll Down</span>
        <span className="animate-bounce text-xl">↓</span>
      </a>

    </section>
  );
};

export default Hero;