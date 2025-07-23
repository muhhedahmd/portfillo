"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to calculate the vertical scroll speed of the window.
 * Returns the scroll speed in pixels per 100ms (positive for down, negative for up).
 */
const useScrollSpeed = (): number => {
  const [scrollSpeed, setScrollSpeed] = useState(0);

  const lastScrollTop = useRef(0);
  const lastTimestamp = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const currentScrollTop = window.scrollY;
      const deltaTime = now - lastTimestamp.current;

      if (deltaTime > 0) {
        const deltaY = currentScrollTop - lastScrollTop.current;
        const speed = (deltaY / deltaTime) * 10; // Speed in pixels per 100ms

        setScrollSpeed(speed);

        lastScrollTop.current = currentScrollTop;
        lastTimestamp.current = now;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollSpeed;
};

export default useScrollSpeed;
