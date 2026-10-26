import { BriefcaseBusiness, Plane, ShieldCheck } from "lucide-react";
import { jobs } from "../jobs";
import { SarkariNaukriFilters } from "./sarkari-naukri-filters";

export const metadata = {
  title: "Airport Openings & Ground Staff Jobs | All Naukri",
  description:
    "Explore latest Airport Ground Staff, Airline Ticketing, Ramp Operations, Baggage Handling, and Aviation Services vacancies. Salary ₹35,000 - ₹35,800/mo, lifetime job security, 100% free application.",
  keywords: [
    "Airport Ground Staff Jobs",
    "Airport Jobs 2026",
    "Airline Ticketing Jobs",
    "Ramp Officer Vacancy",
    "All Naukri Airport",
    "Airport Careers India"
  ],
  alternates: {
    canonical: "/sarkari-naukri"
  }
};

export default function SarkariNaukriPage() {
  return (
    <main className="directoryPage">
      <section className="container directoryHero">
        <span className="iconBubble">
          <Plane size={24} />
        </span>
        <div>
          <span className="chip primaryChip">Airport Job Openings 2026</span>
          <h1>Airport Ground Staff & Aviation Services Vacancies</h1>
          <p>
            Filter by airport department, search by city or role, and apply online for free.
            Permanent appointment with guaranteed starting salary ₹35,000 to ₹35,800 / Month.
          </p>
        </div>
      </section>

      <SarkariNaukriFilters jobs={jobs} />
    </main>
  );
}
