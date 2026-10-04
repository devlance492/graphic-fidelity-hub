import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { sites } from "@/lib/sites";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Explore Raniganj" },
      { name: "description", content: "Photographs of Raniganj's heritage and tourism sites: coal mines, railway, temples, river and hills." },
      { property: "og:title", content: "Gallery — Explore Raniganj" },
      { property: "og:description", content: "Photographs of Raniganj's heritage and tourism sites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-center text-4xl sm:text-6xl">Gallery</h1>
        <p className="mt-2 text-center text-muted-foreground">Images of the heritage and tourism places of Raniganj.</p>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {sites.map((s) => (
            <figure key={s.slug} className="mb-4 break-inside-avoid overflow-hidden rounded-lg border-4 border-card bg-card shadow-md">
              <img src={s.image} alt={s.name} loading="lazy" width={1280} height={768} className="w-full transition duration-500 hover:scale-105" />
              <figcaption className="px-3 py-2 text-center font-display text-lg font-semibold">{s.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
