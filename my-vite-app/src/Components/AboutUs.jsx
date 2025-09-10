// AboutUs.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let splitHeading, splitHeadingLines, splitText, splitTextLines, tlHeading, tlText;

    // ✅ SplitText animation for heading and text - lines slide up from bottom
    document.fonts.ready.then(() => {
      // Make text visible after fonts are loaded
      gsap.set([headingRef.current, textRef.current], { opacity: 1 });

      // Split heading into lines
      splitHeading = new SplitText(headingRef.current, {
        type: "lines",
        linesClass: "line-mask",
      });

      // Split text into lines
      splitText = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "line-mask",
      });

      // Add overflow hidden to each line for masking effect
      gsap.set([splitHeading.lines, splitText.lines], {
        overflow: "hidden",
        display: "block",
      });

      // Split again to get spans inside masked lines
      splitHeadingLines = new SplitText(splitHeading.lines, {
        type: "lines",
        linesClass: "line-inner",
      });

      splitTextLines = new SplitText(splitText.lines, {
        type: "lines",
        linesClass: "line-inner",
      });

      // Create timeline for heading
      tlHeading = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => {
            tlHeading.restart();
          },
          onEnterBack: () => {
            tlHeading.restart();
          },
          onLeave: () => {
            tlHeading.reverse();
          },
          onLeaveBack: () => {
            tlHeading.reverse();
          },
        },
      });

      // Create timeline for text (with delay)
      tlText = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => {
            tlText.restart();
          },
          onEnterBack: () => {
            tlText.restart();
          },
          onLeave: () => {
            tlText.reverse();
          },
          onLeaveBack: () => {
            tlText.reverse();
          },
        },
      });

      // Set initial state for heading
      tlHeading.set(splitHeadingLines.lines, {
        yPercent: 100,
        opacity: 0,
      });

      // Set initial state for text
      tlText.set(splitTextLines.lines, {
        yPercent: 100,
        opacity: 0,
      });

      // Animate heading lines up with stagger
      tlHeading.to(splitHeadingLines.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out",
      });

      // Animate text lines up with stagger (starts after heading)
      tlText.to(splitTextLines.lines, {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.5, // Start after heading animation begins
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (tlHeading) tlHeading.kill();
      if (tlText) tlText.kill();
      if (splitHeading) splitHeading.revert();
      if (splitHeadingLines) splitHeadingLines.revert();
      if (splitText) splitText.revert();
      if (splitTextLines) splitTextLines.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-70% flex flex-col md:flex-row items-center justify-center bg-white py-16 my-16"
    >
      {/* Image side */}
      <div className="w-full md:w-1/3 h-full md:ml-38">
        <img
          src="https://images.pexels.com/photos/8278933/pexels-photo-8278933.jpeg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text side */}
      <div className="w-full md:w-2/3 h-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-lg text-center md:text-left">
          <h3
            ref={headingRef}
            className="text-xl md:text-2xl font-semibold text-gray-700 mb-6"
            style={{ opacity: 0 }} // Hidden initially until fonts load
          >
            Building Excellence Since 1984
          </h3>
          <p
            ref={textRef}
            className="text-base md:text-lg leading-relaxed text-gray-800"
            style={{ opacity: 0 }} // Hidden initially until fonts load
          >
            Founded in 1984, <span className="font-semibold">DSOUZA CONSTRUCTION &amp;
            ELECTRICALS</span> has over 40 years of expertise delivering high-quality
            civil and electrical projects. Our family-run business prides itself on
            trust, craftsmanship, and long-term client relationships. More than just
            a construction company, we are a family united by shared values of
            excellence, integrity, and dedication. Our team of skilled professionals
            and dedicated workers represents the strength and unity that drives
            every project we undertake.
          </p>
        </div>
      </div>
    </section>
  );
}
