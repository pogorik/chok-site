import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "./ui/Container";
import { trustPoints, brands } from "@/data/trust";

export default function TrustSection() {
  return (
    <section id="trust" className="bg-white pb-16 md:pb-24">
      <Container>
        <div className="rounded-[22px] bg-surface p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
            <div className="md:pr-12">
              <h3 className="text-[22px] md:text-[24px] font-extrabold text-foreground">
                Почему нам доверяют
              </h3>
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
              <h3 className="text-[22px] md:text-[24px] font-extrabold text-foreground">
                Используем проверенные материалы
              </h3>
              <div className="mt-7 flex flex-wrap items-center gap-x-9 gap-y-6">
                {brands.map((brand) => (
                  <div key={brand.name} className="relative h-9 w-[120px]">
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
