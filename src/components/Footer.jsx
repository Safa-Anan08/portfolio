"use client";

import { useEffect, useRef } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import {  FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";

export default function ContactFooter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left-card", {
        x: -80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".contact-form", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    {
      title: "EMAIL",
      subtitle: "safaanan8@gmail.com",
      icon: <Mail size={22} />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=safaanan8@gmail.com&su=Portfolio%20Contact&body=Hi%20Safa",
      
  
    },
    {
      title: "LINKEDIN",
      subtitle: "Safa Anan",
      icon: <FaLinkedinIn size={18} />,
      link: "https://www.linkedin.com/in/safa-anan8",
    },
    {
      title: "What's App",
      subtitle: "Safa Anan",
      icon: < FaWhatsapp size={18} />,
      link: "https://wa.me/+8801533380769",
    },
  ];

  const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Webflow development",
    "App design",
    "Graphic design",
    "Wordpress",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6f3ea] py-24 px-4 md:px-10"
    >
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d77ab]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5E5547]">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[4px] text-[#7B7264]">
            Contact Me
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
 {/* left */}
<div className="space-y-6">
  {socials.map((item, i) => (
    <div
      key={i}
      className="contact-left-card group relative flex items-center gap-4 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-xl"
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8d77ab]/10 to-[#c5c7bc]/10 opacity-0 group-hover:opacity-100 transition" />

      {/* ICON FIXED (IMPORTANT) */}
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#8d77ab] shadow-md">
        <div className="text-2xl text-[#8d77ab]">
          {item.icon}
        </div>
      </div>

      {/* TEXT */}
      <div className="relative z-10 flex-1">
        <h3 className="text-[11px] tracking-[3px] text-[#7B7264]">
          {item.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-[#5E5547] break-all">
          {item.subtitle}
        </p>

        <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 flex items-center gap-2 text-sm font-medium text-[#5E5547] hover:text-[#8d77ab]"
>
  Write me <ArrowRight size={15} />
</a>
      </div>
    </div>
  ))}
</div>

          {/* RIGHT SIDE */}
          <div className="contact-form relative overflow-hidden rounded-[36px] border border-white/40 bg-white/60 px-6 py-10 md:px-12 md:py-14 backdrop-blur-2xl shadow-xl">

            <div className="mb-12 text-center">
              <p className="text-sm text-[#7B7264]">
                Have a nice works? reach out and let's chat.
              </p>
            </div>

            <form className="space-y-10">

              <div className="grid gap-10 md:grid-cols-2">
                <input className="border-b border-[#c5c7bc] bg-transparent pb-3 outline-none focus:border-[#8d77ab]" placeholder="Name" />
                <input className="border-b border-[#c5c7bc] bg-transparent pb-3 outline-none focus:border-[#8d77ab]" placeholder="Email" />
              </div>

              <input className="w-full border-b border-[#c5c7bc] bg-transparent pb-3 outline-none focus:border-[#8d77ab]" placeholder="Company" />

              <div className="flex flex-wrap gap-3">
                {services.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    className="rounded-full border border-[#c5c7bc] bg-[#f9f6e6] px-4 py-2 text-sm hover:bg-[#8d77ab] hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button className="rounded-full bg-[#8d77ab] px-7 py-3 text-white">
                Send Me
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}