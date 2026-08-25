export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  role: string;
  date: string;
  tech: string;
  description: string;
  longDescription?: string;
  link: string;
  github?: string;
  year: string;
  image?: string;
  
  // Case Study fields
  problem?: string;
  solution?: string;
  features?: ProjectFeature[];
  techStack?: string[];
  architecture?: string;
  metrics?: ProjectMetric[];
  nextSteps?: string;
  gallery?: string[];
}
