import Link from "next/link";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactFooter from "@/components/ContactFooter";
import QualificationSection from "@/components/QualificationSection";
import AboutSection from "@/components/AboutSection";
import HeroBg from "@/components/HeroBg";
import AnimatedText from "@/components/AnimatedText";
import HeroEffects from "@/components/HeroEffects";
import Footer from "@/components/Footer";
export default function Home() {

  return (
    <div className="bg-[#f9f6e6] min-h-screen">
      <Navbar />
      <section className="hero min-h-screen px-4 sm:px-8 lg:px-10 py-10 sm:py-16 lg:py-20 relative overflow-hidden bg-[#f9f6e6]">

        <HeroEffects />
        <HeroBg />

        <div className="hero-content flex-col lg:flex-row-reverse gap-8 sm:gap-12 lg:gap-24 relative z-10 w-full max-w-7xl mx-auto">


          <div className="relative flex justify-center w-full lg:w-auto">
            <img
              src="/picture.png"
              alt="Profile"
              className="profile-img w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-[420px] rounded-3xl shadow-2xl border-4 border-white object-cover"
            />
          </div>


          <div className="max-w-xl w-full text-left">

            <p className="hero-title text-xl sm:text-2xl mb-2 sm:mb-4 text-[#8d77ab]">
              Hello I&apos;m
            </p>

            <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-bold">
              Safa Anan
            </h1>

            <h1 className="hero-title text-2xl sm:text-4xl lg:text-5xl font-bold text-[#8d77ab] my-4 sm:my-6">
              Web & Mobile Application Developer
            </h1>

            <p className="hero-text text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Crafting elegant web experiences and modern
              mobile applications with creativity,
              performance and clean UI.
            </p>

            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-5">
              <a
                href="/CV of Laamye-Al-Safa-Anan.pdf"
                download
                className="rounded-xl bg-gradient-to-r from-[#8d77ab] to-[#b6a6d9] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 inline-flex items-center justify-center"
              >
                Download CV
              </a>

              <a
                href="#projects"
                className="hero-btn btn btn-outline border-[#8d77ab] text-sm"
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


      <section id="skills">
        <SkillsSection />
      </section>


      <section id="qualification">
        <QualificationSection />
      </section>


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