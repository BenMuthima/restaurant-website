import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
export default function ScrollReveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
