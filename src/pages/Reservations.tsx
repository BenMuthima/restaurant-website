import { FormEvent, useState } from "react";
import { useSeo } from "../hooks/useSeo";
import { waLink } from "../utils/whatsapp";
import { SITE } from "../config";

type F = { name: string; phone: string; email: string; date: string; time: string; guests: string; notes: string };
const empty: F = { name: "", phone: "", email: "", date: "", time: "", guests: "2", notes: "" };

export default function Reservations() {
  useSeo("Reservations", "Request a table. We confirm via WhatsApp.");
  const [f, setF] = useState<F>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof F, string>>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof F) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  const validate = () => {
    const e: typeof errors = {};
    if (f.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^\+?[0-9\s-]{9,15}$/.test(f.phone)) e.phone = "Enter a valid phone number.";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email.";
    if (!f.date || new Date(f.date) < new Date(new Date().toDateString())) e.date = "Choose today or a future date.";
    if (!f.time) e.time = "Choose a time.";
    if (+f.guests < 1 || +f.guests > 50) e.guests = "Guests must be 1–50.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = `Reservation request for ${SITE.name}\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || "-"}\nDate: ${f.date}\nTime: ${f.time}\nGuests: ${f.guests}\nNotes: ${f.notes || "-"}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  };
  const field = (k: keyof F, label: string, type = "text") => (
    <label className="block text-sm font-medium">{label}
      <input type={type} value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]} className="mt-1 w-full rounded-lg border border-brown/20 bg-white px-4 py-3 outline-none focus:border-burnt" />
      {errors[k] && <span role="alert" className="text-xs text-red-600">{errors[k]}</span>}
    </label>
  );
  return (
    <div className="mx-auto max-w-2xl px-5 pb-20 pt-28">
      <h1 className="text-center text-5xl font-bold">Reserve a Table</h1>
      {sent ? (
        <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow">
          <h2 className="text-2xl font-bold">Request ready to send</h2>
          <p className="mt-3 text-charcoal/70">We opened WhatsApp with your details. <strong>Your table is not confirmed until the restaurant replies.</strong></p>
          <button onClick={() => { setSent(false); setF(empty); }} className="mt-6 underline">Make another request</button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="mt-10 space-y-4 rounded-2xl bg-white p-8 shadow">
          {field("name", "Full name")}
          <div className="grid gap-4 sm:grid-cols-2">{field("phone", "Phone", "tel")}{field("email", "Email (optional)", "email")}</div>
          <div className="grid gap-4 sm:grid-cols-3">{field("date", "Date", "date")}{field("time", "Time", "time")}{field("guests", "Guests", "number")}</div>
          <label className="block text-sm font-medium">Special requests
            <textarea value={f.notes} onChange={set("notes")} rows={3} className="mt-1 w-full rounded-lg border border-brown/20 px-4 py-3 outline-none focus:border-burnt" />
          </label>
          <button type="submit" className="min-h-[48px] w-full rounded-full bg-burnt font-semibold text-cream hover:bg-gold hover:text-charcoal">Send request via WhatsApp</button>
        </form>
      )}
    </div>
  );
}
