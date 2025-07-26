import React from 'react';
import { ChecklistItem, Media } from "../../types/course";
import MediaPlayer from "./purchaseCard/MediaPlayer";
import PurchaseDetails from "./purchaseCard/PurchaseDetails";

interface PurchaseCardProps {
  media: Media[];
  checklist: ChecklistItem[];
  ctaText: string;
}

const PurchaseCard: React.FC<PurchaseCardProps> = ({ media, checklist, ctaText }) => {
  return (
    <div className="rounded-lg  border overflow-hidden">
      <MediaPlayer media={media} />
      <PurchaseDetails checklist={checklist} ctaText={ctaText} />
    </div>
  );
};

export default PurchaseCard;