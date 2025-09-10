import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import CountUp from './CountUp'; // Add this import

// Expanded testimonials array (10 testimonials)
const testimonials = [
  {
    company: "HENSEL PHELPS",
    quote: "Creative, innovative and strategic. We have great achievements made together and looking to more",
    author: "Michael Rodriguez",
    title: "Project Director, Hensel Phelps",
    rating: 5
  },
  {
    company: "TURNER CONSTRUCTION",
    quote: "Incredible group of people and talented professionals. Focused on the development of flexible ideas",
    author: "Sarah Chen",
    title: "Senior Project Manager, Turner Construction",
    rating: 5
  },
  {
    company: "SKANSKA",
    quote: "A truly innovative approach to construction that sets this company apart from its peers within the broader industry",
    author: "David Thompson",
    title: "Head of Operations, Skanska",
    rating: 5
  },
  {
    company: "BECHTEL",
    quote: "Outstanding project delivery and exceptional quality standards. Their team consistently exceeds expectations",
    author: "Jennifer Wilson",
    title: "Construction Manager, Bechtel",
    rating: 5
  },
  {
    company: "KIEWIT",
    quote: "Professional excellence and innovative solutions that transformed our complex infrastructure project",
    author: "Robert Johnson",
    title: "Project Director, Kiewit",
    rating: 5
  },
  {
    company: "FLUOR",
    quote: "Reliable partnership with outstanding technical expertise and commitment to safety standards",
    author: "Lisa Anderson",
    title: "Engineering Manager, Fluor",
    rating: 5
  },
  {
    company: "CLARK CONSTRUCTION",
    quote: "Exceptional craftsmanship and attention to detail that brings architectural visions to life",
    author: "Mark Davis",
    title: "Senior Architect, Clark Construction",
    rating: 5
  },
  {
    company: "PCL CONSTRUCTION",
    quote: "Innovative building techniques and sustainable practices that set new industry standards",
    author: "Amanda Taylor",
    title: "Sustainability Director, PCL",
    rating: 5
  },
  {
    company: "MORTENSON",
    quote: "Collaborative approach and cutting-edge technology integration in every project phase",
    author: "James Mitchell",
    title: "Technology Lead, Mortenson",
    rating: 5
  },
  {
    company: "BALFOUR BEATTY",
    quote: "World-class construction management with unparalleled attention to timeline and budget control",
    author: "Rachel Brown",
    title: "Operations Director, Balfour Beatty",
    rating: 5
  }
];

const stats = [
  { number: 250, suffix: "+", label: "Projects Completed" },
  { number: 15, suffix: "+", label: "Years of Experience" },
  { number: 4.9, suffix: "", label: "Client Satisfaction" }
];

const Separator = ({ orientation, className, thickness = "h-px" }) => {
  if (orientation === "vertical") {
    return <div className={`w-px ${className}`} />;
  }
  return <div className={`${thickness} w-full ${className}`} />;
};

const StatsSection = () => {
  return (
    <div className="pt-16 pb-8 overflow-hidden">
      {/* Mobile: Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 md:hidden">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-light bg-gradient-to-t from-black from-20% via-gray-700 to-gray-400 bg-clip-text text-transparent mb-2">
              <CountUp
                from={0}
                to={stat.number}
                direction="up"
                duration={2}
                delay={0.5}
                className="text-4xl font-light bg-gradient-to-t from-black from-20% via-gray-700 to-gray-400 bg-clip-text text-transparent"
              />
              {stat.suffix}
            </div>
            <div className="text-black text-xs font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Horizontal layout with separators */}
      <div className="hidden md:flex justify-center items-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div className="text-center px-8 md:px-16">
              <div className="text-6xl font-light bg-gradient-to-t from-black from-20% via-gray-700 to-gray-400 bg-clip-text text-transparent mb-2">
                <CountUp
                  from={0}
                  to={stat.number}
                  direction="up"
                  duration={2}
                  delay={0.5}
                  className="text-6xl font-light bg-gradient-to-t from-black from-20% via-gray-700 to-gray-400 bg-clip-text text-transparent"
                />
                {stat.suffix}
              </div>
              <div className="text-black text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
            {index < stats.length - 1 && (
              <Separator 
                orientation="vertical" 
                className="h-24 bg-gradient-to-b from-transparent via-gray-400/60 to-transparent" 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Trusted by leading construction companies and developers across the industry
          </p>
        </div>

        {/* Infinite Moving Testimonials */}
        <div className="mb-12">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
            className="mb-8"
          />
        </div>
        
        {/* Separator */}
        <Separator 
          orientation="horizontal" 
          thickness="h-[1.5px]"
          className="my-12 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" 
        />

        {/* Stats Section */}
        <StatsSection />
      </div>
    </section>
  );
};

export default Testimonials;