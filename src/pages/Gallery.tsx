import Img from "../components/Img";
import { useSeo } from "../hooks/useSeo";

const photos = [
  { src: "/images/gallery/grill.jpg", alt: "Fresh food cooking over an open grill", title: "From the fire" },
  { src: "/images/gallery/dining-room.jpg", alt: "Warmly lit restaurant dining room", title: "Gather around" },
  { src: "/images/gallery/chef-at-work.jpg", alt: "Chef preparing a dish in the kitchen", title: "Made with care" },
  { src: "/images/gallery/cocktails.jpg", alt: "Colorful drinks ready to serve", title: "A toast to good times" },
  { src: "/images/gallery/sharing-a-meal.jpg", alt: "Friends sharing a meal together", title: "Good food, shared" },
  { src: "/images/gallery/restaurant-table.jpg", alt: "A prepared table in the restaurant", title: "Your table is waiting" },
];

export default function Gallery() {
  useSeo("Gallery", "A look inside Ember & Oak: our food, fire and gathering spaces.");

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-32">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-burnt">A taste of Ember & Oak</p>
        <h1 className="mt-3 text-5xl font-bold">Our Gallery</h1>
        <p className="mt-4 text-charcoal/70">Gather around the fire for bold flavours, warm company and memorable moments.</p>
      </header>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <figure key={photo.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brown">
            <Img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent px-5 pb-5 pt-12 text-lg font-semibold text-cream">
              {photo.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
