import { useEffect } from "react";

export function usePanelNavigation({
  panelIndex,
  setPanelIndex,
  handleDownArrowPanel,
  handleUpArrowPanel,
}: {
  panelIndex: number;
  setPanelIndex: (idx: number) => void;
  handleDownArrowPanel: () => void;
  handleUpArrowPanel: () => void;
}) {
  // Keyboard shortcuts: down arrow for next panel, up arrow for previous panel
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') handleDownArrowPanel();
      if (e.key === 'ArrowUp') handleUpArrowPanel();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleDownArrowPanel, handleUpArrowPanel]);

  // Mouse wheel scroll triggers for panel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (panelIndex === 0 && e.deltaY > 0) {
        setPanelIndex(1);
      } else if (panelIndex === 1 && e.deltaY < 0) {
        setPanelIndex(0);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [panelIndex, setPanelIndex]);
} 