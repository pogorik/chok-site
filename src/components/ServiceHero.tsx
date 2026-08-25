"use client";

import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Breadcrumbs from "./ui/Breadcrumbs";
import type { Service } from "@/data/services";
import { useCallbackModal } from "./CallbackModalContext";
import { toLinkHref } from "@/data/nav";

function ServiceCta({ service }: { service: Service }) {
  const { open: openCallbackModal } = useCallbackModal();

  return (
    <>
      <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-extrabold leading-[1.1] tracking-tight text-foreground whitespace-pre-line">
        {service.title}
      </h1>
      <p className="mt-4 max-w-[480px] text-[15px] md:text-[16px] leading-relaxed text-muted">
        {service.lead}
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
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
    </>
  );
}

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative bg-white pt-6 md:pt-10">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Услуги", href: toLinkHref("/#services") },
            { label: service.title },
          ]}
        />

        {/* Mobile / tablet layout: image first, then text on plain background */}
        <div className="md:hidden">
          <div className="relative mt-5 h-[260px] w-full overflow-hidden rounded-[24px]">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              priority
              sizes="(min-width: 1480px) 1480px, 94vw"
              className="object-cover"
            />
          </div>
          <div className="mt-7">
            <ServiceCta service={service} />
          </div>
        </div>

        {/* Desktop layout: image with gradient overlay */}
        <div className="hidden md:flex relative mt-5 overflow-hidden rounded-[28px] min-h-[420px] items-center">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              priority
              sizes="(min-width: 1480px) 1480px, 94vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/10" />
          </div>

          <div className="relative z-10 px-12 py-14 max-w-[640px]">
            <ServiceCta service={service} />
          </div>
        </div>
      </Container>
    </section>
  );
}
