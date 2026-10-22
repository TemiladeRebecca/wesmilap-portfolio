import { IProject } from "./interface";

export const stages = ["Commencement", "In Progress", "Completed"] as const;

export const projects: IProject[] = [
  {
    slug: "substation-civil-works",
    title: "Substation Civil Works",
    category: "Power Infrastructure",
    location: "Project location to be confirmed",
    year: "Year to be confirmed",
    client: "Client name to be confirmed",
    summary:
      "An illustrative project profile covering civil construction works supporting electrical substation infrastructure.",
    challenge:
      "Infrastructure projects require site preparation, coordinated civil works and construction activities that meet the relevant technical requirements.",
    solution:
      "The proposed project narrative should document site preparation, civil construction activities, coordination with other project teams and the applicable quality requirements.",
    outcome:
      "Add the verified project completion status, deliverables and measurable outcomes here.",
    coverImage: "/images/projects/substation/cover.jpg",
    featured: true,
    media: [
      {
        type: "image",
        src: "/images/projects/substation/commencement.jpg", // TODO: replace image path when project images are provided
        alt: "Substation project site at commencement",
        caption: "Site commencement",
        stage: "Commencement",
      },
      {
        type: "image",
        src: "/images/projects/substation/construction.jpg", // TODO: replace image path when project images are provided
        alt: "Civil construction works in progress",
        caption: "Construction in progress",
        stage: "In Progress",
      },
      {
        type: "video",
        src: "/videos/projects/substation/site-progress.mp4", // TODO: replace video path when project videos are provided
        alt: "Video documenting construction progress",
        caption: "Site progress video",
        stage: "In Progress",
      },
      {
        type: "image",
        src: "/images/projects/substation/completed.jpg", // TODO: replace image path when project images are provided
        alt: "Completed substation civil works",
        caption: "Completed works",
        stage: "Completed",
      },
    ],
  },
  {
    slug: "road-and-civil-infrastructure",
    title: "Road & Civil Infrastructure",
    category: "Civil Engineering",
    location: "Project location to be confirmed",
    year: "Year to be confirmed",
    client: "Client name to be confirmed",
    summary:
      "An illustrative project profile for road construction and associated civil infrastructure works.",
    challenge:
      "Road and civil infrastructure projects must account for site conditions, drainage, construction sequencing and intended use.",
    solution:
      "Document the actual site requirements, engineering approach, construction activities and quality controls used on the project.",
    outcome:
      "Add the confirmed completion status and the infrastructure delivered.",
    coverImage: "/images/projects/road/cover.jpg",
    featured: true,
    media: [
      {
        type: "image",
        src: "/images/projects/road/commencement.jpg", // TODO: replace image path when project images are provided
        alt: "Road construction site before major works",
        caption: "Initial site conditions",
        stage: "Commencement",
      },
      {
        type: "video",
        src: "/videos/projects/road/construction.mp4", // TODO: replace video path when project videos are provided
        alt: "Road construction progress recording",
        caption: "Construction activities",
        stage: "In Progress",
      },
      {
        type: "image",
        src: "/images/projects/road/completed.jpg", // TODO: replace image path when project images are provided
        alt: "Completed road infrastructure",
        caption: "Completed infrastructure",
        stage: "Completed",
      },
    ],
  },
  {
    slug: "building-construction",
    title: "Building Construction",
    category: "Building Works",
    location: "Project location to be confirmed",
    year: "Year to be confirmed",
    client: "Client name to be confirmed",
    summary:
      "An illustrative project profile for a building construction project from initial works through completion.",
    challenge:
      "Building projects require coordination of structural works, construction activities, resources and project requirements.",
    solution:
      "Record the actual construction stages, structural work, coordination processes and quality checks undertaken.",
    outcome: "Add the verified building deliverables and final project status.",
    coverImage: "/images/projects/building/cover.jpg",
    featured: true,
    media: [
      {
        type: "image",
        src: "/images/projects/building/foundation.jpg", // TODO: replace image path when project images are provided
        alt: "Building foundation construction",
        caption: "Foundation works",
        stage: "Commencement",
      },
      {
        type: "image",
        src: "/images/projects/building/structure.jpg", // TODO: replace image path when project images are provided
        alt: "Building structure during construction",
        caption: "Structural construction",
        stage: "In Progress",
      },
      {
        type: "image",
        src: "/images/projects/building/finishing.jpg", // TODO: replace image path when project images are provided
        alt: "Building finishing works",
        caption: "Finishing works",
        stage: "In Progress",
      },
      {
        type: "video",
        src: "/videos/projects/building/final-walkthrough.mp4", // TODO: replace video path when project videos are provided
        alt: "Video walkthrough of the completed building",
        caption: "Project walkthrough",
        stage: "Completed",
      },
      {
        type: "image",
        src: "/images/projects/building/completed.jpg", // TODO: replace image path when project images are provided
        alt: "Completed building",
        caption: "Completed building",
        stage: "Completed",
      },
    ],
  },
  {
    slug: "construction-project-management",
    title: "Construction Project Management",
    category: "Project Management",
    location: "Project location to be confirmed",
    year: "Year to be confirmed",
    client: "Client name to be confirmed",
    summary:
      "An illustrative project profile demonstrating how a construction project can be documented from planning through delivery.",
    challenge:
      "Construction delivery involves coordinating schedules, resources, stakeholders, quality expectations and project risks.",
    solution:
      "Document the planning approach, coordination activities, progress reporting and project controls actually used.",
    outcome:
      "Add verified delivery results and the value achieved for the client.",
    coverImage: "/images/projects/management/cover.jpg", // TODO: replace image path when project images are provided
    featured: false,
    media: [
      {
        type: "image",
        src: "/images/projects/management/planning.jpg", // TODO: replace image path when project images are provided
        alt: "Project planning and construction documentation",
        caption: "Planning and mobilisation",
        stage: "Commencement",
      },
      {
        type: "video",
        src: "/videos/projects/management/site-review.mp4", // TODO: replace video path when project videos are provided
        alt: "Construction site review",
        caption: "Project monitoring",
        stage: "In Progress",
      },
    ],
  },
];
