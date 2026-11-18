import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["fr", "en"].map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "fr" ? 1 : 0.9,
  }));
}
