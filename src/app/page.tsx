import PurchaseCard from "../components/sections/PurchaseCard";
import HeroContent from "../components/sections/HeroContent";
import {getCourseData} from "../library/api";

export default async function Home() {
  const courseData = await getCourseData('bn');

  const trailer = courseData.media.find(
    (item) => item.resource_type === 'video' && item.name === 'preview_gallery'
  );

  return (
    <main>
      <div
        style={{ backgroundImage: `url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)` }}
        className="bg-cover bg-center min-h-[300px] md:min-h-[300px]"
      >
        <div className='container mx-auto relative flex flex-col justify-items-center gap-4 md:flex-row md:py-10 min-h-[300px] max-w-[1200px]'>
          <div className="order-1 flex flex-col justify-center items-start flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <HeroContent
              title={courseData.title}
              description={courseData.description}
            />
          </div>

          <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
            <div className="container md:sticky md:top-[112px]">
              <PurchaseCard
                media={courseData.media}
                checklist={courseData.checklist}
                ctaText={courseData.cta_text.name}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
