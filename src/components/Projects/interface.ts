export interface IProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  stage: "Commencement" | "In Progress" | "Completed";
}

export interface IProjectCardProps {
  project: IProject;
}
export interface IProject {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  coverImage: string;
  featured: boolean;
  media: IProjectMedia[];
}
export interface IProjectPageProps {
  params: Promise<{ slug: string }>;
}
