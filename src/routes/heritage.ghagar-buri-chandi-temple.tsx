import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/ghagar-buri-chandi-temple")({
  head: () => siteHead("ghagar-buri-chandi-temple"),
  component: Page,
});

function Page() {
  return <SitePage slug="ghagar-buri-chandi-temple" />;
}
