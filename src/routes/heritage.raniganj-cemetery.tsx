import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/raniganj-cemetery")({
  head: () => siteHead("raniganj-cemetery"),
  component: Page,
});

function Page() {
  return <SitePage slug="raniganj-cemetery" />;
}
