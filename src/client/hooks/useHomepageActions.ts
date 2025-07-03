import { useCallback, useState } from "react";

export function useHomepageActions() {
  const [isLoginPanelVisible, setIsLoginPanelVisible] = useState(false);
  const [panelIndex, setPanelIndex] = useState(0); // 0 = homepage, 1 = next panel

  const handleGetStarted = useCallback(() => {
    setIsLoginPanelVisible(true);
  }, []);

  const closeLoginPanel = useCallback(() => {
    setIsLoginPanelVisible(false);
  }, []);

  // Panel navigation handlers
  const handleDownArrowPanel = useCallback(() => {
    setPanelIndex((idx) => Math.min(idx + 1, 1));
  }, []);

  const handleUpArrowPanel = useCallback(() => {
    setPanelIndex((idx) => Math.max(idx - 1, 0));
  }, []);

  return {
    handleGetStarted,
    isLoginPanelVisible,
    closeLoginPanel,
    panelIndex,
    setPanelIndex,
    handleDownArrowPanel,
    handleUpArrowPanel,
  };
} 