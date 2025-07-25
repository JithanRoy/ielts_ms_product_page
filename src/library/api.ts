
import { CourseData } from "@/types/course";

export async function getCourseData(lang: 'en' | 'bn' = 'en'): Promise<CourseData> {
  const url = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`;

  const res = await fetch(url, {
    headers: {
      'X-TENMS-SOURCE-PLATFORM': 'web',
      'accept': 'application/json',
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch course data');
  }

  const data = await res.json();
  return data.data as CourseData;
}