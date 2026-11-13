import { Link } from "react-router-dom";
import Img from "../components/Img";
import { services } from "../data/servicesData";
import { useSeo } from "../hooks/useSeo";

const experiences = [
  {
    title: "Dine in",
    description: "Settle in for wood-fired favourites, thoughtful service and a relaxed table for any occasion.",
    image: "/images/services/dine-in.jpg",
    alt: "Inviting restaurant interior ready for guests",
  },
  {
    title: "Gather together",
    description: "Bring friends, family or colleagues together over generous sharing plates and fresh sides.",
    image: "/images/services/group-dining.jpg",
    alt: "Friends enjoying a meal together",
  },
  {
    title: "Private dining & events",
    description: "Bring your group together in a welcoming space, with a menu inspired by our fire-first kitchen.",
    image: "/images/services/catering.jpg",
    alt: "Warm restaurant dining room ready to welcome a group",
  },
];

export default function Services() {
  useSeo("Services", "Explore dining, takeaway, delivery, private dining and catering at Ember & Oak.");

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-32">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-burnt">Made for every occasion</p>
        <h1 className="mt-3 text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-charcoal/70">Enjoy Ember & Oak at the restaurant, at home or around a table with your group.</p>
      </header>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {experiences.map((experience) => (
          <article key={experience.title} className="overflow-hidden rounded-2xl bg-white shadow-md">
            <div className="aspect-[4/3] bg-brown">
              <Img src={experience.image} alt={experience.alt} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold">{experience.title}</h2>
              <p className="mt-3 text-charcoal/70">{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="mt-14 rounded-2xl bg-white p-7 text-center shadow-sm md:p-10">
        <h2 className="text-3xl font-bold">Something for every gathering</h2>
        <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
          {services.map((service) => (
            <li key={service} className="rounded-full bg-cream px-4 py-2 text-sm">{service}</li>
          ))}
        </ul>
        <Link to="/reservations" className="mt-8 inline-flex min-h-[44px] items-center rounded-full bg-burnt px-6 font-semibold text-cream hover:bg-brown">
          Plan your visit
        </Link>
      </section>
    </div>
  );
}
