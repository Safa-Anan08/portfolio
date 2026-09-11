// src/components/AboutSection.jsx

"use client";

import { useEffect, useState } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaHeart,
  FaUser,
} from "react-icons/fa";

export default function AboutSection() {
  const fullText = "Passionate Full Stack Developer";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC] py-12 sm:py-18 px-4 sm:px-6 lg:px-8"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-120px] top-[-120px] h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] rounded-full bg-[#B6AE9F]/30 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-[#B6AE9F]/30 bg-white/60 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#6B6255] backdrop-blur-xl">
          About Me
        </span>


        <h2 className="mt-6 sm:mt-8 text-2xl sm:text-4xl font-black text-[#5E5547] md:text-5xl">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        <div className="mx-auto mt-6 max-w-3xl text-left sm:text-center">
          <p className="text-[#7A7264] text-sm sm:text-base leading-6 sm:leading-7">
            I am a passionate Full Stack Web & Mobile App Developer with
            strong expertise in building modern, scalable, and high-performance
            digital products. My development journey includes creating
            responsive websites, REST APIs, admin dashboards, SaaS platforms,
            and cross-platform mobile applications using modern technologies
            like HTML5, CSS3, Tailwind CSS, JavaScript, Node.js, Next.js,
            MongoDB, and Flutter.
          </p>

          <p className="mt-4 sm:mt-5 text-[#7A7264] text-sm sm:text-base leading-6 sm:leading-7">
            I focus on clean code architecture, responsive UI/UX, performance
            optimization, and user-friendly experiences. I enjoy transforming
            complex ideas into elegant digital solutions that are fast, secure,
            and visually engaging. I continuously explore new technologies and
            modern development trends to improve product quality and user
            experience.
          </p>
          <p className="mt-4 sm:mt-5 text-[#7A7264] text-sm sm:text-base leading-6 sm:leading-7">
            Outside programming, I enjoy exploring creative ideas, learning
            new things, listening to music, and spending quality time with
            family and friends. I also enjoy discovering new technologies and
            finding inspiration from everyday life, which often helps me
            bring fresh ideas and creativity into my work.
          </p>
        </div>


        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2">

          {/* <div className="rounded-2xl bg-white/50 p-4 sm:p-6 text-left shadow-lg backdrop-blur-xl">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#FBF3D1] text-[#5E5547]">
                <FaHeart />
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-[#5E5547]">
                Beyond Coding
              </h4>
            </div>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-[#7A7264]">
              Outside programming, I enjoy exploring creative ideas, learning
              new things, listening to music, and spending quality time with
              family and friends. I also enjoy discovering new technologies and
              finding inspiration from everyday life, which often helps me
              bring fresh ideas and creativity into my work.
            </p>
          </div> */}

          {/* 
          <div className="rounded-2xl bg-white/50 p-4 sm:p-6 text-left shadow-lg backdrop-blur-xl">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#FBF3D1] text-[#5E5547]">
                <FaUser />
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-[#5E5547]">
                Who I Am
              </h4>
            </div>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-[#7A7264]">
              I am a curious, responsible, and detail-oriented person who
              enjoys solving problems and continuously improving my skills. I
              believe in staying positive, being adaptable, and approaching
              every challenge with patience, creativity, and dedication. I
              always try to learn from every experience and grow both
              personally and professionally.
            </p>
          </div> */}
        </div>


        {/* <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">

          <div className="rounded-2xl bg-white/50 p-4 sm:p-6 shadow-lg backdrop-blur-xl">
            <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#FBF3D1] text-[#5E5547]">
              <FaCode />
            </div>

            <h4 className="mt-3 sm:mt-4 font-bold text-[#5E5547]">
              Clean Code
            </h4>

            <p className="mt-2 text-xs sm:text-sm text-[#7A7264]">
              Maintainable and scalable architecture.
            </p>
          </div>


          <div className="rounded-2xl bg-white/50 p-4 sm:p-6 shadow-lg backdrop-blur-xl">
            <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#FBF3D1] text-[#5E5547]">
              <FaLaptopCode />
            </div>

            <h4 className="mt-3 sm:mt-4 font-bold text-[#5E5547]">
              Modern UI
            </h4>

            <p className="mt-2 text-xs sm:text-sm text-[#7A7264]">
              Responsive and premium interfaces.
            </p>
          </div>


          <div className="rounded-2xl bg-white/50 p-4 sm:p-6 shadow-lg backdrop-blur-xl">
            <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#FBF3D1] text-[#5E5547]">
              <FaRocket />
            </div>

            <h4 className="mt-3 sm:mt-4 font-bold text-[#5E5547]">
              Performance
            </h4>

            <p className="mt-2 text-xs sm:text-sm text-[#7A7264]">
              Fast and optimized user experience.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}