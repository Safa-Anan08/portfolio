
"use client";

import {
  GraduationCap,
  BriefcaseBusiness,
  CalendarDays,
} from "lucide-react";

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
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#FBF3D1] via-[#DEDED1] to-[#C5C7BC]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#B6AE9F]/30 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-white/40 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <span className="rounded-full border border-[#B6AE9F]/30 bg-white/60 px-5 py-2 text-sm font-medium text-[#6B6255] backdrop-blur-xl">
            My Journey
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#5E5547] md:text-5xl">
            Qualification
          </h2>

          <p className="mt-4 text-[#7B7264]">
            Education Timeline
          </p>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6">
          {/* <button className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/60 px-7 py-4 text-[#5E5547] shadow-lg backdrop-blur-xl">
            <BriefcaseBusiness className="h-5 w-5" />
            Experience
          </button> */}

          <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#B6AE9F] via-[#DEDED1] to-[#FBF3D1] px-7 py-4 font-semibold text-[#4E463A] shadow-xl">
            <GraduationCap className="h-5 w-5" />
            Education
          </button>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#B6AE9F] via-[#C5C7BC] to-[#FBF3D1] md:block" />

          <div className="space-y-14">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative grid items-center gap-8 md:grid-cols-2 ${
                  index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="rounded-[30px] border border-white/50 bg-white/60 p-8 shadow-xl backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B6AE9F]/20">
                  <h3 className="text-2xl font-bold text-[#5E5547]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base text-[#6F665A]">
                    {item.institute}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm text-[#8A8174]">
                    <CalendarDays className="h-4 w-4" />
                    {item.year}
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#B6AE9F] shadow-lg md:block" />

                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

