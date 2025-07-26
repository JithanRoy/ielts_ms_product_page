import React from 'react';
import InstructorsSection from './sections/InstructorsSection';
import {Section} from "../types/course";
import FeaturesSection from "./sections/FeaturesSection";
import PointersSection from "./sections/PointersSection";
import FeatureExplanationsSection from "./sections/FeaturesExplanationSection";
import AboutSection from "./sections/AboutSection";
interface SectionRendererProps {
  section: Section;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  const props = { data: section, id: section.type };

  switch (section.type) {
    case 'instructors':
      return <InstructorsSection {...props} />;
    case 'features':
      return <FeaturesSection {...props} />;
    case 'pointers':
      return <PointersSection {...props} />;
    case 'feature_explanations':
      return <FeatureExplanationsSection {...props} />;
    case 'about':
      return <AboutSection {...props} />;
    default:
      return null;
  }
};

export default SectionRenderer;