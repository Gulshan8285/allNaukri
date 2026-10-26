import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileCheck,
  Headphones,
  MapPin,
  MessageSquare,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobBySlug, jobs } from "../../jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Airport Opening Not Found"
    };
  }

  return {
    title: `${job.title} - Salary ${job.salary} | All Naukri`,
    description: `${job.body} Apply for ${job.title} at ${job.airport}. Lifetime Job Security till 60 Years Retirement, 100% Free Application, Salary ${job.salary}.`,
    keywords: [
      job.title,
      job.type,
      job.airport,
      "Airport Ground Staff",
      "All Naukri",
      "Airport Jobs India"
    ],
    alternates: {
      canonical: `/naukri/${job.slug}`
    }
  };
}

export default async function NaukriDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const overviewRows = [
    ["Designation", job.title],
    ["Airport Department", job.type],
    ["Starting Salary", job.salary],
    ["Employment Tenure", job.security],
    ["Retirement Age", job.retirementAge],
    ["Application Fee", job.fee],
    ["Airport Station", job.airport],
    ["Total Vacancy", job.vacancies],
    ["Educational Eligibility", job.qualification],
    ["Age Eligibility", job.ageLimit],
    ["Gender Eligibility", job.gender],
    ["Joining Mode", job.date]
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello HR Team (All Naukri),\nI am interested in applying for: *${job.title}*\nSalary: ${job.salary}\nAirport: ${job.airport}\nPlease verify my documents and schedule my joining.`
  );

  return (
    <main className="vlogPage">
      <article className="container vlogShell">
        {/* Detail Hero Header with Image */}
        <header className="vlogHero softPanel detailHeroCard">
          <div className="detailHeroBannerWrapper">
            <Image
              src={job.image}
              alt={job.title}
              fill
              priority
              className="detailHeroBannerImg"
              sizes="(max-width: 1110px) 100vw, 1110px"
            />
            <div className="detailHeroBannerOverlay" />

            <div className="detailBannerBadges">
              <span className="chip primaryChip">✈️ {job.type}</span>
              <span className="salaryPillLarge">{job.salary}</span>
              <span className="securityPillLarge">
                <ShieldCheck size={14} />
                Tenure Till 60 Yrs
              </span>
              <span className="freePillLarge">100% Free Placement</span>
            </div>
          </div>

          <div className="detailHeroBody">
            <h1>{job.title}</h1>
            <p className="detailIntro">{job.body}</p>

            <div className="detailMeta">
              <span>
                <Building2 size={15} />
                {job.org}
              </span>
              <span>
                <MapPin size={15} />
                {job.airport}
              </span>
              <span>
                <CalendarDays size={15} />
                Status: {job.date}
              </span>
            </div>

            <div className="detailHeroActions">
              {/* WhatsApp Direct Apply Button */}
              <a
                href={`https://wa.me/918929103286?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="btnWhatsapp btnLarge"
                title="Apply directly on WhatsApp: 8929103286"
              >
                <MessageSquare size={18} />
                <span>Apply via WhatsApp (Free)</span>
              </a>

              <Link href="/apply" className="btnPrimary btnLarge btnGlow">
                <Send size={18} />
                <span>Fill Online Form</span>
              </Link>

              <a href="tel:8929103286" className="btnSecondary btnLarge">
                <Phone size={18} />
                <span>Call HR: +91 8929103286</span>
              </a>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <section className="vlogContent softPanel">
          <div className="vlogLead">
            <span className="iconBubble">
              <Plane size={22} />
            </span>
            <div>
              <h2>Airport Employment Overview & Key Highlights</h2>
              <p>
                Permanent placement with on-time salary, statutory benefits, and verified airport duty environment.
              </p>
            </div>
          </div>

          {/* Quick Specifications Table */}
          <section className="yojnaArticleGrid" aria-label="Job specifications">
            <div className="yojnaTableCard">
              <div className="yojnaMiniHead">
                <ClipboardList size={18} />
                <h3>Official Job Specifications</h3>
              </div>
              <div className="yojnaTableWrap">
                <table className="yojnaTable">
                  <tbody>
                    {overviewRows.map(([label, value]) => (
                      <tr key={label}>
                        <th scope="row">{label}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="yojnaTableCard yojnaHighlightCard">
              <div className="yojnaMiniHead">
                <ShieldCheck size={18} />
                <h3>Employment Security Assurance</h3>
              </div>
              <p>
                <strong>Tenure Till 60 Years Retirement:</strong> Your role is permanent. There are no sudden
                layoffs or arbitrary contract terminations. You remain employed with full company benefits
                until voluntary resignation or official retirement at 60 years.
              </p>
              <div className="yojnaBadgeList">
                <span>{job.type}</span>
                <span>{job.vacancies}</span>
                <span>{job.salary}</span>
                <span>Retirement: 60 Years</span>
              </div>

              <div className="highlightCardActions">
                <a
                  href={`https://wa.me/918929103286?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btnWhatsapp btnBlock btnSmall"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp HR Now (8929103286)</span>
                </a>
              </div>
            </div>
          </section>

          {/* Benefits List */}
          <section className="vlogBlock">
            <h3>Employee Benefits & Perks</h3>
            <div className="yojnaPointGrid">
              {job.benefits.map((benefit, i) => (
                <div className="yojnaPointCard" key={i}>
                  <CheckCircle2 size={18} className="textSuccess" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Responsibilities */}
          <section className="vlogBlock">
            <h3>Key Duties & Responsibilities</h3>
            <div className="yojnaPointGrid">
              {job.responsibilities.map((resp, i) => (
                <div className="yojnaPointCard" key={i}>
                  <span>{i + 1}</span>
                  <p>{resp}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Selection Process */}
          <section className="vlogBlock">
            <h3>Selection & Joining Roadmap</h3>
            <div className="yojnaStepGrid">
              {job.selectionProcess.map((step, index) => (
                <div className="yojnaStepCard" key={index}>
                  <strong>{index + 1}</strong>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How to Apply */}
          <section className="vlogBlock">
            <h3>How to Apply Step-by-Step</h3>
            <div className="yojnaStepGrid">
              {job.howToApply.map((item, index) => (
                <div className="yojnaStepCard" key={index}>
                  <strong>Step {index + 1}</strong>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Important Notice */}
          <section className="vlogBlock">
            <h3>Zero-Fee & Anti-Fraud Notice</h3>
            <div className="yojnaNote">
              <p>
                <strong>Never Pay Anyone:</strong> All Naukri does NOT charge any fee for application,
                interviews, uniform, medical clearance, or airport gate pass.
              </p>
              <p>
                If anyone demands money in the name of All Naukri or airport recruitment, immediately
                report it to our HR desk at <strong>8929103286</strong> or <strong>hr@allnaukri.in</strong>.
              </p>
            </div>
          </section>
        </section>

        {/* Footer Card */}
        <footer className="vlogOfficial softPanel">
          <div>
            <span className="chip primaryChip">Official HR Desk</span>
            <h2>Apply Directly on WhatsApp or Call HR for Slot Booking</h2>
            <p>
              Helpline: <strong>+91 8929103286</strong> | Email: <strong>hr@allnaukri.in</strong>
            </p>
          </div>
          <div className="vlogActionButtons">
            <a
              href={`https://wa.me/918929103286?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="btnWhatsapp btnLarge"
            >
              <MessageSquare size={17} />
              <span>Apply via WhatsApp</span>
            </a>
            <Link href="/apply" className="btnPrimary btnLarge btnGlow">
              <span>Online Form</span>
              <Send size={16} />
            </Link>
            <Link href="/sarkari-naukri" className="btnOutline">
              <ArrowLeft size={16} />
              <span>All Openings</span>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
