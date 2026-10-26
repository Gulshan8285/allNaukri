"use client";

import {
  BriefcaseBusiness,
  CheckCircle2,
  Headphones,
  Home,
  Info,
  Menu,
  MessageSquare,
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
  "✈️ Airport Ground Staff Recruitment 2026 Live Now",
  "💼 Monthly Salary ₹31,000 to ₹42,500 / Month + Allowances",
  "🛡️ Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
  "🆓 100% Free Application & Zero Registration Fee",
  "📞 Official HR Helpline: +91 8929103286",
  "📧 HR Verification Email: hr@allnaukri.in",
  "📍 Direct Joining in Delhi IGI, Mumbai, Bangalore, Kolkata, Hyderabad, Chennai & Regional Hubs"
];

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Airport Openings", href: "/sarkari-naukri", icon: BriefcaseBusiness },
  { label: "Apply Online", href: "/apply", icon: Send },
  { label: "About Us", href: "/about-us", icon: Info },
  { label: "Contact HR", href: "/contact", icon: Headphones }
];

const openingLinks = [
  { label: "Ground Staff & Customer Service", href: "/naukri/airport-ground-staff-customer-executive", salary: "₹34.5k - ₹38.2k" },
  { label: "Airline Ticketing & Check-In", href: "/naukri/airport-ticketing-boarding-pass-assistant", salary: "₹35.2k - ₹39.5k" },
  { label: "Ramp & Baggage Handling", href: "/naukri/airport-ramp-baggage-handling-assistant", salary: "₹31.0k - ₹36.5k" },
  { label: "Airport Security & Screening", href: "/naukri/airport-security-assistant-screener", salary: "₹33.8k - ₹38.0k" },
  { label: "Air Cargo & Logistics", href: "/naukri/airport-cargo-logistics-associate", salary: "₹30.5k - ₹35.8k" },
  { label: "VIP Lounge Hospitality", href: "/naukri/airport-vip-lounge-hospitality-executive", salary: "₹36.0k - ₹42.5k" }
];

const policyLinks = [
  { label: "About All Naukri", href: "/about-us" },
  { label: "Contact HR Desk", href: "/contact" },
  { label: "Refund & Zero-Fee Policy", href: "/refund-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Recruitment Disclaimer", href: "/disclaimer" }
];

