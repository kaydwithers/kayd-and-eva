"use client";

import { useState } from "react";
import { Heading } from "../Heading/Heading";

export const LeaveMessageForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!name || !message) {
      setError("Name and message are required.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit message.");
      }

      setName("");
      setMessage("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Heading>Leave a message</Heading>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <input
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Send message"}
        </button>

        {error && <p className="text-red-400">Error sending message.</p>}
      </form>
    </div>
  );
};
