import Link from "next/link";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import QualificationSection from "@/components/QualificationSection";
import AboutSection from "@/components/AboutSection";
import HeroBg from "@/components/HeroBg";
import AnimatedText from "@/components/AnimatedText";
import ContactFooter from "@/components/ContactFooter";
import HeroEffects from "@/components/HeroEffects";
import Footer from "@/components/Footer";
export default function Home() {

  return (
    <div className="bg-[#f9f6e6] min-h-screen">
      <Navbar />
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
      <Footer />
    </div>
  );
}