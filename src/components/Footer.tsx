import { Link } from "react-router-dom";
import { SITE } from "../config";
export default function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-12 text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div><h2 className="font-serif text-2xl text-cream">{SITE.name}</h2><p className="mt-2 text-sm">{SITE.tagline}</p></div>
        <div className="space-y-1 text-sm"><p>{SITE.address}</p><p>{SITE.phone}</p><p>{SITE.email}</p><p>{SITE.hours}</p></div>
        <div className="flex flex-col gap-1 text-sm">
          <Link to="/menu" className="hover:text-gold">Menu</Link>
          <Link to="/reservations" className="hover:text-gold">Reservations</Link>
          <Link to="/contact" className="hover:text-gold">Contact</Link>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-cream/50">© {new Date().getFullYear()} {SITE.name}. Placeholder business details; edit src/config.ts.</p>
    </footer>
  );
}
