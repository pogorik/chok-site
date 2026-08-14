export const portfolioFilters = [
  "Все работы",
  "Пластиковые окна",
  "Балконы и лоджии",
  "Алюминиевые конструкции",
  "Входные группы",
] as const;

export type PortfolioCategory = (typeof portfolioFilters)[number];

export const portfolio: {
  image: string;
  alt: string;
  caption: string;
  category: Exclude<PortfolioCategory, "Все работы">;
}[] = [
  {
    image: "/images/work-01.webp",
    alt: "Белый застеклённый балкон",
    caption: "Холодное остекление и отделка балкона",
    category: "Балконы и лоджии",
  },
  {
    image: "/images/work-02.webp",
    alt: "Панорамные пластиковые окна",
    caption: "Установка панорамных пластиковых окон",
    category: "Пластиковые окна",
  },
  {
    image: "/images/work-03.webp",
    alt: "Тёмное алюминиевое остекление балкона",
    caption: "Алюминиевое остекление балкона",
    category: "Алюминиевые конструкции",
  },
  {
    image: "/images/work-04.webp",
    alt: "Современный стеклянный фасад",
    caption: "Фасадное остекление здания",
    category: "Алюминиевые конструкции",
  },
  {
    image: "/images/work-05.webp",
    alt: "Современная алюминиевая конструкция и входная группа",
    caption: "Алюминиевая входная группа",
    category: "Входные группы",
  },
  {
    image: "/images/case-01.webp",
    alt: "Отделка балкона деревянными панелями с подсветкой",
    caption: "Отделка балкона панелями + LED-подсветка потолка",
    category: "Балконы и лоджии",
  },
  {
    image: "/images/case-02.webp",
    alt: "Отделка и остекление балкона белыми панелями",
    caption: "Остекление и отделка балкона под ключ",
    category: "Балконы и лоджии",
  },
  {
    image: "/images/case-03.webp",
    alt: "Остекление балкона со встроенным шкафом для хранения",
    caption: "Остекление балкона + встроенная система хранения",
    category: "Балконы и лоджии",
  },
];
