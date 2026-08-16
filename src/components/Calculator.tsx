"use client";

import { useEffect, useMemo, useState } from "react";
import { Info, Phone } from "lucide-react";
import {
  calculatorCategories,
  calculateEstimate,
  formatPrice,
  DISMANTLING_FEE,
} from "@/data/calculator";

export default function Calculator() {
  const [categorySlug, setCategorySlug] = useState(calculatorCategories[0].slug);
  const category = useMemo(
    () => calculatorCategories.find((c) => c.slug === categorySlug)!,
    [categorySlug]
  );

  const [width, setWidth] = useState(category.defaultWidth);
  const [height, setHeight] = useState(category.defaultHeight);
  const [quantity, setQuantity] = useState(1);
  const [sashes, setSashes] = useState(1);
  const [dismantling, setDismantling] = useState(false);
  const [selectedChoices, setSelectedChoices] = useState<Record<string, string>>(
    () =>
      Object.fromEntries(
        category.optionGroups.map((g) => [g.id, g.choices[0].id])
      )
  );

  useEffect(() => {
    setWidth(category.defaultWidth);
    setHeight(category.defaultHeight);
    setSashes(1);
    setDismantling(false);
    setSelectedChoices(
      Object.fromEntries(
        category.optionGroups.map((g) => [g.id, g.choices[0].id])
      )
    );
  }, [category]);

  const estimate = useMemo(
    () =>
      calculateEstimate({
        category,
        width,
        height,
        quantity,
        sashes,
        dismantling,
        selectedChoices,
      }),
    [category, width, height, quantity, sashes, dismantling, selectedChoices]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
      <div className="rounded-[22px] bg-surface p-6 md:p-8">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto md:flex-wrap md:overflow-visible">
          {calculatorCategories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCategorySlug(c.slug)}
              className={`shrink-0 whitespace-nowrap rounded-[20px] px-4 py-2 text-[13px] md:text-[14px] font-semibold transition-colors duration-[250ms] ${
                c.slug === categorySlug
                  ? "bg-accent text-white"
                  : "bg-white text-muted hover:text-foreground border border-border"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-[13px] text-muted">{category.hint}</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <label className="block">
            <span className="block text-[13px] font-semibold text-foreground mb-1.5">
              Ширина, м
            </span>
            <input
              type="number"
              min={0.3}
              max={10}
              step={0.1}
              value={width}
              onChange={(e) => setWidth(Math.max(0.3, Number(e.target.value) || 0))}
              className="w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </label>
          <label className="block">
            <span className="block text-[13px] font-semibold text-foreground mb-1.5">
              Высота, м
            </span>
            <input
              type="number"
              min={0.3}
              max={10}
              step={0.1}
              value={height}
              onChange={(e) => setHeight(Math.max(0.3, Number(e.target.value) || 0))}
              className="w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </label>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <label className="block">
            <span className="block text-[13px] font-semibold text-foreground mb-1.5">
              Количество, {category.unitLabel}
            </span>
            <input
              type="number"
              min={1}
              max={50}
              step={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
              className="w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </label>

          {category.extraPerSash && (
            <label className="block">
              <span className="block text-[13px] font-semibold text-foreground mb-1.5">
                Открывающихся створок
              </span>
              <input
                type="number"
                min={0}
                max={6}
                step={1}
                value={sashes}
                onChange={(e) => setSashes(Math.max(0, Number(e.target.value) || 0))}
                className="w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </label>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-5">
          {category.optionGroups.map((group) => (
            <div key={group.id}>
              <span className="block text-[13px] font-semibold text-foreground mb-2">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.choices.map((choice) => {
                  const isActive = selectedChoices[group.id] === choice.id;
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() =>
                        setSelectedChoices((prev) => ({
                          ...prev,
                          [group.id]: choice.id,
                        }))
                      }
                      className={`rounded-xl border px-3.5 py-2 text-[13px] font-medium transition-colors duration-[250ms] ${
                        isActive
                          ? "border-accent bg-accent/10 text-accent-dark"
                          : "border-border bg-white text-muted hover:text-foreground"
                      }`}
                    >
                      {choice.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <label className="mt-6 flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={dismantling}
            onChange={(e) => setDismantling(e.target.checked)}
            className="h-5 w-5 rounded border-border accent-accent"
          />
          <span className="text-[14px] text-foreground">
            Нужен демонтаж старой конструкции{" "}
            <span className="text-muted">
              (+{formatPrice(DISMANTLING_FEE)} за ед.)
            </span>
          </span>
        </label>
      </div>

      <div className="lg:sticky lg:top-28 rounded-[22px] bg-accent-dark text-white p-6 md:p-8">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-white/70">
          Предварительный расчёт
        </p>
        <p className="mt-2 text-[34px] font-extrabold leading-tight">
          {formatPrice(estimate.min)} – {formatPrice(estimate.max)}
        </p>
        <div className="mt-4 flex flex-col gap-1.5 text-[13px] text-white/80">
          <span>
            Площадь на 1 {category.unitLabel}: {estimate.area} м²
          </span>
          <span>Цена за единицу: {formatPrice(estimate.unitPrice)}</span>
          <span>Количество: {quantity}</span>
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-white/10 p-3.5 text-[12.5px] leading-relaxed text-white/80">
          <Info size={16} className="mt-0.5 shrink-0" />
          <span>
            Это ориентировочный расчёт по средним ценам в Челябинске.
            Точную стоимость назовём после бесплатного замера - цена
            может измениться в зависимости от конструкции проёма.
          </span>
        </div>

        <a
          href="tel:+73517007797"
          className="mt-6 flex h-[52px] items-center justify-center gap-2 rounded-[28px] bg-white text-[15px] font-semibold text-accent-dark transition-colors duration-[250ms] hover:bg-white/90"
        >
          <Phone size={18} />
          Заказать бесплатный замер
        </a>
      </div>
    </div>
  );
}
