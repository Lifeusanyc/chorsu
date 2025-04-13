export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { order, total } = req.body;

  const message = `🛒 *Yangi buyurtma!*\n\n${order}\n\n💰 *Jami:* $${total}`;

  const TELEGRAM_API = `https://api.telegram.org/bot7840378650:AAHCgR8CxegoUnTKGzJZCB4RorIJuKXbhaQ/sendMessage`;

  await fetch(TELEGRAM_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: 5161274048,
      text: message,
      parse_mode: "Markdown"
    })
  });

  res.status(200).json({ status: "ok" });
}
