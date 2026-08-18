import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Наши работы - примеры остекления окон и балконов | ЧОК",
  description:
    "Примеры выполненных работ Челябинской Оконной Компании: остекление балконов, пластиковые окна, алюминиевые конструкции, входные группы.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white pt-6 md:pt-10">
          <Container>
            <Breadcrumbs
              items={[{ label: "Главная", href: "/" }, { label: "Наши работы" }]}
            />
          </Container>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
