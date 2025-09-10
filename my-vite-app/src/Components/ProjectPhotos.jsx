import React from 'react';

const ProjectPhotos = ({ project }) => {
  if (!project || !Array.isArray(project.photos) || project.photos.length === 0) {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Project Gallery
          </h2>
          <p className="text-gray-600 text-lg">No photos available for this project.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gray-50 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
          Project Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {project.photos.map((photo, index) => (
            <div 
              key={index}
              className="img-container w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 flex justify-center items-center"
            >
              <img
                src={photo}
                alt={`${project.title} - Photo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPhotos;