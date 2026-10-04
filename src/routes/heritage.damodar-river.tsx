import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/damodar-river")({
  head: () => siteHead("damodar-river"),
  component: Page,
});

function Page() {
  return <SitePage slug="damodar-river" />;
}
