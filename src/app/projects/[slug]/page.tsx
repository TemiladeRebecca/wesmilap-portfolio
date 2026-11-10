import { notFound } from "next/navigation";
import { IProjectPageProps } from "@/components/Projects/interface";
import { projects } from "@/components/Projects/data";
import ProjectDetail from "@/components/Projects/ProjectDetail/ProjectDetail";
import { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: IProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.title} - Project Details`,
    description: project.summary.slice(0, 155),
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | WESMILAP International Limited`,
      description: project.summary.slice(0, 200),
      url: `/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.coverImage,
          alt: project.title,
        },
      ],
    },
    robots: {
      index: false, // TODO:change to true when real projects are used
      follow: true,
    },
  };
}

export default async function ProjectDetailPage({ params }: IProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
