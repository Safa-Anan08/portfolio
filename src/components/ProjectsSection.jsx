// src/components/ProjectsSection.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[400px] w-[400px] rounded-full bg-[#B6AE9F]/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[400px] w-[400px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-wide text-[#5E5547] md:text-6xl">
            Projects
          </h2>
          <p className="mt-4 text-[#7B7264] text-lg">
            Recent Premium Works
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-[28px] border border-white/50 bg-white/60 backdrop-blur-2xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#B6AE9F]/30"
            >
              {/* Image */}
              <div className="relative flex h-[200px] items-center justify-center bg-[#F8F4E8] p-5">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={280}
                  height={180}
                  className="max-h-full max-w-full object-contain transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-[#5E5547]">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6E6558] line-clamp-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-[#B6AE9F]/30 bg-[#FBF3D1] px-3 py-1.5 text-xs font-semibold text-[#5E5547]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Info */}
                <div className="mt-5 flex-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#5E5547]">
                      Challenges
                    </h4>
                    <p className="mt-1 text-sm leading-5 text-[#7B7264] line-clamp-2">
                      {project.challenges}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#5E5547]">
                      Future Plan
                    </h4>
                    <p className="mt-1 text-sm leading-5 text-[#7B7264] line-clamp-2">
                      {project.future}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#B6AE9F]/30 bg-white/80 px-4 py-3 text-sm font-medium text-[#5E5547] transition hover:bg-white"
                  >
                    <FaGithub />
                    GitHub
                  </Link>

                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B6AE9F] via-[#C5C7BC] to-[#FBF3D1] px-4 py-3 text-sm font-semibold text-[#4B4338] shadow-lg transition hover:scale-105"
                  >
                    <FiExternalLink />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}