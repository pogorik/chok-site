import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { CallbackModalProvider } from "@/components/CallbackModalContext";
import { companyRequisites } from "@/data/company";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const title =
  "Челябинская Оконная Компания - пластиковые окна и балконы в Челябинске";
const description =
  "Производство и установка пластиковых окон, остекление балконов и алюминиевые конструкции в Челябинске. Бесплатный замер, гарантия до 10 лет.";

// На GitHub Pages сайт живёт как тестовый стенд без своего домена -
// закрываем его от индексации, чтобы не создавать дубли с будущим VPS-доменом.
const isStaging = process.env.GITHUB_PAGES === "true";

export const metadata: Metadata = {
  metadataBase: new URL(companyRequisites.siteUrl),
  title,
  description,
  robots: isStaging
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Челябинская Оконная Компания",
    url: "/",
    title,
    description,
    images: [{ url: "/images/hero-balcony.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-balcony.webp"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Челябинская Оконная Компания",
  url: companyRequisites.siteUrl,
  image: `${companyRequisites.siteUrl}/images/hero-balcony.webp`,
  telephone: companyRequisites.phoneRaw,
  email: companyRequisites.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Челябинск",
    addressCountry: "RU",
  },
  areaServed: "Челябинск",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#202020]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <CallbackModalProvider>{children}</CallbackModalProvider>
      </body>
    </html>
  );
}
