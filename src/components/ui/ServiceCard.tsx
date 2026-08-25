import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  href: string;
};

export default function ServiceCard({
  title,
  subtitle,
  image,
  alt,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-[360px] md:h-[380px] overflow-hidden rounded-[18px] border border-border"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 94vw"
        className="object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/75 to-transparent" />

      <div className="relative z-10 p-6">
        <h3 className="text-[19px] font-extrabold leading-snug text-foreground whitespace-pre-line">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted whitespace-pre-line">
          {subtitle}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent transition-colors duration-[250ms] group-hover:text-accent-dark">
          Подробнее
          <ArrowRight
            size={16}
            className="transition-transform duration-[250ms] group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
