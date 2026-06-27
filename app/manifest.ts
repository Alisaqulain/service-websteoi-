import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3f5bd8",
    icons: [
      {
        src: "/logo.webp",
        sizes: "1024x1024",
        type: "image/webp",
      },
    ],
  };
}
