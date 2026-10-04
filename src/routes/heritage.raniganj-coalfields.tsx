import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/raniganj-coalfields")({
  head: () => siteHead("raniganj-coalfields"),
  component: Page,
});

function Page() {
  return <SitePage slug="raniganj-coalfields" />;
}
