import type { MetadataRoute } from "next";
import { companyRequisites } from "@/data/company";

export const dynamic = "force-static";

// На GitHub Pages сайт живёт как тестовый стенд без своего домена -
// закрываем его от индексации, чтобы не создавать дубли с будущим VPS-доменом.
const isStaging = process.env.GITHUB_PAGES === "true";

export default function robots(): MetadataRoute.Robots {
  if (isStaging) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${companyRequisites.siteUrl}/sitemap.xml`,
  };
}
