'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {NextIcon, PlayIcon, PrevIcon} from "../../ui/icons/PurchaseCardIcons";
import {Media} from "../../../types/course";

interface MediaPlayerProps {
  media: Media[];
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ media }) => {
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
    <div className="bg-white overflow-hidden">
      <div className="relative aspect-w-16 aspect-h-9 bg-black">
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
            <button onClick={handleNext} className="absolute right-3 left-[85%] top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-md z-20 transition">
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
    </div>
  );
};

export default MediaPlayer;