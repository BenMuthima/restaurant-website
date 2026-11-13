import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { categories, menuData, MenuItem } from "../data/menuData";
import ProductCard from "../components/ProductCard";
import Img from "../components/Img";
import { useCart } from "../context/CartContext";
import { useSeo } from "../hooks/useSeo";

export default function Menu() {
  useSeo("Menu", "Browse starters, nyama choma, seafood, desserts and more. Prices in KES.");
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const [view, setView] = useState<MenuItem | null>(null);
  const { add } = useCart();
  const list = useMemo(() => menuData.filter((m) =>
    (cat === "All" || m.category === cat) && `${m.name} ${m.description}`.toLowerCase().includes(q.toLowerCase())), [cat, q]);
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-28">
      <h1 className="text-center text-5xl font-bold">Our Menu</h1>
      <div className="relative mx-auto mt-8 max-w-md">
        <Search className="absolute left-4 top-3.5 text-charcoal/50" size={18} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes…" aria-label="Search menu"
          className="w-full rounded-full border border-brown/20 bg-white py-3 pl-11 pr-4 outline-none focus:border-burnt" />
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {["All", ...categories].map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`min-h-[40px] rounded-full px-4 text-sm ${cat === c ? "bg-burnt text-cream" : "bg-white hover:bg-gold/30"}`}>{c}</button>
        ))}
      </div>
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>{list.map((m) => <ProductCard key={m.id} item={m} onView={setView} />)}</AnimatePresence>
      </motion.div>
      {list.length === 0 && <p className="mt-10 text-center text-charcoal/60">No dishes match your search.</p>}
      <AnimatePresence>
        {view && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setView(null)}>
            <motion.div role="dialog" aria-label={view.name} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-cream">
              <button onClick={() => setView(null)} aria-label="Close" className="absolute right-3 top-3 z-10 rounded-full bg-white p-2"><X size={16} /></button>
              <Img src={view.image} alt={view.name} className="h-64 w-full object-cover" />
              <div className="space-y-3 p-6">
                <h2 className="text-2xl font-bold">{view.name}</h2>
                <p className="text-charcoal/70">{view.description}</p>
                <p className="font-semibold">KES {view.price.toLocaleString()}</p>
                <button onClick={() => { add(view.id); setView(null); }} className="min-h-[44px] w-full rounded-full bg-burnt font-semibold text-cream">Add to order</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
