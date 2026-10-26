"use client";

import {
  CalendarDays,
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
  Plane,
  Search,
  Send,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { AirportJob } from "../jobs";
import { QuickApplyModal } from "../components/QuickApplyModal";

const categoryOptions = [
  { id: "all", label: "All Departments" },
  { id: "ground-staff", label: "Ground Staff" },
  { id: "ticketing", label: "Ticketing & Check-In" },
  { id: "ramp-baggage", label: "Ramp & Baggage" },
  { id: "security", label: "Security & Screening" },
  { id: "cargo", label: "Cargo Logistics" },
  { id: "lounge", label: "VIP Lounge" }
];

export function SarkariNaukriFilters({ jobs }: { jobs: AirportJob[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedRole, setSelectedRole] = useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    const search = query.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !search ||
        [job.title, job.org, job.type, job.state, job.airport, job.qualification].some((value) =>
          value.toLowerCase().includes(search)
        );
      const matchesCategory = category === "all" || job.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [jobs, query, category]);

  function handleOpenApply(roleName?: string) {
    setSelectedRole(roleName);
    setIsModalOpen(true);
  }

  return (
    <section className="container directoryShell">
      <div className="filterPanel softPanel">
        <label className="searchField">
          <Search size={18} />
          <input
            aria-label="Search airport job"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by role, airport name, or city (e.g. Ground Staff, IGI, Ticketing)..."
            type="search"
            value={query}
          />
        </label>

        <div className="categoryFilterRow">
          {categoryOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`filterPillBtn ${category === opt.id ? "active" : ""}`}
              onClick={() => setCategory(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="directoryCount">
        <strong>{filteredJobs.length}</strong>
        <span>{filteredJobs.length === 1 ? "airport opening found" : "airport openings found"}</span>
      </div>

      <div className="jobList">
        {filteredJobs.map((job) => (
          <article className="jobRow softPanel airportRowItem" key={job.slug}>
            <div className="jobRowIcon">
              <Plane size={22} />
            </div>

            <div className="jobRowBody">
              <div className="rowPillRow">
                <span className="chip primaryChip">{job.type}</span>
                <span className="rowSalaryPill">{job.salary}</span>
                <span className="rowSecurityPill">Lifetime Security</span>
                <span className="rowFreePill">100% Free</span>
              </div>

              <h2>
                <Link href={`/naukri/${job.slug}`}>{job.title}</Link>
              </h2>

              <p>{job.body}</p>

              <div className="jobRowMeta">
                <span>
                  <MapPin size={14} />
                  {job.airport}
                </span>
                <span>
                  <strong>Eligibility:</strong> {job.qualification}
                </span>
                <span>
                  <CalendarDays size={14} />
                  {job.date}
                </span>
              </div>
            </div>

            <div className="jobRowActionButtons">
              <button
                type="button"
                onClick={() => handleOpenApply(job.title)}
                className="btnPrimary btnSmall"
              >
                <Send size={14} />
                <span>Apply Free</span>
              </button>

              <Link className="detailButton" href={`/naukri/${job.slug}`}>
                Details
              </Link>

              <a href="tel:8929103286" className="callBtnSmall" title="Call HR Helpline">
                <Phone size={14} />
                <span>Call HR</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="emptyJobs softPanel">
          <h2>No matching airport jobs found</h2>
          <p>Try searching with another keyword or select &quot;All Departments&quot; above.</p>
        </div>
      )}

      <QuickApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultRole={selectedRole}
      />
    </section>
  );
}
