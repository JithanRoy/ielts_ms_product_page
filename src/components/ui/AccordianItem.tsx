// src/components/ui/AccordionItem.tsx
'use client';

import React, { useState } from 'react';

// A reusable icon for the chevron
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

interface AccordionItemProps {
  title: string;
  content: string;
  isOpenDefault?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        {/* The title is also HTML, so we must render it unsafely */}
        <h3
          className="font-semibold text-text-main"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <ChevronIcon isOpen={isOpen} />
      </button>
      {/* The content area will only be visible if 'isOpen' is true */}
      {isOpen && (
        <div
          className="pb-4 text-gray-500 text-lg prose prose-sm max-w-none prose-ul:list-disc prose-ul:pl-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default AccordionItem;