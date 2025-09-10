import React from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData.js';
import ScrollStack, { ScrollStackItem } from './ScrollStackItem.jsx';

const Projects = () => {
  const navigate = useNavigate();

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="w-full h-screen bg-white">
      {/* Title and Description */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center z-50 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Past Projects</h2>
        <p className="text-sm md:text-lg text-gray-600">Showcasing our expertise in construction and architectural excellence</p>
      </div>

      {/* ScrollStack with Project Cards */}
      <ScrollStack
        className="w-full h-full"
        itemDistance={120}
        itemScale={0}
        itemStackDistance={0}
        stackPosition="25%"
        scaleEndPosition="15%"
        baseScale={0.9}
        rotationAmount={0}
        blurAmount={1}
        onStackComplete={() => console.log('All cards stacked!')}
      >
        {projectsData.map((project) => (
          <ScrollStackItem 
            key={project.id}
            itemClassName="bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-[500px] md:h-[500px] mx-4 md:mx-0" // Added mx-4 for mobile margin
          >
            <div className="flex flex-col h-full gap-4 md:gap-8 md:flex-row">
              {/* Project Image */}
              <div className="flex-1 relative overflow-hidden rounded-2xl h-48 md:h-full">
                <img
                  src={project.backgroundImg}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="flex-1 flex flex-col justify-between py-2 md:py-4 px-4 md:px-0">
                <div>
                  <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-800 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 mb-3 md:mb-6 leading-relaxed">
                    {project.subtitle}
                  </p>
                  <p className="text-xs md:text-base text-gray-500 line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 md:mt-8">
                  {/* Content Title - Hidden on mobile */}
                  <div className="hidden md:flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                      {project.contentTitle}
                    </span>
                  </div>
                  
                  {/* Mobile: Button takes full width */}
                  <button 
                    onClick={() => handleViewDetails(project.id)}
                    className="group relative w-full md:w-auto px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold uppercase tracking-wide text-xs md:text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">View Details</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};

export default Projects;