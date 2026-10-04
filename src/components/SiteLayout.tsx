import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/heritage", label: "Heritage" },
  { to: "/hotel-booking", label: "Hotel Booking" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 bg-coal text-coal-foreground shadow-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Explore Raniganj logo" width={44} height={44} className="h-11 w-11 rounded-full bg-card p-0.5" />
            <span className="font-display text-2xl font-bold">Explore Raniganj</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-3 py-1.5 text-sm font-semibold transition hover:bg-primary"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-coal py-6 text-center text-sm text-coal-foreground">
        © 2026 Explore Raniganj | Tourism &amp; Heritage of Raniganj
      </footer>
    </div>
  );
}
