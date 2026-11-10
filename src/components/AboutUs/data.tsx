import { ITeamMember } from "./interface";

export const capabilities = [
  {
    number: "01",
    title: "Civil & Structural Engineering",
    description:
      "Civil engineering, structural works, infrastructure development, site works, and associated engineering activities.",
    items: ["Civil works", "Structural engineering", "Infrastructure"],
  },
  {
    number: "02",
    title: "Building & Construction",
    description:
      "Building construction, property development, renovation, maintenance, and related construction activities.",
    items: ["Building works", "Renovation", "Property development"],
  },
  {
    number: "03",
    title: "Power & Energy Infrastructure",
    description:
      "Power-related infrastructure and associated engineering, installation, maintenance, and project support activities.",
    items: ["Power infrastructure", "Engineering support", "Maintenance"],
  },
  {
    number: "04",
    title: "Telecommunications",
    description:
      "Telecommunications installation, maintenance, sales, and related services within the company's stated business scope.",
    items: ["Installation", "Maintenance", "Related services"],
  },
  {
    number: "05",
    title: "Oil & Gas Support",
    description:
      "Oil and gas exploration support services and related engineering and technical activities.",
    items: ["Exploration support", "Engineering", "Technical services"],
  },
  {
    number: "06",
    title: "Project & Commercial Services",
    description:
      "Project coordination, engineering consultancy, procurement-related activities, supply, and associated commercial services.",
    items: ["Project coordination", "Consultancy", "Procurement support"],
  },
];

export const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Building professional relationships on honesty, accountability, and responsible business conduct.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "Approaching project requirements with care, technical discipline, and attention to detail.",
  },
  {
    number: "03",
    title: "Safety",
    description:
      "Recognising the importance of safe working practices and responsible project execution.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "Working constructively with clients, consultants, contractors, suppliers, and other stakeholders.",
  },
];

export const directors: ITeamMember[] = [
  {
    name: "Micheal Kayode",
    role: "Director",
    image: null,
    initials: "MK",
  },
  {
    name: "Abiodun Samson Oluwole",
    role: "Director",
    image: null,
    initials: "AO",
  },
  {
    name: "Olanrewalu David Oni",
    role: "Director",
    image: null,
    initials: "DO",
  },
];

export const staffs: ITeamMember[] = [
  {
    name: "Christopher O. Ifejika",
    role: "Chief Operating Officer.B. Eng Electrical Engineering, (MBA, COREN)",
    image: null,
    initials: "COI",
  },
  {
    name: "Tunde Ekpekurede",
    role: "B. Eng, Civil/Structures Engineering. (MBA, COREN)",
    image: null,
    initials: "TE",
  },
  {
    name: "Chukwudi Pricewill Ezenwokolo",
    role: "B. Eng, Electrical Engineering",
    image: null,
    initials: "CPE",
  },
];
