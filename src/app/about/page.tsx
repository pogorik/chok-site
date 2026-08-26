import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import AdvantagesBar from "@/components/AdvantagesBar";
import WorkSteps from "@/components/WorkSteps";
import { trustPoints, brands } from "@/data/trust";

export const metadata: Metadata = {
  title: "О компании - Челябинская Оконная Компания (ЧОК)",
  description:
    "ЧОК - собственное производство пластиковых окон, остекление балконов и алюминиевые конструкции в Челябинске с 2015 года. Без посредников, гарантия до 10 лет.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-white pt-6 md:pt-10">
          <Container>
            <Breadcrumbs
              items={[{ label: "Главная", href: "/" }, { label: "О компании" }]}
            />

            {/* Mobile: image on top, text below */}
            <div className="md:hidden">
              <div className="relative mt-5 h-[260px] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/images/hero-balcony.webp"
                  alt="Остеклённый балкон - работа Челябинской Оконной Компании"
                  fill
                  priority
                  sizes="(min-width: 1480px) 1480px, 94vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-7">
                <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-foreground">
                  О компании
                </h1>
                <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">
                  Челябинская Оконная Компания производим и устанавливаем
                  пластиковые окна, остекляет балконы и лоджии с 2015 года и
                  без посредников.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <Button href="/calculator" variant="primary">
                    Рассчитать стоимость
                  </Button>
                  <Button href="/#footer" variant="outline">
                    Наши контакты
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop: image with gradient overlay */}
            <div className="hidden md:flex relative mt-5 overflow-hidden rounded-[28px] min-h-[420px] items-center">
              <div className="absolute inset-0">
                <Image
                  src="/images/hero-balcony.webp"
                  alt="Остеклённый балкон - работа Челябинской Оконной Компании"
                  fill
                  priority
                  sizes="(min-width: 1480px) 1480px, 94vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/10" />
              </div>

              <div className="relative z-10 px-12 py-14 max-w-[640px]">
                <h1 className="text-[44px] lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-foreground">
                  О компании
                </h1>
                <p className="mt-4 max-w-[480px] text-[16px] leading-relaxed text-muted">
                  Челябинская Оконная Компания производим и устанавливаем
                  пластиковые окна, остекляет балконы и лоджии с 2015 года и
                  без посредников.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <Button href="/calculator" variant="primary">
                    Рассчитать стоимость
                  </Button>
                  <Button href="/#footer" variant="outline">
                    Наши контакты
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-24">
          <Container>
            <div className="max-w-[720px]">
              <h2 className="text-[26px] md:text-[32px] font-extrabold tracking-tight text-foreground">
                Наша история
              </h2>
              <div className="mt-5 flex flex-col gap-4 text-[15px] md:text-[16px] leading-relaxed text-muted">
                <p>
                  Мы работаем на рынке остекления Челябинска и области с 2015
                  года. За это время выполнили сотни объектов - от типовых
                  окон в квартиру до сложных нестандартных проектов: панорамное
                  остекление, фасадные конструкции, витражи.
                </p>
                <p>
                  С самого начала мы делаем ставку на собственное производство:
                  изготавливаем окна и конструкции сами, без посредников и
                  накруток. Это даёт честную цену для заказчика и полный
                  контроль над качеством на каждом этапе - от замера до монтажа.
                </p>
                <p>
                  Работаем с профилями проверенных производителей - REHAU,
                  VEKA, KBE, Exprof, Salamander - и даём гарантию на изделия и
                  монтаж до 10 лет. После установки мы не пропадаем: остаёмся
                  на связи по гарантийным и сервисным вопросам.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <AdvantagesBar />

        <section className="bg-white py-16 md:py-24">
          <Container>
            <div className="rounded-[22px] bg-surface p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
                <div className="md:pr-12">
                  <h2 className="text-[22px] md:text-[24px] font-extrabold text-foreground">
                    Почему выбирают ЧОК
                  </h2>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {trustPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        <span className="text-[15px] leading-relaxed text-foreground">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:border-l md:border-border md:pl-12">
                  <h2 className="text-[22px] md:text-[24px] font-extrabold text-foreground">
                    Материалы, с которыми работаем
                  </h2>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    {brands.map((brand) => (
                      <div
                        key={brand.name}
                        className="flex h-16 w-[108px] shrink-0 items-center justify-center rounded-xl bg-white px-2.5 shadow-sm transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="relative h-7 w-full">
                          <Image
                            src={brand.src}
                            alt={brand.name}
                            fill
                            sizes="108px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <WorkSteps />
      </main>
      <Footer />
    </>
  );
}
