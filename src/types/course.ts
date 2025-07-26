
export interface Media {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Instructor {
  name: string;
  image: string;
  description: string;
  slug: string;
  short_description: string;
}

export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface Pointer {
  id: string;
  text: string;
  color: string;
  icon: string;
}

export interface AboutValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Section {
  type: string;
  name: string;
  values: (Instructor | Feature | Pointer | AboutValue | FeatureExplanation)[];
}

export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Media[];
  checklist: ChecklistItem[];
  cta_text: CtaText;
  sections: Section[];
}

export interface FeatureExplanation {
  id: string;
  title: string;
  checklist: string[];
  file_url: string;
}
