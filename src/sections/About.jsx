import kushalImage from "../assets/kushal.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#080812] px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[120px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-indigo-500" />

        </div>

        {/* About Content */}
        <div className="grid items-center gap-14 md:grid-cols-2">

          {/* ================= LEFT ================= */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-indigo-600/20 blur-3xl" />

              {/* Image Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md">

                <img
                src={kushalImage}
                  alt="Kushal Pokhrel"
                  className="h-[400px] w-[320px] rounded-2xl object-cover transition duration-500 hover:scale-105"
                />

              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-[#11111d]/90 px-6 py-4 shadow-xl backdrop-blur-xl">

                <p className="text-2xl font-bold text-white">
                  3+
                </p>

                <p className="text-sm text-gray-400">
                  Projects Built
                </p>

              </div>

            </div>

          </div>


          {/* ================= RIGHT ================= */}
          <div>

            <p className="mb-5 text-xl font-semibold text-white">
              I'm a passionate{" "}
              <span className="text-indigo-400">
                Frontend Developer
              </span>
            </p>

            <p className="mb-5 leading-8 text-gray-400">
              I'm Kushal Pokhrel, a developer who enjoys creating
              modern and interactive web experiences. I love learning
              new technologies and using them to build useful and
              visually appealing applications.
            </p>

            <p className="mb-8 leading-8 text-gray-400">
              My main focus is building responsive websites with
              React, JavaScript and modern web technologies. I'm
              constantly improving my skills and exploring new ideas
              in web development.
            </p>


            {/* Information Grid */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* Education */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40">

                <div className="mb-3 text-2xl">
                  🎓
                </div>

                <h3 className="font-semibold text-white">
                  Education
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  BCSIT Student
                </p>

              </div>


              {/* Location */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40">

                <div className="mb-3 text-2xl">
                  📍
                </div>

                <h3 className="font-semibold text-white">
                  Location
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Nepal
                </p>

              </div>


              {/* Focus */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40">

                <div className="mb-3 text-2xl">
                  💻
                </div>

                <h3 className="font-semibold text-white">
                  Focus
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Web Development
                </p>

              </div>


              {/* Learning */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40">

                <div className="mb-3 text-2xl">
                  🚀
                </div>

                <h3 className="font-semibold text-white">
                  Currently Learning
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  React & Modern Web
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;