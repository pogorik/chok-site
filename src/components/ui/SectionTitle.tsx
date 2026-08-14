export default function SectionTitle({
  title,
  align = "center",
}: {
  title: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <h2 className="text-[32px] md:text-[36px] font-extrabold tracking-tight text-foreground">
        {title}
      </h2>
      <span
        className={`mt-3 block h-[3px] w-10 rounded-full bg-accent ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
