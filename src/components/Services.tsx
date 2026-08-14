import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import ServiceCard from "./ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Наши услуги" />
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
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
