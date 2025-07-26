import React from 'react';
import Image from 'next/image';
import { Section, Instructor } from '@/types/course';

interface InstructorsProps {
  data: Section;
  id: string;
}

const InstructorsSection: React.FC<InstructorsProps> = ({ data, id }) => {
  const instructors = data.values as Instructor[];

  if (!instructors || instructors.length === 0) return null;

  return (
    <section id={id} className="lg:pt-8 pt-1">
      <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2">
        <h2 className="sm:mb-4 mb-0 text-text-primary text-xl font-semibold md:text-2xl">{data.name}</h2>
        <div className="flex items-center md:rounded-md md:border md:p-5 border-solid border-gray-300 box-border">
          {instructors.map((instructor) => (
            <div
              key={instructor.slug}
              className="flex flex-row items-center justify-center gap-5 px-4"
            >
              <div className="flex">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={100} height={100}
                  className="rounded-full object-cover"
                />
              </div>
              <div className='flex-1 ml-4 pt-6'>
                <h3 className="text-lg font-normal text-brand-dark hover:text-brand-primary flex items-center gap-2 font-sans cursor-pointer">
                  {instructor.name}
                  <span className="text-brand-primary text-sm">{'>'}</span>
                </h3>
                <div
                  className="text-text-primary font-sans text-md prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: instructor.description }}
                />
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default InstructorsSection;
