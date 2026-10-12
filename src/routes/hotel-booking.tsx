import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, type FormEvent } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/hotel-booking")({
  head: () => ({
    meta: [
      { title: "Hotel Booking — Explore Raniganj" },
      { name: "description", content: "Request a hotel stay in Raniganj: choose dates, guests, rooms and room type." },
      { property: "og:title", content: "Hotel Booking — Explore Raniganj" },
      { property: "og:description", content: "Request a hotel stay in Raniganj." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Booking,
});

function Booking() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    formRef.current?.reset();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-center text-4xl sm:text-6xl">Hotel Booking</h1>
        <p className="mt-2 text-center text-muted-foreground">Fill in your details to request a stay in Raniganj.</p>
        <form ref={formRef} onSubmit={onSubmit} className="mt-8 grid gap-5 rounded-lg border bg-card p-6 shadow-md sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="label" htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" pattern="[0-9+\- ]{10,15}" required className="field" />
          </div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="address">Address</label>
            <input id="address" name="address" type="text" required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="checkin">Check-in Date</label>
            <input id="checkin" name="checkin" type="date" required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="checkout">Check-out Date</label>
            <input id="checkout" name="checkout" type="date" required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="adults">Number of Adults</label>
            <input id="adults" name="adults" type="number" min={1} max={10} defaultValue={1} required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="children">Number of Children</label>
            <input id="children" name="children" type="number" min={0} max={10} defaultValue={0} className="field" />
          </div>
          <div>
            <label className="label" htmlFor="guests">Number of Guests</label>
            <input id="guests" name="guests" type="number" min={1} max={20} defaultValue={1} required className="field" />
          </div>
          <div>
            <label className="label" htmlFor="rooms">Number of Rooms</label>
            <select id="rooms" name="rooms" className="field">
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <fieldset className="sm:col-span-2">
            <legend className="label">Room Type</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Single Room", "Double Room", "Deluxe Room", "Family Room"].map((r, i) => (
                <label key={r} className="flex cursor-pointer items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm">
                  <input type="radio" name="roomType" value={r} defaultChecked={i === 0} className="accent-primary" />
                  {r}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="requests">Special Requests</label>
            <textarea id="requests" name="requests" rows={4} className="field" placeholder="e.g. early check-in, ground-floor room" />
          </div>
          <div className="flex flex-wrap gap-3 sm:col-span-2">
            <button type="submit" className="btn-primary">Submit Booking</button>
            <button type="reset" className="btn-outline">Clear Form</button>
          </div>
        </form>
      </section>

      {sent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Booking confirmed"
          onClick={() => setSent(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            animation: "hbk-fadeIn 0.25s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "1.25rem",
              padding: "2.75rem 2.25rem",
              maxWidth: 400,
              width: "90%",
              textAlign: "center",
              boxShadow: "0 24px 64px rgba(0,0,0,0.22)",
              animation: "hbk-slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <svg viewBox="0 0 80 80" width={96} height={96} style={{ margin: "0 auto 1.5rem", display: "block" }} aria-hidden="true">
              <circle cx="40" cy="40" r="38" fill="#f0fdf4" />
              <circle
                cx="40" cy="40" r="34"
                fill="none"
                stroke="#22c55e"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeDasharray="214"
                strokeDashoffset="214"
                style={{ animation: "hbk-drawCircle 0.55s ease forwards", transformOrigin: "center", transform: "rotate(-90deg)" }}
              />
              <polyline
                points="23,42 35,54 57,29"
                fill="none"
                stroke="#16a34a"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="55"
                strokeDashoffset="55"
                style={{ animation: "hbk-drawTick 0.4s 0.5s ease forwards" }}
              />
            </svg>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>
              Booking Confirmed!
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.95rem", lineHeight: 1.65, margin: "0 0 2rem" }}>
              Thank you! Your booking request has been received.<br />
              Our team will get in touch with you shortly.
            </p>
            <button
              id="booking-success-done"
              onClick={() => setSent(false)}
              style={{
                background: "#22c55e",
                color: "#fff",
                border: "none",
                borderRadius: "0.65rem",
                padding: "0.7rem 2.25rem",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#22c55e"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Done
            </button>
          </div>

          <style>{`
            @keyframes hbk-fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes hbk-slideUp { from { opacity: 0; transform: translateY(50px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
            @keyframes hbk-drawCircle { to { stroke-dashoffset: 0; } }
            @keyframes hbk-drawTick { to { stroke-dashoffset: 0; } }
          `}</style>
        </div>
      )}
    </SiteLayout>
  );
}
