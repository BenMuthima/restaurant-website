import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";
// Phase 2 placeholder for About, Services, Gallery, Contact.
export default function ComingSoon({ title }: { title: string }) {
  useSeo(title, `${title} page coming soon.`);
  return (
    <div className="px-5 pb-24 pt-40 text-center">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="mt-4 text-charcoal/70">This page is built in the next phase.</p>
      <Link to="/menu" className="mt-6 inline-block underline">Browse the menu</Link>
    </div>
  );
}
