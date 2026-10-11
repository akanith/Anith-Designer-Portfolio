export type ProjectCategory =
  | "All Work"
  | "Brand Identity & Logo Design"
  | "Social Media & Advertising Posters"
  | "Jewellery Branding — Ramyas Jeweller"
  | "Sports Branding — Messiah Sports"
  | "AI Video & Motion Design"
  | "Creative Experiments"
  // Legacy / short category aliases for backwards compatibility
  | "Branding & Logos"
  | "Posters & Campaigns"
  | "Sports & Products"
  | "Jewellery & Retail"
  | "Invitations & Events"
  | "AI Video & Motion";

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "poster";
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  secondaryCategories?: ProjectCategory[];
  description: string;
  year: string;
  client?: string;
  location?: string;
  cover: string;
  coverAspect?: "square" | "portrait" | "landscape" | "poster";
  images: ProjectImage[];
  featured: boolean;
  featuredOrder?: number;
  deliverables: string[];
  brief?: string;
  approach?: string;
  highlightStat?: {
    label: string;
    value: string;
  };
  tools?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  suitableFor: string;
  accent?: string;
}

export interface CreativeProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}
