import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/nehru-park")({
  head: () => siteHead("nehru-park"),
  component: Page,
});

function Page() {
  return <SitePage slug="nehru-park" />;
}
