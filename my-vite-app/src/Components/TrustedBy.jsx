import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

const LOGOS_ROW_A = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/25/Adidas_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
];

const LOGOS_ROW_B = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/25/Adidas_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
];

export default function TrustedBy() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white py-16"
    style={{
      width: "100vw",
      marginLeft: "-50vw",
      marginRight: "-50vw",
      marginTop: "-55vh", // Move section up by 10% of viewport height
    }}>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Trusted By Leading Companies
      </h2>

      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
          {LOGOS_ROW_A.map((src, idx) => (
            <img
              key={`rowA-${idx}`}
              src={src}
              alt="Company Logo"
              width={160}
              height={60}
              loading="lazy"
              decoding="async"
              className="mx-8 inline-block h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
          {LOGOS_ROW_B.map((src, idx) => (
            <img
              key={`rowB-${idx}`}
              src={src}
              alt="Company Logo"
              width={160}
              height={60}
              loading="lazy"
              decoding="async"
              className="mx-8 inline-block h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white" />
    </div>
  );
}
