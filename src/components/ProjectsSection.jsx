// src/components/ProjectsSection.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiEye, FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC] py-12 sm:py-18 px-4 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-120px] top-[-120px] h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] rounded-full bg-[#B6AE9F]/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-0 sm:px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-black tracking-wide text-[#5E5547] md:text-6xl">
            Projects
          </h2>
          <p className="mt-2 sm:mt-4 text-[#7B7264] text-sm sm:text-lg">
            Recent Premium Works
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/50 bg-white/60 backdrop-blur-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B6AE9F]/30"
            >
              {/* Image Container */}
              <div className="relative flex h-[180px] sm:h-[220px] w-full items-center justify-center bg-[#F8F4E8] p-3 sm:p-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={240}
                  className="max-h-full max-w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#5E5547]">
                  {project.name}
                </h3>

                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-[#6E6558] line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-[#B6AE9F]/30 bg-[#FBF3D1] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-[#5E5547]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex-1 min-h-[1rem] sm:min-h-[1.5rem]" />

                {/* Action Buttons */}
                <div className="mt-5 sm:mt-6 flex flex-col gap-2 sm:gap-2.5">
                  {/* View Details Button */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8d77ab] px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#7b6697] hover:scale-[1.01]"
                  >
                    <FiEye className="text-sm sm:text-base shrink-0" />
                    View Details
                  </Link>

                  {/* External Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1 sm:gap-1.5 rounded-xl border border-[#B6AE9F]/40 bg-white/80 px-2.5 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-[#5E5547] transition hover:bg-white hover:scale-[1.01] min-w-0"
                    >
                      <FaGithub className="text-xs sm:text-sm shrink-0" />
                      <span className="truncate">GitHub</span>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1 sm:gap-1.5 rounded-xl bg-gradient-to-r from-[#B6AE9F] via-[#C5C7BC] to-[#FBF3D1] px-2.5 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#4B4338] shadow-md transition hover:scale-[1.01] min-w-0"
                    >
                      <FiExternalLink className="text-xs sm:text-sm shrink-0" />
                      <span className="truncate">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More Projects Button */} {projects.length > 3 && (<div className="mt-10 sm:mt-14 flex justify-center"> <Link href="/projects" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#8d77ab] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#7b6697] hover:-translate-y-1 hover:shadow-xl" > View More Projects <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /> </Link> </div>)}
      </div>
    </section>
  );
}
