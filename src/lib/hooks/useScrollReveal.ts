
import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  opacity?: number;
  origin?: "top" | "right" | "bottom" | "left";
  reset?: boolean;
  scale?: number;
  viewFactor?: number;
  mobile?: boolean;
}

export const useScrollReveal = (
  selector: string,
  options: ScrollRevealOptions = {}
) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const defaultOptions = {
      delay: 200,
      distance: "30px",
      duration: 800,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      opacity: 0,
      origin: "bottom",
      reset: false,
      scale: 1,
      viewFactor: 0.2,
      mobile: true,
    };

    const revealConfig = { ...defaultOptions, ...options };

    const revealElements = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, i) => {
        const isVisible = el.getBoundingClientRect().top < window.innerHeight;
        
        if (isVisible) {
          setTimeout(() => {
            el.classList.add("animate-fade-in");
            (el as HTMLElement).style.visibility = "visible";
          }, revealConfig.delay! * i);
        }
      });
    };

    const hideElements = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        el.classList.remove("animate-fade-in");
        (el as HTMLElement).style.visibility = "hidden";
      });
    };

    // Initial check
    hideElements();
    revealElements();

    // Add scroll event
    window.addEventListener("scroll", revealElements);
    initialized.current = true;

    // Cleanup
    return () => {
      window.removeEventListener("scroll", revealElements);
    };
  }, [selector, options]);
};
