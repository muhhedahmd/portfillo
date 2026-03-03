"use client";

import ReactLenis, { LenisRef } from "lenis/react";

function SmoothScrolling({ children, ref }: {
  children: React.ReactNode,
  ref: React.ForwardedRef<LenisRef>
}) {
  return (
    <ReactLenis ref={ref} root
      options={{
        lerp: 0.1,           // Standard value for smooth scrolling
        duration: 1.2,       // Standard duration
        smoothWheel: true,
        touchMultiplier: 1.5,
        wheelMultiplier: 1,
        orientation: "vertical"
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;