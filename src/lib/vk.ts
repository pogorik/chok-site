type CallbackVkInput = {
  name: string;
  phone: string;
  reason: string;
};

export async function sendVkNotification({ name, phone, reason }: CallbackVkInput) {
  const token = process.env.VK_GROUP_TOKEN;
  const groupId = process.env.VK_GROUP_ID;
  const peerId = process.env.VK_PEER_ID;

  if (!token || !groupId || !peerId) {
    return { ok: false as const, skipped: true as const };
  }

  const message = [
    "Новая заявка с сайта",
    `Повод: ${reason}`,
    `Имя: ${name}`,
    `Телефон: ${phone}`,
  ].join("\n");

  const params = new URLSearchParams({
    access_token: token,
    v: "5.199",
    group_id: groupId,
    peer_id: peerId,
    random_id: String(Date.now()),
    message,
  });

  const response = await fetch("https://api.vk.com/method/messages.send", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(`VK ${data.error.error_code}: ${data.error.error_msg}`);
  }

  return { ok: true as const };
}
