import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Container from "./ui/Container";
import { navLinks, toLinkHref } from "@/data/nav";
import { services } from "@/data/services";
import { companyRequisites } from "@/data/company";

export default function Footer() {
  return (
    <footer id="footer" className="bg-accent-dark text-white">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-12 w-12 shrink-0">
                <Image
                  src="/images/logo-chok.webp"
                  alt="Логотип Челябинской Оконной Компании"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[14px] font-bold">Челябинская</span>
                <span className="text-[14px] font-bold">
                  Оконная Компания (ЧОК)
                </span>
              </span>
            </Link>
            <p className="mt-4 text-[14px] leading-relaxed text-white/70">
              Собственное производство и установка пластиковых окон,
              балконов и алюминиевых конструкций в Челябинске с 2015 года.
            </p>
          </div>

          <div>
            <h4 className="text-[15px] font-bold">Меню</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={toLinkHref(link.href)}
                    className="text-[14px] text-white/70 transition-colors duration-[250ms] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-bold">Услуги</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[14px] text-white/70 transition-colors duration-[250ms] hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[15px] font-bold">Контакты</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-[14px] text-white/70">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a
                  href="tel:+73517007797"
                  className="transition-colors duration-[250ms] hover:text-white"
                >
                  +7 (351) 700-77-97
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] text-white/70">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a
                  href="mailto:info@chok74.ru"
                  className="transition-colors duration-[250ms] hover:text-white"
                >
                  info@chok74.ru
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>г. Челябинск</span>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] text-white/70">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Ежедневно с 9:00 до 20:00</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="py-5 text-[12.5px] text-white/50">
          <p className="leading-relaxed">
            {companyRequisites.legalName} · ИНН {companyRequisites.inn} ·
            ОГРН {companyRequisites.ogrn} · {companyRequisites.legalAddress}
          </p>
        </Container>
      </div>

      <div className="border-t border-white/15">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-3 py-5 text-[13px] text-white/60">
          <span>
            © {new Date().getFullYear()} Челябинская Оконная Компания. Все
            права защищены.
          </span>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors duration-[250ms] hover:text-white"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/offer"
              className="transition-colors duration-[250ms] hover:text-white"
            >
              Публичная оферта
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
