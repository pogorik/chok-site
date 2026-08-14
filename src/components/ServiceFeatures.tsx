import { CheckCircle2 } from "lucide-react";
import Container from "./ui/Container";

export default function ServiceFeatures({ features }: { features: string[] }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="rounded-[22px] bg-surface p-6 md:p-12">
          <h2 className="text-[22px] md:text-[26px] font-extrabold text-foreground">
            Что входит в услугу
          </h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-[15px] leading-relaxed text-foreground">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
