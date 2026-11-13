import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { waLink } from "../utils/whatsapp";
import { SITE } from "../config";

export default function CartDrawer() {
  const { open, setOpen, items, total, add, remove, clear } = useCart();
  const message = () =>
    `Hello ${SITE.name}, I'd like to order:\n` +
    items.map((l) => `- ${l.qty} x ${l.item.name} (KES ${(l.qty * l.item.price).toLocaleString()})`).join("\n") +
    `\nTotal: KES ${total.toLocaleString()}\nPlease confirm availability and delivery/pickup.`;
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-40 bg-black/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.aside role="dialog" aria-label="Your order" className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream p-6 shadow-2xl"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28 }}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Order</h2>
              <button onClick={() => setOpen(false)} aria-label="Close basket" className="p-2"><X /></button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto">
              {items.length === 0 && <p className="text-charcoal/60">Your basket is empty. Explore the menu to add something delicious.</p>}
              {items.map(({ item, qty }) => (
                <div key={item.id} className="flex items-center justify-between gap-3">
                  <div><p className="font-semibold">{item.name}</p><p className="text-sm text-charcoal/60">KES {item.price.toLocaleString()}</p></div>
                  <div className="flex items-center gap-2">
                    <button aria-label="Remove one" onClick={() => remove(item.id)} className="rounded-full bg-brown/10 p-2"><Minus size={14} /></button>
                    <span className="w-5 text-center">{qty}</span>
                    <button aria-label="Add one" onClick={() => add(item.id)} className="rounded-full bg-brown/10 p-2"><Plus size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
            {items.length > 0 && (
              <div className="space-y-3 border-t border-brown/20 pt-4">
                <p className="flex justify-between text-lg font-semibold"><span>Total</span><span>KES {total.toLocaleString()}</span></p>
                <a href={waLink(message())} target="_blank" rel="noreferrer"
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-green-600 font-semibold text-white">
                  <MessageCircle size={18} /> Order via WhatsApp
                </a>
                <button onClick={clear} className="w-full text-sm text-charcoal/60 underline">Clear basket</button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
