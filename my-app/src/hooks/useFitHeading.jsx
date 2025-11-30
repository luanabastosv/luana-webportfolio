import { useEffect, useRef, useState } from "react";

export default function useFitHeading(min = 20, max = 300, letterSpacing = -25) {
  const ref = useRef();
  const [fontSize, setFontSize] = useState(min);

  useEffect(() => {
    const el = ref.current;
    if (!el || !el.parentElement) return;
    const parent = el.parentElement;

    const resize = () => {
      let size = min;
      el.style.fontSize = `${size}px`;
      el.style.letterSpacing = `${letterSpacing}px`;

     
      while (el.scrollWidth < parent.offsetWidth && size < max) {
        size += 1;
        el.style.fontSize = `${size}px`;
      }

      
      el.style.fontSize = `${size - 1}px`;
      setFontSize(size - 1);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(parent);

    window.addEventListener("resize", resize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [min, max, letterSpacing]);

  return { ref, fontSize };
}
