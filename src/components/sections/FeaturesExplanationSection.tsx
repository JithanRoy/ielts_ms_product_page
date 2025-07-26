import React from 'react';
import Image from 'next/image';
import { Section, FeatureExplanation } from '@/types/course';
import {CheckIcon} from "../ui/icons/commonIcon";

interface FeatureExplanationsProps {
  data: Section;
  id: string;
}

const FeatureExplanationsSection: React.FC<FeatureExplanationsProps> = ({ data, id }) => {
  const explanations = data.values as FeatureExplanation[];

  if (!explanations || explanations.length === 0) return null;

  return (
    <section id={id} className="pt-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">{data.name}</h2>
        <div className="bg-white rounded-lg border divide-y divide-gray-200 px-5">
          {explanations.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
              <div className="w-full md:w-1/2 space-y-3 order-2 md:order-1">
                <h3 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">{item.title}</h3>
                <ul className="space-y-2">
                  {item.checklist.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                <Image
                  src={item.file_url}
                  alt={item.title}
                  width={250}
                  height={200}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureExplanationsSection;