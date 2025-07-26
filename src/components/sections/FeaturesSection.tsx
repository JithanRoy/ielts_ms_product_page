
import React from 'react';
import Image from 'next/image';
import { Section, Feature } from '@/types/course';

interface FeaturesProps {
  data: Section;
  id: string;
}

const FeaturesSection: React.FC<FeaturesProps> = ({ data, id }) => {
  const features = data.values as Feature[];

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section id={id} className="sm:pt-8 pt-0">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">{data.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 rounded-lg bg-brand-dark p-8 text-white">

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