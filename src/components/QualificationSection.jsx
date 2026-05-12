
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
//    {
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
//                 className={`relative grid items-center gap-8 md:grid-cols-2 ${
//                   index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
//                 }`}
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


"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, CalendarDays } from "lucide-react";
import { gsap } from "gsap";

const educationData = [
  {
    title: "SSC",
    institute: "Milestone School & College",
    year: "2013",
  },
  {
    title: "HSC",
    institute: "Milestone School & College",
    year: "2015",
  },
  {
    title: "B.Sc in CSE",
    institute: "Dhaka City College",
    year: "2016 - 2021",
  },
  {
    title: "M.Sc in CSE",
    institute: "Jahangirnagar University",
    year: "2021 - 2022",
  },
];

export default function QualificationSection() {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   gsap.from(".edu-card", {
  //     opacity: 0,
  //     y: 80,
  //     stagger: 0.2,
  //     duration: 1,
  //     ease: "power4.out",
  //   });
  // }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 bg-[#f6f3ea]"
    >
      {/* glow */}
      <div className="absolute left-20 top-10 h-[300px] w-[300px] rounded-full bg-[#8d77ab]/10 blur-[120px]" />
      <div className="absolute right-20 bottom-10 h-[300px] w-[300px] rounded-full bg-[#c5c7bc]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">

        {/* heading */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[5px] text-[#8d77ab]">
            Academic Background
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#5E5547]">
            Qualification
          </h2>

          <p className="mt-4 text-[#7B7264]">
            Building knowledge through years of learning
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="edu-card group relative overflow-hidden rounded-[32px] border border-white/50 bg-white/70 p-8 backdrop-blur-2xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              {/* top glow */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#8d77ab]/10 blur-3xl group-hover:bg-[#8d77ab]/20 transition-all duration-500" />

              {/* icon */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#8d77ab]/10 text-[#8d77ab]">
                <GraduationCap size={30} />
              </div>

              {/* content */}
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-bold text-[#5E5547]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#7B7264] leading-relaxed">
                  {item.institute}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-[#8d77ab] font-medium">
                  <CalendarDays size={16} />
                  {item.year}
                </div>
              </div>

              {/* bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#8d77ab] to-[#c5c7bc]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}