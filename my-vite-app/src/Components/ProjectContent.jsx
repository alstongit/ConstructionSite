import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

const ProjectContent = ({ project }) => {
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);
  const tableRef = useRef(null);
  const briefRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    // Wait for fonts to load
    document.fonts.ready.then(() => {
      // Set initial visibility
      gsap.set([descriptionRef.current, briefRef.current], { opacity: 1 });
      // Set table initial state for simple animation
      gsap.set(tableRef.current, { opacity: 0, y: 30 });

      let descriptionSplit, briefSplit;

      // Create ScrollTrigger for the section with unique ID
      const contentTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        id: "project-content", // Add unique ID
        toggleActions: "play none none none", // Changed to prevent reverse animation
        onEnter: () => {
          // Split and animate description
          descriptionSplit = new SplitText(descriptionRef.current, {
            type: "words,lines",
            linesClass: "line",
          });

          gsap.from(descriptionSplit.lines, {
            duration: 0.8,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "expo.out",
          });

          // Simple table animation - no SplitText
          gsap.to(tableRef.current, {
            duration: 0.8,
            y: 0,
            opacity: 1,
            ease: "power2.out",
            delay: 0.3,
          });

          // Split and animate brief with delay
          briefSplit = new SplitText(briefRef.current, {
            type: "words,lines",
            linesClass: "line",
          });

          gsap.from(briefSplit.lines, {
            duration: 0.6,
            yPercent: 100,
            opacity: 0,
            stagger: 0.05,
            ease: "expo.out",
            delay: 0.6,
          });
        }
      });

      return () => {
        contentTrigger.kill();
        if (descriptionSplit) descriptionSplit.revert();
        if (briefSplit) briefSplit.revert();
      };
    });

    return () => {
      // Clean up only this component's ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === sectionRef.current || trigger.vars.id === "project-content") {
          trigger.kill();
        }
      });
    };
  }, [project]);

  if (!project) return null;

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Project Description - Big font, left aligned */}
        <div 
          ref={descriptionRef}
          className="mb-16 split"
          style={{ opacity: 0 }}
        >
          <div className="text-gray-800 leading-relaxed text-3xl md:text-4xl font-light text-left max-w-4xl whitespace-pre-line">
            {project.description}
          </div>
        </div>

        {/* Project Info Table - Simple animation, no SplitText */}
        <div 
          ref={tableRef}
          className="mb-16"
        >
          <table className="w-full max-w-2xl">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-8 text-lg font-medium text-black align-top">
                  Client
                </td>
                <td className="py-4 text-lg text-gray-600">
                  Hensel Phelps
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-8 text-lg font-medium text-gray-800 align-top">
                  Disciplines
                </td>
                <td className="py-4 text-lg text-gray-600">
                  <div>Architecture</div>
                  <div>Interior Design</div>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-8 text-lg font-medium text-gray-800 align-top">
                  Sector
                </td>
                <td className="py-4 text-lg text-gray-600">
                  Aviation & Transportation Facilities
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Project Brief - Smaller font, right aligned */}
        <div 
          ref={briefRef}
          className="split"
          style={{ opacity: 0 }}
        >
          <div className="text-gray-600 leading-relaxed text-base md:text-lg text-right max-w-3xl ml-auto whitespace-pre-line">
            {project.brief}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectContent;