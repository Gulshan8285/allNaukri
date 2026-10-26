import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-chrome";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://allnaukri.in";
const siteName = "All Naukri - Airport Ground Staff Careers";
const siteDescription =
  "Official Airport Ground Staff & Aviation Services Recruitment Portal. Salary ₹35,000 - ₹35,800 / Month, Lifetime Job Security Guarantee, and 100% Free Application. Helpline: +91 8929103286 | hr@allnaukri.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "All Naukri - Airport Ground Staff & Aviation Careers (Salary ₹35,000 - ₹35,800)",
    template: "%s | All Naukri Airport Careers"
  },
  description: siteDescription,
  keywords: [
    "Airport Ground Staff Jobs",
    "Airport Jobs 2026",
    "All Naukri",
    "Aviation Services Careers",
    "Airline Ticketing Jobs",
    "Ramp Officer Openings",
    "Airport Security Assistant",
    "IGI Airport Jobs Delhi",
    "Mumbai Airport Jobs",
    "Lifetime Job Guarantee Airport",
    "Free Airport Job Application"
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "All Naukri - Airport Ground Staff & Aviation Careers",
    description: siteDescription,
    images: [
      {
        url: "/images/banner-ground-staff.jpg",
        width: 1200,
        height: 675,
        alt: "All Naukri Airport Ground Staff Recruitment"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "All Naukri - Airport Ground Staff & Aviation Careers",
    description: siteDescription,
    images: ["/images/banner-ground-staff.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#0284c7",
  colorScheme: "light dark"
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8929103286",
        contactType: "recruitment human resources",
        email: "hr@allnaukri.in",
        availableLanguage: ["Hindi", "English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      alternateName: ["All Naukri", "All Naukri Airport Careers", "AllNaukri.in"],
      url: siteUrl,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
