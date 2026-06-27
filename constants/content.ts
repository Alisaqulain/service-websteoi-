export interface ValueItem {
  title: string;
  description: string;
}

export const VISION_MISSION_VALUES: ValueItem[] = [
  {
    title: "Vision",
    description:
      "To empower government personnel with secure and trusted service solutions.",
  },
  {
    title: "Mission",
    description:
      "Providing confidential, expert procedural and advisory support.",
  },
  {
    title: "Value",
    description:
      "Integrity and confidentiality at the core of our services.",
  },
];

export interface ServiceSubItem {
  title: string;
  description: string;
  image: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  items: ServiceSubItem[];
}

export const HERO_IMAGE = "/1.webp";
export const HERO_OVERLAY_IMAGES = ["/21.webp", "/22.webp"] as const;
export const ABOUT_IMAGE = "/2.webp";
export const BOOKING_IMAGE = "/1.webp";

export const GALLERY_IMAGES = [
  { src: "/2.webp", tall: true },
  { src: "/3.webp", tall: false },
  { src: "/5.webp", tall: true },
  { src: "/6.webp", tall: false },
  { src: "/8.webp", tall: false },
  { src: "/9.webp", tall: true },
  { src: "/11.webp", tall: false },
  { src: "/12.webp", tall: true },
  { src: "/14.webp", tall: false },
  { src: "/15.webp", tall: true },
  { src: "/16.webp", tall: false },
  { src: "/17.webp", tall: true },
  { src: "/18.webp", tall: false },
  { src: "/19.webp", tall: false },
  { src: "/20.webp", tall: true },
  { src: "/21.webp", tall: false },
  { src: "/22.webp", tall: true },
] as const;

