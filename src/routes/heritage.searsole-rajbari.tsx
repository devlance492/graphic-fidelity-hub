import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/searsole-rajbari")({
  head: () => siteHead("searsole-rajbari"),
  component: Page,
});

function Page() {
  return <SitePage slug="searsole-rajbari" />;
}
