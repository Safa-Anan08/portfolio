// src/components/AboutSection.jsx

"use client";

import { useEffect, useState } from "react";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function AboutSection() {
  const fullText = "Passionate Full Stack Developer";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC] py-18">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full bg-[#B6AE9F]/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        
        {/* Badge */}
        <span className="rounded-full border border-[#B6AE9F]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#6B6255] backdrop-blur-xl">
          About Me
        </span>

        {/* Typing Title */}
        <h2 className="mt-8 text-4xl font-black text-[#5E5547] md:text-5xl">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-[#7A7264] leading-7">
          {/* I am a dedicated full-stack developer focused on building modern,
          scalable, and visually appealing web applications. I enjoy turning
          complex problems into simple, beautiful, and intuitive solutions. */}
          I am a passionate Full Stack Web & Mobile App Developer with strong expertise in building modern, scalable, and high-performance digital products.
My development journey includes creating responsive websites, REST APIs, admin dashboards, SaaS platforms, and cross-platform mobile applications using modern technologies like HTML5, CSS3, Tailwind CSS, JavaScript, Node.js, Next.js, MongoDB, and Flutter.
I focus on clean code architecture, responsive UI/UX, performance optimization, and user-friendly experiences. I enjoy transforming complex ideas into elegant digital solutions that are fast, secure, and visually engaging.
I continuously explore new technologies and modern development trends to improve product quality and user experience.
        </p>

        {/* Highlights */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          
          <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-xl shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#FBF3D1] text-[#5E5547]">
              <FaCode />
            </div>
            <h4 className="mt-4 font-bold text-[#5E5547]">Clean Code</h4>
            <p className="mt-2 text-sm text-[#7A7264]">
              Maintainable and scalable architecture.
            </p>
          </div>

          <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-xl shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#FBF3D1] text-[#5E5547]">
              <FaLaptopCode />
            </div>
            <h4 className="mt-4 font-bold text-[#5E5547]">Modern UI</h4>
            <p className="mt-2 text-sm text-[#7A7264]">
              Responsive and premium interfaces.
            </p>
          </div>

          <div className="rounded-2xl bg-white/50 p-6 backdrop-blur-xl shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#FBF3D1] text-[#5E5547]">
              <FaRocket />
            </div>
            <h4 className="mt-4 font-bold text-[#5E5547]">Performance</h4>
            <p className="mt-2 text-sm text-[#7A7264]">
              Fast and optimized user experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}