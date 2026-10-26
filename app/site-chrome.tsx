"use client";

import {
  Bell,
  BriefcaseBusiness,
  CheckCircle2,
  FileCheck2,
  Headphones,
  Home,
  Info,
  Menu,
  Moon,
  Phone,
  Plane,
  Send,
  ShieldCheck,
  Sun,
  X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { QuickApplyModal } from "./components/QuickApplyModal";

const tickerItems = [
  "✈️ Airport Ground Staff Recruitment 2026 Live",
  "💼 Starting Salary ₹35,000 to ₹35,800 / Month + Allowances",
  "🛡️ Lifetime Job Security Guarantee (Permanent Appointment - No Arbitrary Termination)",
  "🆓 100% Free Application & Zero Registration Fee",
  "📞 Official HR Helpline: +91 8929103286",
  "📧 HR Verification Email: hr@allnaukri.in",
  "📍 Openings in Delhi IGI, Mumbai, Bangalore, Kolkata, Hyderabad, Chennai & Regional Hubs"
];

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Airport Openings", href: "/sarkari-naukri", icon: BriefcaseBusiness },
  { label: "Apply Online", href: "/apply", icon: Send },
  { label: "About Us", href: "/about-us", icon: Info },
  { label: "Contact HR", href: "/contact", icon: Headphones }
];

const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "All Airport Openings", href: "/sarkari-naukri" },
  { label: "Apply Online (Free)", href: "/apply" },
  { label: "Contact HR", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund & Zero Fee Policy", href: "/refund-policy" },
  { label: "Disclaimer", href: "/disclaimer" }
];

function AviationLogoMark({ size = 30 }: { size?: number }) {
  return (
    <span className="aviationLogoMark" style={{ width: size, height: size }}>
      <Plane size={size * 0.65} className="planeIcon" />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  const isNavActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="topAnnouncementBar">
        <div className="container announcementContent">
          <div className="announcementLeft">
            <span className="liveDot" />
            <span className="announcementTag">AIRPORT RECRUITMENT 2026:</span>
            <span>Salary ₹35,000 - ₹35,800/mo • Lifetime Job Assurance • 100% Free Process</span>
          </div>
          <div className="announcementRight">
            <a href="tel:8929103286" className="announcementLink">
              <Phone size={13} />
              <span>HR: +91 8929103286</span>
            </a>
            <span className="divider">|</span>
            <a href="mailto:hr@allnaukri.in" className="announcementLink">
              <span>hr@allnaukri.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Topbar */}
      <header className="topbar">
        <Link className="brand" href="/">
          <AviationLogoMark size={36} />
          <span className="brandText">
            <strong className="brandTitle">All Naukri</strong>
            <small className="brandSubtitle">Airport Careers Portal</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navPills" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link
              className={isNavActive(item.href) ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="topActions">
          <a
            href="tel:8929103286"
            className="topbarPhoneBtn hideOnMobile"
            title="Call Airport HR Direct Helpline"
          >
            <Phone size={15} />
            <span>8929103286</span>
          </a>

          <button
            type="button"
            onClick={() => setIsApplyModalOpen(true)}
            className="topbarApplyBtn hideOnMobile"
            id="nav-apply-btn"
          >
            <span>Apply Now</span>
          </button>

          <button
            aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            className="themeToggleButton"
            onClick={toggleTheme}
            type="button"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
            className="menuToggleButton"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobileMenuOverlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobileMenuPanel" onClick={(e) => e.stopPropagation()}>
            <div className="mobileMenuHead">
              <div className="mobileMenuBrand">
                <AviationLogoMark size={32} />
                <span>
                  <strong>All Naukri</strong>
                  <small>Airport Careers</small>
                </span>
              </div>
              <button
                aria-label="Close menu"
                className="mobileMenuClose"
                onClick={() => setMobileMenuOpen(false)}
                type="button"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobileSalaryBadge">
              <span>✈️ Salary: ₹35,000 to ₹35,800/mo</span>
              <small>100% Free • Lifetime Job Guarantee</small>
            </div>

            <nav className="mobileMenuLinks" aria-label="Mobile navigation">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    className={isNavActive(item.href) ? "active" : ""}
                    href={item.href}
                    key={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mobileMenuCtas">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsApplyModalOpen(true);
                }}
                className="btnPrimary btnBlock"
              >
                <span>Apply Online Now (Free)</span>
              </button>

              <a href="tel:8929103286" className="btnSecondary btnBlock">
                <Phone size={17} />
                <span>Call HR: +91 8929103286</span>
              </a>

              <a
                href="https://wa.me/918929103286?text=Hello%20HR%2C%20I%20am%20interested%20in%20Airport%20Ground%20Staff%20Job.%20Please%20guide%20me."
                target="_blank"
                rel="noreferrer"
                className="btnWhatsapp btnBlock"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mobileMenuFoot">
              <div className="mobileContactInfo">
                <div>Email: hr@allnaukri.in</div>
                <div>Helpline: 8929103286</div>
              </div>
              <button className="mobileThemeButton" onClick={toggleTheme} type="button">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Marquee Ticker */}
      <section className="ticker" aria-label="Live updates">
        <span className="live">UPDATES</span>
        <div className="tickerTrack">
          <div className="tickerItems">
            {tickerItems.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Sticky Quick Action Bar (specifically designed for phones!) */}
      <div className="mobileStickyBar" aria-label="Mobile Quick Contact Bar">
        <a
          href="tel:8929103286"
          className="stickyAction callAction"
          aria-label="Direct Phone Call to HR"
        >
          <Phone size={18} />
          <span>Call HR</span>
        </a>
        <a
          href="https://wa.me/918929103286?text=Hello%20HR%20All%20Naukri%2C%20I%20want%20to%20apply%20for%20Airport%20Ground%20Staff%20Job."
          target="_blank"
          rel="noreferrer"
          className="stickyAction whatsappAction"
          aria-label="WhatsApp HR"
        >
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={() => setIsApplyModalOpen(true)}
          className="stickyAction applyAction"
          aria-label="Apply Online Now"
        >
          <Send size={18} />
          <span>Apply Now</span>
        </button>
      </div>

      {/* Quick Application Modal */}
      <QuickApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  );
}

