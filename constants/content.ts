import {
  Shield,
  Lock,
  Eye,
  Zap,
  Globe,
  BarChart3,
  FileCheck,
  Users,
  Cloud,
  Radar,
  KeyRound,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const TRUST_LOGOS = [
  "NexaVault",
  "CloudSphere",
  "DataForge",
  "SecureLink",
  "QuantumEdge",
  "PulseNet",
  "IronGate",
  "VertexSys",
] as const;

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const FEATURES: FeatureItem[] = [
  {
    icon: Shield,
    title: "Unified Threat Defense",
    description:
      "Centralize detection, response, and remediation across your entire infrastructure with real-time intelligence feeds.",
    stat: "99.9",
    statLabel: "Uptime SLA",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description:
      "24/7 visibility into vulnerabilities, misconfigurations, and anomalous behavior across cloud and on-prem environments.",
    stat: "50M",
    statLabel: "Events Analyzed Daily",
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description:
      "Enforce least-privilege access with adaptive authentication, micro-segmentation, and encrypted data flows.",
    stat: "256",
    statLabel: "Bit Encryption",
  },
  {
    icon: BarChart3,
    title: "Executive Dashboards",
    description:
      "Transform complex security metrics into actionable insights with customizable reports for every stakeholder.",
    stat: "40",
    statLabel: "Report Templates",
  },
  {
    icon: FileCheck,
    title: "Compliance Automation",
    description:
      "Streamline SOC 2, ISO 27001, HIPAA, and GDPR workflows with automated evidence collection and audit trails.",
    stat: "12",
    statLabel: "Frameworks Supported",
  },
  {
    icon: Zap,
    title: "Instant Response Playbooks",
    description:
      "Deploy pre-built incident response workflows that reduce mean time to resolution by up to 73%.",
    stat: "73",
    statLabel: "Faster Resolution",
  },
];

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  gradient: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Threat Intelligence",
    description:
      "Proactive threat hunting powered by global intelligence networks and machine learning correlation engines.",
    image: "/illustrations/service-threat.svg",
    gradient: "from-blue-600/20 to-cyan-500/20",
  },
  {
    title: "Cloud Security Posture",
    description:
      "Continuous assessment of multi-cloud environments with automated remediation recommendations.",
    image: "/illustrations/service-cloud.svg",
    gradient: "from-indigo-600/20 to-purple-500/20",
  },
  {
    title: "Identity & Access Management",
    description:
      "Granular access controls, SSO integration, and privileged account monitoring for enterprise teams.",
    image: "/illustrations/service-identity.svg",
    gradient: "from-violet-600/20 to-fuchsia-500/20",
  },
  {
    title: "Security Awareness Training",
    description:
      "Interactive learning modules and phishing simulations that build a security-first culture organization-wide.",
    image: "/illustrations/service-training.svg",
    gradient: "from-teal-600/20 to-emerald-500/20",
  },
];

export const BENEFITS = [
  "Reduce security incidents by up to 68% within the first quarter",
  "Consolidate 15+ security tools into one unified platform",
  "Achieve compliance readiness 3x faster with automated workflows",
  "Gain real-time visibility across hybrid and multi-cloud estates",
  "Empower teams with AI-driven remediation recommendations",
  "Scale security operations without proportional headcount growth",
] as const;

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We map your attack surface, evaluate current controls, and identify critical gaps in your security posture.",
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    description:
      "Our experts design a tailored security framework aligned with your business objectives and compliance requirements.",
  },
  {
    number: "03",
    title: "Implementation & Integration",
    description:
      "Seamless deployment with your existing stack — minimal disruption, maximum coverage from day one.",
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description:
      "Continuous improvement through threat modeling, performance analytics, and evolving best practices.",
  },
];

export interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { icon: Globe, value: 120, suffix: "+", label: "Countries Protected" },
  { icon: Users, value: 2500, suffix: "+", label: "Enterprise Clients" },
  { icon: Radar, value: 99, suffix: ".9%", label: "Threat Detection Rate" },
  { icon: Layers, value: 15, suffix: "B+", label: "Events Processed" },
];

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Sarah Chen",
    role: "Chief Information Security Officer",
    company: "Meridian Financial",
    content:
      "AegisCore transformed how we manage security knowledge. Our team now responds to threats in minutes, not hours. The platform's clarity and depth are unmatched.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "VP of Engineering",
    company: "NovaTech Solutions",
    content:
      "The compliance automation alone saved us hundreds of hours during our SOC 2 audit. It's the most intuitive security platform we've ever deployed.",
    rating: 5,
    initials: "MR",
  },
  {
    name: "Elena Kowalski",
    role: "Director of IT Security",
    company: "GlobalHealth Systems",
    content:
      "From onboarding to daily operations, AegisCore delivers enterprise-grade protection without the complexity. Our security posture has never been stronger.",
    rating: 5,
    initials: "EK",
  },
  {
    name: "James Okonkwo",
    role: "Head of Cloud Infrastructure",
    company: "ScaleForge Inc.",
    content:
      "The unified dashboard gives us complete visibility across AWS, Azure, and GCP. Incident response playbooks have cut our MTTR dramatically.",
    rating: 5,
    initials: "JO",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What makes AegisCore different from other security platforms?",
    answer:
      "AegisCore combines threat intelligence, compliance automation, and security knowledge management in a single unified platform. Unlike point solutions, we provide end-to-end visibility with AI-driven insights that adapt to your organization's unique risk profile.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Most enterprise deployments are fully operational within 2-4 weeks. Our guided onboarding process includes discovery, integration setup, team training, and custom playbook configuration to ensure a smooth transition.",
  },
  {
    question: "Does AegisCore integrate with our existing security tools?",
    answer:
      "Yes. AegisCore supports 200+ integrations including SIEM, EDR, IAM, cloud providers, and ticketing systems. Our open API also enables custom integrations for proprietary tools.",
  },
  {
    question: "What compliance frameworks do you support?",
    answer:
      "We support SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, NIST CSF, and CIS Controls. Automated evidence collection and continuous monitoring help maintain audit readiness year-round.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "We offer a 14-day fully-featured trial with dedicated onboarding support. Enterprise plans include a proof-of-concept engagement tailored to your security requirements.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "All plans include 24/7 technical support. Enterprise customers receive a dedicated security advisor, quarterly business reviews, and priority incident response assistance.",
  },
];

export const HERO_FLOATING_CARDS = [
  { icon: KeyRound, label: "Encrypted", value: "AES-256" },
  { icon: Cloud, label: "Cloud Ready", value: "Multi-Cloud" },
  { icon: Shield, label: "Protected", value: "24/7 SOC" },
] as const;
