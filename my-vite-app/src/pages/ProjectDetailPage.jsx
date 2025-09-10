import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../Components/ProjectDetail';
import projectsData from '../data/projectsData';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailPage = () => {
  const { id } = useParams();
  const lenisRef = useRef(null);

  // More robust ID matching
  const project = projectsData.find(p => {
    return String(p.id) === String(id) || p.id === id || p.id === parseInt(id);
  });

  useEffect(() => {
    // Kill all existing ScrollTriggers immediately
    ScrollTrigger.killAll();

    // Always scroll to top on mount
    window.scrollTo(0, 0);

    // Optional: prevent browser from restoring scroll position
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, [id]);

  return <ProjectDetail project={project} lenisInstance={lenisRef.current} />;
};

export default ProjectDetailPage;