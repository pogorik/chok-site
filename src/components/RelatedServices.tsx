import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ui/ServiceCard";
import { services } from "@/data/services";

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const otherServices = services.filter((s) => s.slug !== currentSlug);

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionTitle title="Другие услуги" />
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.cardTitle}
              subtitle={service.subtitle}
              image={service.image}
              alt={service.alt}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
