"use client";

import {
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Qualification", href: "#qualification" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#footer" },
  ];

  const socials = [
    {
      icon: <FaLinkedinIn size={18} />,
      href: "https://www.linkedin.com/in/safa-anan/",
    },
    {
      icon: <FaWhatsapp size={18} />,
      href: "https://wa.me/8801533380769",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Safa-Anan08",
    },
  ];

  return (
    
    <footer className="relative overflow-hidden bg-[#f9f6e6] px-4 sm:px-8 md:px-10 py-6 sm:py-10">
         <div className="h-px bg-gradient-to-r from-transparent via-[#8d77ab]/30 to-transparent" />
      {/* glow */}
      <div className="absolute top-0 left-0 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-[#8d77ab]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-[#c5c7bc]/20 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-3 py-5">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#8d77ab]">
              Safa Anan
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#7B7264] leading-relaxed">
              Full Stack Web & Mobile Application Developer crafting elegant digital experiences with clean architecture and modern UI.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#5E5547] mb-3 sm:mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-[#7B7264] transition hover:text-[#8d77ab] hover:translate-x-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#5E5547] mb-3 sm:mb-5">
              Social Links
            </h3>

            <div className="flex gap-3 sm:gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-white/50 bg-white/70 text-[#8d77ab] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#8d77ab] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

  
        <div className="my-6 sm:my-10 h-px bg-gradient-to-r from-transparent via-[#8d77ab]/30 to-transparent" />

  
        <div className="text-center text-xs sm:text-sm text-[#7B7264]">
          © 2026 Safa Anan • Designed & Developed with precision
        </div>

      </div>
    </footer>
  );
}