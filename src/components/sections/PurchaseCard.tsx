'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CustomButton from "../ui/CustomButton";
import { ChecklistItem, Media } from "../../types/course";
import {NextIcon, PlayIcon, PrevIcon} from "../ui/icons/PurchaseCardIcons";

interface PurchaseCardProps {
  media: Media[];
  checklist: ChecklistItem[];
  ctaText: string;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({ media, checklist, ctaText }) => {
  const galleryItems = media.filter(item => item.name === 'preview_gallery' && (item.thumbnail_url || item.resource_type === 'image'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const currentItem = galleryItems[currentIndex];

  useEffect(() => {
    setIsPlaying(false);
    if (thumbnailContainerRef.current) {
      const activeChild = thumbnailContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeChild) {
        activeChild.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [currentIndex]);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  const handleThumbnailClick = (index: number) => setCurrentIndex(index);
  const handlePlayClick = () => setIsPlaying(true);

  return (
    <div className="bg-white rounded-lg shadow-2xl md:border overflow-hidden">
      <div className="relative aspect-w-16 aspect-h-9 bg-black rounded-t-lg overflow-hidden">
        {currentItem?.resource_type === 'video' && isPlaying ? (
          <iframe
            key={currentItem.resource_value}
            src={`https://www.youtube.com/embed/${currentItem.resource_value}?autoplay=1&modestbranding=1&rel=0`}
            title="Course Preview" allow="autoplay; encrypted-media" allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : (
          <>
            <Image
              src={currentItem?.thumbnail_url || currentItem?.resource_value || ''}
              alt="Course Preview Thumbnail" layout="fill" objectFit="cover" priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <button onClick={handlePrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md z-20 transition">
              <PrevIcon className="w-5 h-5 text-gray-800" />
            </button>
            <button onClick={handleNext} className="absolute right-3 left-[88%] top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md z-20 transition">
              <NextIcon className="w-5 h-5 text-gray-800" />
            </button>

            {currentItem?.resource_type === 'video' && (
              <button onClick={handlePlayClick} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-white/30 hover:bg-white/50 rounded-full backdrop-blur-sm z-20 transition group">
                <PlayIcon className="w-14 h-14 text-white drop-shadow-lg" />
              </button>
            )}
          </>
        )}
      </div>
      <div ref={thumbnailContainerRef} className="flex gap-2 p-2 overflow-x-auto hide-scrollbar">
        {galleryItems.map((item, index) => (
          <button key={`${item.resource_value}-${index}`} onClick={() => handleThumbnailClick(index)} className={`relative flex-shrink-0 w-24 h-14 rounded-md overflow-hidden transition-all duration-200 ${currentIndex === index ? 'ring-2 ring-brand-primary ring-offset-1' : 'ring-1 ring-gray-200 hover:ring-gray-400'}`}>
            <Image src={item.thumbnail_url || item.resource_value} alt="thumbnail" layout="fill" objectFit="cover" />
          </button>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-text-main">৳1000</span>
            <del className="text-lg text-gray-500">৳5000</del>
            <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md">4000 ৳ ছাড়</span>
          </div>
        </div>
        <CustomButton>{ctaText}</CustomButton>
      </div>
      <div className="p-4 border-t">
        <p className="mb-4 text-xl font-semibold text-text-main">এই কোর্সে যা থাকছে</p>
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item.id} className="flex items-start">
              <Image src={item.icon} alt="icon" width={20} height={20} className="mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-text-main text-sm">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PurchaseCard;