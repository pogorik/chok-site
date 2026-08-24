type CallbackLeadInput = {
  name: string;
  phone: string;
  reason: string;
};

export async function createAmoCrmLead({ name, phone, reason }: CallbackLeadInput) {
  const token = process.env.AMOCRM_TOKEN;
  const subdomain = process.env.AMOCRM_SUBDOMAIN;

  if (!token || !subdomain) {
    return { ok: false as const, skipped: true as const };
  }

  const pipelineId = Number(process.env.AMOCRM_PIPELINE_ID ?? 9065666);
  const statusId = Number(process.env.AMOCRM_STATUS_ID ?? 72982178);
  const phoneFieldId = Number(process.env.AMOCRM_PHONE_FIELD_ID ?? 292243);
  const phoneEnumId = Number(process.env.AMOCRM_PHONE_ENUM_ID ?? 179885);

  const payload = [
    {
      name: `Заявка с сайта: ${reason}`,
      pipeline_id: pipelineId,
      status_id: statusId,
      _embedded: {
        contacts: [
          {
            name: name || "Без имени",
            custom_fields_values: [
              {
                field_id: phoneFieldId,
                values: [{ value: phone, enum_id: phoneEnumId }],
              },
            ],
          },
        ],
      },
    },
  ];

  const response = await fetch(`https://${subdomain}.amocrm.ru/api/v4/leads/complex`, {
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
