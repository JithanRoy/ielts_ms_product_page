// src/types/course.ts

// Type for the `media` array
export interface Media {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

// Type for the `checklist` array
export interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
}

// Type for the `cta_text` object
export interface CtaText {
  name: string;
  value: string;
}

// --- Specific types for each kind of Section ---

// For sections where type = 'instructors'
export interface Instructor {
  name: string;
  image: string;
  description: string;
  slug: string;
  short_description: string;
}

// For sections where type = 'features'
export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

// For sections where type = 'pointers'
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

// The top-level interface for the entire API response data
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
  checklist: string[]; // It's an array of strings
  file_url: string;
}
