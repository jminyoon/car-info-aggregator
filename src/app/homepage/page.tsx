"use client";

import { useEffect, useState } from "react";

export default function Homepage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] transition-all duration-700 ${animate ? "animate-slide-up" : "opacity-0"} bg-blue-300`}>
      {/* Top row: Log In button aligned right */}
      <div className="row-start-1 col-span-full flex justify-end w-full">
        <a
          href="#"
          className="rounded-full border border-solid border-black text-black transition-colors flex items-center justify-center hover:bg-gray-100 font-medium text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5"
        >
          Log In
        </a>
      </div>
    </div>
  );
} 