import Link from "next/link";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import QualificationSection from "@/components/QualificationSection";
import AboutSection from "@/components/AboutSection";
import HeroBg from "@/components/HeroBg";
import AnimatedText from "@/components/AnimatedText";
import ContactFooter from "@/components/ContactFooter";
import HeroEffects from "@/components/HeroEffects";
export default function Home() {
  return (
    <div className="bg-[#f9f6e6] min-h-screen">

      <nav className="navbar sticky top-0 z-50 bg-[#f9f6e6]/90 backdrop-blur-md px-10 shadow-sm">

  {/* Left Logo */}
  <div className="flex-1 flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-[#8d77ab] text-white flex items-center justify-center text-2xl font-bold">
      S
    </div>
    <h1 className="text-2xl font-bold text-[#8d77ab]">
      Safa
    </h1>
  </div>

  {/* Center Tabs */}
  <div className="hidden md:flex gap-8 font-medium text-[#5E5547]">
    <a href="#projects" className="hover:text-[#8d77ab] transition">
      Projects
    </a>
    <a href="#qualification" className="hover:text-[#8d77ab] transition">
      Qualification
    </a>
    <a href="#skills" className="hover:text-[#8d77ab] transition">
      Skills
    </a>
    <a href="#footer" className="hover:text-[#8d77ab] transition">
      Contact
    </a>
  </div>

  {/* Right Button */}
  <div className="flex-1 flex justify-end">
    <a
      href="/CV of Laamye-Al-Safa-Anan.pdf"
      download
      className="
        rounded-xl
        bg-gradient-to-r from-[#8d77ab] to-[#b6a6d9]
        px-5 py-2
        text-sm font-semibold
        text-white
        shadow-md
        transition
        hover:scale-105
      "
    >
      Download CV
    </a>
  </div>

</nav>


<section className="hero min-h-screen px-10 relative overflow-hidden bg-[#f9f6e6]">

  <HeroEffects />
  <HeroBg />

  <div className="hero-content flex-col lg:flex-row-reverse gap-24 relative z-10">

    {/* Image */}
    <div className="relative">
      <img
        src="/picture.png"
        alt="Profile"
        className="profile-img w-[420px] rounded-3xl shadow-2xl border-4 border-white"
      />
    </div>

    {/* Content */}
    <div className="max-w-xl">

      <p className="hero-title text-2xl mb-4 text-[#8d77ab]">
        Hello I'm
      </p>

      <h1 className="hero-title text-7xl font-bold">
        Safa
      </h1>

      <h1 className="hero-title text-5xl font-bold text-[#8d77ab]  my-6">
        Web & Mobile Application Developer
      </h1>

      <p className="hero-text text-lg text-gray-700 leading-relaxed mb-8">
        Crafting elegant web experiences and modern
        mobile applications with creativity,
        performance and clean UI.
      </p>

      <div className="flex gap-5">
        <a
          href="/CV of Laamye-Al-Safa-Anan.pdf"
          download
          className="hero-btn btn bg-[#8d77ab] text-white border-none"
        >
          Download Resume
        </a>

        <a
          href="#projects"
          className="hero-btn btn btn-outline border-[#8d77ab]"
        >
          View Projects
        </a>
      </div>

    </div>
  </div>
</section>
         <section id="about">
        <AboutSection />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* QUALIFICATION */}
      <section id="qualification">
        <QualificationSection />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <ProjectsSection />
      </section>
  <section id="footer">
        <ContactFooter />
      </section>
    </div>
  );
}