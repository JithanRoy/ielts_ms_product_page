// src/components/sections/PointersSection.tsx
import React from 'react';
import { Section, Pointer } from '@/types/course';

// A small, reusable component for the checkmark icon, styled with our new custom color
const CheckIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="flex-shrink-0 mt-1 w-5 h-5 text-brand-accent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

interface PointersProps {
  data: Section;
  id: string; // The component accepts an ID for navigation
}

const PointersSection: React.FC<PointersProps> = ({ data, id }) => {
  // Cast the values to the Pointer[] type for type safety
  const pointers = data.values as Pointer[];

  if (!pointers || pointers.length === 0) {
    return null;
  }

  return (
    // The received ID is applied here for the IntersectionObserver
    <section id={id} className="pt-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-4 text-black">{data.name}</h2>

        {/* The main card container */}
        <div className="bg-white p-8 rounded-lg border">
          {/* The two-column grid for the list items */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">

            {/* Map over the pointers from the API */}
            {pointers.map((pointer) => (
              <li key={pointer.id} className="flex items-start gap-4">
                <CheckIcon />
                <span className="text-black text-lg">{pointer.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PointersSection;