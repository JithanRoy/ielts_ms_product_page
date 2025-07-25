'use client';
import { Section } from '@/types/course';
import {useEffect, useRef, useState} from "react";

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32">
    <path fill="#000" fillOpacity="0.5" fillRule="evenodd" d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z" clipRule="evenodd"></path>
  </svg>
);

interface PageNavigationProps {
  sections: Section[];
  activeSection: string | null;
  onNavLinkClick: (sectionId: string) => void;
}

const PageNavigation: React.FC<PageNavigationProps> = ({ sections, activeSection, onNavLinkClick }) => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // This effect checks if the carousel can be scrolled left or right, and shows/hides the arrows.
  useEffect(() => {
    const checkScrollability = () => {
      const el = scrollContainerRef.current;
      if (el) {
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
      }
    };
    checkScrollability(); // Check on mount
    const el = scrollContainerRef.current;
    el?.addEventListener('scroll', checkScrollability);
    window.addEventListener('resize', checkScrollability);
    return () => {
      el?.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [sections]);

  const handleNavScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8; // Scroll 80% of the visible width
      el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:block sticky top-[65px] z-20">
      <div className="container mx-auto px-4 relative">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleNavScroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-opacity ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <ChevronIcon className="rotate-180" />
        </button>

        {/* Scrollable List */}
        <ul ref={scrollContainerRef} className="flex pt-1 -pb-[0.75] border-b overflow-x-auto scroll-smooth snap-x hide-scrollbar">
          {sections.map((section:any) => (
            <li key={section.type} className="snap-start">
              <button
                onClick={() => onNavLinkClick(section.type)}
                className={`whitespace-nowrap px-4 py-2 transition-colors text-base duration-200 ${
                  activeSection === section.type
                    ? 'text-brand-primary border-b-2 border-brand-primary'
                    : 'text-gray-600 hover:text-text-main'
                }`}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleNavScroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 transition-opacity ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <ChevronIcon />
        </button>
      </div>
    </div>
  );
};

export default PageNavigation;