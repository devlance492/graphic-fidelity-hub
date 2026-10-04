import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/raniganj-railway-heritage")({
  head: () => siteHead("raniganj-railway-heritage"),
  component: Page,
});

function Page() {
  return <SitePage slug="raniganj-railway-heritage" />;
}
