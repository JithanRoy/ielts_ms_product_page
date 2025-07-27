import PurchaseCard from "../components/sections/PurchaseCard";
import HeroContent from "../components/sections/HeroContent";
import { getCourseData } from "../library/api";
import CourseContent from "../components/CourseContent";
import CourseDetailsLink from "../components/sections/CourseDetailsLink";
import MediaPlayer from "../components/sections/purchaseCard/MediaPlayer";
import PurchaseDetails from "../components/sections/purchaseCard/PurchaseDetails";
import FloatingPurchaseDetails from "../components/sections/purchaseCard/FloatingPurchaseDetails";

export default async function Home() {
  const courseData = await getCourseData('bn');

  const galleryMedia = courseData.media.filter(item => item.name === 'preview_gallery');
  const sectionsWithContent = courseData.sections.filter(sec => sec.name && sec.values && sec.values.length > 0);

  return (
    <main className="bg-white pb-12">
      <div className="lg:hidden">
        <MediaPlayer media={galleryMedia} />
      </div>

      <section
        style={{ backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)`}}
        className="bg-cover bg-center md:min-h-[384px] relative"
      >
        <div className="absolute inset-0" />

        <div className="container mx-auto px-4 relative flex flex-col md:flex-row md:gap-12 md:py-10 min-h-[180px] md:min-h-[382px]">
          <div className="flex flex-col justify-center flex-1 md:max-w-[calc(100%_-_448px)] py-8 md:pt-0">
            <HeroContent
              title={courseData.title}
              description={courseData.description}
            />
          </div>

          <div className="hidden lg:block w-full md:max-w-[400px] md:absolute md:top-[60px] md:right-0">
            <div className="md:sticky md:top-24">
              <PurchaseCard
                media={galleryMedia}
                checklist={courseData.checklist}
                ctaText={courseData.cta_text.name}
              />
              <CourseDetailsLink />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:hidden mt-4 border-b-4">
        <PurchaseDetails
          checklist={courseData.checklist}
          ctaText={courseData.cta_text.name}
        />
      </section>

      <section className="container mx-auto px-4 sm:mt-8 mt-0">
        <CourseContent sections={sectionsWithContent} />
      </section>

      <FloatingPurchaseDetails
        checklist={courseData.checklist}
        ctaText={courseData.cta_text.name}
      />

    </main>
  );
}