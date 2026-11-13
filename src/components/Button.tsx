import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface Props { children: ReactNode; to?: string; href?: string; onClick?: () => void; variant?: "primary" | "ghost"; type?: "button" | "submit"; className?: string }
export default function Button({ children, to, href, onClick, variant = "primary", type = "button", className = "" }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 min-h-[44px] text-sm font-semibold transition-colors ${
    variant === "primary" ? "bg-burnt text-cream hover:bg-gold hover:text-charcoal" : "border border-cream/60 text-cream hover:bg-cream hover:text-charcoal"
  } ${className}`;
  const motionProps = { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 } };
  if (to) return <motion.span {...motionProps} className="inline-block"><Link to={to} className={cls}>{children}</Link></motion.span>;
  if (href) return <motion.a {...motionProps} href={href} target="_blank" rel="noreferrer" className={cls}>{children}</motion.a>;
  return <motion.button {...motionProps} type={type} onClick={onClick} className={cls}>{children}</motion.button>;
}
