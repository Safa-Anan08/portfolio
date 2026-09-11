
// "use client";

// import {
//   GraduationCap,
//   BriefcaseBusiness,
//   CalendarDays,
// } from "lucide-react";

// const educationData = [
//   {
//     title: "SSC",
//     institute: "Milestone School & College",
//     year: "2013",
//   },
//   {
//     title: "HSC",
//     institute: "Milestone School & College",
//     year: "2015",
//   },
//   {
//     title: "B.Sc in CSE",
//     institute: "Dhaka City College",
//     year: "2016 - 2021",
//   },
//   {
//     title: "M.Sc in CSE",
//     institute: "Jahangirnagar University",
//     year: "2021 - 2022",
//   },
// ];

// export default function QualificationSection() {
//   return (
//     <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC]">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#B6AE9F]/30 blur-3xl" />
//         <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-white/40 blur-3xl" />
//       </div>

//       <div className="container relative z-10 mx-auto px-4">
//         <div className="text-center">
//           <span className="rounded-full border border-[#B6AE9F]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#6B6255] backdrop-blur-xl">
//             My Journey
//           </span>

//           <h2 className="mt-6 text-4xl font-black text-[#5E5547] md:text-5xl">
//             Qualification
//           </h2>

//           <p className="mt-4 text-[#7B7264]">
//             Education Timeline
//           </p>
//         </div>

//         <div className="mt-14 flex items-center justify-center gap-6">
//           {/* <button className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/60 px-7 py-4 text-[#5E5547] shadow-lg backdrop-blur-xl">
//             <BriefcaseBusiness className="h-5 w-5" />
//             Experience
//           </button> */}

//           <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#B6AE9F] via-[#DEDED1] to-[#FBF3D1] px-7 py-4 font-semibold text-[#4E463A] shadow-xl">
//             <GraduationCap className="h-5 w-5" />
//             Education
//           </button>
//         </div>

//         <div className="relative mx-auto mt-20 max-w-4xl">
//           <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#B6AE9F] via-[#C5C7BC] to-[#FBF3D1] md:block" />

//           <div className="space-y-14">
//             {educationData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`relative grid items-center gap-8 md:grid-cols-2 ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
//                   }`}
//               >
//                 <div className="rounded-[30px] border border-white/50 bg-white/60 p-8 shadow-xl backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B6AE9F]/20">
//                   <h3 className="text-2xl font-bold text-[#5E5547]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-base text-[#6F665A]">
//                     {item.institute}
//                   </p>

//                   <div className="mt-5 flex items-center gap-2 text-sm text-[#8A8174]">
//                     <CalendarDays className="h-4 w-4" />
//                     {item.year}
//                   </div>
//                 </div>

//                 <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#B6AE9F] shadow-lg md:block" />

//                 <div className="hidden md:block" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef } from "react";
// import { GraduationCap, CalendarDays } from "lucide-react";
// import { gsap } from "gsap";

// const educationData = [
//   {
//     title: "SSC",
//     institute: "Milestone School & College",
//     year: "2013",
//   },
//   {
//     title: "HSC",
//     institute: "Milestone School & College",
//     year: "2015",
//   },
//   {
//     title: "B.Sc in CSE",
//     institute: "Dhaka City College",
//     year: "2016 - 2021",
//   },
//   {
//     title: "M.Sc in CSE",
//     institute: "Jahangirnagar University",
//     year: "2021 - 2022",
//   },
// ];

// export default function QualificationSection() {
//   const sectionRef = useRef(null);

//   // useEffect(() => {
//   //   gsap.from(".edu-card", {
//   //     opacity: 0,
//   //     y: 80,
//   //     stagger: 0.2,
//   //     duration: 1,
//   //     ease: "power4.out",
//   //   });
//   // }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden py-12 sm:py-20 bg-[#f6f3ea] px-4 sm:px-6 lg:px-8"
//     >
//       {/* glow */}
//       <div className="absolute left-20 top-10 h-[250px] sm:h-[300px] w-[250px] sm:w-[300px] rounded-full bg-[#8d77ab]/10 blur-[120px] pointer-events-none" />
//       <div className="absolute right-20 bottom-10 h-[250px] sm:h-[300px] w-[250px] sm:w-[300px] rounded-full bg-[#c5c7bc]/20 blur-[120px] pointer-events-none" />

//       <div className="relative z-10 mx-auto max-w-7xl">

//         {/* heading */}
//         <div className="text-center mb-12 sm:mb-20">
//           <p className="text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[5px] text-[#8d77ab] font-semibold">
//             Academic Background
//           </p>

//           <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#5E5547]">
//             Qualification
//           </h2>

//           <p className="mt-2 sm:mt-4 text-sm sm:text-base text-[#7B7264]">
//             Building knowledge through years of learning
//           </p>
//         </div>

//         {/* grid */}
//         <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
//           {educationData.map((item, index) => (
//             <div
//               key={index}
//               className="edu-card group relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/50 bg-white/70 p-5 sm:p-8 backdrop-blur-2xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl flex flex-col justify-between"
//             >
//               {/* top glow */}
//               <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#8d77ab]/10 blur-3xl group-hover:bg-[#8d77ab]/20 transition-all duration-500 pointer-events-none" />

//               <div>
//                 {/* icon */}
//                 <div className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-[#8d77ab]/10 text-[#8d77ab]">
//                   <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
//                 </div>

//                 {/* content */}
//                 <div className="relative z-10 mt-6 sm:mt-8">
//                   <h3 className="text-xl sm:text-2xl font-bold text-[#5E5547]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#7B7264] leading-relaxed">
//                     {item.institute}
//                   </p>
//                 </div>
//               </div>

