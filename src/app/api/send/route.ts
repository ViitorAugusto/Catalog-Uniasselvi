import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, email, cell, mensagem } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["vitoraugusto2010201078@gmail.com"],
      subject: "Novo contato da NexusTechStore",
      react: EmailTemplate({ nome, email, cell, mensagem }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
