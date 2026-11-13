import { useState } from "react";
import { menuData } from "../data/menuData";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";
export default function FeaturedDishes() {
  const dishes = menuData.filter((m) => m.featured);
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2].map((i) => dishes[(start + i) % dishes.length]);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <ScrollReveal>
        <h2 className="text-center text-4xl font-bold">The Chef's Signature Creations</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-charcoal/70">Four dishes our guests keep coming back for.</p>
      </ScrollReveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{visible.map((d) => <ProductCard key={d.id} item={d} />)}</div>
      <div className="mt-8 flex justify-center gap-3">
        <button onClick={() => setStart((s) => (s - 1 + dishes.length) % dishes.length)} className="rounded-full border border-brown px-5 py-2">Previous</button>
        <button onClick={() => setStart((s) => (s + 1) % dishes.length)} className="rounded-full bg-brown px-5 py-2 text-cream">Next</button>
      </div>
    </section>
  );
}
