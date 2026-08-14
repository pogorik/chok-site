import Container from "./ui/Container";
import { advantages } from "@/data/advantages";

export default function AdvantagesBar() {
  return (
    <section className="bg-white py-6 md:py-8">
      <Container>
        <div className="rounded-[28px] bg-accent-dark px-4 py-6 md:px-8 md:py-0 md:h-[110px]">
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:h-full md:gap-0">
            {advantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-3 px-2 md:px-6 md:h-full ${
                    i > 0 ? "md:border-l md:border-white/20" : ""
                  } ${
                    i === advantages.length - 1 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon size={20} />
                  </span>
                  <p className="leading-tight">
                    <span className="block text-[14px] font-bold text-white">
                      {item.title}
                    </span>
                    <span className="block text-[12px] text-white/80">
                      {item.subtitle}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
