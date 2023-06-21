import { useState, useEffect } from "react";
import { useTheme } from "styled-components";

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export function useWindowSizeDevice() {
  const [optionSize, setOptionSize] = useState({
    device: "",
    numberOfGoodsInRequest: 0,
  });

  const { width } = useWindowSize();

  const theme = useTheme();

  useEffect(() => {
    if (width > theme.windowSize.desktop && optionSize.device !== "desktop") {
      setOptionSize({ device: "desktop", numberOfGoodsInRequest: 3 });
    }
    if (
      width < theme.windowSize.desktop &&
      width > theme.windowSize.tablet &&
      optionSize.device !== "tablet"
    ) {
      setOptionSize({ device: "tablet", numberOfGoodsInRequest: 4 });
    }
    if (width < theme.windowSize.tablet && optionSize.device !== "mobile") {
      setOptionSize({ device: "mobile", numberOfGoodsInRequest: 3 });
    }
  }, [width]);

  return {
    optionSize,
    setOptionSize,
  };
}
