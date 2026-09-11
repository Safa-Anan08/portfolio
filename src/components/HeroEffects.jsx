"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HeroEffects() {
  useEffect(() => {
    const heroContainer = document.querySelector(".hero") || document.body;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".hero-text",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.8,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-btn",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          delay: 1.2,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );

      gsap.to(".profile-img", {
        x: -18,
        repeat: 1,
        yoyo: true,
        duration: 2.5,
        ease: "power1.inOut",
      });

      gsap.to(".blob1", {
        x: 80,
        y: -40,
        duration: 7,
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".blob2", {
        x: -60,
        y: 50,
        duration: 8,
        repeat: -1,
        yoyo: true,
      });
    }, heroContainer);

    return () => ctx.revert();
  }, []);

  return null;
}