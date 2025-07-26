import React from 'react';
import { Section, Pointer } from '@/types/course';
import {CheckIcon} from "../ui/icons/commonIcon";

interface PointersProps {
  data: Section;
  id: string;
}

const PointersSection: React.FC<PointersProps> = ({ data, id }) => {
  const pointers = data.values as Pointer[];

  if (!pointers || pointers.length === 0) {
    return null;
  }

  return (
    <section id={id} className="pt-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-black">{data.name}</h2>
        <div className="bg-white p-8 rounded-lg border">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
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