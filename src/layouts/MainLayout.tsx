import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageTransition from "../components/PageTransition";

export default function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}><Outlet /></PageTransition>
      </AnimatePresence>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
    </>
  );
}
