import { StaticImageData } from "next/image";
import Modercart from "../public/Moderncart.png";
import AurexArtisan from "../public/aurex.png";
import ChatApp from "../public/chatapp.png";
import Notesio from "../public/notesio.png";

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Notesio SaaS & Kanban",
    role: "Full-stack Web Developer",
    description: "A feature-rich Note-Taking SaaS application and hybrid Kanban project management tool built for personal productivity and team collaboration.",
    tags: ["React", "Vite", "Tailwind CSS", "SaaS"],
    image: Notesio,
    liveUrl: "https://notesio-zeta.vercel.app/",
    githubUrl: "#",
  },
  {
    id: "02",
    title: "Modern Cart Website",
    role: "Full-stack Web Developer",
    description: "A visually clean E-commerce application built with React and Tailwind CSS featuring a responsive checkout layout and product workflow.",
    tags: ["React", "Tailwind CSS", "HTML5"],
    image: Modercart,
    liveUrl: "https://modern-cart-ecommerce-website.vercel.app/",
    githubUrl: "https://github.com/harshps900/project-management-system",
  },
  {
    id: "03",
    title: "Aurex Artisan Website",
    role: "Full-stack Web Developer",
    description: "An interactive web platform for an artisan export company engineered with responsive layout structure and smooth user experience.",
    tags: ["React", "Tailwind CSS", "HTML5"],
    image: AurexArtisan,
    liveUrl: "https://www.aurexartisan.com/",
    githubUrl: "https://github.com/Ujjwal9329/artisan-exports-hub",
  },
  {
    id: "04",
    title: "Chat Application",
    role: "Full-stack Web Developer",
    description: "A modern real-time messaging web app with user authentication, live state updates, and clean responsive interface built with React.",
    tags: ["React", "Tailwind CSS", "Node.js"],
    image: ChatApp,
    liveUrl: "",
    githubUrl: "#",
  },
];
