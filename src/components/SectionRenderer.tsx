// src/components/SectionRenderer.tsx
import React from 'react';
import { Section } from '@/types/course';

// 1. Import all the components that can be rendered as a section
import InstructorsSection from './sections/InstructorsSection';
// Note: You will create these section components in the next steps

// Define the props for this component
interface SectionRendererProps {
  section: Section;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  // 2. Use a switch statement to decide which component to render
  switch (section.type) {
    case 'instructors':
      return <InstructorsSection data={section} />;

    // case 'features':
    //   return <FeaturesSection data={section} />;
    //
    // case 'pointers':
    //   return <PointersSection data={section} />;
    //
    // case 'about':
    //   return <AboutSection data={section} />;

    default:
      return null;
  }
};

export default SectionRenderer;