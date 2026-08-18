import type { MetadataRoute } from "next";
import { companyRequisites } from "@/data/company";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = companyRequisites.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/calculator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/offer`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
