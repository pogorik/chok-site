"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { navLinks, toLinkHref } from "@/data/nav";
import { useCallbackModal } from "./CallbackModalContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openCallbackModal } = useCallbackModal();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <Container className="flex h-[80px] md:h-[105px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="relative h-12 w-12 md:h-14 md:w-14 shrink-0">
            <Image
              src="/images/logo-chok.webp"
              alt="Логотип Челябинской Оконной Компании"
              fill
              className="object-contain"
              priority
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-foreground">
              Челябинская
            </span>
            <span className="text-[15px] font-bold text-foreground">
              Оконная Компания (ЧОК)
            </span>
            <span className="mt-0.5 text-[12px] font-semibold tracking-wide text-accent">
              БАЛКОНЫ · ОКНА
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[15px] text-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={toLinkHref(link.href)}
              className="transition-colors duration-[250ms] hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 shrink-0">
          <div className="text-right leading-tight">
            <a
              href="tel:+73517007797"
              className="block text-[16px] font-bold text-foreground transition-colors duration-[250ms] hover:text-accent"
            >
              +7 (351) 700-77-97
            </a>
            <span className="text-[12px] text-muted">
              Ежедневно с 9:00 до 20:00
            </span>
          </div>
          <Button
            onClick={() => openCallbackModal("Заказать звонок")}
            size="lg"
            className="whitespace-nowrap"
          >
            Заказать звонок
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+73517007797"
            aria-label="Позвонить"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-accent"
          >
            <Phone size={20} />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-foreground"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={toLinkHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-[15px] text-foreground transition-colors duration-[250ms] hover:bg-surface hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setMenuOpen(false);
                openCallbackModal("Заказать звонок");
              }}
              size="lg"
              className="mt-2 w-full"
            >
              Заказать звонок
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
