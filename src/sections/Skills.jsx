import React, { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Tools & Others"];

  const skills = [
    {
      name: "HTML5",
      icon: "🌐",
      category: "Frontend",
      level: 95,
      description: "Semantic Web Structure & Accessibility",
    },
    {
      name: "CSS3",
      icon: "🎨",
      category: "Frontend",
      level: 90,
      description: "Modern Layouts, Animations & Responsive Design",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      category: "Frontend",
      level: 88,
      description: "ES6+, Async Programming & Web APIs",
    },
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend",
      level: 85,
      description: "Hooks, State Management & Modern SPA Architecture",
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
      category: "Frontend",
      level: 92,
      description: "Utility-First Styling & Custom Design Systems",
    },
    {
      name: "PHP",
      icon: "🐘",
      category: "Backend",
      level: 75,
      description: "Server-side Scripting & Web Application Logic",
    },
    {
      name: "Laravel",
      icon: "🔴",
      category: "Backend",
      level: 78,
      description: "MVC Framework, Eloquent ORM & REST APIs",
    },
    {
      name: "MySQL",
      icon: "🗄️",
      category: "Backend",
      level: 80,
      description: "Relational Schema Design & Query Optimization",
    },
    {
      name: "Python",
      icon: "🐍",
      category: "Backend",
      level: 70,
      description: "Data Structures, Automation & Scripting",
    },
    {
      name: "Git",
      icon: "🔀",
      category: "Tools & Others",
      level: 85,
      description: "Branching Strategies, Merging & Version Control",
    },
    {
      name: "GitHub",
      icon: "🐙",
      category: "Tools & Others",
      level: 88,
      description: "Code Hosting, CI/CD Workflows & Collaboration",
    },
    {
      name: "UI / UX",
      icon: "✨",
      category: "Tools & Others",
      level: 82,
      description: "Wireframing, Prototyping & User-Centered Design",
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#080812] px-6 py-24"
    >
      {/* Dynamic Keyframe Animations & Perspective styles */}
      <style>{`
        @keyframes skillTitle {
          0% {
            opacity: 0;
            transform: translateY(-40px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes skillCardPop {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.1); }
        }

        .animate-title {
          animation: skillTitle 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Background Glows */}
      <div className="animate-pulse-glow pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[130px]" />
      <div className="animate-pulse-glow pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" style={{ animationDelay: '3s' }} />
      <div className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[130px]" style={{ animationDelay: '1.5s' }} />

      {/* Subtle Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="animate-title mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Technical Proficiency
          </p>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
            Technologies and tools I use to design, develop, and scale responsive web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-400/50"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-indigo-500/40 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              style={{
                animation: `skillCardPop 0.6s ease-out ${index * 0.08}s forwards`,
              }}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-indigo-500/50
                hover:bg-indigo-500/[0.06]
                hover:shadow-[0_15px_35px_rgba(79,70,229,0.2)]
              "
            >
              {/* Card Ambient Hover Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:from-indigo-500/10 group-hover:to-pink-500/10 group-hover:opacity-100" />

              <div>
                {/* Header: Icon & Skill Name */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-400/40 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    {skill.icon}
                  </div>
                  <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {skill.description}
                </p>
              </div>

              {/* Skill Proficiency Level Bar */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="mb-1.5 flex justify-between text-xs font-medium">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out group-hover:brightness-125"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Bottom Gradient Border Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;