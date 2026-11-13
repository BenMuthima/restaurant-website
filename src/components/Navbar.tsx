import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { SITE } from "../config";

const links = [["/", "Home"], ["/about", "About"], ["/menu", "Menu"], ["/services", "Services"], ["/gallery", "Gallery"], ["/reservations", "Reserve"], ["/contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: openCart } = useCart();
  const cls = ({ isActive }: { isActive: boolean }) => `text-sm transition-colors hover:text-gold ${isActive ? "text-gold" : "text-cream"}`;
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-charcoal/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4" aria-label="Main">
        <Link to="/" className="font-serif text-2xl font-bold text-cream">{SITE.name}</Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} end className={cls}>{label}</NavLink>)}
        </div>
        <div className="flex items-center gap-2 text-cream">
          <button onClick={() => openCart(true)} aria-label={`Open basket, ${count} items`} className="relative p-2">
            <ShoppingBag />
            {count > 0 && <motion.span key={count} initial={{ scale: 1.6 }} animate={{ scale: 1 }} className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-burnt text-xs">{count}</motion.span>}
          </button>
          <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-charcoal md:hidden">
            <div className="flex flex-col gap-1 px-5 pb-5">
              {links.map(([to, label]) => <NavLink key={to} to={to} end onClick={() => setOpen(false)} className={(s) => `${cls(s)} py-3 text-base`}>{label}</NavLink>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
