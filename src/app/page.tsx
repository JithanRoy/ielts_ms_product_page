// src/app/page.tsx
import PurchaseCard from "../components/sections/PurchaseCard";
import HeroContent from "../components/sections/HeroContent";
import { getCourseData } from "../library/api";
import CourseContent from "../components/CourseContent";

export default async function Home() {
  const courseData = await getCourseData('bn');

  const galleryMedia = courseData.media.filter(item => item.name === 'preview_gallery');
  const sectionsWithContent = courseData.sections.filter(sec => sec.name && sec.values && sec.values.length > 0);

  return (
    <main className="bg-white pb-12">
      <div
        style={{ backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)` }}
        className="bg-cover bg-center h-96"
      >
        <div className="w-full h-full bg-black bg-opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 -mt-80">
        <div className="grid grid-cols-3 gap-12 items-start">

          <div className="col-span-2 space-y-8">
            <HeroContent
              title={courseData.title}
              description={courseData.description}
            />

            <CourseContent sections={sectionsWithContent} />
          </div>

          <div className="col-span-1">
            <PurchaseCard
              media={galleryMedia}
              checklist={courseData.checklist}
              ctaText={courseData.cta_text.name}
            />
          </div>
        </div>
      </div>
    </main>
  );
}