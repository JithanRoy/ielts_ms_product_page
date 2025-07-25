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
    // The default background for the main content area
    <main className="bg-white pb-12">

      {/* --- HERO SECTION --- */}
      {/* This container provides the background and the context for the absolute PurchaseCard */}
      <section
        style={{ backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)` }}
        className="bg-cover bg-center min-h-[300px] md:min-h-[384px] relative" // h-96 = 384px
      >
        {/* The overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* This is the container for the FLOATING content, matching the reference code */}
        <div className="container mx-auto px-4 relative flex flex-col md:flex-row md:gap-12 md:py-10 min-h-[382px]">
          {/* Left Column (Hero Text) */}
          <div className="flex flex-col justify-center flex-1 md:max-w-[calc(100%_-_448px)] pt-8 md:pt-0">
            <HeroContent
              title={courseData.title}
              description={courseData.description}
            />
          </div>

          {/* Right Column (Absolute Purchase Card) */}
          <div className="w-full md:max-w-[400px] md:absolute md:top-[60px] md:right-0">
            <div className="md:sticky md:top-24">
              <PurchaseCard
                media={galleryMedia}
                checklist={courseData.checklist}
                ctaText={courseData.cta_text.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      {/* This is a NEW, separate section for the rest of your page content. */}
      {/* It starts AFTER the hero section in the normal document flow. */}
      <section className="container mx-auto">
        <CourseContent sections={sectionsWithContent} />
      </section>
    </main>
  );
}