export type OptionChoice = {
  id: string;
  label: string;
  multiplier: number;
};

export type OptionGroup = {
  id: string;
  label: string;
  choices: OptionChoice[];
};

export type CalculatorCategory = {
  slug: string;
  label: string;
  unitLabel: string;
  basePricePerM2: number;
  minArea: number;
  defaultWidth: number;
  defaultHeight: number;
  optionGroups: OptionGroup[];
  extraPerSash?: number;
  hint: string;
};

export const calculatorCategories: CalculatorCategory[] = [
  {
    slug: "plastikovye-okna-pvh",
    label: "Пластиковые окна ПВХ",
    unitLabel: "окно",
    basePricePerM2: 8500,
    minArea: 0.5,
    defaultWidth: 1.3,
    defaultHeight: 1.4,
    hint: "Укажите размеры одного окна — расчёт на 1 изделие, количество умножит итог.",
    optionGroups: [
      {
        id: "profile",
        label: "Профиль",
        choices: [
          { id: "standard", label: "Стандарт (3-камерный)", multiplier: 1 },
          { id: "premium", label: "Премиум (5-камерный)", multiplier: 1.25 },
        ],
      },
      {
        id: "glazing",
        label: "Стеклопакет",
        choices: [
          { id: "single", label: "Однокамерный", multiplier: 1 },
          { id: "double", label: "Двухкамерный (тёплый)", multiplier: 1.15 },
        ],
      },
    ],
    extraPerSash: 1500,
  },
  {
    slug: "osteklenie-balkonov",
    label: "Остекление балконов и лоджий",
    unitLabel: "балкон",
    basePricePerM2: 6500,
    minArea: 2,
    defaultWidth: 3,
    defaultHeight: 1.4,
    hint: "Ширина — это длина балкона, высота — от парапета до потолка.",
    optionGroups: [
      {
        id: "type",
        label: "Тип остекления",
        choices: [
          { id: "cold", label: "Холодное", multiplier: 1 },
          { id: "warm", label: "Тёплое (с утеплением)", multiplier: 1.6 },
        ],
      },
      {
        id: "finish",
        label: "Отделка",
        choices: [
          { id: "none", label: "Без отделки", multiplier: 1 },
          { id: "panels", label: "С отделкой панелями", multiplier: 1.3 },
        ],
      },
      {
        id: "frame",
        label: "Материал рамы",
        choices: [
          { id: "pvc", label: "ПВХ", multiplier: 1 },
          { id: "aluminium", label: "Алюминий", multiplier: 0.85 },
        ],
      },
    ],
  },
  {
    slug: "vhodnye-gruppy-dveri",
    label: "Входные группы и двери",
    unitLabel: "дверь / группа",
    basePricePerM2: 18000,
    minArea: 1.6,
    defaultWidth: 0.9,
    defaultHeight: 2.05,
    hint: "Для одиночной двери оставьте стандартные размеры проёма.",
    optionGroups: [
      {
        id: "type",
        label: "Тип конструкции",
        choices: [
          { id: "door", label: "Входная дверь", multiplier: 1 },
          { id: "group", label: "Алюминиевая входная группа", multiplier: 1.4 },
        ],
      },
      {
        id: "insulation",
        label: "Утепление",
        choices: [
          { id: "standard", label: "Стандартное", multiplier: 1 },
          { id: "enhanced", label: "Усиленное", multiplier: 1.2 },
        ],
      },
    ],
  },
  {
    slug: "alyuminievye-konstrukcii",
    label: "Алюминиевые конструкции",
    unitLabel: "конструкция",
    basePricePerM2: 9500,
    minArea: 2,
    defaultWidth: 2,
    defaultHeight: 2.5,
    hint: "Укажите габариты одного проёма или секции конструкции.",
    optionGroups: [
      {
        id: "profile",
        label: "Профиль",
        choices: [
          { id: "cold", label: "Холодный", multiplier: 1 },
          { id: "warm", label: "Тёплый", multiplier: 1.35 },
        ],
      },
      {
        id: "kind",
        label: "Тип конструкции",
        choices: [
          { id: "glazing", label: "Остекление / фасад", multiplier: 1 },
          { id: "partition", label: "Перегородка", multiplier: 0.85 },
          { id: "showcase", label: "Витраж", multiplier: 1.15 },
        ],
      },
    ],
  },
];

export const DISMANTLING_FEE = 2000;
export const ESTIMATE_SPREAD = 0.12;

export function calculateEstimate({
  category,
  width,
  height,
  quantity,
  sashes,
  dismantling,
  selectedChoices,
}: {
  category: CalculatorCategory;
  width: number;
  height: number;
  quantity: number;
  sashes: number;
  dismantling: boolean;
  selectedChoices: Record<string, string>;
}) {
  const area = Math.max(width * height, category.minArea);

  const multiplier = category.optionGroups.reduce((acc, group) => {
    const chosenId = selectedChoices[group.id];
    const choice = group.choices.find((c) => c.id === chosenId) ?? group.choices[0];
    return acc * choice.multiplier;
  }, 1);

  let unitPrice = area * category.basePricePerM2 * multiplier;

  if (category.extraPerSash) {
    unitPrice += sashes * category.extraPerSash;
  }

  if (dismantling) {
    unitPrice += DISMANTLING_FEE;
  }

  const total = unitPrice * quantity;

  return {
    area: Math.round(area * 100) / 100,
    unitPrice: Math.round(unitPrice),
    total: Math.round(total),
    min: Math.round(total * (1 - ESTIMATE_SPREAD)),
    max: Math.round(total * (1 + ESTIMATE_SPREAD)),
  };
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}
