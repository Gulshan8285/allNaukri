import { Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | All Naukri Airport Services",
  description:
    "Read the Privacy Policy for All Naukri (allnaukri.in) detailing candidate information protection, zero-fee application privacy, and data security.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <ShieldCheck size={22} />
          </span>
          <div>
            <span className="chip primaryChip">Data Protection</span>
            <h1>Privacy Policy</h1>
            <p>
              At All Naukri Airport Services, we are committed to safeguarding your personal information and candidate application data.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>1. Information We Collect</h2>
            <p>
              When you submit an online application for airport ground staff, passenger assistance,
              airline ticketing, ramp operations, or aviation services on <strong>allnaukri.in</strong>,
              we collect the following applicant details:
            </p>
            <ul>
              <li>Full Name, Mobile Number, and Email Address</li>
              <li>Highest Educational Qualification and Age</li>
              <li>Preferred Airport Station and Desired Job Role</li>
              <li>Residential Area / State and identity verification document details</li>
            </ul>
          </section>

          <section className="legalBlock">
            <h2>2. Purpose of Information Collection</h2>
            <p>
              The collected applicant details are strictly utilized for:
            </p>
            <ul>
              <li>Evaluating candidate eligibility against airport ground staff criteria</li>
              <li>Contacting candidates via phone or WhatsApp (+91 8929103286) to schedule verification and interview slots</li>
              <li>Processing official Airport Entry Passes (AEP) under Bureau of Civil Aviation Security guidelines</li>
              <li>Dispatching appointment and joining letters with ₹35,000 - ₹35,800 salary package details</li>
            </ul>
          </section>

          <section className="legalBlock">
            <h2>3. Zero Sale of Personal Data</h2>
            <p>
              We <strong>NEVER</strong> sell, rent, commercialize, or trade candidate personal contact
              numbers or application records to third-party telemarketers or advertisers. Your data is strictly
              confidential and reserved solely for legitimate aviation recruitment operations.
            </p>
          </section>

          <section className="legalBlock">
            <h2>4. Security and Data Protection</h2>
            <p>
              We implement industry-standard SSL encryption and secure server infrastructure to protect
              your application from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="legalBlock">
            <h2>5. Contacting Our Data Officer</h2>
            <p>
              If you have any questions or wish to review or update your submitted candidate profile,
              please reach out directly:
            </p>
            <p>
              Email: <strong>hr@allnaukri.in</strong><br />
              Helpline: <strong>+91 8929103286</strong><br />
              Headquarters: Aerocity Aviation Logistics Hub, IGI Airport Zone, New Delhi - 110037
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
