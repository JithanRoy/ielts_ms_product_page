import React, { useState, useEffect } from 'react';
import {ChevronIcon} from "./icons/Accordian";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpenDefault?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;
  return (
    <div className="border-b last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <h3
          className="font-semibold text-text-main"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <ChevronIcon isOpen={isOpen} />
      </button>
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
