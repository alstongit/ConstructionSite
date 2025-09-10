import React from 'react';
import ProjectHero from './ProjectHero';
import ProjectContent from './ProjectContent';
import ProjectPhotos from './ProjectPhotos';

const ProjectDetail = ({ project, lenisInstance }) => {
  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl text-gray-600">Project not found</div>
      </div>
    );
  }

  return (
    <main className="relative w-full m-0 p-0 project-page">




      {/* PROJECT PHOTOS */}
      <section className="bg-gray-50 relative z-20">
        <ProjectPhotos project={project} lenisInstance={lenisInstance} />
      </section>
    </main>
  );
};

export default ProjectDetail;