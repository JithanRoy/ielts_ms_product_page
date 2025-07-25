// src/components/sections/FeaturesSection.tsx
import React from 'react';
import Image from 'next/image';
import { Section, Feature } from '@/types/course'; // Make sure Feature type is in your types file

interface FeaturesProps {
  data: Section;
  id: string; // The component accepts an ID for navigation
}

const FeaturesSection: React.FC<FeaturesProps> = ({ data, id }) => {
  // Cast the values to the Feature[] type for type safety
  const features = data.values as Feature[];

  if (!features || features.length === 0) {
    return null;
  }

  return (
    // The received ID is applied here for the IntersectionObserver
    <section id={id} className="pt-8">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">{data.name}</h2>

        {/* The main dark container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 rounded-lg bg-brand-dark p-8 text-white">

          {/* Map over the features from the API */}
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4 m-1">
              {/* Icon on the left */}
              <div className="flex-shrink-0 mt-1">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={36}
                  height={36}
                />
              </div>

              {/* Text content on the right */}
              <div className="flex flex-col">
                <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                  {feature.title}
                </h2>
                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                  {feature.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;