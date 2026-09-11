"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBg() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const boxes = containerRef.current.querySelectorAll(".box");

      gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
        .to(boxes, {
          duration: 1.5,
          scale: 0.3,
          rotation: 180,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
          stagger: {
            each: 0.08,
            from: "center"
          }
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 grid grid-cols-8 gap-8 opacity-10 pointer-events-none"
    >
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="box w-8 h-8 rounded-lg bg-[#be1ee3]"
        />
      ))}
    </div>
  );
}