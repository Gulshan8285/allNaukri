export interface AirportJob {
  slug: string;
  type: string;
  category: string;
  title: string;
  salary: string;
  salaryNum: string;
  security: string;
  retirementAge: string;
  image: string;
  body: string;
  org: string;
  state: string;
  airport: string;
  date: string;
  vacancies: string;
  qualification: string;
  ageLimit: string;
  gender: string;
  fee: string;
  contactNumber: string;
  contactEmail: string;
  badge?: string;
  benefits: string[];
  responsibilities: string[];
  importantDates: string[];
  selectionProcess: string[];
  howToApply: string[];
}

export const airportCategories = [
  { id: "all", name: "All Airport Openings", count: "800+ Vacancies" },
  { id: "ground-staff", name: "Ground Staff & Terminal", count: "240+ Posts" },
  { id: "ticketing", name: "Ticketing & Check-In", count: "160+ Posts" },
  { id: "ramp-baggage", name: "Ramp & Baggage Handling", count: "180+ Posts" },
  { id: "security", name: "Security & Screening", count: "95+ Posts" },
  { id: "cargo", name: "Cargo & Logistics", count: "75+ Posts" },
  { id: "lounge", name: "VIP Lounge & Hospitality", count: "50+ Posts" }
];

export const jobs: AirportJob[] = [
  {
    slug: "airport-ground-staff-customer-executive",
    type: "Ground Staff",
    category: "ground-staff",
    title: "Airport Ground Staff & Customer Service Executive",
    salary: "₹34,500 - ₹38,200 / Month",
    salaryNum: "₹36,000",
    security: "Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
    retirementAge: "60 Years (Permanent Service)",
    image: "/images/banner-ground-staff.jpg",
    body: "Provide seamless passenger assistance, boarding gate coordination, wheelchair escort, and queue management at domestic & international airport departure halls.",
    org: "All Naukri Airport Services",
    state: "Delhi NCR / Pan-India",
    airport: "Indira Gandhi International Airport (IGI T1, T2, T3) & All Major Hubs",
    date: "Immediate Direct Joining",
    vacancies: "240 Openings",
    qualification: "12th Pass or Any Graduate (Freshers & Experienced both eligible)",
    ageLimit: "18 to 35 Years (Job tenure valid till 60 years retirement)",
    gender: "Male & Female Both",
    fee: "₹0 (100% Free Placement / Zero Fees)",
    contactNumber: "8929103286",
    contactEmail: "hr@allnaukri.in",
    badge: "Most Popular",
    benefits: [
      "Starting Salary ₹34,500 to ₹38,200 + Monthly Performance Incentive",
      "Guaranteed service till retirement at 60 years without arbitrary termination",
      "Provident Fund (PF) & Employee State Insurance (ESI) healthcare",
      "Airport Duty Meal coupons & Complimentary Refreshments",
      "Free Cab Pickup & Drop facility for late / night shift duties"
    ],
    responsibilities: [
      "Welcoming travelers at airport entry gates and flight departure halls",
      "Assisting senior citizens, unescorted minors, and wheelchair passengers",
      "Guiding passengers toward security check, boarding gates, and transit lounges",
      "Announcing boarding calls and coordinating smoothly with cabin crew"
    ],
    importantDates: [
      "Online Application Start: Live & Ongoing",
      "Document Verification: Within 24-48 Hours of Application",
      "HR Telephonic Round: Immediate calling upon review",
      "Joining Date: Direct Joining on next batch schedule"
    ],
    selectionProcess: [
      "Step 1: Free Online Application Submission on All Naukri portal",
      "Step 2: HR Document & Age Verification (10th/12th Marksheet & Aadhaar)",
      "Step 3: Brief Telephonic / Virtual Interaction (Basic Communication)",
      "Step 4: Medical Fitness Check & Airport Security Clearance (BCAS norms)",
      "Step 5: Issuance of Appointment Letter & Airport Entry Pass (AEP)"
    ],
    howToApply: [
      "Click on 'Apply via WhatsApp' or 'Apply Online Now' with your details.",
      "Send your Name, Mobile Number, Qualification, and City to 8929103286.",
      "Submit the application without paying any fee (100% Free).",
      "Save your Application ID; our HR desk will call you within 24 hours."
    ]
  },
  {
    slug: "airport-ticketing-boarding-pass-assistant",
    type: "Ticketing & Check-In",
    category: "ticketing",
    title: "Airline Ticketing & Boarding Pass Counter Assistant",
    salary: "₹35,200 - ₹39,500 / Month",
    salaryNum: "₹37,500",
    security: "Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
    retirementAge: "60 Years (Permanent Service)",
    image: "/images/banner-ticketing-desk.jpg",
    body: "Manage passenger check-in counters, issue boarding passes, verify seat allotments, and assist travelers with baggage check-in procedures.",
    org: "All Naukri Airport Services",
    state: "Mumbai / All India",
    airport: "Chhatrapati Shivaji Maharaj International Airport (CSMIA T1 & T2)",
    date: "Immediate Joining",
    vacancies: "160 Openings",
    qualification: "12th Pass or Bachelor's Degree in any discipline",
    ageLimit: "18 to 32 Years (Retirement age: 60 years)",
    gender: "Male & Female Both",
    fee: "₹0 (100% Free Application)",
    contactNumber: "8929103286",
    contactEmail: "hr@allnaukri.in",
    badge: "High Demand",
    benefits: [
      "Fixed In-Hand Salary ₹35,200 - ₹39,500 / Month",
      "Permanent employment with complete tenure till 60 years retirement",
      "Overtime allowance for peak travel festival seasons",
      "Uniform and grooming kits provided by company free of cost",
      "ESIC Medical healthcare for self and dependent family members"
    ],
    responsibilities: [
      "Checking valid Government Photo IDs and airline booking details",
      "Generating and printing passenger boarding passes and bag tags",
      "Assisting travelers with excess baggage policies and seat upgrades",
      "Operating computer reservation systems at departure check-in bays"
    ],
    importantDates: [
      "Application Mode: 100% Online Free",
      "Slot Booking: Rolling interviews daily",
      "Batch Training: 3 Days Airport Familiarization (Paid)",
      "Joining: Immediate on documentation clearance"
    ],
    selectionProcess: [
      "Step 1: Fill out online application form with valid contact number",
      "Step 2: Basic document verification by HR Recruitment Team",
      "Step 3: Verification of basic computer literacy and spoken language",
      "Step 4: Formal Airport Identity Pass registration",
      "Step 5: Final appointment letter with ₹35,200 - ₹39,500 starting pay"
    ],
    howToApply: [
      "Apply directly through WhatsApp at 8929103286 or the online form.",
      "Receive your candidate registration reference number.",
      "Attend the verification call from 8929103286 or HR email hr@allnaukri.in.",
      "Collect joining kit and report to assigned terminal desk."
    ]
  },
  {
    slug: "airport-ramp-baggage-handling-assistant",
    type: "Ramp Operations",
    category: "ramp-baggage",
    title: "Airport Ramp Officer & Baggage Handling Assistant",
    salary: "₹31,000 - ₹36,500 / Month",
    salaryNum: "₹33,500",
    security: "Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
    retirementAge: "60 Years (Permanent Service)",
    image: "/images/banner-ramp-crew.jpg",
    body: "Handle tarmac luggage loading/unloading, conveyor belt sorting, aircraft turnaround support, and tarmac safety escort under aviation protocols.",
    org: "All Naukri Airport Services",
    state: "Bangalore / All India",
    airport: "Kempegowda International Airport (BLR) & Regional Hubs",
    date: "Direct Walk-In Joining",
    vacancies: "180 Openings",
    qualification: "10th Pass or 12th Pass (No prior experience necessary)",
    ageLimit: "18 to 36 Years (Service till 60 years)",
    gender: "Male Candidates Preferred for Ramp Operations",
    fee: "₹0 (100% Free Registration)",
    contactNumber: "8929103286",
    contactEmail: "hr@allnaukri.in",
    badge: "No Experience Needed",
    benefits: [
      "Monthly Salary ₹31,000 - ₹36,500 + High Overtime Earning Potential",
      "Full lifetime job tenure up to 60 years retirement",
      "Safety gear, high-vis neon jackets, safety boots and ear protection provided",
      "Daily canteen meal allowance and subsidized transport",
      "Annual bonus and Provident Fund accumulation"
    ],
    responsibilities: [
      "Careful sorting and loading of passenger baggage into aircraft cargo holds",
      "Operating conveyor belt loaders and luggage trolley carts",
      "Ensuring luggage tags match flight codes accurately to prevent misrouting",
      "Adhering to strict airport tarmac safety and airside hygiene norms"
    ],
    importantDates: [
      "Open Enrolment: Active",
      "Physical Fitness Verification: On-site",
      "Safety Induction: 2 Days",
      "Deployment: Immediate"
    ],
    selectionProcess: [
      "Step 1: Online Registration at allnaukri.in",
      "Step 2: Physical fitness confirmation (Normal health standards)",
      "Step 3: Document check (Aadhaar Card, 10th Certificate, Bank Account)",
      "Step 4: Airside Security Background Clearance",
      "Step 5: Direct Airport Terminal Deployment"
    ],
    howToApply: [
      "Apply through the quick mobile form on allnaukri.in.",
      "Candidates can also WhatsApp their details directly to 8929103286.",
      "Report to the nearest airport induction centre as directed by HR.",
      "Get onboarded with permanent lifetime job assurance."
    ]
  },
  {
    slug: "airport-security-assistant-screener",
    type: "Security & Verification",
    category: "security",
    title: "Airport Security Assistant & Boarding Gate Screener",
    salary: "₹33,800 - ₹38,000 / Month",
    salaryNum: "₹35,500",
    security: "Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
    retirementAge: "60 Years (Permanent Service)",
    image: "/images/banner-ground-staff.jpg",
    body: "Assist in airport access control, staff and passenger identity checks, hand baggage guidance, and boarding gate screening coordination.",
    org: "All Naukri Airport Services",
    state: "Delhi / Kolkata / Hyderabad",
    airport: "Indira Gandhi Airport, NSCBI Kolkata & RGIA Hyderabad",
    date: "Urgent Joining",
    vacancies: "95 Openings",
    qualification: "12th Pass or Any Graduate",
    ageLimit: "18 to 35 Years (Permanent till 60 years)",
    gender: "Male & Female Both",
    fee: "₹0 (Zero Charges / Free)",
    contactNumber: "8929103286",
    contactEmail: "hr@allnaukri.in",
    badge: "Urgent Requirement",
    benefits: [
      "Salary ₹33,800 - ₹38,000 / Month + Shift allowance",
      "Permanent service tenure up to 60 years retirement age",
      "Prestigious airport security team uniform and official badge",
      "Complete medical insurance coverage through ESI scheme",
      "Opportunity for career elevation into senior airport security supervisory roles"
    ],
    responsibilities: [
      "Verifying passenger identity credentials against boarding documents",
      "Managing passenger queues at security screening metal detector arches",
      "Assisting travelers with tray arrangement for laptop and liquid checks",
      "Monitoring terminal access doors and maintaining visitor logs"
    ],
    importantDates: [
      "Application Window: Open Now",
      "Background Verification: BCAS compliance check",
      "Interview Slot: Mon - Sat 10:00 AM to 5:00 PM",
      "Offer Letter: Given upon verification"
    ],
    selectionProcess: [
      "Step 1: Submit your application on All Naukri portal",
      "Step 2: Police Verification / Character Certificate submission",
      "Step 3: Basic Height & Fitness verification (Standard civilian norms)",
      "Step 4: Orientation on Airport Security & Passenger Protocol",
      "Step 5: Signing of permanent appointment letter"
    ],
    howToApply: [
      "Complete the 2-minute online form on allnaukri.in.",
      "Keep digital copy or photo of 12th certificate and Aadhaar ready.",
      "Call HR Helpline 8929103286 for priority telephonic schedule.",
      "Receive formal joining letter directly via official email hr@allnaukri.in."
    ]
  },
  {
    slug: "airport-cargo-logistics-associate",
    type: "Cargo & Logistics",
    category: "cargo",
    title: "Air Cargo Operations Associate & Parcel Documentation Clerk",
    salary: "₹30,500 - ₹35,800 / Month",
    salaryNum: "₹33,000",
    security: "Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
    retirementAge: "60 Years (Permanent Service)",
    image: "/images/banner-ramp-crew.jpg",
    body: "Manage freight packaging, barcode scanning, airway bill documentation, and cargo storage at major international air cargo logistics terminals.",
    org: "All Naukri Airport Services",
    state: "Ahmedabad / Chennai / Pan-India",
    airport: "Air Cargo Complex - Chennai, Ahmedabad & Mumbai",
    date: "Immediate Joining",
    vacancies: "75 Openings",
    qualification: "10th, 12th or ITI / Diploma in any field",
    ageLimit: "18 to 38 Years (Retirement age: 60 years)",
    gender: "Male & Female Both",
    fee: "₹0 (100% Free Registration)",
    contactNumber: "8929103286",
    contactEmail: "hr@allnaukri.in",
    badge: "Stable Shifts",
    benefits: [
      "Monthly Compensation ₹30,500 to ₹35,800 + Attendance Incentive",
      "Full lifetime employment security up to 60 years age",
      "Fixed 8-hour shift rotational duties with weekly off",
      "Company transport and meal vouchers included",
      "Full PF, ESI, gratuity and zero registration charges"
    ],
    responsibilities: [
      "Weighing and barcode scanning of air freight consignments",
      "Checking cargo documentation, airway bills, and shipping manifests",
      "Supervising pallet loading into cargo containers (ULDs)",
      "Reporting any damaged parcels or mismatched consignments promptly"
    ],
    importantDates: [
      "Enrolment: Immediate",
      "Document Check: Same day online verification",
      "Induction: 2 Days practical air-cargo training",
      "Deployment: Immediate"
    ],
    selectionProcess: [
      "Step 1: Online profile submission on allnaukri.in",
      "Step 2: Review of educational documents and address proof",
      "Step 3: HR telephonic interview round",
      "Step 4: Cargo terminal pass authorization",
      "Step 5: Permanent appointment dispatch"
    ],
    howToApply: [
      "Click 'Apply Online' on this page or WhatsApp 8929103286.",
      "Select 'Air Cargo Operations' as your preferred role.",
      "Submit candidate details with Aadhaar proof.",
      "Get immediate joining confirmation."
    ]
  },
  {
    slug: "airport-vip-lounge-hospitality-executive",
    type: "Lounge & VIP Services",
    category: "lounge",
    title: "Airport VIP Lounge Assistant & Passenger Hospitality Executive",
    salary: "₹36,000 - ₹42,500 / Month",
    salaryNum: "₹39,000",
    security: "Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
    retirementAge: "60 Years (Permanent Service)",
    image: "/images/banner-ticketing-desk.jpg",
    body: "Deliver world-class hospitality, welcome premium business/first class travelers, assist with buffet counters, and manage executive airport lounge reception.",
    org: "All Naukri Airport Services",
    state: "Delhi / Mumbai / Bangalore",
    airport: "International & Domestic Executive Departure Lounges",
    date: "Immediate Joining",
    vacancies: "50 Openings",
    qualification: "12th Pass or Graduate (Hotel Management/Hospitality preferred, Freshers welcome)",
    ageLimit: "18 to 32 Years (Retirement age: 60 years)",
    gender: "Male & Female Both",
    fee: "₹0 (100% Free Application)",
    contactNumber: "8929103286",
    contactEmail: "hr@allnaukri.in",
    badge: "Premium Environment",
    benefits: [
      "Salary ₹36,000 - ₹42,500 / Month + High Guest Tips & Service Incentives",
      "Permanent job with lifetime employment guarantee till 60 years retirement",
      "Work in luxury air-conditioned executive airport lounges",
      "Complimentary five-star quality gourmet meals on duty",
      "Direct pick and drop taxi service"
    ],
    responsibilities: [
      "Greeting international guests with warm hospitality at lounge reception",
      "Assisting guests with boarding announcements and flight status queries",
      "Managing dining setup, beverage service, and seating comfort",
      "Maintaining immaculate hygiene and luxury presentation standards"
    ],
    importantDates: [
      "Application Status: Live",
      "Grooming & Interaction Round: Online / Walk-in",
      "Medical Clearance: Basic health check",
      "Joining: Immediate on selection"
    ],
    selectionProcess: [
      "Step 1: Submit profile on allnaukri.in with photo",
      "Step 2: Interaction with Lounge Operations Manager",
      "Step 3: Background verification and medical fitness check",
      "Step 4: Hospitality grooming and airport pass induction",
      "Step 5: Permanent placement at executive departure lounge"
    ],
    howToApply: [
      "Apply through the online portal or WhatsApp resume to 8929103286.",
      "Mention 'VIP Lounge Executive' as your role preference.",
      "Attend the quick online HR discussion.",
      "Receive joining letter from hr@allnaukri.in."
    ]
  },
  {
    slug: "airport-tarmac-bus-driver-equipment-operator",
    type: "Ground Fleet & Transport",
    category: "ramp-baggage",
    title: "Airport Tarmac Passenger Bus Driver & Ramp Equipment Operator",
    salary: "₹32,500 - ₹37,500 / Month",
    salaryNum: "₹35,000",
    security: "Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
    retirementAge: "60 Years (Permanent Service)",
    image: "/images/banner-ramp-crew.jpg",
    body: "Drive low-floor airport apron buses transporting travelers between boarding gates and aircraft stands, and operate pushback/luggage tractors.",
    org: "All Naukri Airport Services",
    state: "Delhi / Jaipur / Lucknow",
    airport: "Airside Apron Area - IGI Delhi, Jaipur & Lucknow Airports",
    date: "Immediate Joining",
    vacancies: "60 Openings",
    qualification: "10th Pass + Valid Commercial / Heavy Driving License (LMV / HMV)",
    ageLimit: "21 to 45 Years (Tenure till 60 years retirement)",
    gender: "Male Candidates",
    fee: "₹0 (100% Free Application)",
    contactNumber: "8929103286",
    contactEmail: "hr@allnaukri.in",
    badge: "Driving License Required",
    benefits: [
      "Starting Salary ₹32,500 - ₹37,500 + Safe Driving Bonus",
      "Permanent employment contract with lifetime job security guarantee till 60 years",
      "Provident fund, ESI medical card, and life insurance coverage",
      "Free airport duty meals and tea/coffee lounge access",
      "Zero registration or brokerage fees"
    ],
    responsibilities: [
      "Operating airfield passenger transit buses with maximum passenger safety",
      "Following airside speed limits and runway crossing signals strictly",
      "Assisting ground crew with luggage tractor and ramp equipment parking",
      "Performing daily vehicle inspection and reporting maintenance needs"
    ],
    importantDates: [
      "Application Window: Open Now",
      "Airside Driving Test: Conducted at airport tarmac tracks",
      "Medical & Eye Test: 6/6 vision standard",
      "Joining: Within 3 days of pass issue"
    ],
    selectionProcess: [
      "Step 1: Register on allnaukri.in with driving license details",
      "Step 2: License authenticity check & document review",
      "Step 3: Driving test and airside safety orientation",
      "Step 4: Police clearance and Airport Entry Permit",
      "Step 5: Permanent appointment letter issuance"
    ],
    howToApply: [
      "Submit application on allnaukri.in or call 8929103286.",
      "Provide driving license number and Aadhaar card.",
      "Schedule your trial driving slot with HR team.",
      "Receive appointment letter directly."
    ]
  },
  {
    slug: "airport-aircraft-cabin-cleaning-turnaround-crew",
    type: "Aircraft Turnaround & Upkeep",
    category: "ground-staff",
    title: "Aircraft Cabin Cleaning & Quick Turnaround Assistant",
    salary: "₹28,500 - ₹33,500 / Month",
    salaryNum: "₹31,000",
    security: "Lifetime Job Security (Service Guaranteed Till Retirement at 60 Years)",
    retirementAge: "60 Years (Permanent Service)",
    image: "/images/banner-ground-staff.jpg",
    body: "Perform aircraft interior cabin sanitization, seat pocket restocking, waste clearance, and passenger comfort item arrangement between flight landings.",
    org: "All Naukri Airport Services",
    state: "Goa / Mumbai / Delhi",
    airport: "Manohar International Airport Goa, CSMIA Mumbai, IGI Delhi",
    date: "Immediate Joining",
    vacancies: "110 Openings",
    qualification: "8th, 10th or 12th Pass (Freshers Welcome)",
    ageLimit: "18 to 40 Years (Tenure till 60 years retirement)",
    gender: "Male & Female Both",
    fee: "₹0 (100% Free Placement)",
    contactNumber: "8929103286",
    contactEmail: "hr@allnaukri.in",
    badge: "Direct Joining",
    benefits: [
      "Monthly Salary ₹28,500 to ₹33,500 + Shift Allowances",
      "Guaranteed permanent job security till retirement age 60 years",
      "Full protective PPE kit, gloves, masks, and uniform provided",
      "Medical insurance for self and family under ESI",
      "100% Free recruitment with zero hidden charges"
    ],
    responsibilities: [
      "Vacuuming passenger aisles and wiping tray tables during aircraft turnarounds",
      "Restocking in-flight safety cards, magazines, and fresh headrest covers",
      "Sanitizing aircraft lavatories and galleys under DGCA aviation hygiene standards",
      "Assisting cabin crew in preparing the aircraft for passenger re-boarding"
    ],
    importantDates: [
      "Application Window: Open Now",
      "Batch Selection: Every Tuesday & Friday",
      "Pass Formalities: 24 to 48 Hours",
      "Deployment: Immediate"
    ],
    selectionProcess: [
      "Step 1: Submit free application on allnaukri.in",
      "Step 2: Identity & basic health verification",
      "Step 3: Short telephonic interview with HR coordinator",
      "Step 4: Airport security verification pass processing",
      "Step 5: Immediate duty commencement with lifetime job security"
    ],
    howToApply: [
      "Fill the online application on allnaukri.in.",
      "Alternatively, connect with HR on phone/WhatsApp at 8929103286.",
      "Report to the assigned airport terminal office.",
      "Start your aviation career with guaranteed lifetime job stability."
    ]
  }
];

export function getJobBySlug(slug: string): AirportJob | undefined {
  return jobs.find((job) => job.slug === slug);
}
