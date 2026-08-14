export function normalizeRussianPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");

  let normalized = digits;
  if (normalized.length === 11 && (normalized[0] === "7" || normalized[0] === "8")) {
    normalized = "7" + normalized.slice(1);
  } else if (normalized.length === 10) {
    normalized = "7" + normalized;
  } else {
    return null;
  }

  // +7 followed by a valid operator/area code (3–9) and 9 more digits
  if (!/^7[3-9]\d{9}$/.test(normalized)) {
    return null;
  }

  return "+" + normalized;
}

export function isValidRussianPhone(raw: string): boolean {
  return normalizeRussianPhone(raw) !== null;
}

export function formatRussianPhone(raw: string): string {
  const normalized = normalizeRussianPhone(raw);
  if (!normalized) return raw;
  const digits = normalized.slice(1); // drop leading +
  return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
}
