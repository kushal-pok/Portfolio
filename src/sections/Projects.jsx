import React, { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "E-Commerce", "Web Apps", "Portfolios"];

  const projects = [
    {
      id: 1,
      title: "KitchenKit",
      category: "E-Commerce",
      description:
        "A full-featured kitchen products e-commerce platform built with Laravel, PHP, MySQL, and Bootstrap. Features include inventory management, dynamic shopping cart, order tracking, and a comprehensive admin dashboard.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      icon: "🍳",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "CipherZone",
      category: "Web Apps",
      description:
        "A modern React-based web application with reactive UI elements, custom interactive components, smooth CSS transitions, and stateful layouts.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      icon: "🔐",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      category: "Portfolios",
      description:
        "A high-performance developer portfolio built with React, Vite, and Tailwind CSS. Features glassmorphism UI, keyframe animations, and custom interactive components.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      icon: "💻",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const standardProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#080812] px-6 py-24"
    >
      {/* Keyframe Styles */}
      <style>{`
        @keyframes projectTitle {
          0% {
            opacity: 0;
            transform: translateY(-40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes projectCardPop {
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
          animation: projectTitle 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Background Glows */}
      <div className="animate-pulse-glow pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[130px]" />
      <div className="animate-pulse-glow pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" style={{ animationDelay: "3s" }} />
      <div className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[130px]" style={{ animationDelay: "1.5s" }} />

      {/* Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="animate-title mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            What I Have Built
          </p>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
            A showcase of web applications and interactive platforms I've designed and developed.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
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

        {/* Projects Layout Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT SIDE: Standard Projects */}
          <div className="flex flex-col gap-6">
            {standardProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* RIGHT SIDE: Featured Project */}
          {(activeCategory === "All" || activeCategory === featuredProject.category) && (
            <div>
              <FeaturedProject project={featuredProject} />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

/* =================================
   STANDARD PROJECT CARD
================================= */
const ProjectCard = ({ project, index }) => {
  return (
    <div
      style={{
        animation: `projectCardPop 0.6s ease-out ${index * 0.15}s forwards`,
      }}
      className="
        group
        relative
        flex
        flex-col
        justify-between
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-indigo-500/50
        hover:bg-indigo-500/[0.06]
        hover:shadow-[0_20px_50px_rgba(79,70,229,0.25)]
      "
    >
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-600/20 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-purple-600/30" />

      <div>
        {/* Top Header Row */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-400/40 group-hover:bg-indigo-500/20 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]">
            {project.icon}
          </div>
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-all duration-300 group-hover:border-indigo-400/30 group-hover:text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/5">
        <a
          href={project.liveUrl}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300 transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
        >
          <span>View Details</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  );
};

/* =================================
   FEATURED PROJECT CARD
================================= */
const FeaturedProject = ({ project }) => {
  return (
    <div
      style={{
        animation: "projectCardPop 0.8s ease-out forwards",
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        justify-between
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-indigo-500/60
        hover:bg-indigo-500/[0.06]
        hover:shadow-[0_30px_70px_rgba(79,70,229,0.3)]
      "
    >
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px] transition-all duration-700 group-hover:scale-150 group-hover:bg-purple-600/30" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px] transition-all duration-700 group-hover:scale-150" />

      <div>
        {/* Featured Tag & Icon */}
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300">
            ★ Featured Project
          </span>
          <span className="text-4xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            {project.icon}
          </span>
        </div>

        {/* Interactive Mock Browser Preview */}
        <div className="relative mt-6 flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 transition-all duration-500 group-hover:border-indigo-400/30">
          <div className="w-[80%] rounded-xl border border-white/10 bg-[#0d0d19] p-3 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)]">
            <div className="mb-2.5 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>

            <div className="space-y-2">
              <div className="h-3 w-1/2 rounded bg-indigo-500/30" />
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-4/5 rounded bg-white/10" />

              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-10 rounded bg-indigo-500/20" />
                <div className="h-10 rounded bg-purple-500/20" />
                <div className="h-10 rounded bg-pink-500/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Category & Title */}
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
          {project.category}
        </p>

        <h3 className="mt-2 text-3xl font-extrabold text-white transition-colors duration-300 group-hover:text-indigo-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-all duration-300 group-hover:border-indigo-400/30 group-hover:text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-8">
        <a
          href={project.liveUrl}
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
        >
          <span>Explore Live Demo</span>
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;