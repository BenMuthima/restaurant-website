import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Leaf, Users } from "lucide-react";
import Hero from "../components/Hero";
import FeaturedDishes from "../components/FeaturedDishes";
import Testimonials from "../components/Testimonials";
import ScrollReveal from "../components/ScrollReveal";
import Button from "../components/Button";
import { todaysSpecial } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { useSeo } from "../hooks/useSeo";

const reasons = [
  { Icon: Flame, title: "Fire-first cooking", text: "Charcoal and oak for real depth of flavour." },
  { Icon: Leaf, title: "Fresh, local sourcing", text: "Placeholder: describe your real suppliers here." },
  { Icon: Users, title: "Made for gatherings", text: "From date nights to large celebrations." },
];

export default function Home() {
  useSeo("Home", "Wood-fired Kenyan classics and coastal flavours. Order online or reserve a table.");
  const [revealed, setRevealed] = useState(false);
  const { add } = useCart();
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-burnt">Today's Special</p>
          <h2 className="mt-2 text-4xl font-bold">{todaysSpecial.name}</h2>
          <p className="mt-4 text-charcoal/70">{revealed ? todaysSpecial.description : `${todaysSpecial.description.slice(0, 22)}…`}</p>
          <AnimatePresence>
            {!revealed ? (
              <motion.div exit={{ opacity: 0 }} className="mt-6"><Button onClick={() => setRevealed(true)}>Discover Today's Special</Button></motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-3">
                <p className="font-semibold">KES {todaysSpecial.price.toLocaleString()}</p>
                <Button onClick={() => add(todaysSpecial.id)}>Add to order</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </section>
      <FeaturedDishes />
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {reasons.map(({ Icon, title, text }, i) => (
            <ScrollReveal key={title} delay={i * 0.1} className="text-center">
              <Icon className="mx-auto text-burnt" size={36} />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-charcoal/70">{text}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <Testimonials />
      <section className="px-5 py-20 text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold">Save your table</h2>
          <p className="mx-auto mt-3 max-w-lg text-charcoal/70">Send a reservation request in under a minute. We'll confirm on WhatsApp.</p>
          <div className="mt-6"><Button to="/reservations">Reserve a Table</Button></div>
        </ScrollReveal>
      </section>
    </>
  );
}
