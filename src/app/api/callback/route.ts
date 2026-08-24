import { NextResponse } from "next/server";
import { normalizeRussianPhone } from "@/lib/phone";
import { createAmoCrmLead } from "@/lib/amocrm";

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

  const name = (body.name ?? "").trim() || "(не указано)";
  const reason = body.reason ?? "(не указано)";

  console.log("[callback request]", {
    name,
    phone: normalizedPhone,
    reason,
    receivedAt: new Date().toISOString(),
  });

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    undefined;
  const referer = request.headers.get("referer") ?? undefined;

  try {
    const result = await createAmoCrmLead({ name, phone: normalizedPhone, reason, ip, referer });
    if (result.skipped) {
      console.warn("[amocrm] AMOCRM_TOKEN/AMOCRM_SUBDOMAIN не заданы - лид не отправлен");
    }
  } catch (err) {
    // Заявка уже залогирована выше - не роняем ответ пользователю из-за сбоя CRM.
    console.error("[amocrm] не удалось создать лид", err);
  }

  return NextResponse.json({ ok: true });
}
