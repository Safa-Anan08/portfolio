// import projects from "@/data/projects";
// import Link from "next/link";

// export default function ProjectDetails({ params }) {
//   const project = projects.find((p) => p.id === params.id);

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f9f6e6]">
//         <h1 className="text-3xl font-bold text-[#8d77ab]">
//           Project Not Found
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f9f6e6] px-6 py-16">
//       <div className="max-w-6xl mx-auto">

//         {/* Back Button */}
//         <Link
//           href="/"
//           className="btn mb-8 bg-[#8d77ab] text-white border-none"
//         >
//           ← Back Home
//         </Link>

//         {/* Project Image */}
//         <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
//           <img
//             src={project.image}
//             alt={project.name}
//             className="w-full h-[500px] object-cover"
//           />
//         </div>

//         {/* Title */}
//         <h1 className="text-5xl font-bold mb-4 text-[#8d77ab]">
//           {project.name}
//         </h1>

//         <p className="text-lg text-gray-700 mb-10">
//           {project.description}
//         </p>

//         {/* Tech Stack */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-bold mb-4">Main Technology Stack</h2>
//           <div className="flex flex-wrap gap-3">
//             {project.tech.map((item, index) => (
//               <span
//                 key={index}
//                 className="badge badge-lg bg-[#bad8b6] text-black"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Links */}
//         <div className="flex gap-4 mb-12">
//           <a
//             href={project.live}
//             target="_blank"
//             className="btn bg-[#8d77ab] text-white border-none"
//           >
//             Live Project
//           </a>

//           <a
//             href={project.github}
//             target="_blank"
//             className="btn btn-outline border-[#8d77ab]"
//           >
//             GitHub Repo
//           </a>
//         </div>

//         {/* Challenges */}
//         <div className="card bg-[#e1eacd] shadow-lg p-8 mb-8">
//           <h2 className="text-2xl font-bold mb-3">
//             Challenges Faced
//           </h2>
//           <p>{project.challenges || "Lorem ipsum dolor sit amet."}</p>
//         </div>

//         {/* Future Improvements */}
//         <div className="card bg-[#bad8b6] shadow-lg p-8">
//           <h2 className="text-2xl font-bold mb-3">
//             Future Improvements
//           </h2>
//           <p>{project.future || "More features and optimization planned."}</p>
//         </div>
//       </div>
//     </div>
//   );
// }