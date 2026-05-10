"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedText({ text, className }) {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll("span");

    gsap.fromTo(
      chars,
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div
      ref={textRef}
      className={className}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}