"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const CompanyLogo = ({ company }) => {
  const logoStyles = "text-black font-medium tracking-wider";

  if (company === "HENSEL PHELPS") {
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        <span className={logoStyles}>HENSEL PHELPS</span>
      </div>
    );
  }

  if (company === "TURNER CONSTRUCTION") {
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
          <div className="w-4 h-3 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2 h-1 bg-black rounded-full"></div>
          </div>
        </div>
        <span className={logoStyles}>TURNER CONSTRUCTION</span>
      </div>
    );
  }

  if (company === "SKANSKA") {
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">S</span>
        </div>
        <span className={logoStyles}>SKANSKA</span>
      </div>
    );
  }

  // Default logo for other companies
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xs">{company.charAt(0)}</span>
      </div>
      <span className={logoStyles}>{company}</span>
    </div>
  );
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4 justify-center">
      {Array.from({ length: rating }, (_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="relative w-[400px] max-w-full shrink-0 px-8 py-12 text-center"
            key={`${item.company}-${idx}`}>
            {/* Your existing testimonial card design */}
            <div className="mb-8">
              <CompanyLogo company={item.company} />
            </div>

            <blockquote className="text-black text-lg leading-relaxed mb-8 min-h-[120px] text-center">
              "{item.quote}"
            </blockquote>

            <StarRating rating={item.rating} />

            <div className="text-center">
              <div className="text-black font-medium mb-1">{item.author}</div>
              <div className="text-black text-sm">{item.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
