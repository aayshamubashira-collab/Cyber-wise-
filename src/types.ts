export interface Course {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  duration: string;
  level: string;
  category: string;
  image: string;
  icon: string;
  features: string[];
  curriculum: string[];
  careerPathways: string[];
  certifications: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  comment: string;
  rating: number;
  image: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LearningExperienceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}
