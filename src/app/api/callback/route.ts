import { NextResponse } from "next/server";
import { normalizeRussianPhone } from "@/lib/phone";

export async function POST(request: Request) {
  let body: { name?: string; phone?: string; reason?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const normalizedPhone = normalizeRussianPhone(body.phone ?? "");

  if (!normalizedPhone) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }

  // TODO: подключить реальную доставку заявки — email, Telegram-бот или CRM.
  // Пока заявка только логируется на сервере.
  console.log("[callback request]", {
    name: (body.name ?? "").trim() || "(не указано)",
    phone: normalizedPhone,
    reason: body.reason ?? "(не указано)",
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
