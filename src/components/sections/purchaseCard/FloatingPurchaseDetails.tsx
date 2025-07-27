'use client'

import { useEffect, useState } from "react";
import PurchaseDetails from "./PurchaseDetails";
import CourseDetailsLink from "../CourseDetailsLink";
import {ChecklistItem} from "../../../types/course";

interface Props {
  checklist: ChecklistItem[];
  ctaText: string;
  observeId?: string;
}

const FloatingPurchaseDetails: React.FC<Props> = ({ checklist, ctaText, observeId = 'main-purchase-card' }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    const card = document.getElementById(observeId);
    if (!card) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, [observeId]);

  return !show ? null : (
    <div className="fixed inset-0 z-50 hidden lg:block">
      <div className="container mx-auto px-4 h-full flex">
        <div className="flex-1" />
        <div
          className="max-w-[400px] w-full transition-all transform duration-500 ease-in"
          style={{
            marginTop: 100,
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0px)" : "translateY(40px)",
          }}
        >
          <div className="border rounded-lg bg-white">
            <PurchaseDetails checklist={checklist} ctaText={ctaText} />
          </div>
          <CourseDetailsLink />
        </div>
      </div>
    </div>
  );
};

export default FloatingPurchaseDetails;
