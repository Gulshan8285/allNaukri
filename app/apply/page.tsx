"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  HelpCircle,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "Male",
    age: "23",
    qualification: "12th Pass",
    role: "Airport Ground Staff & Customer Service Executive",
    airportCity: "Delhi NCR (IGI Airport)",
    experience: "Fresher (0 - 1 Year)",
    address: "",
    pinCode: "",
    state: "Delhi NCR",
    idProof: "Aadhaar Card"
  });

  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `AN-AIR-${Math.floor(100000 + Math.random() * 900000)}`;
      setTrackingId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);

      if (typeof window !== "undefined") {
        const stored = JSON.parse(localStorage.getItem("allnaukri_applications") || "[]");
        stored.unshift({
          id: generatedId,
          name: formData.fullName,
          phone: formData.phone,
          role: formData.role,
          city: formData.airportCity,
          salary: "₹35,000 - ₹35,800 / Month",
          security: "Lifetime Job Assurance (Permanent)",
          status: "Document Verification In Progress",
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
    `Hello HR Team (All Naukri),\nI have submitted my application for Airport Job.\n\n*Application ID:* ${trackingId}\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Position:* ${formData.role}\n*Airport City:* ${formData.airportCity}\n*Qualification:* ${formData.qualification}\n\nPlease check my documents for joining.`
  );

  return (
    <main className="applyPage">
      <div className="container applyShell">
        <section className="applyHero softPanel">
          <div className="applyHeroLeft">
            <span className="chip primaryChip">✈️ Official Career Portal</span>
            <h1>Airport Ground Staff & Aviation Services Application</h1>
            <p className="heroDesc">
              Join leading airport operations across India. 100% Free Application • Lifetime Job Security (Permanent Tenure) • Salary ₹35,000 - ₹35,800 / Month.
            </p>

            <div className="applyHighlightsGrid">
              <div className="applyHighlightItem">
                <ShieldCheck size={18} />
                <span>Permanent Tenure Guarantee</span>
              </div>
              <div className="applyHighlightItem">
                <span>💰</span>
                <span>Fixed ₹35,000 - ₹35,800 Starting Pay</span>
              </div>
              <div className="applyHighlightItem">
                <span>🆓</span>
                <span>Zero Application Fees</span>
              </div>
              <div className="applyHighlightItem">
                <Plane size={18} />
                <span>Domestic & International Terminals</span>
              </div>
            </div>
          </div>

          <div className="applyHeroRight">
            <div className="hrQuickDesk">
              <h4>Direct HR Verification Desk</h4>
              <p>For urgent calling or WhatsApp assistance regarding open slots:</p>
              <a href="tel:8929103286" className="deskPhone">
                <Phone size={17} />
                <span>+91 8929103286</span>
              </a>
              <div className="deskEmail">Email: hr@allnaukri.in</div>
              <small className="deskTiming">Available: Mon - Sat (9:30 AM to 6:30 PM)</small>
            </div>
          </div>
        </section>

        {!submitted ? (
          <section className="applyFormCard softPanel">
            <div className="formCardHeader">
              <h2>Candidate Online Enrolment Form</h2>
              <p>Fill accurate details as per your educational marksheet and Aadhaar Card.</p>
            </div>

            <form onSubmit={handleSubmit} className="fullApplyForm">
              <div className="formSectionTitle">
                <span>1. Personal & Contact Details</span>
              </div>

              <div className="formGridThree">
                <div className="formGroup">
                  <label htmlFor="fullName">Full Name (As per Aadhaar) *</label>
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
                    title="Please enter 10 digit phone number"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. candidate@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="formGridThree">
                <div className="formGroup">
                  <label htmlFor="gender">Gender *</label>
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
                  <label htmlFor="age">Age (In Years) *</label>
                  <input
                    id="age"
                    type="number"
                    min="18"
                    max="45"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="idProof">Primary Government ID</label>
                  <select
                    id="idProof"
                    value={formData.idProof}
                    onChange={(e) => setFormData({ ...formData, idProof: e.target.value })}
                  >
                    <option value="Aadhaar Card">Aadhaar Card</option>
                    <option value="PAN Card">PAN Card</option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Driving License">Driving License</option>
                  </select>
                </div>
              </div>

              <div className="formSectionTitle">
                <span>2. Position & Airport Preference</span>
              </div>

              <div className="formGridTwo">
                <div className="formGroup">
                  <label htmlFor="role">Desired Airport Position *</label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="Airport Ground Staff & Customer Service Executive">
                      Airport Ground Staff & Customer Service Executive (₹35,000 - ₹35,800)
                    </option>
                    <option value="Airline Ticketing & Boarding Pass Counter Assistant">
                      Airline Ticketing & Boarding Pass Counter Assistant (₹35,200 - ₹35,800)
                    </option>
                    <option value="Airport Ramp Officer & Baggage Handling Assistant">
                      Airport Ramp Officer & Baggage Handling Assistant (₹35,000 - ₹35,600)
                    </option>
                    <option value="Airport Security Assistant & Boarding Gate Screener">
                      Airport Security Assistant & Boarding Gate Screener (₹35,500 - ₹35,800)
                    </option>
                    <option value="Air Cargo Operations Associate & Parcel Documentation Clerk">
                      Air Cargo Operations Associate & Parcel Documentation Clerk (₹35,000 - ₹35,800)
                    </option>
                    <option value="Airport VIP Lounge Assistant & Passenger Hospitality Executive">
                      Airport VIP Lounge Assistant & Passenger Hospitality (₹35,400 - ₹35,800)
                    </option>
                    <option value="Airport Tarmac Passenger Bus Driver & Ramp Equipment Operator">
                      Airport Tarmac Passenger Bus Driver (₹35,000 - ₹35,800)
                    </option>
                    <option value="Aircraft Cabin Cleaning & Quick Turnaround Assistant">
                      Aircraft Cabin Cleaning & Turnaround Assistant (₹35,000 - ₹35,400)
                    </option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="airportCity">Preferred Airport Hub *</label>
                  <select
                    id="airportCity"
                    value={formData.airportCity}
                    onChange={(e) => setFormData({ ...formData, airportCity: e.target.value })}
                  >
                    <option value="Delhi NCR (IGI Airport T1/T2/T3)">Delhi NCR (IGI Airport T1/T2/T3)</option>
                    <option value="Mumbai (CSMIA Airport T1/T2)">Mumbai (CSMIA Airport T1/T2)</option>
                    <option value="Bengaluru (KIA Airport)">Bengaluru (KIA Airport)</option>
                    <option value="Kolkata (NSCBI Airport)">Kolkata (NSCBI Airport)</option>
                    <option value="Hyderabad (RGIA Airport)">Hyderabad (RGIA Airport)</option>
                    <option value="Chennai (MAA Airport)">Chennai (MAA Airport)</option>
                    <option value="Ahmedabad (SVPIA Airport)">Ahmedabad (SVPIA Airport)</option>
                    <option value="Lucknow (CCSI Airport)">Lucknow (CCSI Airport)</option>
                    <option value="Jaipur (JAI Airport)">Jaipur (JAI Airport)</option>
                    <option value="Goa (Mopa / Dabolim Airport)">Goa (Mopa / Dabolim Airport)</option>
                    <option value="Patna (Jay Prakash Narayan Airport)">Patna Airport</option>
                    <option value="All India Regional Airports (Any Hub)">All India Regional Airports (Any Hub)</option>
                  </select>
                </div>
              </div>

              <div className="formGridTwo">
                <div className="formGroup">
                  <label htmlFor="qualification">Highest Educational Qualification *</label>
                  <select
                    id="qualification"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  >
                    <option value="10th Pass">10th Pass</option>
                    <option value="12th Pass">12th Pass (Arts / Science / Commerce)</option>
                    <option value="Graduate">Graduate (Any Stream)</option>
                    <option value="Diploma / Aviation Certificate">Diploma / Aviation Certificate</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="experience">Prior Work Experience</label>
                  <select
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  >
                    <option value="Fresher (0 - 1 Year)">Fresher (0 - 1 Year) - Freshers Welcome</option>
                    <option value="1 - 2 Years Aviation Experience">1 - 2 Years Aviation Experience</option>
                    <option value="2+ Years Ground Operations">2+ Years Ground Operations</option>
                    <option value="Customer Care / Hospitality Experience">Customer Care / Hospitality Experience</option>
                  </select>
                </div>
              </div>

              <div className="formSectionTitle">
                <span>3. Residential Address</span>
              </div>

              <div className="formGridTwo">
                <div className="formGroup">
                  <label htmlFor="address">Full Residential Address *</label>
                  <input
                    id="address"
                    type="text"
                    required
                    placeholder="House / Street / City / District"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="pinCode">Pin Code *</label>
                  <input
                    id="pinCode"
                    type="text"
                    required
                    placeholder="6-digit Area Pin Code"
                    value={formData.pinCode}
                    onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                  />
                </div>
              </div>

              <div className="formSecurityDeclaration">
                <ShieldCheck size={24} />
                <div>
                  <strong>All Naukri Lifetime Job & Free Placement Guarantee:</strong>
                  <p>
                    I understand that this application is 100% free of cost. I am applying for permanent
                    airport operations employment with salary range ₹35,000 to ₹35,800/month. No agent is
                    authorized to charge money.
                  </p>
                </div>
              </div>

              <div className="formSubmitRow">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btnPrimary btnLarge btnGlow"
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

                <a href="tel:8929103286" className="btnSecondary btnLarge">
                  <Phone size={18} />
                  <span>Call HR Desk: +91 8929103286</span>
                </a>
              </div>
            </form>
          </section>
        ) : (
          <section className="applySuccessCard softPanel">
            <div className="successIconBubble">
              <CheckCircle2 size={54} />
            </div>

            <h2>Application Submitted Successfully!</h2>
            <p className="successLead">
              Thank you, <strong>{formData.fullName}</strong>. Your application has been logged into the
              All Naukri Airport Staffing Gateway.
            </p>

            <div className="trackingIdBox">
              <span className="lbl">YOUR OFFICIAL APPLICATION TRACKING ID</span>
              <span className="val">{trackingId}</span>
              <span className="sub">Keep this ID safe for document verification and interview slot booking.</span>
            </div>

            <div className="appSummaryTable">
              <div className="appSumItem">
                <span>Applied Role</span>
                <strong>{formData.role}</strong>
              </div>
              <div className="appSumItem">
                <span>Airport Station</span>
                <strong>{formData.airportCity}</strong>
              </div>
              <div className="appSumItem">
                <span>Starting Salary</span>
                <strong className="textHighlight">₹35,000 - ₹35,800 / Month</strong>
              </div>
              <div className="appSumItem">
                <span>Job Security</span>
                <strong className="textSuccess">Lifetime Permanent Assurance</strong>
              </div>
              <div className="appSumItem">
                <span>Registered Mobile</span>
                <strong>{formData.phone}</strong>
              </div>
              <div className="appSumItem">
                <span>Application Fee</span>
                <strong className="textFree">₹0 (100% Free)</strong>
              </div>
            </div>

            <div className="successNextSteps">
              <h3>Next Steps for Verification:</h3>
              <ol>
                <li>Click the button below to send your Application ID to HR on WhatsApp for instant confirmation.</li>
                <li>Keep clear photos of your 10th/12th certificate and Aadhaar ready.</li>
                <li>Our HR department will call you on <strong>{formData.phone}</strong> within 24 to 48 hours.</li>
              </ol>
            </div>

            <div className="successActionBtns">
              <a
                href={`https://wa.me/918929103286?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btnWhatsapp btnLarge"
              >
                <span>Confirm on WhatsApp with HR (+91 8929103286)</span>
                <ArrowRight size={18} />
              </a>

              <a href="tel:8929103286" className="btnSecondary btnLarge">
                <Phone size={18} />
                <span>Call HR Helpline Now</span>
              </a>

              <Link href="/" className="btnOutline">
                <span>Return to Homepage</span>
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
