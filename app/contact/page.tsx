"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plane,
  Send,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  const [queryForm, setQueryForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Airport Ground Staff Job Query",
    message: ""
  });
  const [sent, setSent] = useState(false);

  function handleSendQuery(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <Headphones size={22} />
          </span>
          <div>
            <span className="chip primaryChip">Official Helpline</span>
            <h1>Contact All Naukri Airport HR Desk</h1>
            <p>
              Get in touch with our recruitment team for airport job vacancies, application tracking,
              and document verification support.
            </p>
          </div>
        </div>

        <div className="contactPageGrid">
          {/* Left Cards: Contact Info & Support */}
          <div className="contactInfoCards">
            <div className="contactCardItem softPanel highlightCard">
              <div className="contactCardIcon">
                <Phone size={22} />
              </div>
              <div>
                <h3>Official HR Phone Helpline</h3>
                <p>Call directly for job enquiries and interview scheduling:</p>
                <a href="tel:8929103286" className="phoneLinkLarge">
                  +91 8929103286
                </a>
                <small className="contactNote">Mon - Sat: 9:30 AM to 6:30 PM (IST)</small>
              </div>
            </div>

            <div className="contactCardItem softPanel">
              <div className="contactCardIcon whatsappIcon">
                <MessageSquare size={22} />
              </div>
              <div>
                <h3>Official WhatsApp Support</h3>
                <p>Send your resume or Application ID for quick verification:</p>
                <a
                  href="https://wa.me/918929103286?text=Hello%20HR%2C%20I%20have%20a%20query%20regarding%20Airport%20Job%20Vacancies."
                  target="_blank"
                  rel="noreferrer"
                  className="whatsappLinkLarge"
                >
                  Chat on WhatsApp (+91 8929103286)
                </a>
                <small className="contactNote">Instant automated response & HR callback</small>
              </div>
            </div>

            <div className="contactCardItem softPanel">
              <div className="contactCardIcon emailIcon">
                <Mail size={22} />
              </div>
              <div>
                <h3>Official HR Email</h3>
                <p>Submit candidate documentation or employer partnerships:</p>
                <a href="mailto:hr@allnaukri.in" className="emailLinkLarge">
                  hr@allnaukri.in
                </a>
                <small className="contactNote">Official domain verified inbox</small>
              </div>
            </div>

            <div className="contactCardItem softPanel">
              <div className="contactCardIcon locIcon">
                <MapPin size={22} />
              </div>
              <div>
                <h3>Aviation Recruitment Center</h3>
                <p>
                  Aerocity Aviation Logistics Hub, Near Terminal 3 Gate 8,
                  Indira Gandhi International Airport Zone,
                  New Delhi - 110037, India
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Query Form */}
          <div className="contactFormWrap softPanel">
            {!sent ? (
              <div>
                <div className="formHeader">
                  <h2>Send Direct Message to HR</h2>
                  <p>We typically respond within 2 to 4 business hours.</p>
                </div>

                <form onSubmit={handleSendQuery} className="contactQueryForm">
                  <div className="formGroup">
                    <label htmlFor="cName">Your Full Name *</label>
                    <input
                      id="cName"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={queryForm.name}
                      onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                    />
                  </div>

                  <div className="formGroup">
                    <label htmlFor="cPhone">Mobile / WhatsApp Number *</label>
                    <input
                      id="cPhone"
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={queryForm.phone}
                      onChange={(e) => setQueryForm({ ...queryForm, phone: e.target.value })}
                    />
                  </div>

                  <div className="formGroup">
                    <label htmlFor="cEmail">Email Address</label>
                    <input
                      id="cEmail"
                      type="email"
                      placeholder="Your email address"
                      value={queryForm.email}
                      onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
                    />
                  </div>

                  <div className="formGroup">
                    <label htmlFor="cSubject">Query Topic</label>
                    <select
                      id="cSubject"
                      value={queryForm.subject}
                      onChange={(e) => setQueryForm({ ...queryForm, subject: e.target.value })}
                    >
                      <option value="Airport Ground Staff Job Query">Airport Ground Staff Job Query</option>
                      <option value="Airline Ticketing Vacancy">Airline Ticketing Vacancy</option>
                      <option value="Ramp & Baggage Handling Role">Ramp & Baggage Handling Role</option>
                      <option value="Check Application Status">Check Application Status</option>
                      <option value="Report Unauthorized Agent / Fraud">Report Unauthorized Agent / Fraud</option>
                    </select>
                  </div>

                  <div className="formGroup">
                    <label htmlFor="cMessage">Message / Specific Query *</label>
                    <textarea
                      id="cMessage"
                      rows={4}
                      required
                      placeholder="Please mention your question, preferred airport city, or application reference ID..."
                      value={queryForm.message}
                      onChange={(e) => setQueryForm({ ...queryForm, message: e.target.value })}
                    />
                  </div>

                  <div className="contactSecurityNote">
                    <ShieldCheck size={16} />
                    <span>Free recruitment guarantee. Never pay any fee for airport interviews.</span>
                  </div>

                  <button type="submit" className="btnPrimary btnBlock btnGlow">
                    <Send size={16} />
                    <span>Send Message to HR</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="querySuccess">
                <div className="successBadge">
                  <CheckCircle2 size={42} />
                </div>
                <h3>Message Received!</h3>
                <p>
                  Thank you <strong>{queryForm.name}</strong>. Our HR recruitment officer will contact
                  you shortly on <strong>{queryForm.phone}</strong> or via official email{" "}
                  <strong>hr@allnaukri.in</strong>.
                </p>
                <div className="successActions">
                  <a href="tel:8929103286" className="btnPrimary btnBlock">
                    <Phone size={16} />
                    <span>Call Now for Immediate Assistance</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btnOutline btnBlock"
                  >
                    Send Another Query
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
