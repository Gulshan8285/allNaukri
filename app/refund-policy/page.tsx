import { AlertTriangle, CheckCircle2, Headphones, HelpCircle, Mail, Phone, ShieldAlert, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Refund & Zero Fee Policy | All Naukri Airport Services",
  description:
    "Official Refund & Zero-Fee Recruitment Policy of All Naukri. Learn about our 100% free application process, anti-fraud guidelines, and candidate protection.",
  alternates: {
    canonical: "/refund-policy"
  }
};

export default function RefundPolicyPage() {
  return (
    <main className="legalPage">
      <section className="container legalShell">
        <div className="legalHero softPanel">
          <span className="iconBubble">
            <ShieldCheck size={22} />
          </span>
          <div>
            <span className="chip primaryChip">Official Policy</span>
            <h1>Refund & Zero-Fee Recruitment Policy</h1>
            <p>
              Commitment to 100% free airport ground staff employment facilitation and candidate financial safety.
            </p>
          </div>
        </div>

        <article className="legalContent softPanel">
          <section className="legalBlock">
            <h2>1. Absolute Zero-Fee Guarantee</h2>
            <p>
              <strong>All Naukri (allnaukri.in)</strong> operates on an unequivocal <strong>Zero-Fee Policy</strong>.
              We do not charge job seekers, aspirants, or candidates any sum of money at any stage of the
              recruitment cycle.
            </p>
            <ul>
              <li><strong>Application Fee:</strong> ₹0 (Completely Free)</li>
              <li><strong>Registration / Processing Fee:</strong> ₹0 (Completely Free)</li>
              <li><strong>Interview Scheduling Fee:</strong> ₹0 (Completely Free)</li>
              <li><strong>Document Verification Fee:</strong> ₹0 (Completely Free)</li>
              <li><strong>Airport Placement / Joining Fee:</strong> ₹0 (Completely Free)</li>
            </ul>
          </section>

          <section className="legalBlock">
            <h2>2. Applicability of Refunds</h2>
            <p>
              Because All Naukri <strong>does not charge, collect, or accept any payment, registration deposit,
              or security fee</strong> from applicants, there is no monetary transaction involved on our platform.
              Consequently, regular commercial refund workflows do not apply to our free employment services.
            </p>
            <p>
              If you are approached by any individual, consultant, agency, or third-party website asking for
              money to guarantee an airport job or issue an Airport Entry Pass (AEP) in the name of All Naukri,
              <strong>DO NOT PAY</strong>. Such individuals are engaging in unauthorized and illegal fraud.
            </p>
          </section>

          <section className="legalBlock">
            <h2>3. Anti-Fraud Alert: Fake Fees to Watch Out For</h2>
            <div className="alertNoticeCard">
              <ShieldAlert size={26} className="textDanger" />
              <div>
                <strong>Strict Warning Against Job Scams:</strong>
                <p>
                  Aviation candidates are often targeted by fraudulent agents with false pretexts such as:
                </p>
                <ul className="fraudList">
                  <li>&quot;Security clearance deposit (refundable after 1 month)&quot; — <strong>FALSE</strong></li>
                  <li>&quot;Uniform & footwear measurement fee&quot; — <strong>FALSE (Provided Free by Company)</strong></li>
                  <li>&quot;Airport Entry Pass (AEP) processing charges&quot; — <strong>FALSE (Processed Free)</strong></li>
                  <li>&quot;Compulsory aviation medical test fee via UPI&quot; — <strong>FALSE</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="legalBlock">
            <h2>4. What to Do If You Were Cheated by Unauthorized Agents</h2>
            <p>
              If you inadvertently made any payment to an unauthorized third party falsely claiming to represent
              All Naukri:
            </p>
            <ol>
              <li>Immediately file a cyber crime complaint at your local cyber cell or online at <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer">cybercrime.gov.in</a>.</li>
              <li>Notify your bank or payment app (UPI/card) to freeze the recipient account for fraud investigation.</li>
              <li>Report the incident, phone numbers, and payment receipts to our official HR vigil team at <strong>hr@allnaukri.in</strong> or call <strong>+91 8929103286</strong> so we can take immediate legal and administrative action.</li>
            </ol>
          </section>

          <section className="legalBlock">
            <h2>5. Lifetime Job Guarantee Clarification</h2>
            <p>
              Our promise of <strong>Lifetime Job Security</strong> means that once inducted, candidate
              employment is stable and permanent under standard service conduct regulations. There is no
              arbitrary termination without the candidate&apos;s voluntary resignation.
            </p>
          </section>

          <section className="legalBlock">
            <h2>6. Official Contact for Verification</h2>
            <p>
              Always verify job notifications and HR caller identities directly via our verified channels:
            </p>
            <div className="aboutContactBox">
              <div>
                <strong>HR Helpline:</strong> <a href="tel:8929103286">+91 8929103286</a>
              </div>
              <div>
                <strong>HR Email:</strong> <a href="mailto:hr@allnaukri.in">hr@allnaukri.in</a>
              </div>
              <div>
                <strong>Official Website:</strong> <a href="https://allnaukri.in">https://allnaukri.in</a>
              </div>
            </div>
          </section>

          <div className="aboutCtaRow">
            <Link href="/apply" className="btnPrimary btnLarge btnGlow">
              <span>Apply Online for Free</span>
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
