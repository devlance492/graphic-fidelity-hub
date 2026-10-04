import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { sites } from "@/lib/sites";

export const Route = createFileRoute("/heritage/")({
  head: () => ({
    meta: [
      { title: "Heritage of Raniganj — Explore Raniganj" },
      { name: "description", content: "Browse 11 heritage and tourism sites of Raniganj: coal mining, railway, churches, temples, rivers and hills." },
      { property: "og:title", content: "Heritage of Raniganj — Explore Raniganj" },
      { property: "og:description", content: "Browse 11 heritage and tourism sites of Raniganj." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HeritagePage,
});

function HeritagePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="eyebrow text-center">11 sites to discover</p>
        <h1 className="mt-2 text-center text-4xl sm:text-6xl">Heritage of Raniganj</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((s) => {
            const href = `/heritage/${s.slug}`;
            return (
              <div key={s.slug} className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition hover:shadow-lg">
                <a href={href}>
                  <img src={s.image} alt={s.name} loading="lazy" width={1280} height={768} className="aspect-[5/3] w-full object-cover transition hover:opacity-90" />
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-2xl">{s.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.intro}</p>
                  <a href={href} className="btn-primary mt-4 self-start">Read more →</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
