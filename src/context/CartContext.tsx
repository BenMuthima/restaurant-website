import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { menuData, MenuItem } from "../data/menuData";

type Lines = Record<string, number>; // id -> qty
interface CartCtx {
  lines: Lines; items: { item: MenuItem; qty: number }[]; count: number; total: number;
  add: (id: string) => void; remove: (id: string) => void; clear: () => void;
  open: boolean; setOpen: (v: boolean) => void;
}
const Ctx = createContext<CartCtx | null>(null);
const KEY = "ember-oak-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Lines>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; }
  });
  const [open, setOpen] = useState(false);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(lines)); }, [lines]);

  const value = useMemo<CartCtx>(() => {
    const items = Object.entries(lines)
      .map(([id, qty]) => ({ item: menuData.find((m) => m.id === id)!, qty }))
      .filter((l) => l.item);
    return {
      lines, items, open, setOpen,
      count: items.reduce((n, l) => n + l.qty, 0),
      total: items.reduce((n, l) => n + l.qty * l.item.price, 0),
      add: (id) => setLines((p) => ({ ...p, [id]: (p[id] || 0) + 1 })),
      remove: (id) => setLines((p) => {
        const q = (p[id] || 0) - 1; const n = { ...p };
        if (q <= 0) delete n[id]; else n[id] = q; return n;
      }),
      clear: () => setLines({}),
    };
  }, [lines, open]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};
