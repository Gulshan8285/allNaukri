import { AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Disclaimer | All Naukri Airport Services",
  description:
    "Official Disclaimer for All Naukri (allnaukri.in) regarding airport ground staff recruitment facilitation, zero-fee commitment, and verification.",
  alternates: {
    canonical: "/disclaimer"
  }
};

export default function DisclaimerPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <AlertTriangle size={22} />
          </span>
          <div>
            <span className="chip primaryChip">Official Notice</span>
            <h1>Disclaimer</h1>
            <p>
              Information and recruitment facilitation notice for All Naukri Airport Services (allnaukri.in).
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>1. Aviation Manpower & Placement Facilitation</h2>
            <p>
              The information provided on <strong>allnaukri.in</strong> is published in good faith to
              facilitate employment for ground staff, passenger assistance, ticketing, ramp, and aviation
              support services across Indian airports.
            </p>
          </section>

          <section className="legalBlock">
            <h2>2. 100% Free Placement Commitment</h2>
            <p>
              All Naukri operates on a zero-charge model. We do not demand or accept any fee from applicants
              for application forms, interview appointments, or document verification. We strongly advise
              candidates never to transfer funds to any individual claiming to charge for airport jobs.
            </p>
          </section>

          <section className="legalBlock">
            <h2>3. Lifetime Job Guarantee Notice</h2>
            <p>
              The &quot;Lifetime Job Security&quot; provision refers to permanent employment contracts
              free from arbitrary termination or project-based layoffs. Continuance of service is subject
              to standard airport security clearance, BCAS compliance, and adherence to company code of conduct.
            </p>
          </section>

          <section className="legalBlock">
            <h2>4. Salary and Benefits Disclosure</h2>
            <p>
              The starting monthly salary package of <strong>₹35,000 to ₹35,800 / Month</strong> represents
              the gross compensation including duty allowances, subject to mandatory PF and ESIC statutory
              deductions.
            </p>
          </section>

          <section className="legalBlock">
            <h2>5. Contact & Fraud Vigilance</h2>
            <p>
              If you have any doubts regarding any recruitment communication, please verify with our authorized desk:
            </p>
            <p>
              Official HR Email: <strong>hr@allnaukri.in</strong><br />
              Official HR Helpline: <strong>+91 8929103286</strong><br />
              Recruitment Center: Aerocity Aviation Logistics Hub, IGI Airport Zone, New Delhi - 110037
            </p>
          </section>

          <div className="aboutCtaRow">
            <Link href="/apply" className="btnPrimary btnLarge btnGlow">
              <span>Apply Online Now</span>
            </Link>
            <Link href="/contact" className="btnSecondary btnLarge">
              <span>Contact HR Support</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
