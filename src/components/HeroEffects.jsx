"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HeroEffects() {
  useEffect(() => {
    gsap.from(".hero-title", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    });

    gsap.from(".hero-text", {
      y: 40,
      opacity: 0,
      delay: 0.8,
      duration: 1
    });

    gsap.from(".hero-btn", {
      scale: 0.8,
      opacity: 0,
      delay: 1.2,
      stagger: 0.2,
      duration: 0.8
    });

    gsap.to(".profile-img", {
      x: -18,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "power1.inOut"
    });

    gsap.to(".blob1", {
      x: 80,
      y: -40,
      duration: 7,
      repeat: -1,
      yoyo: true
    });

    gsap.to(".blob2", {
      x: -60,
      y: 50,
      duration: 8,
      repeat: -1,
      yoyo: true
    });

  }, []);

  return null;
}

// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";

// export default function HeroEffects() {
//   useEffect(() => {
//     gsap.from(".hero-title", {
//       x: -100,
//       opacity: 0,
//       duration: 1.2,
//       stagger: 0.2
//     });

//     gsap.from(".hero-text", {
//       x: -80,
//       opacity: 0,
//       duration: 1,
//       delay: 0.6
//     });

//     gsap.from(".hero-btn", {
//       y: 40,
//       opacity: 0,
//       duration: 1,
//       delay: 1
//     });

//     gsap.from(".picture.png", {
//       x: 120,
//       opacity: 0,
//       duration: 1.4
//     });

//     gsap.to(".picture.png", {
//       y: -18,
//       repeat: -1,
//       yoyo: true,
//       duration: 2.5
//     });

//   }, []);

//   return null;
// }