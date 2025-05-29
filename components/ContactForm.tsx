"use client"
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        rows={5}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && <p className="text-green-600">Message sent! We'll get back soon.</p>}
      {status === "error" && <p className="text-red-600">Oops, something went wrong. Try again.</p>}
    </form>
  );
} 