const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      link: "https://github.com/",
      hover: "hover:border-gray-400 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      link: "https://linkedin.com/",
      hover: "hover:border-blue-400 hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: "📘",
      link: "https://facebook.com/",
      hover: "hover:border-blue-500 hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: "📸",
      link: "https://instagram.com/",
      hover: "hover:border-pink-400 hover:text-pink-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#080812] px-6 py-24"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[120px]" />

      {/* Grid Background */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 animate-[contactTitle_1s_ease-out_forwards] text-center opacity-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-indigo-500" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Have a project, idea or opportunity? Feel free to send me a
            message. I would love to hear from you.
          </p>
        </div>

        {/* MAIN CONTACT AREA */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* =========================
              LEFT - CONTACT FORM
          ========================= */}

          <div
            className="
              group
              relative
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-7
              opacity-0
              backdrop-blur-xl
              animate-[contactLeft_1s_0.3s_cubic-bezier(0.17,0.67,0.3,1.33)_forwards]

              transition-all
              duration-500

              hover:border-indigo-500/40
              hover:bg-indigo-500/[0.04]
              hover:shadow-[0_25px_70px_rgba(79,70,229,0.18)]

              sm:p-10
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-indigo-600/20
                blur-3xl
                transition-all
                duration-700
                group-hover:scale-150
              "
            />

            <div className="relative">

              <div className="mb-8">
                <p className="text-2xl font-bold text-white">
                  Send Me a Message
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-5">

                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-3
                      text-white
                      outline-none
                      placeholder:text-gray-600

                      transition-all
                      duration-300

                      focus:border-indigo-500
                      focus:bg-indigo-500/[0.05]
                      focus:ring-2
                      focus:ring-indigo-500/20
                    "
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-3
                      text-white
                      outline-none
                      placeholder:text-gray-600

                      transition-all
                      duration-300

                      focus:border-indigo-500
                      focus:bg-indigo-500/[0.05]
                      focus:ring-2
                      focus:ring-indigo-500/20
                    "
                  />
                </div>

                {/* Subject */}

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What is this about?"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-3
                      text-white
                      outline-none
                      placeholder:text-gray-600

                      transition-all
                      duration-300

                      focus:border-indigo-500
                      focus:bg-indigo-500/[0.05]
                      focus:ring-2
                      focus:ring-indigo-500/20
                    "
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/10
                      bg-black/20
                      px-4
                      py-3
                      text-white
                      outline-none
                      placeholder:text-gray-600

                      transition-all
                      duration-300

                      focus:border-indigo-500
                      focus:bg-indigo-500/[0.05]
                      focus:ring-2
                      focus:ring-indigo-500/20
                    "
                  />
                </div>

                {/* Send Button */}

                <button
                  type="submit"
                  className="
                    group/button
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                    px-6
                    py-3.5
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-indigo-600/20

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:scale-[1.01]
                    hover:shadow-[0_0_35px_rgba(99,102,241,0.4)]

                    active:scale-95
                  "
                >
                  Send Message

                  <span className="text-xl transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1">
                    🚀
                  </span>
                </button>

              </form>
            </div>
          </div>

          {/* =========================
              RIGHT - CONTACT DETAILS
          ========================= */}

          <div
            className="
              relative
              flex
              flex-col
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-7
              opacity-0
              backdrop-blur-xl
              animate-[contactRight_1s_0.5s_cubic-bezier(0.17,0.67,0.3,1.33)_forwards]

              transition-all
              duration-500

              hover:border-purple-500/40
              hover:shadow-[0_25px_70px_rgba(139,92,246,0.18)]

              sm:p-10
            "
          >

            {/* Profile Circle */}

            <div className="mb-8 flex justify-center lg:justify-start">

              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-indigo-400/30
                  bg-gradient-to-br
                  from-indigo-500/20
                  to-purple-500/20
                  text-4xl
                  shadow-[0_0_40px_rgba(99,102,241,0.2)]

                  transition-all
                  duration-500

                  hover:scale-110
                  hover:rotate-6
                "
              >
                👨‍💻
              </div>

            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Let's Talk
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Have an idea?
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm always interested in hearing about new projects,
              opportunities and creative ideas. Let's build something
              amazing together.
            </p>

            {/* Contact Information */}

            <div className="mt-8 space-y-4">

              {/* Email */}

              <a
                href="mailto:your-email@gmail.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-indigo-500/40
                  hover:bg-indigo-500/[0.07]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-indigo-500/10
                    text-xl

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:bg-indigo-500/20
                  "
                >
                  📧
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    your-email@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}

              <a
                href="tel:+9779800000000"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-purple-500/40
                  hover:bg-purple-500/[0.07]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-purple-500/10
                    text-xl

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:bg-purple-500/20
                  "
                >
                  📱
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    +977 98XXXXXXXX
                  </p>
                </div>
              </a>

              {/* Location */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-pink-500/40
                  hover:bg-pink-500/[0.07]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-pink-500/10
                    text-xl

                    transition-all
                    duration-300

                    group-hover:scale-110
                  "
                >
                  📍
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    Nepal
                  </p>
                </div>
              </div>

            </div>

            {/* Social Media */}

            <div className="mt-9">

              <p className="mb-4 text-sm font-semibold text-gray-300">
                Connect With Me
              </p>

              <div className="grid grid-cols-4 gap-3">

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className={`
                      group/social
                      flex
                      h-14
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-xl
                      text-gray-400

                      transition-all
                      duration-300

                      hover:-translate-y-2
                      hover:scale-105
                      hover:bg-white/[0.06]

                      ${social.hover}
                    `}
                  >
                    <span className="transition-transform duration-300 group-hover/social:scale-125">
                      {social.icon}
                    </span>
                  </a>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Animations */}

      <style>
        {`
          @keyframes contactTitle {
            0% {
              opacity: 0;
              transform: translateY(-60px) scale(0.7);
            }

            60% {
              opacity: 1;
              transform: translateY(10px) scale(1.05);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes contactLeft {
            0% {
              opacity: 0;
              transform:
                perspective(1000px)
                translateX(-100px)
                rotateY(35deg)
                scale(0.8);
            }

            60% {
              opacity: 1;
              transform:
                perspective(1000px)
                translateX(10px)
                rotateY(-5deg)
                scale(1.03);
            }

            100% {
              opacity: 1;
              transform:
                perspective(1000px)
                translateX(0)
                rotateY(0)
                scale(1);
            }
          }

          @keyframes contactRight {
            0% {
              opacity: 0;
              transform:
                perspective(1000px)
                translateX(100px)
                rotateY(-35deg)
                scale(0.8);
            }

            60% {
              opacity: 1;
              transform:
                perspective(1000px)
                translateX(-10px)
                rotateY(5deg)
                scale(1.03);
            }

            100% {
              opacity: 1;
              transform:
                perspective(1000px)
                translateX(0)
                rotateY(0)
                scale(1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;