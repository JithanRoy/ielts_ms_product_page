// src/components/CourseContent.tsx
'use client';

import { useState, useEffect } from 'react';
import PageNavigation from './ui/PageNavigation';
import SectionRenderer from './SectionRenderer';
import { Section } from '@/types/course';

interface CourseContentProps {
  sections: Section[];
}

export default function CourseContent({ sections }: CourseContentProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) { if (entry.isIntersecting) { setActiveSection(entry.target.id); break; } }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((section) => {
      const el = document.getElementById(section.type);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const handleNavLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className='pt-32'>
      <PageNavigation
        sections={sections}
        activeSection={activeSection}
        onNavLinkClick={handleNavLinkClick}
      />
      <div className="container mx-auto px-8 space-y-8 md:mt-4 font-sans">
        {sections.map((section) => (
          <SectionRenderer key={section.type} section={section} />
        ))}
      </div>
    </div>
  );
}