export const CONTACT_BG_IMAGE = "/14.webp";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "ipr-apr-filing",
    title: "IPR & APR Filing",
    description:
      "Comprehensive IPR & APR filing assistance ensuring accuracy and rule compliance for Karnataka state government employees.",
    items: [
      {
        title: "Filing guidance",
        description:
          "Expert guidance for correct IPR & APR filing under govt rules.",
        image: "/3.webp",
      },
      {
        title: "Verification & submission",
        description:
          "Verification and correct submission for smooth approval.",
        image: "/4.webp",
      },
      {
        title: "Defect rectification",
        description:
          "Fix errors to ensure your filings meet all requirements.",
        image: "/5.webp",
      },
    ],
  },
  {
    slug: "tax-filing",
    title: "Tax Filing",
    description:
      "Dedicated tax filing services tailored for government employees and retirees ensuring lawful compliance.",
    items: [
      {
        title: "Income tax return processing",
        description:
          "Processing tax returns for salaried and retired govt servants.",
        image: "/6.webp",
      },
      {
        title: "Assistance with IT notices",
        description: "Help handling income tax notices with expert advice.",
        image: "/7.webp",
      },
    ],
  },
  {
    slug: "departmental-enquiries",
    title: "Departmental Enquiries",
    description:
      "Specialized support in navigating departmental enquiries with confidentiality and procedural accuracy.",
    items: [
      {
        title: "Charge memo scrutiny",
        description: "Detailed scrutiny of charge memos in departmental cases.",
        image: "/8.webp",
      },
      {
        title: "Defence replies",
        description: "Crafting strong defence replies for enquiry proceedings.",
        image: "/9.webp",
      },
      {
        title: "Procedural guidance",
        description: "Step-by-step procedural guidance through enquiries.",
        image: "/10.webp",
      },
    ],
  },
  {
    slug: "memo-notice-replies",
    title: "Memo & Notice Replies",
    description:
      "Professional drafting of compliant replies ensuring natural justice and service rule adherence.",
    items: [
      {
        title: "Rule-based replies",
        description: "Professionally drafted replies based on service rules.",
        image: "/11.webp",
      },
      {
        title: "Natural justice compliance",
        description:
          "Ensuring fair and compliant responses to show cause notices.",
        image: "/12.webp",
      },
    ],
  },
  {
    slug: "service-retirement",
    title: "Service & Retirement",
    description:
      "Trusted advisory on promotions, vigilance, pension, and retirement matters for government employees.",
    items: [
      {
        title: "Promotion & seniority advice",
        description: "Guidance on promotions and seniority for career growth.",
        image: "/13.webp",
      },
      {
        title: "Vigilance proceedings",
        description: "Support with vigilance case procedures and proceedings.",
        image: "/14.webp",
      },
      {
        title: "Pension & gratuity advisory",
        description: "Trusted advice on pension and gratuity entitlements.",
        image: "/15.webp",
      },
    ],
  },
  {
    slug: "ksat-assistance",
    title: "KSAT Assistance",
    description:
      "Procedural & advisory assistance for Karnataka administrative tribunal service matter cases.",
    items: [
      {
        title: "Dismissal & removal support",
        description:
          "Assistance with dismissal and removal procedures at KSAT.",
        image: "/16.webp",
      },
      {
        title: "Disciplinary penalties",
        description: "Support on disciplinary penalty cases before KSAT.",
        image: "/17.webp",
      },
      {
        title: "Promotion disputes",
        description: "Guidance on resolving promotion and seniority disputes.",
        image: "/18.webp",
      },
      {
        title: "Probation termination",
        description: "Help with probation-related termination cases.",
        image: "/19.webp",
      },
      {
        title: "Pension & post-retirement benefits",
        description:
          "Assistance with pension and post-retirement benefit claims.",
        image: "/20.webp",
      },
    ],
  },
];

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE: WhyChooseItem[] = [
  {
    number: "1",
    title: "IPR/APR Support",
    description:
      "We provide precise filing support for APR/IPR compliant with government rules.",
  },
  {
    number: "2",
    title: "Tax Expertise",
    description:
      "Expert guidance ensures accuracy and compliance in tax filings for government servants.",
  },
  {
    number: "3",
    title: "Enquiry Support",
    description:
      "Professional help with departmental enquiries protects your rights and procedural integrity.",
  },
  {
    number: "4",
    title: "Service Advisory",
    description:
      "Trusted advice on promotions, vigilance, and retirement to safeguard your service rights.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What does IPR & APR Filing include?",
    answer:
      "IPR & APR Filing involves helping you file your Annual Property Returns and Income Property Returns with proper verification and rectification of any defects under Karnataka Government Servants' Conduct Rules.",
  },
  {
    question: "Who do you assist?",
    answer:
      "We assist Karnataka government officials, police personnel, PSU employees, and retirees by providing expert procedural and advisory support to ensure confidentiality and integrity in their service matters.",
  },
  {
    question: "How can I register or book an appointment?",
    answer:
      "To register or book an appointment, you can call or WhatsApp us at 8277493659. Services are available only to eligible and registered government and PSU members.",
  },
  {
    question: "How are replies to memos and notices handled?",
    answer:
      "Our memo and notice reply service offers professionally drafted, rule-based replies that comply with natural justice and relevant service rules.",
  },
  {
    question: "Who is eligible for your services?",
    answer:
      "Our services are exclusively for Karnataka state government officials and employees, police personnel, PSU employees, and retired government servants who are registered members.",
  },
];

export const BOOKING_SERVICES = [
  "Filing guidance",
  "Verification & submission",
  "Defect rectification",
  "Income tax return processing",
  "Assistance with IT notices",
  "Charge memo scrutiny",
  "Defence replies",
  "Procedural guidance",
  "Rule-based replies",
  "Natural justice compliance",
  "Promotion & seniority advice",
  "Vigilance proceedings",
  "Pension & gratuity advisory",
  "Dismissal & removal support",
  "Disciplinary penalties",
  "Promotion disputes",
  "Probation termination",
  "Pension & post-retirement benefits",
] as const;
