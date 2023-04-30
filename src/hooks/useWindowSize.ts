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
  const [device, setDevice] = useState("");
  const [numberOfGoodsInRequest, setNumberOfGoodsInRequest] = useState(0);

  const { width } = useWindowSize();
  const theme = useTheme();

  useEffect(() => {
    if (width > theme.windowSize.desktop && device !== "desktop") {
      setDevice("desktop");
      setNumberOfGoodsInRequest(6);
    }
    if (
      width < theme.windowSize.desktop &&
      width > theme.windowSize.tablet &&
      device !== "tablet"
    ) {
      setDevice("tablet");
      setNumberOfGoodsInRequest(4);
    }
    if (width < theme.windowSize.tablet && device !== "mobile") {
      setDevice("mobile");
      setNumberOfGoodsInRequest(2);
    }
  }, [width]);

  return { device, numberOfGoodsInRequest };
}
