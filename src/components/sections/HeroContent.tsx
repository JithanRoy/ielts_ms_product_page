
import React from 'react';
import Image from "next/image";

interface HeroContentProps {
  title: string;
  description: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">{title}</h1>
      <div className="my-4 flex items-center justify-items-center gap-2 text-white">
        <Image src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png" alt='star rating' width={130} height={100} />
        <span className="text-sm md:text-lg">
          (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
        </span>
      </div>
      <div
        className="text-gray-300 text-sm md:text-lg max-w-2xl"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default HeroContent;