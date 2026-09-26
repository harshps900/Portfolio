import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harsh Pal Singh | Full Stack & Frontend Developer",
    short_name: "Harsh Pal Singh",
    description: "Full Stack & Frontend Developer specializing in React.js, Next.js, MERN stack, and high-performance web applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
