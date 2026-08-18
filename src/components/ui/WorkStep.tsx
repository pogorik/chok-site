import { LucideIcon } from "lucide-react";

type WorkStepProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function WorkStep({ icon: Icon, title, description }: WorkStepProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center md:flex-col md:items-start md:gap-4 md:text-left lg:flex-row lg:items-center">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent-dark text-white">
        <Icon size={26} />
      </span>
      <div>
        <h3 className="text-[15px] font-extrabold text-foreground">{title}</h3>
        <p className="mt-1 text-[13px] leading-snug text-muted whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
