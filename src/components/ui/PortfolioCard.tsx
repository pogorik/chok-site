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
        className="object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100" />
      <p className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-[13px] font-semibold leading-snug text-white opacity-0 transition-all duration-[250ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
        {caption}
      </p>
    </div>
  );
}
