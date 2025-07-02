"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Homepage() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [
    "/pexels-107932638-18437102.jpg",
    "/pexels-tdcat-70912.jpg",
    "/francesco-vantini-jzttMs1pZ70-unsplash.jpg",
    "/ryan-searle-k1AFA4N8O0g-unsplash.jpg",
    "/richard-r-vaXGYYI1XC8-unsplash.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 2000); // fade out duration (2s)
    }, 7000); // show each image for 7s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Slideshow background with fade animation */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden -z-10">
        <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={images[current]}
            alt={`Slideshow image ${current + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
      {/* Log In button overlay */}
      <div className="fixed top-6 right-8 z-10">
        <a
          href="#"
          className="rounded-full border border-solid border-black text-black transition-colors flex items-center justify-center hover:bg-gray-100 font-medium text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5 bg-white/80 backdrop-blur"
        >
          Log In
        </a>
      </div>
    </>
  );
} 