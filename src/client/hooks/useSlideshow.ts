import { useEffect, useState } from "react";

export function useSlideshow(images: string[], fadeDuration: number, displayTime: number) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, fadeDuration);
    }, displayTime);
    return () => clearInterval(interval);
  }, [images.length, fadeDuration, displayTime]);

  return { current, fade };
} 