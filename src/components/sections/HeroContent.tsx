
import React from 'react';
import StarRating from '../ui/StarRating';

interface HeroContentProps {
  title: string;
  description: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">{title}</h1>
      <div className="mb-4">
        <StarRating />
      </div>
      <div
        className="text-gray-300 text-base max-w-2xl"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default HeroContent;