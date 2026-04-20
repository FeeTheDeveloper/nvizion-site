type SendEmailArgs = {
  to: string | string[];
  subject: string;
  text: string;
  replyTo?: string;
};

export type SendEmailResult =
  | {
      delivered: true;
      provider: "resend";
      id?: string;
    }
  | {
      delivered: false;
      provider: "not-configured" | "resend";
      error: string;
    };

type ResendResponse = {
  id?: string;
  message?: string;
};

export async function sendEmail({
  to,
  subject,
  text,
  replyTo
}: SendEmailArgs): Promise<SendEmailResult> {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const resendFromEmail = process.env.RESEND_FROM_EMAIL?.trim();

  if (!resendApiKey || !resendFromEmail) {
    return {
      delivered: false,
      provider: "not-configured",
      error: "Missing RESEND_API_KEY or RESEND_FROM_EMAIL."
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: Array.isArray(to) ? to : [to],
      subject,
      text,
      reply_to: replyTo
    }),
    cache: "no-store"
  });

  const data = (await response.json().catch(() => null)) as ResendResponse | null;

  if (!response.ok) {
    return {
      delivered: false,
      provider: "resend",
      error: data?.message ?? "Resend rejected the email request."
    };
  }

  return {
    delivered: true,
    provider: "resend",
    id: data?.id
  };
}
