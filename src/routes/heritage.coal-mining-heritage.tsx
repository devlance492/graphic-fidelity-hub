import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/coal-mining-heritage")({
  head: () => siteHead("coal-mining-heritage"),
  component: Page,
});

function Page() {
  return <SitePage slug="coal-mining-heritage" />;
}
