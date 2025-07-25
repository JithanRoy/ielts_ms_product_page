
import React from 'react';
import Image from 'next/image';
import {Instructor, Section} from "../../types/course";

interface InstructorsProps {
  data: Section;
}

const InstructorsSection: React.FC<InstructorsProps> = ({ data }) => {

  const instructors: Instructor[] = data.values;

  if (!instructors || instructors.length === 0) {
    return null;
  }

  return (
    <section className="bg-bg-light py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">{data.name}</h2>

        <div className="space-y-6">
          {instructors.map((instructor) => (
            <div
              key={instructor?.slug}
              className="bg-white p-6 rounded-lg shadow-md border flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-secondary mb-1">{instructor.name}</h3>
                <div
                  className="text-text-light prose prose-sm"
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