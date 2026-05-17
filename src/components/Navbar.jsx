"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f9f6e6]/90 backdrop-blur-md px-6 md:px-10 shadow-sm">

      <div className="flex items-center justify-between">

       {/* Left Side */}
<div className="flex items-center gap-3">

  {/* Mobile Menu Left */}
  <button
    className="md:hidden text-[#8d77ab]"
    onClick={() => setOpen(!open)}
  >
    {open ? <X size={26} /> : <Menu size={26} />}
  </button>

  {/* Desktop Logo */}
  <div className="m-2 w-10 h-10 rounded-full bg-[#8d77ab] text-white hidden md:flex justify-center items-center text-xl font-bold">
    S
  </div>

  <h1 className="text-xl font-bold text-[#8d77ab]">Safa Anan</h1>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-[#5E5547] font-medium">
          <a href="#projects">Projects</a>
          <a href="#qualification">Qualification</a>
          <a href="#skills">Skills</a>
          <a href="#footer">Contact</a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 m-2">

          {/* CV */}
          <a
            href="/CV of Laamye-Al-Safa-Anan.pdf"
            download
            className="rounded-xl bg-gradient-to-r from-[#8d77ab] to-[#b6a6d9] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105 "
          >
            Download CV
          </a>

  

        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4  py-4 text-[#5E5547]">
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#qualification" onClick={() => setOpen(false)}>Qualification</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#footer" onClick={() => setOpen(false)}>Contact</a>
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