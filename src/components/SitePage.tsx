import { Link } from "@tanstack/react-router";
import { SiteLayout } from "./SiteLayout";
import { getSite } from "@/lib/sites";

export function siteHead(slug: string) {
  const s = getSite(slug);
  const title = `${s.name} — Explore Raniganj`;
  return {
    meta: [
      { title },
      { name: "description", content: s.intro },
      { property: "og:title", content: title },
      { property: "og:description", content: s.intro },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function SitePage({ slug }: { slug: string }) {
  const s = getSite(slug);
  return (
    <SiteLayout>
      <article className="mx-auto max-w-4xl px-4 py-10">
        <Link to="/heritage" className="btn-outline mb-6">← Back to Heritage</Link>
        <p className="eyebrow">Heritage of Raniganj</p>
        <h1 className="mt-2 text-4xl text-foreground sm:text-6xl">{s.name}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{s.intro}</p>
        <img src={s.image} alt={s.name} width={1280} height={768} className="mt-6 w-full rounded-lg border-4 border-card object-cover shadow-lg" />
        <div className="mt-8 space-y-6">
          {s.sections.map((sec) => (
            <section key={sec.title} className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="border-l-4 border-primary pl-3 text-2xl sm:text-3xl">{sec.title}</h2>
              {sec.text.map((t, i) => (
                <p key={i} className="mt-3 leading-relaxed">{t}</p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/heritage" className="btn-primary">← Back to Heritage</Link>
        </div>
      </article>
    </SiteLayout>
  );
}
