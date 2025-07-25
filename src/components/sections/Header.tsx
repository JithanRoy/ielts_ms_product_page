// src/components/ui/Header.tsx
import React from 'react';
import Image from 'next/image';
import CustomButton from "../ui/CustomButton";

// --- Helper Icons for the Header ---
const SearchIcon = () => <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;
const ChevronDownIcon = () => <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>;
const PhoneIcon = () => <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
const HamburgerIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>;


const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* --- Left Side: Logo (THIS IS THE UPDATED PART) --- */}
          <div className="flex-shrink-0">
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt="10 Minute School Logo"
              width={100}
              height={27}
              priority={true} // Equivalent to fetchpriority="high" for performance
            />
          </div>

          {/* --- Middle: Desktop Navigation Links (Hidden on Mobile) --- */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-brand-primary">ক্লাস ৬-১২ <ChevronDownIcon/></a>
            <a href="#" className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-brand-primary">স্কিলস <ChevronDownIcon/></a>
            <a href="#" className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-brand-primary">ভর্তি পরীক্ষা <ChevronDownIcon/></a>
            {/* Add other nav links here */}
          </nav>

          {/* --- Right Side: Actions (Hidden on Mobile) --- */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-semibold hover:text-brand-primary">BN</button>
            <a href="tel:16910" className="flex items-center gap-2 text-sm font-bold text-brand-primary">
              <PhoneIcon />
              16910
            </a>
            <CustomButton className="px-6 py-2 !text-sm !font-semibold">লগ-ইন</CustomButton>
          </div>

          {/* --- Mobile Menu Button (Visible on Mobile/Tablet) --- */}
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