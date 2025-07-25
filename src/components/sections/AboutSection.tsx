// src/components/sections/AboutSection.tsx
import React from 'react';
import { Section, AboutValue } from '@/types/course';
import AccordionItem from "../ui/AccordianItem";

interface AboutProps {
  data: Section;
  id: string;
}

const AboutSection: React.FC<AboutProps> = ({ data, id }) => {
  const aboutItems = data.values as AboutValue[];

  if (!aboutItems || aboutItems.length === 0) {
    return null;
  }

  return (
    <section id={id} className="pt-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">{data.name}</h2>

        {/* The main card container for the accordion */}
        <div className="bg-white p-2 md:p-2 md:px-5 rounded-lg border">
          {aboutItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              title={item.title}
              content={item.description}
              // Open the first item by default, like in the screenshot
              isOpenDefault={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;