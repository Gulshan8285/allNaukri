"use client";

import { useState } from "react";
import { X, CheckCircle2, Phone, Mail, Send, ShieldCheck, ArrowRight, FileCheck } from "lucide-react";

interface QuickApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export function QuickApplyModal({ isOpen, onClose, defaultRole }: QuickApplyModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "Male",
    age: "22",
    qualification: "12th Pass",
    role: defaultRole || "Airport Ground Staff & Customer Service Executive",
    airportCity: "Delhi NCR (IGI Airport)",
    experience: "Fresher (0 - 1 Year)",
    address: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast reliable application registration
    setTimeout(() => {
      const generatedId = `AN-AIR-${Math.floor(100000 + Math.random() * 900000)}`;
      setTrackingId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);

      // Save to local storage for status checking
      if (typeof window !== "undefined") {
        const stored = JSON.parse(localStorage.getItem("allnaukri_applications") || "[]");
        stored.unshift({
          id: generatedId,
          name: formData.fullName,
          phone: formData.phone,
          role: formData.role,
          city: formData.airportCity,
          salary: "₹35,000 - ₹35,800 / Month",
          security: "Permanent / Lifetime Assurance",
          status: "Under Document Review",
          date: new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
          })
        });
        localStorage.setItem("allnaukri_applications", JSON.stringify(stored.slice(0, 10)));
      }
    }, 600);
  }

  const whatsappMessage = encodeURIComponent(
    `Hello HR Team (All Naukri),\nI have submitted my application for Airport Job.\n\n*Application ID:* ${trackingId}\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Position:* ${formData.role}\n*Airport City:* ${formData.airportCity}\n*Qualification:* ${formData.qualification}\n\nPlease verify my documents and schedule my joining verification.`
  );

  return (
    <div className="modalOverlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modalCard" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modalCloseBtn"
          onClick={onClose}
          aria-label="Close Application Modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modalHeader">
              <span className="modalBadge">✈️ 100% FREE APPLICATION</span>
              <h2>Airport Ground Staff Job Application</h2>
              <p>
                Salary: <strong>₹35,000 to ₹35,800/Month</strong> • Lifetime Job Security (Permanent) • Zero Fees
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modalForm">
              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="phone">Mobile / WhatsApp Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="email">Email Address (Optional)</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="role">Desired Airport Role *</label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="Airport Ground Staff & Customer Service Executive">
                      Ground Staff & Passenger Service Executive
                    </option>
                    <option value="Airline Ticketing & Boarding Pass Counter Assistant">
                      Ticketing & Boarding Pass Assistant
                    </option>
                    <option value="Airport Ramp Officer & Baggage Handling Assistant">
                      Ramp Officer & Baggage Handling Assistant
                    </option>
                    <option value="Airport Security Assistant & Boarding Gate Screener">
                      Security Assistant & Document Screener
                    </option>
                    <option value="Air Cargo Operations Associate & Parcel Documentation Clerk">
                      Air Cargo Operations Associate
                    </option>
                    <option value="Airport VIP Lounge Assistant & Passenger Hospitality Executive">
                      VIP Lounge & Hospitality Executive
                    </option>
                    <option value="Airport Tarmac Passenger Bus Driver & Ramp Equipment Operator">
                      Tarmac Passenger Bus Driver
                    </option>
                    <option value="Aircraft Cabin Cleaning & Quick Turnaround Assistant">
                      Cabin Cleaning & Turnaround Assistant
                    </option>
                  </select>
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="qualification">Highest Educational Qualification *</label>
                  <select
                    id="qualification"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  >
                    <option value="10th Pass">10th Pass</option>
                    <option value="12th Pass">12th Pass (Any Stream)</option>
                    <option value="Graduate">Graduate (BA / B.Com / B.Sc / BBA / B.Tech etc.)</option>
                    <option value="Post Graduate / Diploma">Post Graduate / Diploma</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="airportCity">Preferred Airport Location *</label>
                  <select
                    id="airportCity"
                    value={formData.airportCity}
                    onChange={(e) => setFormData({ ...formData, airportCity: e.target.value })}
                  >
                    <option value="Delhi NCR (IGI Airport)">Delhi NCR (IGI Airport)</option>
                    <option value="Mumbai (CSMIA Airport)">Mumbai (CSMIA Airport)</option>
                    <option value="Bengaluru (KIA Airport)">Bengaluru (KIA Airport)</option>
                    <option value="Kolkata (NSCBI Airport)">Kolkata (NSCBI Airport)</option>
                    <option value="Hyderabad (RGIA Airport)">Hyderabad (RGIA Airport)</option>
                    <option value="Chennai (MAA Airport)">Chennai (MAA Airport)</option>
                    <option value="Ahmedabad (SVPIA Airport)">Ahmedabad (SVPIA Airport)</option>
                    <option value="Lucknow (CCSI Airport)">Lucknow (CCSI Airport)</option>
                    <option value="Jaipur (JAI Airport)">Jaipur (JAI Airport)</option>
                    <option value="Patna / All India Regional Airports">
                      Patna / All India Regional Airports
                    </option>
                  </select>
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="age">Age (Years)</label>
                  <input
                    id="age"
                    type="number"
                    min="18"
                    max="45"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>
              </div>

              <div className="formSecurityNote">
                <ShieldCheck size={18} />
                <span>
                  <strong>All Naukri Guarantee:</strong> No registration fee. Lifetime job tenure
                  (permanent position until voluntary resignation).
                </span>
              </div>

              <div className="modalActions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btnPrimary btnBlock btnGlow"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Free Application</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>

              <div className="formDirectHelp">
                <span>Need urgent assistance? Call HR desk:</span>
                <a href="tel:8929103286" className="directPhoneLink">
                  <Phone size={14} /> +91 8929103286
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="modalSuccess">
            <div className="successBadge">
              <CheckCircle2 size={44} />
            </div>

            <h2>Application Submitted Successfully!</h2>
            <p className="successSubtitle">
              Your profile has been registered in the All Naukri Airport Recruitment Portal.
            </p>

            <div className="trackingIdCard">
              <div className="trackingLabel">YOUR APPLICATION TRACKING ID</div>
              <div className="trackingValue">{trackingId}</div>
              <div className="trackingNote">Please take a screenshot or note this ID.</div>
            </div>

            <div className="submittedSummary">
              <div className="sumRow">
                <span>Candidate Name:</span>
                <strong>{formData.fullName}</strong>
              </div>
              <div className="sumRow">
                <span>Mobile Number:</span>
                <strong>{formData.phone}</strong>
              </div>
              <div className="sumRow">
                <span>Role:</span>
                <strong>{formData.role}</strong>
              </div>
              <div className="sumRow">
                <span>Airport Hub:</span>
                <strong>{formData.airportCity}</strong>
              </div>
              <div className="sumRow">
                <span>Salary:</span>
                <strong>₹35,000 - ₹35,800 / Month</strong>
              </div>
              <div className="sumRow">
                <span>Job Assurance:</span>
                <strong className="textSuccess">Lifetime Permanent Tenure</strong>
              </div>
            </div>

            <div className="successActions">
              <a
                href={`https://wa.me/918929103286?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btnWhatsapp"
              >
                <span>Send Details on WhatsApp to HR (Instant Verification)</span>
                <ArrowRight size={16} />
              </a>

              <a href="tel:8929103286" className="btnSecondary btnBlock">
                <Phone size={16} />
                <span>Call HR Desk: +91 8929103286</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btnCloseModal"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
