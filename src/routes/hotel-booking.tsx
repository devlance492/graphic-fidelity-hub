import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
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
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-center text-4xl sm:text-6xl">Hotel Booking</h1>
        <p className="mt-2 text-center text-muted-foreground">Fill in your details to request a stay in Raniganj.</p>
        <form onSubmit={onSubmit} onReset={() => setSent(false)} className="mt-8 grid gap-5 rounded-lg border bg-card p-6 shadow-md sm:grid-cols-2">
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
          {sent && (
            <p className="rounded-md bg-secondary p-3 text-sm sm:col-span-2" role="status">
              Thank you! Your booking request has been received. (Demo form — no real booking is made.)
            </p>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}
