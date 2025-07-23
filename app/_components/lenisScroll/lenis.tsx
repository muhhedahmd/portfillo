"use client";

import ReactLenis, { LenisRef } from "lenis/react";

function SmoothScrolling({ children  , ref } : {
    children: React.ReactNode , 
    ref: React.ForwardedRef<LenisRef>
}) {
  return (
    <ReactLenis ref={ref} root 
    options={{
      lerp: 0.9,           // Lower lerp value for smoother scrolling
        duration: .3,         // Slightly faster duration
        smoothWheel: true,
        // smoothTouch: true,    // Enable smooth scrolling on touch devices
        touchMultiplier: 1.5,  // Adjust touch sensitivity
        wheelMultiplier: .4,  // Adjust wheel sensitivity
        orientation: "vertical"
    }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;