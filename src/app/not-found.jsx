import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#f9f6e6] min-h-screen flex flex-col text-[#5E5547]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#8d77ab]/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-md w-full rounded-[32px] border border-white/60 bg-white/70 p-8 sm:p-10 text-center shadow-xl backdrop-blur-2xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8d77ab]/15 text-[#8d77ab] mb-6">
            <AlertCircle size={32} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#5E5547]">
            Project Not Found
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#7B7264] leading-relaxed">
            The project details page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#8d77ab] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#7b6697] hover:scale-[1.02]"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
