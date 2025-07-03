import { useEffect } from "react";

export function useKeyboardShortcuts(
  onRightArrow: () => void,
  onDownArrow: () => void
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        onRightArrow();
      } else if (e.key === 'ArrowDown') {
        onDownArrow();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onRightArrow, onDownArrow]);
} 