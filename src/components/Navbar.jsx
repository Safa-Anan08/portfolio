"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "About", id: "about", type: "section" },
  { label: "Skills", id: "skills", type: "section" },
  { label: "Qualification", id: "qualification", type: "section" },
  // { label: "Projects", id: "projects", type: "projects" },
  { label: "Contact", id: "footer", type: "section" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only observe homepage sections
    if (pathname !== "/") return;

    const sections = navItems
      .filter((item) => item.type === "section")
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const scrollToSection = (id) => {
    setOpen(false);

    // Already on homepage
    if (pathname === "/") {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Coming from another page
    router.push(`/#${id}`);
  };

  const handleNavClick = (item) => {
    setOpen(false);

    // Projects page
    if (item.type === "projects") {
      router.push("/projects");
      return;
    }

    // Other homepage sections
    scrollToSection(item.id);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#f9f6e6]/90 backdrop-blur-md px-4 sm:px-6 md:px-10 shadow-sm">
      <div className="flex items-center justify-between py-2">

        {/* ================= LEFT ================= */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8d77ab] p-1 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Logo */}
          <button
            onClick={() => {
              setOpen(false);

              if (pathname === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else {
                router.push("/");
              }
            }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8d77ab] text-white hidden md:flex justify-center items-center text-xl font-bold"
          >
            S
          </button>

          <button
            onClick={() => {
              setOpen(false);

              if (pathname === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else {
                router.push("/");
              }
            }}
            className="text-lg sm:text-xl font-bold text-[#8d77ab]"
          >
            Safa Anan
          </button>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[#5E5547] font-medium">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`
                relative py-2
                transition-colors duration-300
                ${activeSection === item.id
                  ? "text-[#8d77ab]"
                  : "text-[#5E5547] hover:text-[#8d77ab]"
                }
              `}
            >
              {item.label}

              {/* Active Underline */}
              <span
                className={`
                  absolute left-0 bottom-0 h-[2px]
                  bg-[#8d77ab]
                  transition-all duration-300
                  ${activeSection === item.id
                    ? "w-full"
                    : "w-0"
                  }
                `}
              />
            </button>
          ))}

        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              handleNavClick({
                label: "Contact",
                id: "footer",
                type: "section",
              })
            }
            className="nav-btn btn btn-sm sm:btn-md bg-[#8d77ab] text-white border-none text-xs sm:text-sm px-3 sm:px-4"
          >
            Let&apos;s Talk
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden mt-2 flex flex-col gap-1 py-4 text-[#5E5547] border-t border-[#8d77ab]/20 bg-[#f9f6e6]/95 backdrop-blur-md rounded-b-2xl px-2">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`
                w-full text-left px-3 py-2 rounded-lg
                transition-all duration-300
                ${activeSection === item.id
                  ? "bg-[#8d77ab]/10 text-[#8d77ab] font-semibold"
                  : "hover:bg-[#8d77ab]/10 hover:text-[#8d77ab] font-medium"
                }
              `}
            >
              {item.label}
            </button>
          ))}

        </div>
      )}
    </nav>
  );
}


// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-[#f9f6e6]/90 backdrop-blur-md px-4 sm:px-6 md:px-10 shadow-sm">

//       <div className="flex items-center justify-between py-2">


//         <div className="flex items-center gap-2 sm:gap-3">


//           <button
//             className="md:hidden text-[#8d77ab] p-1 focus:outline-none"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle Navigation Menu"
//           >
//             {open ? <X size={26} /> : <Menu size={26} />}
//           </button>

//           {/* Desktop Logo */}
//           <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8d77ab] text-white hidden md:flex justify-center items-center text-xl font-bold">
//             S
//           </div>

//           <h1 className="text-lg sm:text-xl font-bold text-[#8d77ab]">Safa Anan</h1>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 lg:gap-8 text-[#5E5547] font-medium">
//           <a href="#projects" className="transition hover:text-[#8d77ab]">Projects</a>
//           <a href="#qualification" className="transition hover:text-[#8d77ab]">Qualification</a>
//           <a href="#skills" className="transition hover:text-[#8d77ab]">Skills</a>
//           <a href="#about" className="transition hover:text-[#8d77ab]">About</a>
//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-3">

//           {/* Let's Talk CTA */}
//           <a
//             href="#footer"
//             className="hero-btn btn btn-sm sm:btn-md bg-[#8d77ab] text-white border-none text-xs sm:text-sm px-3 sm:px-4"
//           >
//             Let&apos;s Talk
//           </a>

//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {open && (
//         <div className="md:hidden mt-2 flex flex-col gap-3 py-4 text-[#5E5547] border-t border-[#8d77ab]/20 bg-[#f9f6e6]/95 backdrop-blur-md rounded-b-2xl px-2">
//           <a href="#projects" className="px-3 py-1.5 rounded-lg hover:bg-[#8d77ab]/10 transition font-medium" onClick={() => setOpen(false)}>Projects</a>
//           <a href="#qualification" className="px-3 py-1.5 rounded-lg hover:bg-[#8d77ab]/10 transition font-medium" onClick={() => setOpen(false)}>Qualification</a>
//           <a href="#skills" className="px-3 py-1.5 rounded-lg hover:bg-[#8d77ab]/10 transition font-medium" onClick={() => setOpen(false)}>Skills</a>
//           <a href="#about" className="px-3 py-1.5 rounded-lg hover:bg-[#8d77ab]/10 transition font-medium" onClick={() => setOpen(false)}>About</a>
//           <a href="#footer" className="px-3 py-1.5 rounded-lg hover:bg-[#8d77ab]/10 transition font-medium" onClick={() => setOpen(false)}>Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// }
// "use client";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-[#f9f6e6]/90 backdrop-blur-md px-6 md:px-10 shadow-sm">

//       <div className="flex items-center justify-between">

//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-3">

//           {/* DESKTOP LOGO */}
//           <div className="hidden md:flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-[#8d77ab] text-white flex items-center justify-center text-xl font-bold">
//               S
//             </div>
//             <h1 className="text-xl font-bold text-[#8d77ab]">Safa</h1>
//           </div>

//           {/* MOBILE ICON (REPLACES LOGO) */}
//           <button
//             className="md:hidden text-[#8d77ab]"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={26} /> : <Menu size={26} />}
//           </button>

//         </div>

//         {/* CENTER MENU (desktop only) */}
//         <div className="hidden md:flex gap-8 font-medium text-[#5E5547]">
//           <a href="#projects">Projects</a>
//           <a href="#qualification">Qualification</a>
//           <a href="#skills">Skills</a>
//           <a href="#footer">Contact</a>
//         </div>

//         {/* RIGHT CV BUTTON */}
//         <div className="flex items-center gap-4">
//           <a
//             href="/cv.pdf"
//             download
//             className="rounded-xl bg-[#8d77ab] px-4 py-2 text-sm text-white"
//           >
//             CV
//           </a>
//         </div>

//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden mt-4 flex flex-col gap-4 border-t py-4 text-[#5E5547]">
//           <a onClick={() => setOpen(false)} href="#projects">Projects</a>
//           <a onClick={() => setOpen(false)} href="#qualification">Qualification</a>
//           <a onClick={() => setOpen(false)} href="#skills">Skills</a>
//           <a onClick={() => setOpen(false)} href="#footer">Contact</a>
//         </div>
//       )}

//     </nav>
//   );
// }