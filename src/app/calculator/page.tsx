import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Калькулятор стоимости окон и балконов - предварительный расчёт | ЧОК",
  description:
    "Рассчитайте примерную стоимость пластиковых окон, остекления балкона, входной группы или алюминиевой конструкции онлайн. Точная цена - после бесплатного замера.",
};

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white pt-6 pb-16 md:pt-10 md:pb-24">
          <Container>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Калькулятор стоимости" },
              ]}
            />

            <h1 className="mt-5 text-[32px] md:text-[42px] font-extrabold tracking-tight text-foreground">
              Калькулятор стоимости
            </h1>
            <p className="mt-3 max-w-[600px] text-[15px] md:text-[16px] leading-relaxed text-muted">
              Выберите тип конструкции, укажите размеры и опции - получите
              предварительную стоимость. Это ориентир для планирования
              бюджета: точный расчёт даём после бесплатного замера.
            </p>

            <div className="mt-10">
              <Calculator />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
