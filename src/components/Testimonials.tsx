import { testimonials } from "../data/testimonialsData";
import ScrollReveal from "./ScrollReveal";
export default function Testimonials() {
  return (
    <section className="bg-brown px-5 py-20 text-cream">
      <h2 className="text-center text-4xl font-bold">Guests Say</h2>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <blockquote className="h-full rounded-2xl bg-charcoal/40 p-6">
              <p className="font-serif text-lg">“{t.text}”</p>
              <footer className="mt-4 text-sm text-gold">{t.name} · {t.role}</footer>
            </blockquote>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
