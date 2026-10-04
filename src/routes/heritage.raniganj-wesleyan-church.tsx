import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/raniganj-wesleyan-church")({
  head: () => siteHead("raniganj-wesleyan-church"),
  component: Page,
});

function Page() {
  return <SitePage slug="raniganj-wesleyan-church" />;
}
