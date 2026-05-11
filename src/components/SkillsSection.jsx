
"use client";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiNestjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { DiCode, DiFirebase } from "react-icons/di";
const technologies = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "NestJS", icon: <SiNestjs /> },
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
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#B6AE9F]/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <span className="rounded-full border border-[#B6AE9F]/30 bg-white/50 px-5 py-2 text-sm font-medium text-[#6D6457] backdrop-blur-xl">
            My Stack
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-wide text-[#5A5145] md:text-5xl">
            Technologies & Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#7A7266]">
            Modern technologies and tools I use to build premium full-stack applications.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative flex w-[150px] flex-col items-center justify-center rounded-[30px] border border-white/50 bg-white/50 p-6 backdrop-blur-2xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B6AE9F]/20"
            >
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FBF3D1] to-[#DEDED1] text-4xl text-[#6A6154] shadow-md transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                {tech.icon}
              </div>

              <h3 className="mt-5 text-center text-sm font-bold text-[#5E5547]">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <h2 className="text-4xl font-black text-[#5A5145]">
            Technical Skills
          </h2>

          <p className="mt-3 text-[#7A7266]">
            Expertise & Experience
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[35px] border border-white/50 bg-white/50 p-10 backdrop-blur-2xl shadow-xl">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-[#5E5547]">Frontend</h3>
                <p className="mt-2 text-sm text-[#7A7266]">Client-side development</p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B6AE9F] to-[#FBF3D1] text-3xl text-[#5E5547]">
                <DiCode />
              </div>
            </div>

            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl bg-[#FBF3D1]/60 px-5 py-4 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-[#B6AE9F]" />
                    <h4 className="font-semibold text-[#5E5547]">{skill}</h4>
                  </div>

                  <span className="rounded-full bg-white/70 px-4 py-1 text-xs font-semibold text-[#6E6558]">
                    {index < 3 ? "Expert" : "Intermediate"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[35px] border border-white/50 bg-white/50 p-10 backdrop-blur-2xl shadow-xl">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-[#5E5547]">Backend</h3>
                <p className="mt-2 text-sm text-[#7A7266]">Server-side development</p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B6AE9F] to-[#FBF3D1] text-3xl text-[#5E5547]">
                <DiFirebase />
              </div>
            </div>

            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-2xl bg-[#FBF3D1]/60 px-5 py-4 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-[#B6AE9F]" />
                    <h4 className="font-semibold text-[#5E5547]">{skill}</h4>
                  </div>

                  <span className="rounded-full bg-white/70 px-4 py-1 text-xs font-semibold text-[#6E6558]">
                    Intermediate
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          
        </div>
        
         <div className="mt-14 flex justify-center">
  <div className="w-full max-w-2xl rounded-[35px] border border-white/50 bg-white/50 p-10 backdrop-blur-2xl shadow-xl">

    <div className="mb-10 flex items-center justify-between">
      <div>
        <h3 className="text-3xl font-bold text-[#5E5547]">
          Tools & Platforms
        </h3>
        <p className="mt-2 text-sm text-[#7A7266]">
          Development ecosystem
        </p>
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#B6AE9F] to-[#FBF3D1] text-3xl text-[#5E5547]">
        <FaGitAlt />
      </div>
    </div>

    <div className="space-y-6">
      {toolsSkills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-2xl bg-[#FBF3D1]/60 px-5 py-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 rounded-full bg-[#B6AE9F]" />
            <h4 className="font-semibold text-[#5E5547]">{skill}</h4>
          </div>

          <span className="rounded-full bg-white/70 px-4 py-1 text-xs font-semibold text-[#6E6558]">
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