//               <div className="relative z-10 mt-5 sm:mt-6 flex items-center gap-2 text-xs sm:text-sm text-[#8d77ab] font-medium">
//                 <CalendarDays className="w-4 h-4 shrink-0" />
//                 {item.year}
//               </div>

//               {/* bottom accent */}
//               <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#8d77ab] to-[#c5c7bc]" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  BookOpen,
} from "lucide-react";

const educationData = [
  {
    title: "M.Sc in CSE",
    institute: "Jahangirnagar University",
    year: "2021 - 2022",
  },
];

const trainingData = [
  {
    title: "Web Development",
    organization: "Programming Hero",
    technology: "Next.js, JavaScript (ES6+), HTML5, CSS3",
    location: "Dhaka, Bangladesh (Online Based)",
    year: "2026",
    duration: "6 Months",
  },
  {
    title: "Mobile Application Development",
    organization: "BITM",
    technology: "Android (Flutter)",
    location: "Dhaka, Bangladesh",
    year: "2022",
    duration: "3 Months",
  },
  {
    title: "Web Development",
    organization: "NACTAR",
    technology: "PHP & MySQL",
    location: "Bogura, Bangladesh (Online Based)",
    year: "2022",
    duration: "1 Month",
  },
];

export default function QualificationSection() {
  return (
    <section
      id="qualification"
      className="relative overflow-hidden bg-[#f6f3ea] px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-100px] top-10 h-[280px] w-[280px] rounded-full bg-[#8d77ab]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-[-100px] h-[280px] w-[280px] rounded-full bg-[#c5c7bc]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#8d77ab] sm:text-sm sm:tracking-[5px]">
            Education & Training
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5E5547] sm:mt-4 sm:text-4xl md:text-5xl">
            Qualification
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#7B7264] sm:mt-4 sm:text-base">
            Academic education and professional training that shaped my
            development journey.
          </p>
        </div>

        {/* ================= EDUCATION ================= */}
        <div className="mb-14 sm:mb-20">

          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8d77ab]/10 text-[#8d77ab]">
              <GraduationCap size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#5E5547] sm:text-2xl">
                Academic Education
              </h3>

              <p className="text-xs text-[#7B7264] sm:text-sm">
                My academic background
              </p>
            </div>
          </div>

          <div className="relative">

            {/* Timeline Line */}
            <div className="absolute bottom-0 left-[20px] top-0 hidden w-px bg-[#8d77ab]/20 sm:block" />

            {educationData.map((item, index) => (
              <div
                key={index}
                className="group relative sm:pl-14"
              >

                {/* Timeline Dot */}
                <div className="absolute left-[13px] top-7 hidden h-4 w-4 rounded-full border-4 border-[#f6f3ea] bg-[#8d77ab] shadow-md sm:block" />

                <div className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-7">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <div className="flex items-center gap-2">
                        <BookOpen
                          size={18}
                          className="text-[#8d77ab]"
                        />

                        <span className="text-xs font-semibold uppercase tracking-wider text-[#8d77ab]">
                          Master's Degree
                        </span>
                      </div>

                      <h4 className="mt-3 text-xl font-bold text-[#5E5547] sm:text-2xl">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm text-[#7B7264] sm:text-base">
                        {item.institute}
                      </p>
                    </div>

                    <div className="flex w-fit items-center gap-2 rounded-full bg-[#8d77ab]/10 px-4 py-2 text-sm font-semibold text-[#8d77ab]">
                      <CalendarDays size={16} />
                      {item.year}
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TRAINING ================= */}
        <div>

          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8d77ab]/10 text-[#8d77ab]">
              <Award size={22} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#5E5547] sm:text-2xl">
                Professional Training
              </h3>

              <p className="text-xs text-[#7B7264] sm:text-sm">
                Courses and professional development
              </p>
            </div>
          </div>

          {/* Training Cards */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {trainingData.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[26px] border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-6"
              >

                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#8d77ab]/10 blur-3xl transition-all duration-500 group-hover:bg-[#8d77ab]/20" />

                {/* Icon */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8d77ab]/10 text-[#8d77ab]">
                  <Award size={23} />
                </div>

                {/* Title */}
                <div className="relative z-10 mt-5">

                  <h4 className="text-xl font-bold text-[#5E5547]">
                    {item.title}
                  </h4>

                  <p className="mt-1 font-medium text-[#8d77ab]">
                    {item.organization}
                  </p>

                </div>

                {/* Technology */}
                <div className="relative z-10 mt-5">

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#7B7264]">
                    Technology
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.technology.split(", ").map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full border border-[#B6AE9F]/30 bg-[#FBF3D1] px-3 py-1 text-xs font-semibold text-[#5E5547]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Location */}
                <div className="relative z-10 mt-5 flex items-start gap-2 text-sm text-[#7B7264]">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8d77ab]"
                  />

                  <span>{item.location}</span>
                </div>

                {/* Bottom Info */}
                <div className="relative z-10 mt-5 flex items-center justify-between border-t border-[#B6AE9F]/20 pt-4">

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#8d77ab]">
                    <CalendarDays size={15} />
                    {item.year}
                  </div>

                  <span className="rounded-full bg-[#8d77ab]/10 px-3 py-1 text-xs font-semibold text-[#5E5547]">
                    {item.duration}
                  </span>

                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#8d77ab] via-[#c5c7bc] to-[#FBF3D1]" />

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}