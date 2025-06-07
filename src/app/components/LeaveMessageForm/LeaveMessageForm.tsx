"use client";

import { sendEmail } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";
import { Heading } from "../Heading/Heading";

const initialState = {
  message: "",
};

export const LeaveMessageForm = () => {
  const [state, formAction] = useFormState(sendEmail, initialState);
  const { pending } = useFormStatus();

  return (
    <div>
      <Heading>Leave a message</Heading>

      <form action={formAction} className="space-y-6 max-w-xl">
        <input
          placeholder="Your name"
          type="text"
          id="name"
          name="name"
          required
          className="border p-4 w-full"
        />

        <textarea
          placeholder="Your message"
          id="message"
          name="message"
          rows={4}
          required
          className="border p-4 w-full"
        />

        <button
          type="submit"
          className="font-semibold bg-white text-black px-6 py-4 rounded"
          disabled={pending}
        >
          {pending ? "Sending..." : "Send message"}
        </button>

        <p aria-live="polite" className="" role="status">
          {state?.message}
        </p>
      </form>
    </div>
  );
};
