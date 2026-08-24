export const navLinks = [
  { label: "Главная", href: "/#hero" },
  { label: "О компании", href: "/about" },
  { label: "Услуги", href: "/#services" },
  { label: "Наши работы", href: "/portfolio" },
  { label: "Контакты", href: "/#footer" },
];

/**
 * next/link + basePath (GitHub Pages export) mangles string hrefs like
 * "/#hero" into "{basePath}#hero" - missing the slash before the hash.
 * Passing a UrlObject instead makes Next.js format it correctly.
 */
export function toLinkHref(href: string): string | { pathname: string; hash: string } {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return href;
  const pathname = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex + 1);
  return { pathname, hash };
}
