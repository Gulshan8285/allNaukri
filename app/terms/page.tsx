import { FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | All Naukri Airport Services",
  description:
    "Official Terms and Conditions for Airport Ground Staff and Aviation Services placements through All Naukri (allnaukri.in).",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <FileText size={22} />
          </span>
          <div>
            <span className="chip primaryChip">Legal Agreement</span>
            <h1>Terms and Conditions</h1>
            <p>
              Please review these terms governing your application and employment facilitation with All Naukri Airport Services.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing the website <strong>allnaukri.in</strong>, submitting your online application,
              or communicating with our official representatives via phone (<strong>8929103286</strong>) or
              email (<strong>hr@allnaukri.in</strong>), you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="legalBlock">
            <h2>2. 100% Free Placement Commitment</h2>
            <p>
              All Naukri operates on a zero-charge policy for all job seekers. No applicant is ever required
              to pay any fee for applying, attending interview rounds, receiving selection confirmation, or
              undergoing background documentation.
            </p>
          </section>

          <section className="legalBlock">
            <h2>3. Lifetime Job Assurance Terms</h2>
            <p>
              The &quot;Lifetime Job Security&quot; provision ensures that selected candidates receive a permanent
              employment engagement in airport ground handling and aviation support services. Under this policy,
              the employer does not arbitrarily terminate employment without cause. Candidates continue in service
              until they choose to submit voluntary resignation or retire.
            </p>
            <p>
              Candidates must adhere to civil aviation safety regulations, Bureau of Civil Aviation Security
              (BCAS) standards, airport terminal decorum, and attendance regulations.
            </p>
          </section>

          <section className="legalBlock">
            <h2>4. Salary and Compensation Structure</h2>
            <p>
              The designated monthly starting salary package for airport ground staff and related services
              is <strong>₹35,000 to ₹35,800 / Month</strong>, subject to statutory deductions such as Provident
              Fund (PF) and Employee State Insurance (ESIC) as per government labor guidelines. Additional perks
              include duty meal allowances, overtime bonuses, and night transit transport facilities.
            </p>
          </section>

          <section className="legalBlock">
            <h2>5. Accurate Candidate Documentation</h2>
            <p>
              Applicants must provide truthful and accurate information regarding their identity, educational
              qualifications (10th/12th/Graduation marksheets), age, and residential address. Forged documents
              or impersonation will lead to immediate cancellation of application and reporting to airport security authorities.
            </p>
          </section>

          <section className="legalBlock">
            <h2>6. Airport Security Clearance & Medical Fitness</h2>
            <p>
              Deployment inside airport terminals, aprons, and airside facilities requires standard medical fitness
              and civil security clearance in accordance with airport authority guidelines. All Naukri facilitates
              these formalities without charging candidates.
            </p>
          </section>

          <section className="legalBlock">
            <h2>7. Contact Information</h2>
            <p>
              For any questions regarding these terms, please contact:
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
              <span>Contact HR Desk</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
