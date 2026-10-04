import { createFileRoute } from "@tanstack/react-router";
import { SitePage, siteHead } from "@/components/SitePage";

export const Route = createFileRoute("/heritage/kalyaneshwari-temple")({
  head: () => siteHead("kalyaneshwari-temple"),
  component: Page,
});

function Page() {
  return <SitePage slug="kalyaneshwari-temple" />;
}
