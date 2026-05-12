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
      href: "https://linkedin.com",
    },
    {
      icon: <FaWhatsapp size={18} />,
      href: "https://wa.me/8801533380769",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com",
    },
  ];

  return (
    
    <footer className="relative overflow-hidden bg-[#f9f6e6] px-6 md:px-14 py-20 border-t border-white/40">
         <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#8d77ab]/30 to-transparent" />
      {/* glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#8d77ab]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c5c7bc]/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-3 ">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold text-[#8d77ab]">
              Safa
            </h2>

            <p className="mt-4 text-[#7B7264] leading-relaxed">
              Full Stack Web & Mobile Application Developer crafting elegant digital experiences with clean architecture and modern UI.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-lg font-semibold text-[#5E5547] mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
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
            <h3 className="text-lg font-semibold text-[#5E5547] mb-5">
              Social Links
            </h3>

            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/70 text-[#8d77ab] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#8d77ab] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#8d77ab]/30 to-transparent" />

        {/* bottom */}
        <div className="text-center text-sm text-[#7B7264]">
          © 2026 Safa Anan • Designed & Developed with precision
        </div>

      </div>
    </footer>
  );
}