type CallbackLeadInput = {
  name: string;
  phone: string;
  reason: string;
  ip?: string;
  referer?: string;
};

// Создаёт заявку в amoCRM через /leads/unsorted/forms, чтобы она попала
// в специальный статус "Неразобранное", а не в обычный статус воронки.
// Этот эндпоинт не позволяет задать системное имя лида/контакта, пока
// карточка "неразобранная" - но обычные кастомные поля задавать можно,
// поэтому имя клиента пишется в кастомное поле лида "ФИО".
export async function createAmoCrmLead({ name, phone, reason, ip, referer }: CallbackLeadInput) {
  const token = process.env.AMOCRM_TOKEN;
  const subdomain = process.env.AMOCRM_SUBDOMAIN;

  if (!token || !subdomain) {
    return { ok: false as const, skipped: true as const };
  }

  const pipelineId = Number(process.env.AMOCRM_PIPELINE_ID ?? 9065666);
  const fioFieldId = Number(process.env.AMOCRM_FIO_FIELD_ID ?? 292343);
  const now = Math.floor(Date.now() / 1000);

  const payload = [
    {
      request_id: crypto.randomUUID(),
      source_name: "Сайт chok74.ru",
      source_uid: "chok-site-callback",
      pipeline_id: pipelineId,
      created_at: now,
      _embedded: {
        leads: [
          {
            custom_fields_values: [
              {
                field_id: fioFieldId,
                values: [{ value: name }],
              },
            ],
          },
        ],
        contacts: [
          {
            custom_fields_values: [
              {
                field_code: "PHONE",
                values: [{ value: phone }],
              },
            ],
          },
        ],
      },
      metadata: {
        form_id: "callback",
        form_name: `${reason} - ${name}`,
        form_page: "Заявка с сайта",
        form_sent_at: now,
        ...(ip && { ip }),
        ...(referer && { referer }),
      },
    },
  ];

  const response = await fetch(`https://${subdomain}.amocrm.ru/api/v4/leads/unsorted/forms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`amoCRM ${response.status}: ${text}`);
  }

  return { ok: true as const };
}
