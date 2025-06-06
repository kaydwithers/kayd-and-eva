"use client";

import { useState } from "react";
import { Heading } from "../Heading/Heading";

export const LeaveMessageForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/send/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    if (res.ok) {
      setStatus("sent");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };

  return (
    <div>
      <Heading>Leave a message</Heading>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-4 w-full"
        />

        <textarea
          placeholder="Your message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-4 w-full"
          rows={4}
        />

        <button
          type="submit"
          className="font-semibold bg-white text-black px-6 py-4 rounded"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && <p className="text-green-400">Message sent!</p>}

        {status === "error" && (
          <p className="text-red-400">Error sending message.</p>
        )}
      </form>
    </div>
  );
};
