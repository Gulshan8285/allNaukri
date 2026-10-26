"use client";

import { useState } from "react";
import { Search, CheckCircle2, Clock, ShieldCheck, Phone, AlertCircle } from "lucide-react";

export function ApplicationTracker() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    setSearched(true);

    // Look up in localStorage first
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("allnaukri_applications") || "[]");
      const found = stored.find(
        (app: any) =>
          app.id.toLowerCase() === query.trim().toLowerCase() ||
          app.phone.includes(query.trim())
      );

      if (found) {
        setResult(found);
        return;
      }
    }

    // Default realistic mock verification if valid 10 digits or AN- prefix
    if (/^\d{10}$/.test(query.trim()) || query.trim().toUpperCase().startsWith("AN-")) {
      setResult({
        id: query.trim().toUpperCase().startsWith("AN-")
          ? query.trim().toUpperCase()
          : `AN-AIR-${query.trim().slice(-6)}`,
        name: "Candidate Profile",
        phone: query.trim(),
        role: "Airport Ground Staff Executive",
        city: "Indira Gandhi International Airport (IGI Delhi)",
        salary: "₹35,000 - ₹35,800 / Month",
        security: "Lifetime Job Guarantee (Permanent)",
        status: "Document Verification In Progress",
        date: "26 Oct 2026",
        step: 2
      });
    } else {
      setResult(null);
    }
  }

  return (
    <div className="trackerCard softPanel">
      <div className="trackerHeader">
        <div className="trackerTitle">
          <span className="iconBubble">
            <Search size={18} />
          </span>
          <div>
            <h3>Check Application & Verification Status</h3>
            <p>Enter your 10-digit Mobile Number or Application Tracking ID</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleCheck} className="trackerForm">
        <div className="trackerInputWrap">
          <input
            type="text"
            placeholder="e.g. 8929103286 or AN-AIR-849201"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="trackerInput"
          />
          <button type="submit" className="btnPrimary trackerBtn">
            <Search size={16} />
            <span>Track Status</span>
          </button>
        </div>
      </form>

      {searched && (
        <div className="trackerResult">
          {result ? (
            <div className="resultSuccessCard">
              <div className="resultTop">
                <div className="resultStatusChip">
                  <Clock size={15} />
                  <span>{result.status || "Under Document Review"}</span>
                </div>
                <div className="resultAppId">ID: {result.id}</div>
              </div>

              <div className="resultGrid">
                <div>
                  <span className="resLabel">Assigned Role</span>
                  <strong>{result.role}</strong>
                </div>
                <div>
                  <span className="resLabel">Airport Station</span>
                  <strong>{result.city}</strong>
                </div>
                <div>
                  <span className="resLabel">Salary Package</span>
                  <strong className="textHighlight">{result.salary}</strong>
                </div>
                <div>
                  <span className="resLabel">Job Security</span>
                  <strong className="textSuccess">{result.security}</strong>
                </div>
              </div>

              <div className="resultSteps">
                <div className="stepItem completed">
                  <div className="stepDot">✓</div>
                  <span>1. Application Received</span>
                </div>
                <div className="stepItem active">
                  <div className="stepDot">2</div>
                  <span>2. Document Verification</span>
                </div>
                <div className="stepItem">
                  <div className="stepDot">3</div>
                  <span>3. HR Interview</span>
                </div>
                <div className="stepItem">
                  <div className="stepDot">4</div>
                  <span>4. Pass & Joining</span>
                </div>
              </div>

              <div className="resultFoot">
                <span>For immediate document clearance, contact HR desk:</span>
                <a href="tel:8929103286" className="directPhoneLink">
                  <Phone size={14} /> +91 8929103286
                </a>
              </div>
            </div>
          ) : (
            <div className="resultNotFound">
              <AlertCircle size={24} />
              <div>
                <strong>No Application Found for &quot;{query}&quot;</strong>
                <p>
                  Please check the number or fill a new free application form. Call HR at{" "}
                  <a href="tel:8929103286">8929103286</a> for direct phone assistance.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
