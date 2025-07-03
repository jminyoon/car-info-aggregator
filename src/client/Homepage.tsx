"use client";

import { useSlideshow } from "./hooks/useSlideshow";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import { useHomepageActions } from "./hooks/useHomepageActions";
import { usePanelNavigation } from "./hooks/usePanelNavigation";
import LoginPanel from "./components/LoginPanel";
import Image from "next/image";

const images = [
  "/pexels-107932638-18437102.jpg",
  "/pexels-tdcat-70912.jpg",
  "/francesco-vantini-jzttMs1pZ70-unsplash.jpg",
  "/ryan-searle-k1AFA4N8O0g-unsplash.jpg",
  "/richard-r-vaXGYYI1XC8-unsplash.jpg",
];

export default function Homepage() {
  const { current, fade } = useSlideshow(images, 2000, 7000);
  const {
    handleGetStarted,
    isLoginPanelVisible,
    closeLoginPanel,
    panelIndex,
    setPanelIndex,
    handleDownArrowPanel,
    handleUpArrowPanel,
  } = useHomepageActions();

  // Keyboard shortcut for right arrow (get started) and down arrow (next panel)
  useKeyboardShortcuts(handleGetStarted, handleDownArrowPanel);
  // Keyboard and mouse wheel navigation for panels
  usePanelNavigation({ panelIndex, setPanelIndex, handleDownArrowPanel, handleUpArrowPanel });

  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Panel slider */}
      <div
        className={`transition-transform duration-1000 ease-in-out h-screen w-full`}
        style={{
          transform: `translateY(-${panelIndex * 100}vh)`,
          willChange: 'transform',
        }}
      >
        {/* Panel 1: Homepage */}
        <section className="relative w-full h-screen">
          {/* Slideshow background with fade animation */}
          <div className="fixed inset-0 w-screen h-screen overflow-hidden -z-10" aria-hidden="true">
            <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${fade ? 'opacity-100' : 'opacity-0'}`}> 
              <Image
                src={images[current]}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          {/* Center bottom down arrow with black circle background */}
          <section aria-label="Scroll down indicator" className="fixed left-1/2 bottom-8 -translate-x-1/2 z-20">
            <button
              onClick={handleDownArrowPanel}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Scroll down"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0l-6-6m6 6l6-6" />
              </svg>
            </button>
          </section>
          {/* Right-aligned overlay text with soft white background - hidden when login panel is visible */}
          <header className={`fixed inset-0 flex items-center justify-end z-10 pointer-events-none transition-all duration-1000 ease-in-out ${
            isLoginPanelVisible ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
          }`}>
            <div className="h-full flex items-center bg-white/70 rounded-l-2xl px-8 sm:px-16 py-8 shadow-lg">
              <h1 className="text-3xl sm:text-5xl text-black text-right">
                Looking for a car?<br />Let us help!
              </h1>
            </div>
          </header>
          {/* Get Started button bottom right - synchronized with white panel */}
          <footer className={`fixed bottom-8 right-8 z-10 transition-all duration-1000 ease-in-out ${
            isLoginPanelVisible ? 'opacity-0 translate-x-[32rem]' : 'opacity-100 translate-x-0'
          }`}>
            <button
              onClick={handleGetStarted}
              className="flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-lg font-medium shadow-lg hover:bg-gray-800 transition-colors"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5m0 0l-4.5-4.5m4.5 4.5l-4.5 4.5" />
              </svg>
            </button>
          </footer>
          {/* Login Panel */}
          <LoginPanel 
            isVisible={isLoginPanelVisible} 
            onClose={closeLoginPanel} 
          />
        </section>
        {/* Panel 2: Next Page */}
        <section className="relative w-full h-screen flex items-center justify-center text-black overflow-hidden bg-blue-100">
          {/* Left image container: new image */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 w-[40vw] max-w-md h-[80vh] rounded-3xl overflow-hidden shadow-2xl z-0">
            <Image
              src="/20250424_153626.jpg"
              alt="Panel 2 Second Image"
              fill
              style={{ objectFit: "cover", border: "none", outline: "none" }}
              priority
            />
          </div>
          {/* Right image container: original image */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[40vw] max-w-md h-[80vh] rounded-3xl overflow-hidden shadow-2xl z-0">
            <Image
              src="/panel2.jpg"
              alt="Panel 2 Background"
              fill
              style={{ objectFit: "cover", border: "none", outline: "none" }}
              priority
            />
          </div>
          {/* Big About Me box in the center */}
          <div className="relative z-10 flex flex-col items-center justify-start w-[40vw] max-w-xl min-h-[40vh] bg-transparent border-2 border-black rounded-3xl shadow-2xl p-8">
            <h2 className="w-full text-4xl text-center mb-6 border-b-2 border-black pb-4 edu-qld-hand">About Me</h2>
            <p className="text-lg text-center">
              My name is Jeffry Yoon. I recently graduated from Brigham Young University with a degree in Computer Science with an emphasis in 
              Software Engineering and a minor in Mathematics.
            </p>
            <p className="text-lg text-center">
              I created this website with the intent of displaying my skills as a full stack developer. This website is built with Next.js, 
              Tailwind CSS, TypeScript, and Python, using Git as a version control system and with plans to use AWS for hosting. Ultimately, because of the 
              webscraping aspects of this project, I will not be deploying this porject for public use. But I hope the public repository on my 
              <a href="https://github.com/jminyoon" className="text-blue-500 hover:text-blue-700"> Github </a> 
              will be a good representation of my skills. 
            </p>
            <p className="text-lg text-center">
              I am currently looking for a job as a software engineer. If you are interested in my skills, please contact me at 
              <a href="mailto:jeffryminhyokyoon@gmail.com" className="text-blue-500 hover:text-blue-700">jeffryminhyokyoon@gmail.com</a> or at (702) 277-1877.
            </p>
          </div>
          {/* Up arrow button, only visible in this panel */}
          <button
            onClick={handleUpArrowPanel}
            className="absolute left-1/2 top-8 -translate-x-1/2 z-20 flex items-center justify-center w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Scroll up"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18V6m0 0l-6 6m6-6l6 6" />
            </svg>
          </button>
        </section>
      </div>
    </main>
  );
} 