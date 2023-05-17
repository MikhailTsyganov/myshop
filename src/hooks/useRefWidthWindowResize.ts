import { useState, useEffect, useRef } from "react";

export const useRefWidthWindowResize = () => {
  const refElement = useRef<HTMLDivElement | null>(null);

  const [elementWidth, setElementWidth] = useState<number>(0);

  useEffect(() => {
    calculateWidth();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calculateWidth);

    return () => {
      window.removeEventListener("resize", calculateWidth); // TODO: проверить отрабатывает ли
    };
  }, []);

  function calculateWidth() {
    if (refElement.current !== null) {
      const width = refElement.current.offsetWidth;
      setElementWidth(width);
    }
  }

  return { elementWidth, refElement };
};
