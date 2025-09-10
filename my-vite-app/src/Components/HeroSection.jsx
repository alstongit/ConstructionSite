import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HeroSection() {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let splitText, splitLines, tl;

    // ✅ SplitText animation - lines slide up from bottom
    document.fonts.ready.then(() => {
      // Make text visible after fonts are loaded
      gsap.set(textRef.current, { opacity: 1 });

      // Split text into lines
      splitText = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "line-mask",
      });

      // Add overflow hidden to each line for masking effect
      gsap.set(splitText.lines, {
        overflow: "hidden",
        display: "block",
      });

      // Split again to get spans inside masked lines
      splitLines = new SplitText(splitText.lines, {
        type: "lines",
        linesClass: "line-inner",
      });

      // Create timeline
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          onToggle: (self) => {
            if (self.isActive) {
              // Reset and play when entering
              tl.restart();
            }
          },
          onReverseComplete: () => {
            // Reset to initial state when reversed
            gsap.set(splitLines.lines, {
              yPercent: 100,
              opacity: 0,
            });
          },
        },
      });

      // Set initial state
      tl.set(splitLines.lines, {
        yPercent: 100,
        opacity: 0,
      });

      // Animate lines up with stagger
      tl.to(splitLines.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: "expo.out",
      });
    });

    // ✅ Dark overlay opacity animation on scroll
    const tween = gsap.to(overlayRef.current, {
      opacity: 0.7,
      ease: "none",
      scrollTrigger: {
        trigger: ".trustedby-panel",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tween.kill();
      if (tl) tl.kill();
      if (splitText) splitText.revert();
      if (splitLines) splitLines.revert();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen overflow-hidden hero-panel"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        position: "relative",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Black overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none"
      />

      {/* Content positioned at bottom left */}
      <div className="absolute bottom-25 left-9 z-10 text-white">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl font-extrabold leading-normal"
          style={{ opacity: 0 }} // Hidden initially until fonts load
        >
          Building the Future
          <br />
          Restoring the Past
        </h1>
      </div>
    </div>
  );
}
