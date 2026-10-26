"use client";

import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  FileCheck,
  GraduationCap,
  Headphones,
  HelpCircle,
  MapPin,
  MessageSquare,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { airportCategories, jobs, type AirportJob } from "./jobs";
import { AirportBannerSlider } from "./components/AirportBannerSlider";
import { ApplicationTracker } from "./components/ApplicationTracker";
import { QuickApplyModal } from "./components/QuickApplyModal";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<string | undefined>(undefined);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First open by default

  const jobScrollRef = useRef<HTMLDivElement>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);

  const filteredJobs = useMemo(() => {
    if (selectedCategory === "all") return jobs;
    return jobs.filter((job) => job.category === selectedCategory);
  }, [selectedCategory]);

  function handleOpenApply(roleName?: string) {
    setSelectedRoleForApply(roleName);
    setIsApplyModalOpen(true);
  }

  // Scroll controls for Jobs horizontal rail
  function scrollJobs(direction: "left" | "right") {
    if (jobScrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      jobScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  // Scroll controls for Testimonials rail
  function scrollTestimonials(direction: "left" | "right") {
    if (testimonialScrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      testimonialScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  // FAQ Toggle
  function toggleFaq(index: number) {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  }

  const faqs = [
    {
      q: "What does 'Lifetime Job Security till 60 Years' mean?",
      a: "It means selected candidates are appointed to permanent aviation services staff positions with complete job security until official retirement age of 60 years. There is no arbitrary termination or layoff as long as general service code and BCAS decorum are maintained."
    },
    {
      q: "Is there any registration or medical fee for applying?",
      a: "No, absolutely ₹0! All Naukri operates on a 100% free placement model. We do NOT charge any money for application forms, interviews, uniform, or airport gate passes. Beware of fake agents."
    },
    {
      q: "What is the monthly salary structure?",
      a: "Monthly salaries range between ₹28,500 to ₹42,500 depending on the role, qualifications, and shift duty. Ground Staff and Ticketing earn ₹34,500 - ₹39,500, VIP Lounge Executives earn up to ₹42,500, plus PF, ESIC medical benefits, and meal coupons."
    },
    {
      q: "Can 10th or 12th pass freshers apply?",
      a: "Yes! 10th pass candidates can apply for Ramp & Baggage Handling, Air Cargo Associate, and Cabin Turnaround. 12th pass and Graduates can apply for Ground Staff, Customer Care, Airline Ticketing, and Security Screener roles. Freshers are warmly welcomed."
    },
    {
      q: "How soon do I receive my joining letter?",
      a: "Initial document verification is completed within 24 to 48 hours. After your telephonic round and airport background clearance, official joining letter and Airport Entry Pass (AEP) are issued within 3 to 7 working days."
    },
    {
      q: "How can I directly contact the HR department?",
      a: "You can call or WhatsApp our official HR helpline at +91 8929103286 (Mon-Sat, 9:30 AM to 6:30 PM), or email your documents directly to hr@allnaukri.in."
    }
  ];

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
              <h3>Service Till 60 Yrs (Lifetime)</h3>
              <p>Permanent employment tenure. No layoff or termination without voluntary resignation.</p>
            </div>
          </div>

          <div className="pillarCard">
            <div className="pillarIconBubble salaryBubble">
              <span>₹</span>
            </div>
            <div>
              <h3>₹31,000 - ₹42,500 / Mo</h3>
              <p>Role-based attractive monthly salary + PF, ESI, duty meal coupons & night cab.</p>
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

      {/* 4. Active Airport Openings (Horizontal Scroll Rail: Left to Right / Right to Left) */}
      <section className="container openingsSection" id="openings" aria-label="Active Openings">
        <div className="sectionTopInfo">
          <div>
            <div className="sectionEyebrow">
              <Plane size={15} />
              <span>LIVE VACANCIES RAIL</span>
            </div>
            <h3>Active Airport Positions ({filteredJobs.length} Openings)</h3>
            <p>Scroll horizontally to view roles, salary packages, and apply directly via WhatsApp or Online Form.</p>
          </div>

          {/* Horizontal Scroll Controls */}
          <div className="railControls">
            <button
              type="button"
              className="railArrowBtn"
              onClick={() => scrollJobs("left")}
              aria-label="Scroll Openings Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="railArrowBtn"
              onClick={() => scrollJobs("right")}
              aria-label="Scroll Openings Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Rail */}
        <div className="horizontalJobsRail" ref={jobScrollRef}>
          {filteredJobs.map((job) => {
            const waMsg = encodeURIComponent(
              `Hello HR Team (All Naukri),\nI want to apply for *${job.title}*.\nSalary: ${job.salary}\nAirport: ${job.airport}\nPlease verify my eligibility.`
            );

            return (
              <article className="airportJobRailCard softPanel" key={job.slug}>
                {/* Image Banner on Job Card */}
                <div className="cardThumbWrapper">
                  <Image
                    src={job.image}
                    alt={job.title}
                    fill
                    className="cardThumbImg"
                    sizes="(max-width: 768px) 300px, 340px"
                  />
                  <div className="cardThumbOverlay" />
                  <span className="thumbTypeChip">{job.type}</span>
                  <span className="thumbSalaryChip">{job.salary}</span>
                </div>

                <div className="cardRailBody">
                  <div className="cardMetaTop">
                    <span className="tenureBadge">
                      <ShieldCheck size={13} />
                      Tenure till 60 Yrs
                    </span>
                    <span className="freeBadge">100% Free</span>
                  </div>

                  <h3 className="railCardTitle">
                    <Link href={`/naukri/${job.slug}`}>{job.title}</Link>
                  </h3>

                  <p className="railCardDesc">{job.body}</p>

                  <div className="railCardSpecs">
                    <div className="specMiniRow">
                      <span>Airport:</span>
                      <strong>{job.airport.split("&")[0]}</strong>
                    </div>
                    <div className="specMiniRow">
                      <span>Eligibility:</span>
                      <strong>{job.qualification}</strong>
                    </div>
                    <div className="specMiniRow">
                      <span>Retirement:</span>
                      <strong className="textSuccess">{job.retirementAge}</strong>
                    </div>
                  </div>

                  <div className="railCardButtons">
                    {/* Primary Apply via WhatsApp (Direct to 8929103286 as user requested!) */}
                    <a
                      href={`https://wa.me/918929103286?text=${waMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btnWhatsapp btnBlock btnSmall"
                      title="Apply directly on WhatsApp: 8929103286"
                    >
                      <MessageSquare size={14} />
                      <span>Apply via WhatsApp (Free)</span>
                    </a>

                    <div className="splitBtnRow">
                      <button
                        type="button"
                        onClick={() => handleOpenApply(job.title)}
                        className="btnPrimary btnSmall"
                      >
                        <Send size={13} />
                        <span>Online Form</span>
                      </button>

                      <Link href={`/naukri/${job.slug}`} className="btnOutline btnSmall">
                        <span>Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
            <p>Fill out our simple mobile form or WhatsApp HR at 8929103286 with zero registration charge.</p>
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
            <p>Receive official appointment letter with permanent service guarantee till retirement at 60 years.</p>
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
            <h2>Service Security Till 60 Years Retirement</h2>
            <p className="lifetimeLead">
              In private sector jobs, employees often worry about sudden layoffs or contractual terminations.
              At All Naukri Airport Services, your tenure is permanent until official retirement at 60 years.
            </p>

            <div className="benefitsChecklist">
              <div className="checkItem">
                <CheckCircle2 size={18} className="checkIcon" />
                <div>
                  <strong>Permanent Retirement Age 60 Years:</strong> You hold a permanent position. You remain an employee until voluntary resignation or age 60 retirement.
                </div>
              </div>
              <div className="checkItem">
                <CheckCircle2 size={18} className="checkIcon" />
                <div>
                  <strong>Guaranteed Monthly Salary:</strong> Salary ₹28,500 – ₹42,500 disbursed strictly on time to your bank account every month.
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
                <strong>Aviation Ground Staff Grade-1</strong>
              </div>
              <div className="salaryTable">
                <div className="salRow">
                  <span>Basic Starting Pay</span>
                  <strong>₹24,500 - ₹28,500</strong>
                </div>
                <div className="salRow">
                  <span>Airport Duty Allowance</span>
                  <strong>₹4,500 - ₹5,500</strong>
                </div>
                <div className="salRow">
                  <span>Conveyance & Shift Perks</span>
                  <strong>₹4,000 - ₹8,500</strong>
                </div>
                <div className="salRow totalRow">
                  <span>Monthly Range</span>
                  <span className="totalVal">₹31,000 - ₹42,500</span>
                </div>
              </div>
              <div className="salaryPerksList">
                <span>✓ Provident Fund (PF)</span>
                <span>✓ ESI Medical Insurance</span>
                <span>✓ Airport Duty Meals</span>
                <span>✓ Free Night Shift Taxi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Candidate Testimonials (Horizontal Scrolling Marquee Rail) */}
      <section className="container testimonialsSection" aria-label="Testimonials">
        <div className="sectionHeader textCenter">
          <div className="sectionEyebrow">
            <Users size={15} />
            <span>REAL STORIES FROM TERMINALS</span>
          </div>
          <h2>What Our Airport Staff Says</h2>
          <p>Scroll horizontally to read genuine candidate placement experiences across Indian airports.</p>
        </div>

        <div className="testimonialScrollControls">
          <button
            type="button"
            className="railArrowBtn"
            onClick={() => scrollTestimonials("left")}
            aria-label="Scroll Reviews Left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="railArrowBtn"
            onClick={() => scrollTestimonials("right")}
            aria-label="Scroll Reviews Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="horizontalTestimonialsRail" ref={testimonialScrollRef}>
          <div className="testimonialCardRailItem softPanel">
            <div className="stars">★★★★★</div>
            <p className="testimonialText">
              &quot;I applied through All Naukri for Ground Staff Customer Service at Delhi IGI Airport. Within 2 days my verification was completed without paying a single rupee. I have been working here for 6 months getting ₹36,500 on time. The service tenure till 60 years retirement gives immense peace of mind.&quot;
            </p>
            <div className="testimonialAuthor">
              <div className="authorAvatar">RK</div>
              <div>
                <strong>Rohit Kumar</strong>
                <small>Ground Staff Executive, IGI T3 Delhi</small>
              </div>
            </div>
          </div>

          <div className="testimonialCardRailItem softPanel">
            <div className="stars">★★★★★</div>
            <p className="testimonialText">
              &quot;After completing 12th, fake agents were demanding ₹50,000 for airport jobs. All Naukri was 100% free! Their HR connected on WhatsApp 8929103286, verified my 12th marksheet, and I got placed in Ramp Handling at Mumbai CSMIA Airport with ₹34,200 salary plus canteen food.&quot;
            </p>
            <div className="testimonialAuthor">
              <div className="authorAvatar">AS</div>
              <div>
                <strong>Aakash Sharma</strong>
                <small>Ramp & Baggage Handler, Mumbai CSMIA</small>
              </div>
            </div>
          </div>

          <div className="testimonialCardRailItem softPanel">
            <div className="stars">★★★★★</div>
            <p className="testimonialText">
              &quot;Working as a Ticketing & Boarding Pass Assistant at Kempegowda Bengaluru Airport has transformed my career. The work atmosphere is very professional, salary is ₹38,500, and shift timings are convenient. Thanks to All Naukri team for quick placement.&quot;
            </p>
            <div className="testimonialAuthor">
              <div className="authorAvatar">PS</div>
              <div>
                <strong>Pooja Singh</strong>
                <small>Airline Ticketing Assistant, Bengaluru KIA</small>
              </div>
            </div>
          </div>

          <div className="testimonialCardRailItem softPanel">
            <div className="stars">★★★★★</div>
            <p className="testimonialText">
              &quot;Selected as Airport Security Assistant at Hyderabad RGIA Airport. Salary ₹36,000 with PF and health card. Direct joining with zero application charge. Very reliable and legitimate portal.&quot;
            </p>
            <div className="testimonialAuthor">
              <div className="authorAvatar">VK</div>
              <div>
                <strong>Vikram Kulkarni</strong>
                <small>Security Screener, Hyderabad RGIA</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions (Dropdown Accordion as user requested!) */}
      <section className="container faqSection" id="faq" aria-label="Frequently Asked Questions">
        <div className="sectionHeader textCenter">
          <div className="sectionEyebrow">
            <HelpCircle size={15} />
            <span>CLARIFY YOUR DOUBTS</span>
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>Click on any question to view clear details regarding airport hiring and retirement tenure.</p>
        </div>

        <div className="faqAccordionList">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`faqAccordionItem softPanel ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="faqQuestionBtn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faqQuestionText">{faq.q}</span>
                  <ChevronDown size={19} className="faqChevron" />
                </button>

                {isOpen && (
                  <div className="faqAnswerPanel">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. Direct Help & Call to Action Band */}
      <section className="container ctaBandSection" aria-label="Recruitment Call to Action">
        <div className="ctaBandCard">
          <div className="ctaBandContent">
            <span className="ctaBadge">⚡ IMMEDIATE VACANCIES OPEN</span>
            <h2>Ready to Start Your Career at India&apos;s Major Airports?</h2>
            <p>
              Join 800+ selected candidates. 100% Free Application • Service Guaranteed Till 60 Years • Starting Pay ₹31,000 - ₹42,500/Month.
            </p>

            <div className="ctaBtnRow">
              <a
                href="https://wa.me/918929103286?text=Hello%20HR%20All%20Naukri%2C%20I%20want%20to%20apply%20for%20Airport%20Job."
                target="_blank"
                rel="noreferrer"
                className="btnWhatsapp btnLarge"
              >
                <MessageSquare size={18} />
                <span>Apply via WhatsApp (+91 8929103286)</span>
              </a>

              <button
                type="button"
                onClick={() => handleOpenApply()}
                className="btnPrimary btnLarge btnGlow"
                id="cta-bottom-apply"
              >
                <span>Fill Online Form (Free)</span>
                <Send size={18} />
              </button>

              <a href="tel:8929103286" className="btnSecondary btnLarge">
                <Phone size={18} />
                <span>Call HR: +91 8929103286</span>
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
