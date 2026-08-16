import { heroBenefits } from "@/data/heroBenefits";

export default function HeroBenefits({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <>
        {heroBenefits
          .filter((item) => item.showOnMobile)
          .map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl border border-border p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-accent">
                <Icon size={18} />
              </span>
              <p className="text-[13px] font-bold leading-tight text-foreground whitespace-pre-line">
                {item.title}
              </p>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="w-[225px] rounded-[24px] bg-white px-[26px] py-[10px] shadow-[0_20px_45px_-15px_rgba(32,32,32,0.25)]">
      {heroBenefits.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={item.title}>
            <div className="flex items-center gap-3 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-accent">
                <Icon size={20} />
              </span>
              <p className="text-[14px] font-bold leading-snug text-foreground whitespace-pre-line">
                {item.title}
              </p>
            </div>
            {i < heroBenefits.length - 1 && (
              <div className="h-px w-full shrink-0 bg-border" />
            )}
          </div>
        );
      })}
    </div>
  );
}
