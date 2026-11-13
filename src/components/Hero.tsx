import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import Img from "./Img";
import { SITE } from "../config";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const words = SITE.tagline.split(" ");
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-charcoal text-center text-cream">
      <motion.div style={{ y }} className="absolute inset-0 -top-20 h-[120%]">
        <Img src="/images/hero/hero.jpg" alt="Flame-grilled dishes at Ember & Oak" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/90" />
      <div className="relative z-10 max-w-4xl px-5">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Nairobi · Fire · Flavour</motion.p>
        <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
          {words.map((w, i) => (
            <motion.span key={i} className="mr-3 inline-block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.12, duration: 0.7 }}>{w}</motion.span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mx-auto mt-6 max-w-xl text-lg text-cream/85">
          Wood-fired Kenyan classics and coastal flavours, made from scratch every day.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/menu">Explore Our Menu</Button>
          <Button to="/reservations" variant="ghost">Reserve a Table</Button>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-6 z-10" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} aria-hidden><ChevronDown /></motion.div>
    </section>
  );
}
