import Image from "next/image";

export default function PortfolioCard({
  image,
  alt,
  caption,
}: {
  image: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="group relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[12px]">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 31vw, 47vw"
        className="object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-100 transition-opacity duration-[250ms] ease-out md:opacity-0 md:group-hover:opacity-100" />
      <p className="absolute inset-x-0 bottom-0 translate-y-0 p-4 text-[13px] font-semibold leading-snug text-white opacity-100 transition-all duration-[250ms] ease-out md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        {caption}
      </p>
    </div>
  );
}
