import { createServerFn } from "@tanstack/react-start";

const INBOX = "the.void.merida@gmail.com";

type ContactInput = {
  name: string;
  email: string;
  topic: string;
  message: string;
  company: string;
};

function read(data: ContactInput) {
  const name = data.name.trim();
  const email = data.email.trim();
  const topic = data.topic.trim().slice(0, 80);
  const message = data.message.trim();
  if (data.company.trim()) return { ok: true as const, dropped: true as const };
  if (name.length < 2 || name.length > 120) return { ok: false as const, error: "name" as const };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 160) {
    return { ok: false as const, error: "email" as const };
  }
  if (message.length < 8 || message.length > 4000) return { ok: false as const, error: "message" as const };
  return { ok: true as const, dropped: false as const, name, email, topic, message };
}

export const sendContact = createServerFn({ method: "POST" })
  .validator((data: ContactInput) => data)
  .handler(async ({ data }) => {
    const parsed = read(data);
    if (!parsed.ok) return parsed;
    if (parsed.dropped) return { ok: true as const };
    const response = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://thevoid.merida",
        Referer: "https://thevoid.merida/contact",
      },
      body: JSON.stringify({
        name: parsed.name,
        email: parsed.email,
        _replyto: parsed.email,
        _subject: `THE VØID / ${parsed.topic || "Contacto"}`,
        message: parsed.message,
        _template: "table",
        _captcha: "false",
      }),
    });
    const body = (await response.json().catch(() => null)) as { success?: string; message?: string } | null;
    if (body?.success === "true") return { ok: true as const };
    if (typeof body?.message === "string" && /activ/i.test(body.message)) {
      return { ok: true as const, activate: true as const };
    }
    return { ok: false as const, error: "send" as const };
  });

export const contactInbox = INBOX;