function AviationLogoMark({ size = 32 }: { size?: number }) {
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
            <span>Salary ₹31,000 - ₹42,500/mo • Service Till 60 Yrs Retirement • 100% Free</span>
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

      {/* Mobile Drawer Menu (Fixing Screenshot 1 CSS Issue) */}
      {mobileMenuOpen && (
        <div className="mobileMenuOverlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobileMenuPanel modernMobilePanel" onClick={(e) => e.stopPropagation()}>
            <div className="mobileMenuHead">
              <div className="mobileMenuBrand">
                <AviationLogoMark size={34} />
                <div>
                  <strong>All Naukri</strong>
                  <small>Airport Careers</small>
                </div>
              </div>
              <button
                aria-label="Close menu"
                className="mobileMenuClose"
                onClick={() => setMobileMenuOpen(false)}
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cleanly spaced banner without ugly text wrapping */}
            <div className="mobileSalaryCard">
              <div className="mobSalRow1">
                <span className="mobPlaneIcon">✈️</span>
                <strong>Salary: ₹31,000 - ₹42,500 / Month</strong>
              </div>
              <div className="mobSalRow2">
                <span className="mobBadgeGreen">100% Free Placement</span>
                <span className="mobBadgeBlue">Tenure Till 60 Yrs</span>
              </div>
            </div>

            <nav className="mobileMenuLinks modernMobileLinks" aria-label="Mobile navigation">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const active = isNavActive(item.href);
                return (
                  <Link
                    className={`mobNavLink ${active ? "active" : ""}`}
                    href={item.href}
                    key={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={19} className="mobNavIcon" />
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
                className="btnPrimary btnBlock btnGlow"
              >
                <span>Apply Online Now (Free)</span>
              </button>

              <a
                href="https://wa.me/918929103286?text=Hello%20HR%20Team%2C%20I%20am%20interested%20in%20Airport%20Ground%20Staff%20Job.%20Please%20guide%20me."
                target="_blank"
                rel="noreferrer"
                className="btnWhatsapp btnBlock"
              >
                <MessageSquare size={17} />
                <span>Apply via WhatsApp (8929103286)</span>
              </a>

              <a href="tel:8929103286" className="btnSecondary btnBlock">
                <Phone size={16} />
                <span>Call HR: +91 8929103286</span>
              </a>
            </div>

            <div className="mobileMenuFoot modernMobileFoot">
              <div className="mobileContactInfo">
                <div><strong>HR Email:</strong> hr@allnaukri.in</div>
                <div><strong>Helpline:</strong> 8929103286</div>
              </div>
              <button className="mobileThemeButton" onClick={toggleTheme} type="button">
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
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

      {/* Floating Corner Quick Action Buttons (Replaces intrusive bottom bar as requested!) */}
      <aside className="floatingActionCorner" aria-label="Quick Connect Floating Desk">
        <a
          href="https://wa.me/918929103286?text=Hello%20HR%20All%20Naukri%2C%20I%20want%20to%20apply%20for%20Airport%20Job.%20Please%20verify%20my%20profile."
          target="_blank"
          rel="noreferrer"
          className="floatingFab fabWhatsapp"
          title="Direct WhatsApp with HR (8929103286)"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={22} />
          <span className="fabTooltip">WhatsApp HR</span>
        </a>

        <a
          href="tel:8929103286"
          className="floatingFab fabCall"
          title="Direct Call HR Helpline: +91 8929103286"
          aria-label="Call HR Helpline"
        >
          <Phone size={20} />
          <span className="fabTooltip">Call: 8929103286</span>
        </a>
      </aside>

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
          {/* Top Row: Cards Grid for Mobile & Desktop (Fixing Screenshot 2) */}
          <div className="footerTopGrid">
            {/* Card 1: Brand & Credentials */}
            <div className="footerCardPanel footerBrandCard">
              <div className="footerBrand">
                <AviationLogoMark size={36} />
                <div>
                  <strong>All Naukri</strong>
                  <small>Airport Ground Staff & Aviation Careers</small>
                </div>
              </div>
              <p className="footerDesc">
                Authorized aviation manpower and airport services recruitment portal across India.
                We provide verified airport ground staff, passenger assistance, ticketing, cargo,
                and ramp operations jobs with 100% free application and guaranteed service till 60 years retirement.
              </p>
              <div className="footerGuarantees">
                <div className="guaranteeItem">
                  <ShieldCheck size={16} />
                  <span>Service Till 60 Years Retirement</span>
                </div>
                <div className="guaranteeItem">
                  <CheckCircle2 size={16} />
                  <span>Salary ₹31,000 - ₹42,500/Month</span>
                </div>
                <div className="guaranteeItem">
                  <span>🆓</span>
                  <span>100% Free - Zero Registration Charge</span>
                </div>
              </div>
            </div>

            {/* Card 2: Airport Openings */}
            <div className="footerCardPanel footerLinksCard">
              <div className="footerCardHead">
                <Plane size={17} />
                <h4>Airport Openings</h4>
              </div>
              <ul className="footerLinksList">
                {openingLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="footerRoleLink">
                      <span>{item.label}</span>
                      <small className="roleSalTag">{item.salary}</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Policies & Legal */}
            <div className="footerCardPanel footerLinksCard">
              <div className="footerCardHead">
                <ShieldCheck size={17} />
                <h4>Policies & Candidate Safety</h4>
              </div>
              <ul className="footerLinksList">
                {policyLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="footerPolicyLink">
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4: Official Contact Desk */}
            <div className="footerCardPanel footerContactCard">
              <div className="footerCardHead">
                <Headphones size={17} />
                <h4>Airport Recruitment Desk</h4>
              </div>

              <div className="contactCard">
                <div className="contactItem">
                  <Phone size={17} />
                  <div>
                    <span className="contactLabel">Calling & WhatsApp Helpline:</span>
                    <a href="tel:8929103286" className="contactVal">
                      +91 8929103286
                    </a>
                  </div>
                </div>

                <div className="contactItem">
                  <MessageSquare size={17} />
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
                    <span className="contactLabel">Official Hub:</span>
                    <span className="contactAddress">
                      Aerocity Aviation Logistics Hub, IGI Airport Zone, New Delhi - 110037
                    </span>
                  </div>
                </div>
              </div>

              <div className="footerCardActions">
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(true)}
                  className="btnPrimary btnBlock footerApplyBtn"
                >
                  <span>Fill Free Online Form</span>
                </button>
                <a
                  href="https://wa.me/918929103286?text=Hello%20HR%2C%20I%20am%20applying%20for%20Airport%20Ground%20Staff%20Job."
                  target="_blank"
                  rel="noreferrer"
                  className="btnWhatsapp btnBlock"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp HR (+91 8929103286)</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footerDeclaration">
            <ShieldCheck size={22} />
            <p>
              <strong>Official Placement Notice:</strong> All Naukri does NOT charge any registration,
              interview, or training fees at any stage. All airport ground staff and aviation support
              positions are 100% free with lifetime employment security until retirement age of 60 years
              (no arbitrary termination without voluntary candidate resignation). Beware of fraudulent agents demanding fees.
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
