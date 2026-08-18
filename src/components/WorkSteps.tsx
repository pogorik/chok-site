import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import WorkStep from "./ui/WorkStep";
import { workSteps } from "@/data/workSteps";

export default function WorkSteps() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Как мы работаем" />
        <div className="mt-10 md:mt-14 flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-4 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-3">
          {workSteps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-3 lg:flex-1">
              <WorkStep {...step} />
              {i < workSteps.length - 1 && (
                <ArrowRight
                  size={20}
                  className="hidden lg:block shrink-0 text-border"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
