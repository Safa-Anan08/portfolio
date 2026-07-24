import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Code2,
  AlertTriangle,
  Lightbulb,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams?.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#f9f6e6] min-h-screen flex flex-col text-[#5E5547]">
      <Navbar />


      <div className="relative overflow-hidden flex-1">
        <div className="absolute left-[-100px] top-10 h-[350px] w-[350px] rounded-full bg-[#8d77ab]/10 blur-[130px] pointer-events-none" />
        <div className="absolute right-[-100px] bottom-10 h-[350px] w-[350px] rounded-full bg-[#c5c7bc]/20 blur-[130px] pointer-events-none" />

        <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">

          <div className="mb-6 sm:mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/70 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#5E5547] shadow-sm backdrop-blur-xl transition hover:bg-white hover:text-[#8d77ab] hover:-translate-x-1"
            >
              <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
              Back to Projects
            </Link>
          </div>


          <div className="space-y-4 sm:space-y-6">
            <div>
              <span className="inline-block rounded-full border border-[#B6AE9F]/30 bg-white/60 px-3.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8d77ab] backdrop-blur-xl">
                Project Showcase
              </span>
              <h1 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#5E5547]">
                {project.name}
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed text-[#7B7264] max-w-3xl">
                {project.description}
              </p>
            </div>


            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
              {project.tech.map((item, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#B6AE9F]/30 bg-[#FBF3D1] px-3 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-[#5E5547] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <ProjectImageCarousel
              images={project.images || [project.image]}
              projectName={project.name}
            />
          </div>


          <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-4 sm:p-8 backdrop-blur-2xl shadow-lg mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#8d77ab]/15 text-[#8d77ab] shrink-0">
                <Sparkles size={18} className="sm:w-[20px] sm:h-[20px]" />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-[#5E5547]">
                Project Overview
              </h2>
            </div>
            <p className="text-sm sm:text-lg leading-relaxed text-[#6E6558]">
              {project.description}
            </p>
          </div>


          {project.features && project.features.length > 0 && (
            <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-4 sm:p-8 backdrop-blur-2xl shadow-lg mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#8d77ab]/15 text-[#8d77ab] shrink-0">
                  <CheckCircle2 size={18} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5E5547]">
                  Key Features
                </h2>
              </div>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 sm:gap-3 rounded-2xl border border-white/50 bg-[#FBF3D1]/50 p-3 sm:p-4 shadow-sm"
                  >
                    <div className="mt-1.5 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#8d77ab] shrink-0" />
                    <span className="text-xs sm:text-base font-medium text-[#5E5547]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}


          <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-4 sm:p-8 backdrop-blur-2xl shadow-lg mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#8d77ab]/15 text-[#8d77ab] shrink-0">
                <Code2 size={18} className="sm:w-[20px] sm:h-[20px]" />
              </div>
              <h2 className="text-lg sm:text-2xl font-bold text-[#5E5547]">
                Technology Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.tech.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-2xl border border-[#B6AE9F]/30 bg-gradient-to-r from-[#FBF3D1] to-white px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[#8d77ab]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#5E5547]">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>


          {project.challenges && (
            <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-4 sm:p-8 backdrop-blur-2xl shadow-lg mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#8d77ab]/15 text-[#8d77ab] shrink-0">
                  <AlertTriangle size={18} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5E5547]">
                  Challenges Faced
                </h2>
              </div>
              <p className="text-sm sm:text-lg leading-relaxed text-[#6E6558]">
                {project.challenges}
              </p>
            </div>
          )}


          {project.future && (
            <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-white/70 p-4 sm:p-8 backdrop-blur-2xl shadow-lg mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#8d77ab]/15 text-[#8d77ab] shrink-0">
                  <Lightbulb size={18} className="sm:w-[20px] sm:h-[20px]" />
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-[#5E5547]">
                  Future Improvements & Plans
                </h2>
              </div>
              <p className="text-sm sm:text-lg leading-relaxed text-[#6E6558]">
                {project.future}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#8d77ab] to-[#b6a6d9] px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                <ExternalLink size={18} className="sm:w-[20px] sm:h-[20px]" />
                View Live Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[#B6AE9F]/40 bg-white/80 px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-base font-semibold text-[#5E5547] shadow-md backdrop-blur-xl transition hover:bg-white hover:scale-[1.02]"
              >
                <FaGithub size={18} className="sm:w-[20px] sm:h-[20px]" />
                View GitHub Repository
              </a>
            )}
          </div>


          <div className="rounded-[24px] sm:rounded-[32px] border border-white/60 bg-gradient-to-r from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC] p-5 sm:p-8 lg:p-12 text-center shadow-xl">
            <h3 className="text-xl sm:text-3xl font-bold text-[#5E5547]">
              Explore More Projects
            </h3>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#7B7264] max-w-xl mx-auto">
              Discover other web and mobile application projects crafted with clean architecture and modern UI.
            </p>
            <div className="mt-5 sm:mt-6">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#8d77ab] px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-base font-semibold text-white shadow-lg transition hover:bg-[#7b6697] hover:scale-[1.03]"
              >
                <Rocket size={16} className="sm:w-[18px] sm:h-[18px]" />
                Explore More Projects
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

