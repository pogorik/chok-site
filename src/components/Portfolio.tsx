"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import PortfolioCard from "./ui/PortfolioCard";
import { portfolio, portfolioFilters } from "@/data/portfolio";

export default function Portfolio({ limit }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]>(
    portfolioFilters[0]
  );

  const filtered =
    activeFilter === "Все работы"
      ? portfolio
      : portfolio.filter((item) => item.category === activeFilter);

  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle title="Наши работы" />

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2 md:gap-1">
            {portfolioFilters.map((filter, i) => {
              const isActive = activeFilter === filter;
              const nextIsActive = activeFilter === portfolioFilters[i + 1];
              const showDivider = i < portfolioFilters.length - 1 && !isActive && !nextIsActive;
              return (
                <div key={filter} className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-[20px] px-4 py-2 text-[14px] font-semibold transition-colors duration-[250ms] ${
                      isActive
                        ? "bg-accent text-white"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {filter}
                  </button>
                  {showDivider && (
                    <span className="hidden md:inline text-border">|</span>
                  )}
                </div>
              );
            })}
          </div>

          {limit && (
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent transition-colors duration-[250ms] hover:text-accent-dark"
            >
              Смотреть все работы
              <ArrowRight
                size={16}
                className="transition-transform duration-[250ms] group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>

        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {visible.map((item) => (
              <PortfolioCard key={item.image} {...item} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-[15px] text-muted">
            Пока нет работ в этой категории.
          </p>
        )}
      </Container>
    </section>
  );
}
