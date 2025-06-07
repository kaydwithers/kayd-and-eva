"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  message: z.string().min(1, { message: "Message is required." }),
});

export async function sendEmail(prevState: unknown, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed.",
    };
  }

  const { name, message } = validatedFields.data;

  try {
    // FIX: Removed the "const data =" part
    await resend.emails.send({
      from: "Your Name <kayd@kayd-and-eva.com>",
      to: ["kaydwithers@gmail.com"],
      subject: `New message from ${name}`,
      text: message,
    });

    return { message: "Email sent successfully!" };
  } catch (error) {
    return {
      message: `Failed to send email. ${error}`,
    };
  }
}
