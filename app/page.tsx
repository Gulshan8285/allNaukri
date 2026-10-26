"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  GraduationCap,
  Headphones,
  HelpCircle,
  MapPin,
  Phone,
  Plane,
  Send,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { airportCategories, jobs, type AirportJob } from "./jobs";
import { AirportBannerSlider } from "./components/AirportBannerSlider";
import { ApplicationTracker } from "./components/ApplicationTracker";
import { QuickApplyModal } from "./components/QuickApplyModal";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<string | undefined>(undefined);

  const filteredJobs = useMemo(() => {
    if (selectedCategory === "all") return jobs;
    return jobs.filter((job) => job.category === selectedCategory);
  }, [selectedCategory]);

  function handleOpenApply(roleName?: string) {
    setSelectedRoleForApply(roleName);
    setIsApplyModalOpen(true);
  }

  return (
    <main className="homePageMain">
      {/* 1. Dynamic Hero Slider with Airport Photos */}
      <AirportBannerSlider onOpenApply={() => handleOpenApply()} />

      {/* 2. Key Value Pillars Bar */}
      <section className="container keyPillarsSection" aria-label="Key Commitments">
        <div className="pillarsGrid">
          <div className="pillarCard">
            <div className="pillarIconBubble">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3>Lifetime Job Security</h3>
              <p>Permanent employment tenure. No layoff or termination without voluntary resignation.</p>
            </div>
          </div>

          <div className="pillarCard">
            <div className="pillarIconBubble salaryBubble">
              <span>₹</span>
            </div>
            <div>
              <h3>₹35,000 - ₹35,800 / Mo</h3>
              <p>Fixed monthly starting salary + PF, ESI, duty meal coupons & cab pickup/drop.</p>
            </div>
          </div>

          <div className="pillarCard">
            <div className="pillarIconBubble freeBubble">
              <span>🆓</span>
            </div>
            <div>
              <h3>100% Free Application</h3>
              <p>Zero registration charges. No fee at any stage of interview or document verification.</p>
            </div>
          </div>

          <div className="pillarCard">
            <div className="pillarIconBubble airportBubble">
              <Plane size={24} />
            </div>
            <div>
              <h3>Pan-India Airport Hubs</h3>
              <p>Delhi IGI, Mumbai CSMIA, Bengaluru KIA, Kolkata, Hyderabad, Chennai & regional hubs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Job Categories Section */}
      <section className="container categoriesSection" id="categories" aria-label="Airport Categories">
        <div className="sectionHeader">
          <div className="sectionEyebrow">
            <Compass size={15} />
            <span>EXPLORE AIRPORT DOMAINS</span>
          </div>
          <h2>Select Your Airport Department</h2>
          <p>
            Entry-level to ground handling positions across passenger terminals, ramp, cargo & lounges.
          </p>
        </div>

        <div className="categoryTabs">
          {airportCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`categoryTabBtn ${isActive ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.name}</span>
                <span className="catCountBadge">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Active Airport Openings Grid */}
      <section className="container openingsSection" id="openings" aria-label="Active Openings">
        <div className="sectionTopInfo">
          <div>
            <h3>Active Airport Vacancies ({filteredJobs.length} Positions)</h3>
            <p>Freshers and experienced candidates both eligible. Direct joining on documentation clearance.</p>
          </div>
          <button
            type="button"
            onClick={() => handleOpenApply()}
            className="btnPrimary btnSmall hideOnMobile"
          >
            <span>Express Online Apply</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="airportJobsGrid">
          {filteredJobs.map((job) => (
            <article className="airportJobCard softPanel" key={job.slug}>
              <div className="cardTop">
                <div className="typeBadgeWrap">
                  <span className="chip primaryChip">{job.type}</span>
                  {job.badge && <span className="chip highlightChip">{job.badge}</span>}
                </div>
                <span className="liveJoiningPill">
                  <span className="greenDot" />
                  {job.date}
                </span>
              </div>

              <h3 className="jobCardTitle">
                <Link href={`/naukri/${job.slug}`}>{job.title}</Link>
              </h3>

              <p className="jobCardDesc">{job.body}</p>

              <div className="jobKeySpecs">
                <div className="specRow">
                  <span className="specLabel">Salary Package:</span>
                  <strong className="specSalary">{job.salary}</strong>
                </div>
                <div className="specRow">
                  <span className="specLabel">Tenure:</span>
                  <strong className="textSuccess">Lifetime Permanent Assurance</strong>
                </div>
                <div className="specRow">
                  <span className="specLabel">Qualification:</span>
                  <span>{job.qualification}</span>
                </div>
                <div className="specRow">
                  <span className="specLabel">Airport Hub:</span>
                  <span>
                    <MapPin size={13} className="inlineIcon" />
                    {job.airport}
                  </span>
                </div>
                <div className="specRow">
                  <span className="specLabel">Application Fee:</span>
                  <span className="textFree">{job.fee}</span>
                </div>
              </div>

              <div className="jobCardActions">
                <button
                  type="button"
                  onClick={() => handleOpenApply(job.title)}
                  className="btnPrimary btnBlock"
                  aria-label={`Apply for ${job.title}`}
                >
                  <Send size={15} />
                  <span>Apply Online (Free)</span>
                </button>

                <div className="secondaryActionRow">
                  <Link href={`/naukri/${job.slug}`} className="btnOutline" title="View Full Details">
                    <span>View Details</span>
                  </Link>
                  <a
                    href="tel:8929103286"
                    className="btnCallQuick"
                    title="Call HR Directly about this position"
                  >
                    <Phone size={15} />
                    <span>Call HR</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Real-Time Application Tracker Component */}
      <section className="container trackerSection" id="tracker" aria-label="Status Checker">
        <ApplicationTracker />
      </section>

      {/* 6. Step-by-Step Selection Roadmap */}
      <section className="container processSection" aria-label="Selection Process">
        <div className="sectionHeader textCenter">
          <div className="sectionEyebrow">
            <Sparkles size={15} />
            <span>TRANSPARENT RECRUITMENT FLOW</span>
          </div>
          <h2>5-Step Quick Joining Process</h2>
          <p>
            No complicated exams. Direct document verification and swift airport gate pass induction.
          </p>
        </div>

        <div className="processGrid">
          <div className="processStepCard">
            <div className="stepNumber">01</div>
            <h4>Free Online Application</h4>
            <p>Fill out our simple mobile form or contact HR on phone/WhatsApp at 8929103286 with zero registration charge.</p>
          </div>

          <div className="processStepCard">
            <div className="stepNumber">02</div>
            <h4>Document Verification</h4>
            <p>Submit 10th/12th certificate and Aadhaar Card. Our HR team checks eligibility within 24 hours.</p>
          </div>

          <div className="processStepCard">
            <div className="stepNumber">03</div>
            <h4>Telephonic / Virtual HR Round</h4>
            <p>Brief interaction regarding communication skills, airport duty hours, and shift preferences.</p>
          </div>

          <div className="processStepCard">
            <div className="stepNumber">04</div>
            <h4>Medical & Security Clearance</h4>
            <p>Standard civilian physical fitness and police verification for official airport entry pass (AEP).</p>
          </div>

          <div className="processStepCard highlightStep">
            <div className="stepNumber">05</div>
            <h4>Permanent Joining Letter</h4>
            <p>Receive official appointment letter with ₹35,000 - ₹35,800/mo salary and lifetime job security assurance.</p>
          </div>
        </div>
      </section>

      {/* 7. Why Work at Airport Ground Services (Lifetime Guarantee Spotlight) */}
      <section className="container lifetimeSecuritySection" aria-label="Lifetime Security">
        <div className="lifetimeCard softPanel">
          <div className="lifetimeLeft">
            <div className="lifetimeBadge">
              <ShieldCheck size={18} />
              <span>OFFICIAL EMPLOYMENT POLICY</span>
            </div>
            <h2>Why Our Lifetime Job Guarantee Matters</h2>
            <p className="lifetimeLead">
              In private sector jobs, employees often worry about sudden layoffs or contractual terminations.
              At All Naukri Airport Services, we eliminate this anxiety completely.
            </p>

            <div className="benefitsChecklist">
              <div className="checkItem">
                <CheckCircle2 size={18} className="checkIcon" />
                <div>
                  <strong>No Arbitrary Termination:</strong> You hold a permanent position. You remain an employee until you voluntarily submit your resignation.
                </div>
              </div>
              <div className="checkItem">
                <CheckCircle2 size={18} className="checkIcon" />
                <div>
                  <strong>Guaranteed Monthly Salary:</strong> Fixed ₹35,000 – ₹35,800 disbursed strictly on time to your bank account every month.
                </div>
              </div>
              <div className="checkItem">
                <CheckCircle2 size={18} className="checkIcon" />
                <div>
                  <strong>PF & ESIC Medical Benefits:</strong> Full health coverage for you and your family, plus accumulated provident fund security.
                </div>
              </div>
              <div className="checkItem">
                <CheckCircle2 size={18} className="checkIcon" />
                <div>
                  <strong>Safe & Respected Work Environment:</strong> Work inside world-class international terminals with flight crew, security, and airport authorities.
                </div>
              </div>
            </div>

            <div className="lifetimeActions">
              <button
                type="button"
                onClick={() => handleOpenApply()}
                className="btnPrimary btnGlow"
              >
                <span>Claim Your Permanent Airport Job</span>
                <ArrowRight size={18} />
              </button>
              <a href="tel:8929103286" className="btnSecondary">
                <Phone size={17} />
                <span>Call Helpline: 8929103286</span>
              </a>
            </div>
          </div>

          <div className="lifetimeRight">
            <div className="salaryBreakdownCard">
              <div className="salaryCardHead">
                <span>OFFICIAL SALARY STRUCTURE</span>
                <strong>Airport Staff Grade-1</strong>
              </div>
              <div className="salaryTable">
                <div className="salRow">
                  <span>Basic Starting Pay</span>
                  <strong>₹26,500</strong>
                </div>
                <div className="salRow">
                  <span>Airport Duty Allowance</span>
                  <strong>₹4,500</strong>
                </div>
                <div className="salRow">
                  <span>Conveyance & Shift Allowance</span>
                  <strong>₹4,000 - ₹4,800</strong>
                </div>
                <div className="salRow totalRow">
                  <span>Monthly In-Hand Range</span>
                  <span className="totalVal">₹35,000 - ₹35,800</span>
                </div>
              </div>
              <div className="salaryPerksList">
                <span>✓ Provident Fund (PF)</span>
                <span>✓ ESI Medical Insurance</span>
                <span>✓ Airport Duty Meals</span>
                <span>✓ Night Shift Free Cab</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Candidate Testimonials */}
      <section className="container testimonialsSection" aria-label="Testimonials">
        <div className="sectionHeader textCenter">
          <div className="sectionEyebrow">
            <Users size={15} />
            <span>REAL STORIES FROM TERMINALS</span>
          </div>
          <h2>What Our Airport Staff Says</h2>
          <p>Real experiences from candidates placed at major airports across India.</p>
        </div>

        <div className="testimonialsGrid">
          <div className="testimonialCard softPanel">
            <div className="stars">★★★★★</div>
            <p className="testimonialText">
              &quot;I applied through All Naukri for Ground Staff Customer Service at Delhi IGI Airport. Within 2 days my verification was completed without paying a single rupee. I have been working here for 6 months now getting ₹35,500 every month on time. The lifetime job assurance gives immense peace of mind.&quot;
            </p>
            <div className="testimonialAuthor">
              <div className="authorAvatar">RK</div>
              <div>
                <strong>Rohit Kumar</strong>
                <small>Ground Staff Executive, IGI Airport Terminal 3, New Delhi</small>
              </div>
            </div>
          </div>

          <div className="testimonialCard softPanel">
            <div className="stars">★★★★★</div>
            <p className="testimonialText">
              &quot;After completing 12th, I was worried about stable jobs. Many fake consultants asked for money, but All Naukri is 100% free! Their HR coordinator helped me with document verification and got me placed in Ramp Baggage Handling at Mumbai CSMIA Airport. Starting salary was ₹35,200 plus food coupons.&quot;
            </p>
            <div className="testimonialAuthor">
              <div className="authorAvatar">AS</div>
              <div>
                <strong>Aakash Sharma</strong>
                <small>Ramp & Baggage Handler, Mumbai CSMIA Airport</small>
              </div>
            </div>
          </div>

          <div className="testimonialCard softPanel">
            <div className="stars">★★★★★</div>
            <p className="testimonialText">
              &quot;Working as a Ticketing & Boarding Pass Assistant at Kempegowda Bengaluru Airport has transformed my career. The work atmosphere is very professional, salary is ₹35,800, and shift timings are convenient. Thanks to All Naukri team for quick placement.&quot;
            </p>
            <div className="testimonialAuthor">
              <div className="authorAvatar">PS</div>
              <div>
                <strong>Pooja Singh</strong>
                <small>Airline Ticketing Assistant, Bengaluru KIA</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="container faqSection" id="faq" aria-label="Frequently Asked Questions">
        <div className="sectionHeader textCenter">
          <div className="sectionEyebrow">
            <HelpCircle size={15} />
            <span>CLARIFY YOUR DOUBTS</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about Airport Ground Staff careers and joining.</p>
        </div>

        <div className="faqGrid">
          <div className="faqCard softPanel">
            <h4>What does &quot;Lifetime Job Security&quot; mean?</h4>
            <p>
              It means your appointment is permanent and stable. Unlike contractual or casual jobs,
              you cannot be terminated arbitrarily. You remain in service until you voluntarily choose
              to resign or transition to higher roles.
            </p>
          </div>

          <div className="faqCard softPanel">
            <h4>Is there any registration or processing fee?</h4>
            <p>
              <strong>No, absolutely zero fee!</strong> All Naukri does NOT charge any fee for application,
              interviews, or placement. If anyone demands money in the name of airport jobs, immediately
              report it to our HR desk at 8929103286 or hr@allnaukri.in.
            </p>
          </div>

          <div className="faqCard softPanel">
            <h4>What is the monthly salary structure?</h4>
            <p>
              The starting monthly in-hand salary ranges between <strong>₹35,000 to ₹35,800</strong>,
              depending upon the role, shift timings, and airport station. In addition, you receive
              PF, ESI medical insurance, airport duty meals, and cab pickup/drop for night shifts.
            </p>
          </div>

          <div className="faqCard softPanel">
            <h4>Can 10th or 12th pass freshers apply?</h4>
            <p>
              Yes! 10th pass candidates can apply for Ramp & Baggage Handling, Air Cargo Associate,
              and Housekeeping Turnaround. 12th pass and Graduates can apply for Ground Staff, Customer
              Service, Airline Ticketing, Security Screening, and VIP Lounges.
            </p>
          </div>

          <div className="faqCard softPanel">
            <h4>How long does the joining process take?</h4>
            <p>
              Typically, initial document verification is completed within 24 to 48 hours. After your
              brief HR interaction and medical clearance, airport entry pass issuance takes 3 to 7 working
              days before formal joining.
            </p>
          </div>

          <div className="faqCard softPanel">
            <h4>How do I reach the official HR department?</h4>
            <p>
              You can directly call our HR helpline at <strong>+91 8929103286</strong> (Monday to Saturday,
              9:30 AM to 6:30 PM), send a WhatsApp message to the same number, or email your details to{" "}
              <strong>hr@allnaukri.in</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Direct Help & Call to Action Band */}
      <section className="container ctaBandSection" aria-label="Recruitment Call to Action">
        <div className="ctaBandCard">
          <div className="ctaBandContent">
            <span className="ctaBadge">⚡ IMMEDIATE VACANCIES OPEN</span>
            <h2>Ready to Start Your Career at India&apos;s Major Airports?</h2>
            <p>
              Join 800+ selected candidates. 100% Free Application • Lifetime Job Assurance • Starting Pay ₹35,000 - ₹35,800/Month.
            </p>

            <div className="ctaBtnRow">
              <button
                type="button"
                onClick={() => handleOpenApply()}
                className="btnPrimary btnLarge btnGlow"
                id="cta-bottom-apply"
              >
                <span>Apply Online Now (Free)</span>
                <Send size={18} />
              </button>

              <a href="tel:8929103286" className="btnSecondary btnLarge">
                <Phone size={18} />
                <span>Call HR: +91 8929103286</span>
              </a>

              <a
                href="https://wa.me/918929103286?text=Hello%20HR%20All%20Naukri%2C%20I%20am%20applying%20for%20Airport%20Job."
                target="_blank"
                rel="noreferrer"
                className="btnWhatsapp btnLarge"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Application Modal */}
      <QuickApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        defaultRole={selectedRoleForApply}
      />
    </main>
  );
}
