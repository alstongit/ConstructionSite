import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProjectHero = ({ project }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], {
      y: 50,
      opacity: 0
    });

    gsap.set(imageRef.current, {
      scale: 1.1,
      opacity: 0
    });

    // Animate in sequence
    tl.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    .to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=1")
    .to(subtitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.7");

  }, []);

  if (!project) return null;

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden m-0 p-0">
      {/* Background Image */}
      <div className="absolute inset-0 m-0 p-0">
        <img
          ref={imageRef}
          src={project.backgroundImg}
          alt={project.title}
          className="w-full h-full object-cover m-0 p-0"
        />
        <div className="absolute inset-0  bg-opacity-40 m-0 p-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full m-0 p-0">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            {project.title}
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;