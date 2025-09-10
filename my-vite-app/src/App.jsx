import React, { useEffect, useRef } from "react";
import HeroSection from "./Components/HeroSection";
import TrustedBy from "./Components/TrustedBy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import AboutUs from "./Components/AboutUs";
import Projects from "./Components/Projects";
import MeetTheTeam from "./Components/MeetTheTeam";
import Testimonials from "./Components/Testimonials";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Reset scroll position to top on page load/reload
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Also reset Lenis scroll position
    lenis.scrollTo(0, { immediate: true });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const heroPin = ScrollTrigger.create({
      trigger: ".hero-panel",
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    // Footer text opacity animation
    gsap.fromTo("#footer-content", 
      { 
        opacity: 0 
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#revealed-section-placeholder",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        }
      }
    );

    return () => {
      heroPin.kill();
      lenis.destroy();
      gsap.ticker.remove();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="relative w-full">
      {/* Main Content - Everything except footer */}
      <div id="main" className="relative z-20 bg-white">
        {/* HERO */}
        <section className="panel hero-panel relative z-0">
          <HeroSection />
        </section>

        {/* ABOUT US */}
        <section className="bg-white flex items-center justify-center relative z-20">
          <AboutUs />
        </section>

        {/* TRUSTED BY */}
        <section className="panel trustedby-panel relative z-10">
          <TrustedBy />
        </section>
        
        {/* MEET THE TEAM */}
        <section
          className="bg-white relative z-20"
          style={{ marginTop: "-30vh" }}
        >
          <MeetTheTeam />
        </section>
        
        {/* PROJECTS - This contains the ScrollStack with proper spacing */}
        <section className="bg-white relative z-20">
          <Projects />
        </section>

        {/* TESTIMONIALS - Positioned after Projects with additional spacing */}
        <section className="bg-white relative z-20" style={{ marginTop: "650vh" }}>
          <Testimonials />
        </section>

        {/* CONTACT FORM */}
        <section className="bg-white relative z-20">
          <ContactForm />
        </section>
      </div>

      {/* Footer Placeholder - Creates space for the footer to reveal into */}
      <div id="revealed-section-placeholder" className="h-screen"></div>

      {/* Footer - Revealed Section (Fixed and underneath) */}
      <div id="revealed-section" className="fixed bottom-0 w-full z-0">
        <Footer />
      </div>
    </main>
  );
}
