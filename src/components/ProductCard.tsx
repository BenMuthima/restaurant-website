import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { MenuItem } from "../data/menuData";
import { useCart } from "../context/CartContext";
import Img from "./Img";

export default function ProductCard({ item, onView }: { item: MenuItem; onView?: (i: MenuItem) => void }) {
  const { add, lines } = useCart();
  const qty = lines[item.id] || 0;
  return (
    <motion.article layout whileHover={{ y: -6 }} className="group overflow-hidden rounded-2xl bg-white shadow-md">
      <button onClick={() => onView?.(item)} className="relative block h-52 w-full overflow-hidden" aria-label={`Quick view ${item.name}`}>
        <Img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {item.featured && <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold">Featured</span>}
      </button>
      <div className="space-y-2 p-5">
        <p className="text-xs uppercase tracking-wider text-burnt">{item.category}{item.dietary && ` · ${item.dietary}`}</p>
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p className="text-sm text-charcoal/70">{item.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-semibold">KES {item.price.toLocaleString()}</span>
          <motion.button key={qty} initial={{ scale: 1.25 }} animate={{ scale: 1 }} onClick={() => add(item.id)}
            className="flex min-h-[44px] items-center gap-1 rounded-full bg-brown px-4 text-sm text-cream hover:bg-burnt">
            <Plus size={16} /> Add{qty > 0 && ` (${qty})`}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
