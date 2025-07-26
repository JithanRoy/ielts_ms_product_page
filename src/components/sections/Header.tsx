import React from 'react';
import Image from 'next/image';
import CustomButton from "../ui/CustomButton";
import {HamburgerIcon, PhoneIcon} from "../ui/icons/commonIcon";


const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt="10 Minute School Logo"
              width={100}
              height={27}
              priority
            />
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-semibold hover:text-brand-primary">BN</button>
            <a href="tel:16910" className="flex items-center gap-2 text-sm font-bold text-brand-primary">
              <PhoneIcon />
              16910
            </a>
            <CustomButton className="px-6 py-2 !text-sm !font-semibold">লগ-ইন</CustomButton>
          </div>

          <div className="lg:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