export function SiteFooter() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <>
      <footer className="bottomStrip">
        <div className="container footerContainer">
          <div className="footerTopGrid">
            {/* Column 1: Brand & USP */}
            <div className="footerBrandCol">
              <div className="footerBrand">
                <AviationLogoMark size={32} />
                <div>
                  <strong>All Naukri</strong>
                  <small>Airport Ground Staff & Aviation Careers</small>
                </div>
              </div>
              <p className="footerDesc">
                Authorized aviation manpower and airport services recruitment portal across India.
                We provide verified airport ground staff, passenger assistance, ticketing, cargo,
                and ramp operations jobs with 100% free application and guaranteed lifetime job security.
              </p>
              <div className="footerGuarantees">
                <div className="guaranteeItem">
                  <ShieldCheck size={16} />
                  <span>Permanent Lifetime Tenure</span>
                </div>
                <div className="guaranteeItem">
                  <CheckCircle2 size={16} />
                  <span>Salary ₹35,000 - ₹35,800/Month</span>
                </div>
                <div className="guaranteeItem">
                  <span>🆓</span>
                  <span>Zero Registration Charge</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footerLinksCol">
              <h4>Airport Openings</h4>
              <ul>
                <li>
                  <Link href="/sarkari-naukri">Ground Staff & Customer Service</Link>
                </li>
                <li>
                  <Link href="/sarkari-naukri">Airline Ticketing & Check-In</Link>
                </li>
                <li>
                  <Link href="/sarkari-naukri">Ramp & Baggage Handling</Link>
                </li>
                <li>
                  <Link href="/sarkari-naukri">Airport Security & Screening</Link>
                </li>
                <li>
                  <Link href="/sarkari-naukri">Air Cargo Operations</Link>
                </li>
                <li>
                  <Link href="/sarkari-naukri">VIP Lounge Hospitality</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Policy & Support */}
            <div className="footerLinksCol">
              <h4>Policies & Legal</h4>
              <ul>
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Official Contact Desk */}
            <div className="footerContactCol">
              <h4>Airport Recruitment Desk</h4>
              <div className="contactCard">
                <div className="contactItem">
                  <Phone size={17} />
                  <div>
                    <span className="contactLabel">Official HR Calling & WhatsApp:</span>
                    <a href="tel:8929103286" className="contactVal">
                      +91 8929103286
                    </a>
                  </div>
                </div>

                <div className="contactItem">
                  <Headphones size={17} />
                  <div>
                    <span className="contactLabel">Official HR Email:</span>
                    <a href="mailto:hr@allnaukri.in" className="contactVal">
                      hr@allnaukri.in
                    </a>
                  </div>
                </div>

                <div className="contactItem">
                  <BriefcaseBusiness size={17} />
                  <div>
                    <span className="contactLabel">Recruitment Hub:</span>
                    <span className="contactAddress">
                      Terminal 3 / Aerocity Aviation Logistics Hub, Indira Gandhi International
                      Airport, New Delhi - 110037
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsApplyModalOpen(true)}
                className="btnPrimary btnBlock footerApplyBtn"
              >
                <span>Fill Free Online Form</span>
              </button>
            </div>
          </div>

          <div className="footerDeclaration">
            <ShieldCheck size={22} />
            <p>
              <strong>Official Placement Notice:</strong> All Naukri does NOT charge any registration,
              interview, or training fees at any stage. All airport ground staff and aviation support
              positions are 100% free with lifetime employment security (no arbitrary termination
              without voluntary candidate resignation). Beware of fraudulent agents demanding fees.
            </p>
          </div>

          <div className="footerCopyright">
            <span>© 2026 All Naukri (allnaukri.in). All Rights Reserved.</span>
            <span>Helpline: +91 8929103286 | hr@allnaukri.in</span>
          </div>
        </div>
      </footer>

      <QuickApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  );
}
