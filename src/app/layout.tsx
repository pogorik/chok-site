import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { CallbackModalProvider } from "@/components/CallbackModalContext";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Челябинская Оконная Компания - пластиковые окна и балконы в Челябинске",
  description:
    "Производство и установка пластиковых окон, остекление балконов и алюминиевые конструкции в Челябинске. Бесплатный замер, гарантия до 10 лет.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#202020]">
        <CallbackModalProvider>{children}</CallbackModalProvider>
      </body>
    </html>
  );
}
