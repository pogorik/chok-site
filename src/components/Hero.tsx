"use client";

import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import HeroBenefits from "./HeroBenefits";
import { useCallbackModal } from "./CallbackModalContext";

function HeroCopy() {
  return (
    <>
      <p className="text-[18px] md:text-[22px] font-bold leading-tight tracking-wide text-accent">
        Производим и устанавливаем
      </p>
      <h1 className="mt-1 text-[36px] sm:text-[42px] md:text-[64px] font-extrabold leading-[1.1] md:leading-[1.08] tracking-tight">
        <span className="text-accent">Пластиковые окна</span>
        <br />
        <span className="text-foreground">и алюминиевые</span>
        <br />
        <span className="text-foreground">конструкции</span>
      </h1>
      <p className="mt-3 text-[22px] md:text-[28px] font-bold text-accent">
        с 2015 года
      </p>
      <p className="mt-5 max-w-[480px] text-[15px] md:text-[16px] leading-relaxed text-muted">
        Собственное производство — без посредников и переплат. Сотни
        остеклённых объектов в Челябинске и области: от квартир до сложных
        нестандартных проектов.
      </p>
    </>
  );
}

export default function Hero() {
  const { open: openCallbackModal } = useCallbackModal();

  return (
    <section id="hero" className="relative bg-white pt-6 md:pt-12">
      <Container>
        {/* Mobile / tablet layout: image first, then text */}
        <div className="md:hidden">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[24px]">
            <Image
              src="/images/hero-balcony.webp"
              alt="Остекление балкона Челябинской Оконной Компанией"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="mt-7">
            <HeroCopy />
          </div>
          <div className="mt-7 flex flex-col gap-3">
            <Button href="/calculator" variant="primary" className="w-full">
              Рассчитать стоимость
            </Button>
            <Button
              onClick={() => openCallbackModal("Бесплатный замер")}
              variant="outline"
              className="w-full"
            >
              Бесплатный замер
            </Button>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3">
            <HeroBenefits compact />
          </div>
        </div>

        {/* Desktop layout: overlapping image + gradient */}
        <div className="hidden md:flex relative overflow-hidden rounded-[28px] min-h-[650px] items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-balcony.webp"
              alt="Остекление балкона Челябинской Оконной Компанией"
              fill
              priority
              className="object-cover object-[85%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/0" />
          </div>

          <div className="relative z-10 px-12 py-16 max-w-[640px]">
            <HeroCopy />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/calculator" variant="primary">
                Рассчитать стоимость
              </Button>
              <Button
                onClick={() => openCallbackModal("Бесплатный замер")}
                variant="outline"
              >
                Бесплатный замер
              </Button>
            </div>
          </div>

          <div className="absolute top-8 right-8 z-10">
            <HeroBenefits />
          </div>
        </div>
      </Container>
    </section>
  );
}
