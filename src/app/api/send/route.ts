import { EmailTemplate } from "../../components/EmailTemplate/EmailTemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: ["kaydwithers@gmail.com"],
      subject: "New Message from Website",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
