import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import logo from "@/assets/logo.png";
import hero from "@/assets/coal-mining.jpg";
import { sites } from "@/lib/sites";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore Raniganj — Tourism & Heritage of Raniganj" },
      { name: "description", content: "Discover the coal-mining, railway, religious and cultural heritage of Raniganj, West Bengal." },
      { property: "og:title", content: "Explore Raniganj — Tourism & Heritage of Raniganj" },
      { property: "og:description", content: "Discover the coal-mining, railway, religious and cultural heritage of Raniganj, West Bengal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div className="text-center md:text-left">
          <img src={logo} alt="Explore Raniganj logo" width={120} height={120} className="mx-auto h-28 w-28 md:mx-0" />
          <h1 className="mt-4 text-6xl tracking-wide text-primary sm:text-8xl">RANIGANJ</h1>
          <p className="mt-2 font-display text-2xl italic">Tourism &amp; Heritage of Raniganj</p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Raniganj, in Paschim Bardhaman district of West Bengal, is widely regarded as the birthplace of
            commercial coal mining in India. Its early railway connection, colonial-era churches and cemetery,
            nearby temples, palaces, the Damodar River and green hills make it a rewarding place to explore.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link to="/heritage" className="btn-primary">Explore Heritage Sites</Link>
            <Link to="/hotel-booking" className="btn-outline">Book a Hotel</Link>
          </div>
        </div>
        <img src={hero} alt="Historic coal mine headframe near Raniganj" width={1280} height={768} className="w-full rounded-lg border-4 border-card shadow-xl" />
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-center text-3xl sm:text-4xl">Highlights</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {sites.slice(0, 3).map((s) => (
            <Link key={s.slug} to={`/heritage/${s.slug}` as "/heritage"} className="overflow-hidden rounded-lg border bg-card shadow-sm transition hover:shadow-md">
              <img src={s.image} alt={s.name} loading="lazy" width={1280} height={768} className="aspect-[5/3] w-full object-cover" />
              <p className="p-4 font-display text-xl font-bold">{s.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
