import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/biharinath-hill")({
  head: () => siteHead("biharinath-hill"),
  component: Page,
});

function Page() {
  return <SitePage slug="biharinath-hill" />;
}
