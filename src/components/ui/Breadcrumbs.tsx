import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { companyRequisites } from "@/data/company";

type BreadcrumbHref = string | { pathname: string; hash: string };

function toAbsoluteUrl(href: BreadcrumbHref): string {
  const base = companyRequisites.siteUrl;
  if (typeof href === "string") {
    return href === "/" ? `${base}/` : `${base}${href}`;
  }
  const pathname = href.pathname === "/" ? "/" : href.pathname;
  return `${base}${pathname}#${href.hash}`;
}

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: BreadcrumbHref }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: toAbsoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors duration-[250ms] hover:text-accent"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
          {i < items.length - 1 && (
            <ChevronRight size={14} className="text-border" />
          )}
        </span>
      ))}
    </nav>
  );
}
