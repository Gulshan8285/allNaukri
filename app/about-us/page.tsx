import {
  Award,
  Building2,
  CheckCircle2,
  FileCheck2,
  Headphones,
  Info,
  MapPin,
  Phone,
  Plane,
  ShieldCheck,
  Users
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | All Naukri - Airport Ground Staff Recruitment",
  description:
    "Learn about All Naukri, India's trusted airport ground staff and aviation services recruitment partner. 100% free application, salary ₹35,000 - ₹35,800, and lifetime job security.",
  alternates: {
    canonical: "/about-us"
  }
};

export default function AboutUsPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <Plane size={22} />
          </span>
          <div>
            <span className="chip primaryChip">About Us</span>
            <h1>About All Naukri Airport Services</h1>
            <p>
              India&apos;s dedicated gateway for airport ground staff, passenger terminal assistance,
              airline ticketing, ramp operations, and aviation career placements.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>Who We Are</h2>
            <p>
              <strong>All Naukri (allnaukri.in)</strong> is a premier airport staffing and manpower
              facilitation organization operating across major domestic and international aviation hubs
              in India. We bridge the gap between aspiring job seekers and critical ground operations
              support roles at leading airports.
            </p>
            <p>
              From customer service executives assisting travelers in modern departure terminals to
              ramp officers ensuring timely aircraft turnarounds and baggage safety, our mission is to
              provide respectable, stable, and permanent aviation careers for young talent across the country.
            </p>
          </section>

          <section className="legalBlock">
            <h2>Our Core Commitments</h2>
            <div className="aboutPillars">
              <div className="aboutPillarCard">
                <ShieldCheck size={26} className="textSuccess" />
                <h3>Lifetime Job Security</h3>
                <p>
                  We believe stability is the foundation of a great career. Our candidates receive
                  permanent appointments with complete job security—no arbitrary layoffs or sudden contract
                  terminations without voluntary employee resignation.
                </p>
              </div>

              <div className="aboutPillarCard">
                <Award size={26} className="textHighlight" />
                <h3>Competitive Starting Salary</h3>
                <p>
                  Every selected candidate receives an attractive monthly compensation ranging from
                  <strong> ₹35,000 to ₹35,800 / Month</strong>, supplemented by PF, ESI healthcare,
                  airport duty meals, and free transportation for late shifts.
                </p>
              </div>

              <div className="aboutPillarCard">
                <CheckCircle2 size={26} className="textFree" />
                <h3>100% Free Placement</h3>
                <p>
                  We strictly operate on a zero-charge policy. We never collect registration fees,
                  interview fees, or document charges at any stage. Any individual demanding money in our name
                  is fraudulent and should be reported immediately.
                </p>
              </div>
            </div>
          </section>

          <section className="legalBlock">
            <h2>Airport Departments We Staff</h2>
            <ul className="aboutRolesList">
              <li>
                <strong>Ground Staff & Customer Assistance:</strong> Welcoming passengers, managing boarding
                queues, wheelchair assistance, and terminal information support.
              </li>
              <li>
                <strong>Airline Ticketing & Check-In:</strong> Passenger verification, baggage tag issuance,
                and boarding pass printing at terminal check-in counters.
              </li>
              <li>
                <strong>Ramp & Baggage Operations:</strong> Airside aircraft turnaround, baggage loading/unloading,
                tarmac safety, and conveyor belt operations.
              </li>
              <li>
                <strong>Airport Security & Screening:</strong> Access control, document check, security arch
                monitoring, and pre-boarding passenger guidance.
              </li>
              <li>
                <strong>Air Cargo & Logistics:</strong> Airway bill documentation, barcode scanning, cargo palletizing,
                and warehouse freight logistics.
              </li>
              <li>
                <strong>VIP Lounges & Hospitality:</strong> Premium guest hospitality, buffet and beverage service,
                and executive lounge guest comfort.
              </li>
            </ul>
          </section>

          <section className="legalBlock">
            <h2>Airport Stations Covered</h2>
            <p>
              Our placement drives actively encompass key aviation gateways across India:
            </p>
            <div className="airportsPillGrid">
              <span>Indira Gandhi International Airport (IGI Delhi T1, T2, T3)</span>
              <span>Chhatrapati Shivaji Maharaj International Airport (CSMIA Mumbai)</span>
              <span>Kempegowda International Airport (KIA Bengaluru)</span>
              <span>Netaji Subhash Chandra Bose International Airport (NSCBI Kolkata)</span>
              <span>Rajiv Gandhi International Airport (RGIA Hyderabad)</span>
              <span>Chennai International Airport (MAA Chennai)</span>
              <span>Sardar Vallabhbhai Patel International Airport (Ahmedabad)</span>
              <span>Chaudhary Charan Singh International Airport (Lucknow)</span>
              <span>Jaipur International Airport & Manohar International Airport (Goa)</span>
            </div>
          </section>

          <section className="legalBlock">
            <h2>Contact & HR Verification</h2>
            <p>
              For authentic enquiries, verification of open batches, or reporting unauthorized agents,
              connect directly with our authorized HR department:
            </p>
            <div className="aboutContactBox">
              <div>
                <strong>HR Helpline:</strong>{" "}
                <a href="tel:8929103286" className="textHighlight">
                  +91 8929103286
                </a>
              </div>
              <div>
                <strong>Official HR Email:</strong>{" "}
                <a href="mailto:hr@allnaukri.in" className="textHighlight">
                  hr@allnaukri.in
                </a>
              </div>
              <div>
                <strong>Official Portal:</strong>{" "}
                <a href="https://allnaukri.in">allnaukri.in</a>
              </div>
              <div>
                <strong>Headquarters:</strong> Aerocity Aviation Logistics Hub, IGI Airport Zone, New Delhi - 110037
              </div>
            </div>
          </section>

          <div className="aboutCtaRow">
            <Link href="/apply" className="btnPrimary btnLarge btnGlow">
              <span>Apply Online for Free</span>
            </Link>
            <a href="tel:8929103286" className="btnSecondary btnLarge">
              <Phone size={17} />
              <span>Call HR Desk: 8929103286</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
