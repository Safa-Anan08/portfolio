
"use client";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiNestjs,
  SiMongodb,
  SiTailwindcss,SiFlutter
} from "react-icons/si";
import { DiCode, DiFirebase } from "react-icons/di";
const technologies = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "Flutter", icon:<SiFlutter /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const frontendSkills = [
  "HTML5",
  "NextJS",
  "Tailwind CSS",
  "JavaScript",
  "ReactJS",
];



const backendSkills = ["NodeJS", "MongoDB","ExpressJs",
"REST API Development","Firebase"];

const toolsSkills = [
  "Android Studio",
  "VS Code",
  "Git & GitHub",
  "Netlify",
  "MongoDB Atlas",
  "Vercel",
];

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-18 bg-gradient-to-br from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC] px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-100px] top-[-100px] h-[300px] sm:h-[350px] w-[300px] sm:w-[350px] rounded-full bg-[#B6AE9F]/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[300px] sm:h-[350px] w-[300px] sm:w-[350px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-0 sm:px-4 max-w-7xl">
        <div className="text-center">
          <span className="rounded-full border border-[#B6AE9F]/30 bg-white/50 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#6D6457] backdrop-blur-xl">
            My Stack
          </span>

          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-black tracking-wide text-[#5A5145] md:text-5xl">
            Technologies & Skills
          </h2>

          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-[#7A7266]">
            Modern technologies and tools I use to build premium full-stack applications.
          </p>
        </div>

        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-3 sm:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative flex w-[130px] xs:w-[140px] sm:w-[150px] flex-col items-center justify-center rounded-[24px] sm:rounded-[30px] border border-white/50 bg-white/50 p-4 sm:p-6 backdrop-blur-2xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B6AE9F]/20"
            >
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[30px] bg-gradient-to-br from-white/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FBF3D1] to-[#DEDED1] text-2xl sm:text-4xl text-[#6A6154] shadow-md transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                {tech.icon}
              </div>

              <h3 className="mt-3 sm:mt-5 text-center text-xs sm:text-sm font-bold text-[#5E5547]">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#5A5145]">
            Technical Skills
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#7A7266]">
            Expertise & Experience
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] sm:rounded-[35px] border border-white/50 bg-white/50 p-5 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-xl">
            <div className="mb-6 sm:mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#5E5547]">Frontend</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#7A7266]">Client-side development</p>
              </div>

              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B6AE9F] to-[#FBF3D1] text-2xl sm:text-3xl text-[#5E5547]">
                <DiCode />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl bg-[#FBF3D1]/60 px-3.5 sm:px-5 py-3 sm:py-4 shadow-sm gap-2"
                >
                  <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#B6AE9F] shrink-0" />
                    <h4 className="font-semibold text-xs sm:text-base text-[#5E5547] truncate">{skill}</h4>
                  </div>

                  <span className="rounded-full bg-white/70 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold text-[#6E6558] shrink-0">
                    {index < 3 ? "Expert" : "Intermediate"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] sm:rounded-[35px] border border-white/50 bg-white/50 p-5 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-xl">
            <div className="mb-6 sm:mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#5E5547]">Backend</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#7A7266]">Server-side development</p>
              </div>

              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B6AE9F] to-[#FBF3D1] text-2xl sm:text-3xl text-[#5E5547]">
                <DiFirebase />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl bg-[#FBF3D1]/60 px-3.5 sm:px-5 py-3 sm:py-4 shadow-sm gap-2"
                >
                  <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#B6AE9F] shrink-0" />
                    <h4 className="font-semibold text-xs sm:text-base text-[#5E5547] truncate">{skill}</h4>
                  </div>

                  <span className="rounded-full bg-white/70 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold text-[#6E6558] shrink-0">
                    Intermediate
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-14 flex justify-center">
          <div className="w-full max-w-2xl rounded-[28px] sm:rounded-[35px] border border-white/50 bg-white/50 p-5 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-xl">

            <div className="mb-6 sm:mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#5E5547]">
                  Tools & Platforms
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#7A7266]">
                  Development ecosystem
                </p>
              </div>

              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B6AE9F] to-[#FBF3D1] text-2xl sm:text-3xl text-[#5E5547]">
                <FaGitAlt />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {toolsSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl bg-[#FBF3D1]/60 px-3.5 sm:px-5 py-3 sm:py-4 shadow-sm gap-2"
                >
                  <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#B6AE9F] shrink-0" />
                    <h4 className="font-semibold text-xs sm:text-base text-[#5E5547] truncate">{skill}</h4>
                  </div>

                  <span className="rounded-full bg-white/70 px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-semibold text-[#6E6558] shrink-0">
                    Expert
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

