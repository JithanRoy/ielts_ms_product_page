import React from 'react';
import {FaPhoneAlt} from "react-icons/fa";

const CourseDetailsLink = () => {
  return (
    <div>
      <p className="justify-between hidden mt-4 pl-0.5 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
        <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
        <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
          <FaPhoneAlt className='text-brand-primary' />
          <span className="ml-1 text-brand-primary">ফোন করুন (16910)</span>
        </span>
      </p>
    </div>
  );
};

export default CourseDetailsLink;
