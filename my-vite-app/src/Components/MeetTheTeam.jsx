import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const images = [
  "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg", // top-left
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920&auto=format&fit=crop", // CENTER
  "https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg", // top-right
  "https://images.pexels.com/photos/1579356/pexels-photo-1579356.jpeg", // bottom-left
  "https://images.pexels.com/photos/7640992/pexels-photo-7640992.jpeg", // bottom-right
  "https://images.pexels.com/photos/9242803/pexels-photo-9242803.jpeg", // far bottom
];

export default function MeetTheTeam() {
  const sectionRef = useRef(null);
  const collageRef = useRef(null);
  const centerWrapperRef = useRef(null);
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const bottomCenterRef = useRef(null);
  const titleSectionRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let splitText, splitLines;

    const ctx = gsap.context(() => {
      const sectionEl = sectionRef.current;
      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        // Desktop: Full zoom animation
        const zoomTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Wrapper expands
        zoomTimeline.to(
          centerWrapperRef.current,
          {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            ease: "power2.inOut",
            duration: 0.7,
          },
          0
        );

        // Inner <img> zooms OUT
        zoomTimeline.fromTo(
          centerWrapperRef.current.querySelector("img"),
          { scale: 1.5 }, // start cropped/zoomed in
          { scale: 1, ease: "power2.inOut", duration: 0.7 },
          0
        );

        // Other images move out
        zoomTimeline
          .to(
            topLeftRef.current,
            { scale: 2, x: -400, y: -300, opacity: 0, ease: "power2.inOut" },
            0
          )
          .to(
            topRightRef.current,
            { scale: 2, x: 400, y: -300, opacity: 0, ease: "power2.inOut" },
            0
          )
          .to(
            bottomLeftRef.current,
            { scale: 2, x: -450, y: 350, opacity: 0, ease: "power2.inOut" },
            0
          )
          .to(
            bottomRightRef.current,
            { scale: 2, x: 450, y: 350, opacity: 0, ease: "power2.inOut" },
            0
          )
          .to(
            bottomCenterRef.current,
            { scale: 2, y: 500, opacity: 0, ease: "power2.inOut" },
            0
          );
      } else {
        // Mobile: Set final state immediately
        gsap.set(centerWrapperRef.current, {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });

        gsap.set(centerWrapperRef.current.querySelector("img"), {
          scale: 1,
        });

        gsap.set(
          [
            topLeftRef.current,
            topRightRef.current,
            bottomLeftRef.current,
            bottomRightRef.current,
            bottomCenterRef.current,
          ],
          {
            opacity: 0,
          }
        );

        // Mobile: Show title immediately
        gsap.set(textRef.current, { opacity: 1 });
      }

      // SplitText animation (desktop only)
      if (!isMobile) {
        document.fonts.ready.then(() => {
          gsap.set(textRef.current, { opacity: 1 });

          splitText = new SplitText(textRef.current, {
            type: "lines",
            linesClass: "line-mask",
          });

          gsap.set(splitText.lines, { overflow: "hidden", display: "block" });

          splitLines = new SplitText(splitText.lines, {
            type: "lines",
            linesClass: "line-inner",
          });

          gsap.set(splitLines.lines, { yPercent: 100, opacity: 0 });

          gsap.timeline({
            scrollTrigger: {
              trigger: titleSectionRef.current,
              start: "top 80%",
              onEnter: () => {
                gsap.to(splitLines.lines, {
                  yPercent: 0,
                  opacity: 1,
                  duration: 1.5,
                  stagger: 0.3,
                  ease: "expo.out",
                });
              },
            },
          });
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      if (splitText) splitText.revert();
      if (splitLines) splitLines.revert();
    };
  }, []);

  return (
    <>
      {/* Zoom Section */}
      <section ref={sectionRef} className="relative w-full min-h-screen bg-white">
        <div ref={collageRef} className="absolute inset-0">
          {/* top-left */}
          <img
            ref={topLeftRef}
            src={images[0]}
            className="meet-img absolute top-10 left-105 w-40 h-56 object-cover shadow-lg"
          />

          {/* center wrapper */}
          <div
            ref={centerWrapperRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-52 md:w-80 md:h-52 overflow-hidden shadow-xl z-10 rounded-lg"
          >
            <img
              src={images[1]}
              className="w-full h-full object-cover"
              alt="Construction Team"
            />
          </div>

          {/* top-right */}
          <img
            ref={topRightRef}
            src={images[2]}
            className="meet-img absolute top-20 right-105 w-40 h-56 object-cover shadow-lg"
          />

          {/* bottom-left */}
          <img
            ref={bottomLeftRef}
            src={images[3]}
            className="meet-img absolute bottom-32 left-101 w-44 h-60 object-cover shadow-lg"
          />

          {/* bottom-right */}
          <img
            ref={bottomRightRef}
            src={images[4]}
            className="meet-img absolute bottom-28 right-100.5 w-44 h-60 object-cover shadow-lg"
          />

          {/* far bottom */}
          <img
            ref={bottomCenterRef}
            src={images[5]}
            className="meet-img absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Mobile Title Overlay */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <h1 className="text-3xl font-extrabold text-white text-center px-4 drop-shadow-2xl">
            Meet Our Expert Team
            <br />
            Building Excellence Together
          </h1>
        </div>
      </section>

      {/* Title Section (Desktop) */}
      <section
        ref={titleSectionRef}
        className="hidden md:block bg-white py-0"
        style={{
          fontFamily: "'Poppins', sans-serif",
          marginTop: "-30vh",
          marginRight: "30vw",
        }}
      >
        <div className="text-center">
          <h1
            ref={textRef}
            className="text-4xl md:text-6xl font-extrabold leading-normal text-white "
            style={{ opacity: 0 }}
          >
            Meet Our Expert Team
            <br />
            Building Excellence Together
          </h1>
        </div>
      </section>

      {/* Team Content */}
      <section ref={contentRef} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            The DSOUZA Family
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
            Meet the experienced professionals who bring your construction and
            electrical projects to life with over 40 years of combined expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Dsouza", role: "Project Director", img: images[0] },
              { name: "Maria Santos", role: "Lead Electrician", img: images[3] },
              { name: "Robert Silva", role: "Site Manager", img: images[4] },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-6 border-4 border-blue-100"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-6">{member.role}</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
