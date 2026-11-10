import ProjectsPage from "@/components/Projects/ProjectPage/ProjectPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Experience",
  description:
    "Explore WESMILAP International Limited's engineering, civil infrastructure, construction, power infrastructure, and project management project portfolio in Nigeria.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Experience | WESMILAP International Limited",
    description:
      "Discover engineering, construction, and infrastructure project experience from WESMILAP International Limited.",
    url: "/projects",
    type: "website",
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
