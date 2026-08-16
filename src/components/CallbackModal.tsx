"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { isValidRussianPhone, normalizeRussianPhone } from "@/lib/phone";

type Status = "idle" | "submitting" | "success" | "error";

const titles: Record<string, { title: string; subtitle: string }> = {
  "Бесплатный замер": {
    title: "Заказать бесплатный замер",
    subtitle: "Оставьте телефон - согласуем удобное время для замера.",
  },
  "Заказать звонок": {
    title: "Заказать звонок",
    subtitle: "Оставьте телефон - перезвоним в течение 15 минут.",
  },
};

const defaultTitle = {
  title: "Оставить заявку",
  subtitle: "Оставьте телефон - перезвоним в течение 15 минут.",
};

export default function CallbackModal({
  isOpen,
  onClose,
  reason,
}: {
  isOpen: boolean;
  onClose: () => void;
  reason?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");

  const copy = (reason && titles[reason]) || defaultTitle;

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setName("");
      setPhone("");
      setConsent(false);
      setStatus("idle");
      setPhoneError("");
      setFormError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalizedPhone = normalizeRussianPhone(phone);
    if (!normalizedPhone) {
      setPhoneError("Введите корректный российский номер телефона");
      return;
    }
    setPhoneError("");

    if (!consent) {
      setFormError("Нужно согласие на обработку персональных данных");
      return;
    }
    setFormError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: normalizedPhone, reason }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setFormError("Не получилось отправить заявку. Попробуйте ещё раз или позвоните нам.");
      }
    } catch {
      setStatus("error");
      setFormError("Не получилось отправить заявку. Проверьте соединение и попробуйте ещё раз.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Закрыть"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-[440px] rounded-[24px] bg-white p-7 md:p-8 shadow-[0_30px_60px_-15px_rgba(32,32,32,0.35)]">
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-surface text-foreground transition-colors duration-[250ms] hover:bg-border"
        >
          <X size={18} />
        </button>

        {status === "success" ? (
          <div className="py-4 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <CheckCircle2 size={30} />
            </span>
            <h3 className="mt-4 text-[20px] font-extrabold text-foreground">
              Заявка принята!
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Спасибо{name ? `, ${name}` : ""}! Мы перезвоним вам в течение
              15 минут в рабочее время.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-[28px] bg-accent text-[15px] font-semibold text-white transition-colors duration-[250ms] hover:bg-accent-dark"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3 className="pr-8 text-[22px] font-extrabold text-foreground">
              {copy.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              {copy.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <label className="block">
                <span className="block text-[13px] font-semibold text-foreground mb-1.5">
                  Имя
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться"
                  className="w-full rounded-xl border border-border px-3.5 py-3 text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </label>

              <label className="block">
                <span className="block text-[13px] font-semibold text-foreground mb-1.5">
                  Телефон
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phoneError) setPhoneError("");
                  }}
                  onBlur={() => {
                    if (phone && !isValidRussianPhone(phone)) {
                      setPhoneError("Введите корректный российский номер телефона");
                    }
                  }}
                  placeholder="+7 (___) ___-__-__"
                  className={`w-full rounded-xl border px-3.5 py-3 text-[15px] text-foreground focus:outline-none focus:ring-2 ${
                    phoneError
                      ? "border-red-400 focus:ring-red-200"
                      : "border-border focus:ring-accent/40"
                  }`}
                />
                {phoneError && (
                  <span className="mt-1.5 block text-[12.5px] text-red-600">
                    {phoneError}
                  </span>
                )}
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (formError) setFormError("");
                  }}
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded border-border accent-accent"
                />
                <span className="text-[12.5px] leading-relaxed text-muted">
                  Я согласен(на) на обработку персональных данных в
                  соответствии с{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    className="text-accent underline underline-offset-2 hover:text-accent-dark"
                  >
                    политикой конфиденциальности
                  </Link>
                </span>
              </label>

              {formError && (
                <span className="-mt-2 block text-[12.5px] text-red-600">
                  {formError}
                </span>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-1 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[28px] bg-accent text-[15px] font-semibold text-white transition-colors duration-[250ms] hover:bg-accent-dark disabled:opacity-70"
              >
                {status === "submitting" && (
                  <Loader2 size={18} className="animate-spin" />
                )}
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
