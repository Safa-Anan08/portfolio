"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectImageCarousel({
    images = [],
    projectName,
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return null;
    }

    const totalImages = images.length;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="my-6 sm:my-8 w-full">
            {/* Main Image */}
            <div className="relative flex min-h-[180px] xs:min-h-[220px] sm:min-h-[380px] w-full items-center justify-center overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/60 bg-[#F8F4E8] p-3 sm:p-8 shadow-xl backdrop-blur-2xl">
                <Image
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    alt={`${projectName} screenshot ${currentIndex + 1}`}
                    width={1200}
                    height={750}
                    priority={currentIndex === 0}
                    className="max-h-[300px] sm:max-h-[500px] w-auto max-w-full rounded-xl sm:rounded-2xl object-contain shadow-md transition-all duration-500 ease-in-out"
                />
            </div>

            {/* Navigation */}
            <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 sm:gap-5">
                {/* Previous Button */}
                <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                    className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#B6AE9F]/40 bg-white/80 text-[#5E5547] shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:bg-white hover:text-[#8d77ab] hover:shadow-lg active:scale-95 shrink-0"
                >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Image Counter */}
                <div className="min-w-[60px] sm:min-w-[70px] rounded-full border border-[#B6AE9F]/30 bg-white/70 px-3 sm:px-4 py-1.5 sm:py-2 text-center text-xs sm:text-sm font-bold text-[#5E5547] shadow-sm backdrop-blur-xl shrink-0">
                    {currentIndex + 1} / {totalImages}
                </div>

                {/* Next Button */}
                <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next image"
                    className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#B6AE9F]/40 bg-white/80 text-[#5E5547] shadow-md backdrop-blur-xl transition-all duration-300 hover:translate-x-1 hover:bg-white hover:text-[#8d77ab] hover:shadow-lg active:scale-95 shrink-0"
                >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    );
}