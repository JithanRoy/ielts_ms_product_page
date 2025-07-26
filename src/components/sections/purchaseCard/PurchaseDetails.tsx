import React from 'react';
import Image from 'next/image';
import {ChecklistItem} from "../../../types/course";
import CustomButton from "../../ui/CustomButton";

interface PurchaseDetailsProps {
  checklist: ChecklistItem[];
  ctaText: string;
}

const PurchaseDetails: React.FC<PurchaseDetailsProps> = ({ checklist, ctaText }) => {
  return (
    <div className="bg-white rounded-b-lg">
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-text-main">৳1000</span>
            <del className="text-lg text-gray-500">৳5000</del>
            <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md">4000 ৳ ছাড়</span>
          </div>
        </div>
        <CustomButton>{ctaText}</CustomButton>
      </div>
      <div className="p-4">
        <p className="mb-4 text-xl font-semibold text-text-main">এই কোর্সে যা থাকছে</p>
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item.id} className="flex items-start">
              <Image
                src={item.icon}
                alt="icon"
                width={20}
                height={20}
                className="mr-3 mt-0.5 flex-shrink-0"
              />
              <span className="text-text-main text-sm">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PurchaseDetails;