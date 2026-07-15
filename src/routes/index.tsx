import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Bot, Workflow, Network, Zap, Headphones, LineChart, Mail, ExternalLink,
  ArrowRight, ArrowUpRight, Sparkles, Cog, Database, MessageSquare,
  CalendarClock, Filter, CheckCircle2, Quote, X, Menu, Cpu, Layers,
  Users, TrendingUp, Wrench, Repeat, Handshake, MapPin, Phone, Send,
} from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";
import weatherAsset from "@/assets/weather.png.asset.json";
import fbAgentAsset from "@/assets/fb-agent.png.asset.json";
import gdriveAsset from "@/assets/gdrive.png.asset.json";
import invoiceAsset from "@/assets/invoice.png.asset.json";
import jobscraperAsset from "@/assets/jobscraper.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Rigil Kent Ancheta",
              jobTitle: "AI Automation Specialist",
              url: "/",
              image: profileAsset.url,
              email: "mailto:rigil.ancheta@gmail.com",
              address: { "@type": "PostalAddress", addressLocality: "Valenzuela City", addressCountry: "PH" },
              sameAs: [
                "https://www.onlinejobs.ph/jobseekers/info/2303948",
                "https://www.upwork.com/freelancers/~01dcc33f9129c2d9c1",
              ],
            },
            {
              "@type": "ProfessionalService",
              name: "Rigil Kent Ancheta — AI Automation Services",
              description:
                "AI Automation, n8n workflow development, GoHighLevel CRM automation, API integrations and technical virtual assistance.",
              areaServed: "Worldwide",
              provider: { "@type": "Person", name: "Rigil Kent Ancheta" },
            },
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

/* ----------------------------- data ----------------------------- */

const services = [
  {
    icon: Bot,
    title: "AI Automation & AI Agents",
    desc: "Build intelligent AI-powered workflows that reduce repetitive work, improve efficiency, and automate business operations using modern AI technologies.",
    items: [
      "AI Workflow Automation", "AI Agents", "ChatGPT Integration", "OpenAI Integration",
      "AI Content Processing", "AI Email Automation", "Customer Support Automation",
      "Lead Qualification Automation", "Document Processing", "Business AI Assistants",
    ],
    tech: ["OpenAI", "ChatGPT", "AI Agents", "APIs", "Webhooks"],
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    desc: "Design and build powerful custom automation workflows using n8n to connect business applications, automate repetitive tasks, and eliminate manual work.",
    items: [
      "Custom n8n Workflows", "API Integration", "HTTP Requests", "Webhooks",
      "Google Workspace Automation", "Google Sheets Automation", "Telegram Automation",
      "CRM Integration", "Scheduled Automation", "Workflow Optimization",
      "Multi-step Business Processes", "Error Handling",
    ],
    tech: ["n8n", "REST API", "HTTP", "JSON", "Webhooks", "Google Workspace"],
  },
  {
    icon: Network,
    title: "GoHighLevel CRM & Automation",
    desc: "Build efficient CRM systems and automated customer journeys inside GoHighLevel to improve lead management, follow-ups, and business growth.",
    items: [
      "CRM Setup", "Workflow Automation", "Sales Pipeline Automation",
      "Appointment Automation", "Calendar Setup", "Automated Follow-ups",
      "Email Automation", "SMS Automation", "Lead Nurturing", "Opportunity Management",
      "Client Onboarding",
    ],
    tech: ["GoHighLevel", "CRM", "Pipelines", "Calendar", "Email", "SMS", "Automation"],
  },
  {
    icon: Zap,
    title: "API Integration & Business Automation",
    desc: "Connect your favorite business tools so they automatically share information and work together without repetitive manual tasks.",
    items: [
      "REST API Integration", "Third-party Software Integration", "Data Synchronization",
      "HTTP Requests", "Webhooks", "Cross-platform Automation",
      "Business Process Integration", "Custom API Workflows",
    ],
    tech: ["REST API", "JSON", "HTTP", "OAuth", "Webhooks", "Integrations"],
  },
  {
    icon: Headphones,
    title: "Technical Virtual Assistance",
    desc: "Provide dependable technical support for businesses that need help managing systems, organizing data, troubleshooting workflows, and improving daily operations.",
    items: [
      "Technical Support", "SOP Creation", "Process Documentation",
      "Workflow Troubleshooting", "Data Management", "Operations Support",
      "System Configuration", "Administrative Support", "Online Research", "Process Improvement",
    ],
    tech: ["Google Workspace", "Microsoft Office", "Documentation", "Business Operations"],
  },
  {
    icon: LineChart,
    title: "Business Process Analysis & Consulting",
    desc: "Before building automation, understand the business. I analyze your current workflow, identify bottlenecks, and recommend practical automation solutions that fit your operations.",
    items: [
      "Business Process Analysis", "Workflow Mapping", "Automation Strategy",
      "Process Optimization", "Automation Roadmaps", "Productivity Improvement",
      "System Recommendations", "Technical Planning",
    ],
    tech: ["Business Analysis", "Workflow Design", "Process Mapping", "Automation Strategy", "Productivity"],
  },
];

const capabilities = [
  { icon: LineChart, title: "Business Process Analysis" },
  { icon: Cog, title: "Workflow Optimization" },
  { icon: Bot, title: "AI Automation" },
  { icon: Workflow, title: "n8n Development" },
  { icon: Network, title: "GoHighLevel Automation" },
  { icon: Zap, title: "API Integration" },
  { icon: Wrench, title: "Technical Problem Solving" },
  { icon: Sparkles, title: "Operational Excellence" },
  { icon: TrendingUp, title: "Data-Driven Decision Making" },
  { icon: Headphones, title: "Reliable Technical Support" },
];

const experience = [
  {
    role: "Workforce Analyst",
    company: "Sterling Backcheck",
    period: "July 2019 – Present",
    location: "Taguig City, Philippines",
    bullets: [
      "Serve as primary point of contact for workforce management policies and workforce optimization.",
      "Interpret and analyze staffing data; make recommendations that reduce overhead and improve customer experience.",
      "Ensure service-level targets are met and maintain proper headcount while calculating call capacity.",
      "First point of contact for escalated customer/client concerns—handle complaints and follow up to resolution.",
      "Recognized as one of the most Reliable Employees of the Year 2020; top representative for 6 consecutive months.",
    ],
    skills: ["Workforce Management", "Business Analysis", "Reporting", "Process Improvement", "Data Analysis", "Stakeholder Communication"],
  },
  {
    role: "Customer Care Representative II",
    company: "Teletech",
    period: "October 2016 – July 2019",
    location: "Quezon City, Philippines",
    bullets: [
      "Supported customers with a wide range of queries across phone and email, ensuring accurate and timely resolution.",
      "Provided real-time coaching to representatives to improve caller experience.",
      "Assisted in handling escalated concerns in real-time.",
      "Awarded Top 10 Best Employees for Tier II Customer Care Representative, 2018.",
    ],
    skills: ["Customer Support", "Coaching", "Escalation Handling", "Quality Assurance", "Team Collaboration"],
  },
  {
    role: "Technical Support Representative",
    company: "StarTek",
    period: "August 2012 – October 2016",
    location: "Makati City, Philippines",
    bullets: [
      "Identified, investigated, and resolved software and hardware issues via calls, chat, and email.",
      "Guided users through diagnostics and troubleshooting using verbal and tool-based procedures.",
      "Collaborated across teams and vendors to resolve complex product issues.",
      "Received the Years of Service Award for 4 straight years of loyal, enthusiastic service.",
    ],
    skills: ["Technical Support", "Troubleshooting", "Problem Solving", "Documentation", "Cross-team Collaboration"],
  },
];

const transferable = [
  { icon: Filter, title: "Process Analysis", desc: "Understanding workflows before automating them." },
  { icon: Sparkles, title: "Operational Excellence", desc: "Identifying bottlenecks and opportunities for improvement." },
  { icon: TrendingUp, title: "Data-Driven Decisions", desc: "Using reporting and analytics to improve business performance." },
  { icon: Users, title: "Customer-Focused Solutions", desc: "Designing workflows that improve user and client experiences." },
  { icon: Wrench, title: "Technical Problem Solving", desc: "Troubleshooting systems and implementing practical solutions." },
  { icon: Repeat, title: "Continuous Improvement", desc: "Always looking for smarter, more efficient ways of working." },
];

type Project = {
  title: string;
  type: string;
  image: string;
  challenge: string;
  solution: string;
  flow: string[];
  tools: string[];
  features: string[];
  categories: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Daily AI Weather Content Publisher",
    type: "Portfolio Project",
    image: weatherAsset.url,
    challenge:
      "Publishing fresh, on-brand social content every single day is time-consuming and easy to forget, especially when quotes must remain unique across weeks of posts.",
    solution:
      "An AI-powered n8n workflow that pulls real-time weather data, generates a unique inspirational quote and description, verifies uniqueness against a Google Sheets database, sources a matching image, composes a branded graphic and publishes it to Facebook — completely hands-off.",
    flow: [
      "Daily Schedule Trigger",
      "Fetch Weather Data",
      "AI Content Generation",
      "Uniqueness Validation",
      "Image Search & Selection",
      "Graphic Composition",
      "Publish to Facebook",
    ],
    tools: ["n8n", "OpenAI", "Google Sheets", "Weather API", "Image API", "Facebook Graph API", "Webhooks"],
    features: [
      "AI-powered content generation",
      "Duplicate detection with retry loop",
      "Automated graphic creation",
      "Scheduled daily publishing",
      "End-to-end error handling",
    ],
    categories: ["ai", "n8n", "api"],
    featured: true,
  },
  {
    title: "AI Facebook Messenger Support Agent",
    type: "Automation Solution",
    image: fbAgentAsset.url,
    challenge:
      "Small businesses lose leads when Messenger questions go unanswered outside business hours or repeat the same FAQs over and over.",
    solution:
      "An n8n workflow that handles Facebook webhook verification, filters real messages, retrieves the knowledge base from Google Docs, and lets an AI agent (Gemini) answer with conversation memory — replying back through the Messenger Graph API 24/7.",
    flow: [
      "Facebook Webhook",
      "Verification / Message Filter",
      "Load Knowledge Base (Google Docs)",
      "AI Agent + Memory",
      "Reply via Messenger Graph API",
    ],
    tools: ["n8n", "Google Gemini", "Google Docs", "Facebook Graph API", "Webhooks"],
    features: [
      "24/7 automated FAQ handling",
      "Knowledge-base grounded answers",
      "Conversation memory per session",
      "Secure webhook verification",
    ],
    categories: ["ai", "n8n", "api"],
  },
  {
    title: "Google Drive File Classification Automation",
    type: "Workflow Demonstration",
    image: gdriveAsset.url,
    challenge:
      "Team drives quickly become a mess when everyone dumps files into a single folder, making retrieval slow and inconsistent.",
    solution:
      "An n8n workflow that watches a Drive folder, downloads new files, analyzes their content with Gemini Vision, predicts a category, finds the matching subfolder and moves the file — keeping storage organized automatically.",
    flow: [
      "Google Drive Trigger",
      "Download File",
      "Filter Non-Workspace Files",
      "Analyze with Gemini Vision",
      "Classify Category",
      "Find Target Folder",
      "Move File",
    ],
    tools: ["n8n", "Google Drive", "Google Gemini Vision"],
    features: [
      "AI-based document classification",
      "Vision-based content analysis",
      "Automatic folder routing",
      "Zero-touch file organization",
    ],
    categories: ["ai", "n8n", "workflow"],
  },
  {
    title: "Invoice Follow-Up & Collections Workflow",
    type: "Automation Solution",
    image: invoiceAsset.url,
    challenge:
      "Chasing overdue invoices manually is stressful, inconsistent, and one of the most common reasons small businesses experience cash-flow gaps.",
    solution:
      "An n8n workflow that runs every morning, reads invoices from Google Sheets, calculates days overdue, routes each invoice through tiered reminders (7, 14, 30+ days) and logs every follow-up back to the sheet.",
    flow: [
      "Daily 9 AM Trigger",
      "Read Invoices (Google Sheets)",
      "Filter Overdue + Calculate Days",
      "Route by Overdue Tier",
      "Send Tiered Reminder / Escalation",
      "Update Follow-Up Log",
    ],
    tools: ["n8n", "Google Sheets", "Gmail"],
    features: [
      "Tiered reminder escalation",
      "Automatic follow-up logging",
      "Freelancer alert for 30+ day invoices",
      "Zero manual chasing",
    ],
    categories: ["n8n", "workflow", "va"],
  },
  {
    title: "AI Job Search & Application Assistant",
    type: "Portfolio Project",
    image: jobscraperAsset.url,
    challenge:
      "Finding relevant remote jobs, tailoring a resume for each one, and drafting outreach messages is repetitive, slow work that discourages consistent applications.",
    solution:
      "A Telegram-triggered n8n workflow that validates a query with Gemini, searches jobs via JSearch, and for each result asks an AI agent to produce an ATS-tailored resume, cover letter and Upwork proposal — updating a Google Docs template and drafting the email in Gmail.",
    flow: [
      "Telegram Trigger",
      "Query Validation (Gemini)",
      "Search Jobs (JSearch API)",
      "Loop Over Results",
      "AI Agent: Resume + Cover Letter + Proposal",
      "Update Google Docs & Gmail Draft",
      "Summary back to Telegram",
    ],
    tools: ["n8n", "Telegram", "Google Gemini", "Groq", "JSearch API", "Google Docs", "Google Drive", "Gmail"],
    features: [
      "AI query validation",
      "Automated resume tailoring",
      "Cover letter & proposal generation",
      "Gmail draft creation",
      "Conditional branching per job",
    ],
    categories: ["ai", "n8n", "api"],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI Automation" },
  { id: "n8n", label: "n8n" },
  { id: "ghl", label: "GoHighLevel" },
  { id: "api", label: "API Integration" },
  { id: "va", label: "Technical VA" },
  { id: "workflow", label: "Workflow Design" },
];

const whyClients = [
  { icon: Layers, title: "Business-First Thinking", desc: "I understand operations before building automation." },
  { icon: MessageSquare, title: "Reliable Communication", desc: "Clear updates and collaborative problem solving." },
  { icon: Cog, title: "Practical Solutions", desc: "Automation designed for real business needs." },
  { icon: Repeat, title: "Continuous Improvement", desc: "Workflows built to evolve with your business." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "Focused on creating lasting value rather than one-time fixes." },
];

/* ----------------------------- page ----------------------------- */

function Portfolio() {
  return (
    <main className="relative min-h-screen">
      <BackgroundGrid />
      <Nav />
      <Hero />
      <Services />
      <WhyMe />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ----------------------------- background ----------------------------- */

function BackgroundGrid() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}

/* ----------------------------- nav ----------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    ["Services", "#services"],
    ["Work Experience", "#experience"],
    ["Previous Works", "#projects"],
    ["Testimonials", "#testimonials"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-white/5" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.19_260)] to-[oklch(0.78_0.18_320)] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              R
            </div>
          </div>
          <span className="font-display font-bold tracking-tight text-sm sm:text-base">
            <span className="gradient-text">RIGIL</span>
            <span className="text-foreground"> KENT ANCHETA</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:inline-flex btn-primary text-xs">
            LET'S WORK TOGETHER <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden btn-ghost !p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-2"
              >
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-xs mt-2">
              LET'S WORK TOGETHER
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------------------- hero ----------------------------- */

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-up">
          <span className="chip">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
            Available for new automation projects
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Smarter Workflows.
            <br />
            <span className="gradient-text">Intelligent Automation.</span>
            <br />
            Better Business Operations.
          </h1>
          <p className="mt-6 text-sm sm:text-base text-muted-foreground font-medium">
            AI Automation Specialist · n8n Developer · GoHighLevel Specialist · Technical Virtual Assistant
          </p>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I combine more than 13 years of operational experience with modern automation
            technologies — <span className="text-foreground">n8n, GoHighLevel, APIs, and AI</span> — to help
            businesses eliminate repetitive work, connect their systems, and streamline processes.
            I understand how a business runs before I design anything technical.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              VIEW MY WORK <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              LET'S BUILD YOUR AUTOMATION <Sparkles className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {["n8n", "GoHighLevel", "OpenAI", "REST API", "Webhooks", "Google Workspace"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          <NodeNetwork />
          <div className="relative mx-auto max-w-md">
            <div
              className="absolute -inset-6 rounded-3xl blur-2xl opacity-70"
              style={{
                background:
                  "conic-gradient(from 120deg, oklch(0.72 0.19 260 / 0.5), oklch(0.78 0.18 320 / 0.4), oklch(0.75 0.17 200 / 0.5), oklch(0.72 0.19 260 / 0.5))",
              }}
            />
            <div className="relative glass rounded-3xl p-3 card-hover">
              <img
                src={profileAsset.url}
                alt="Rigil Kent Ancheta — AI Automation Specialist"
                loading="eager"
                className="rounded-2xl w-full h-auto object-cover"
              />
              <div className="mt-3 flex items-center justify-between px-2 py-2">
                <div>
                  <div className="text-sm font-semibold">Rigil Kent Ancheta</div>
                  <div className="text-xs text-muted-foreground">Valenzuela City, PH</div>
                </div>
                <span className="chip">
                  <Cpu className="h-3 w-3" /> AI + n8n + GHL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NodeNetwork() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 500 500"
      className="absolute inset-0 w-full h-full opacity-70"
      style={{ maskImage: "radial-gradient(circle at center, black 50%, transparent 80%)" }}
    >
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.72 0.19 260)" />
          <stop offset="1" stopColor="oklch(0.78 0.18 320)" />
        </linearGradient>
      </defs>
      {[
        [80, 90, 250, 250], [420, 80, 250, 250], [60, 400, 250, 250],
        [440, 400, 250, 250], [250, 40, 250, 250], [250, 460, 250, 250],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#lg)" strokeWidth="1.2" className="dash-flow" opacity="0.5" />
      ))}
      {[[80, 90], [420, 80], [60, 400], [440, 400], [250, 40], [250, 460]].map(([x, y], i) => (
        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
          <circle cx={x} cy={y} r="16" fill="oklch(0.20 0.025 262)" stroke="url(#lg)" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="4" fill="url(#lg)" />
        </g>
      ))}
    </svg>
  );
}

/* ----------------------------- section header ----------------------------- */

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-14">
      <span className="chip">{eyebrow}</span>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{subtitle}</p>}
    </div>
  );
}

/* ----------------------------- services ----------------------------- */

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title={<>Automation, engineered around <span className="gradient-text">how your business runs</span>.</>}
          subtitle="Six focused practices that turn manual, repetitive work into reliable, measurable systems."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="glass rounded-2xl p-6 card-hover flex flex-col">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[oklch(0.72_0.19_260)] to-[oklch(0.78_0.18_320)] flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground/90">
                {s.items.slice(0, 6).map((i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[oklch(0.75_0.17_200)]" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tech.map((t) => (
                  <span key={t} className="chip !py-0.5 !px-2 !text-[11px]">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- why me ----------------------------- */

function WhyMe() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why work with me"
          title={<>Technology meets <span className="gradient-text">operational experience</span>.</>}
          subtitle="What makes me different isn't just knowing the tools — it's understanding how businesses actually operate before designing a technical solution. 13+ years analyzing workflows, improving operations, and supporting business teams."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((c) => (
            <div key={c.title} className="glass rounded-xl p-4 card-hover flex flex-col items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center">
                <c.icon className="h-4 w-4 text-[oklch(0.75_0.17_200)]" />
              </div>
              <div className="text-sm font-medium">{c.title}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center max-w-3xl mx-auto text-lg text-muted-foreground italic">
          "Great automation isn't just about connecting apps — it's about understanding your business,
          simplifying complexity, and building solutions that make your team more productive every day."
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- experience ----------------------------- */

function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Work Experience"
          title={<>13+ years of <span className="gradient-text">operational thinking</span>.</>}
          subtitle="I'm transitioning into AI Automation full-time — with the business mindset required to make automation actually work."
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="space-y-6">
            {experience.map((e, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={e.company} className="relative pl-12 lg:pl-0">
                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-6 h-3 w-3 rounded-full bg-gradient-to-br from-[oklch(0.72_0.19_260)] to-[oklch(0.78_0.18_320)] ring-4 ring-background" />
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-10 ${i % 2 === 0 ? "" : "lg:[&>*:first-child]:col-start-2"}`}>
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="glass rounded-2xl p-6 text-left w-full card-hover"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold">{e.role}</h3>
                          <div className="text-sm text-muted-foreground mt-1">
                            {e.company} · <span className="text-[oklch(0.75_0.17_200)]">{e.period}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {e.location}
                          </div>
                        </div>
                        <ArrowUpRight className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-45" : ""}`} />
                      </div>
                      {isOpen && (
                        <div className="mt-5 animate-fade-up">
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            Key Responsibilities
                          </div>
                          <ul className="space-y-1.5 text-sm text-muted-foreground">
                            {e.bullets.map((b) => (
                              <li key={b} className="flex gap-2">
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[oklch(0.75_0.17_200)]" />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            Skills Demonstrated
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {e.skills.map((s) => (
                              <span key={s} className="chip !text-[11px]">{s}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">
            How my experience <span className="gradient-text">benefits your business</span>
          </h3>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transferable.map((t) => (
              <div key={t.title} className="glass rounded-2xl p-5 card-hover">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                  <t.icon className="h-5 w-5 text-[oklch(0.78_0.18_320)]" />
                </div>
                <div className="font-semibold">{t.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center italic text-muted-foreground max-w-3xl mx-auto">
            "The best automation isn't built by connecting software alone — it's built by understanding
            people, processes, and business goals first."
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- projects ----------------------------- */

function Projects() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState<Project | null>(null);
  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );
  const featured = projects.find((p) => p.featured)!;

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Automation Projects"
          title={<>Portfolio projects & <span className="gradient-text">workflow demonstrations</span>.</>}
          subtitle="Personal automation projects and proofs of concept I designed and built to demonstrate real-world automation patterns."
        />

        {/* Featured */}
        <article className="glass rounded-3xl overflow-hidden mb-10 card-hover">
          <div className="grid lg:grid-cols-2">
            <button
              onClick={() => setActive(featured)}
              className="relative group overflow-hidden bg-black/30"
            >
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="w-full h-full object-cover object-left-top group-hover:scale-[1.02] transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 chip !bg-black/50">Featured Project</span>
            </button>
            <div className="p-8 lg:p-10 flex flex-col">
              <span className="chip w-fit">{featured.type}</span>
              <h3 className="mt-4 text-2xl lg:text-3xl font-bold">{featured.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm">{featured.challenge}</p>
              <p className="mt-3 text-sm">{featured.solution}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {featured.tools.map((t) => (
                  <span key={t} className="chip !text-[11px]">{t}</span>
                ))}
              </div>
              <button onClick={() => setActive(featured)} className="btn-primary mt-6 w-fit">
                EXPLORE PROJECT <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </article>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition ${
                filter === f.id
                  ? "bg-white/15 border-white/30 text-foreground"
                  : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article key={p.title} className="glass rounded-2xl overflow-hidden card-hover flex flex-col">
              <button
                onClick={() => setActive(p)}
                className="relative aspect-[16/10] bg-black/30 overflow-hidden group"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 chip !bg-black/60 !text-[11px]">{p.type}</span>
              </button>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.challenge}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tools.slice(0, 4).map((t) => (
                    <span key={t} className="chip !text-[11px]">{t}</span>
                  ))}
                </div>
                <button onClick={() => setActive(p)} className="btn-ghost mt-5 w-fit text-xs">
                  EXPLORE PROJECT <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const on = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", on);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", on);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 animate-fade-up">
      <div className="glass rounded-3xl max-w-5xl w-full my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-6 lg:p-8">
          <span className="chip">{project.type}</span>
          <h3 className="mt-3 text-2xl lg:text-3xl font-bold">{project.title}</h3>
          <a
            href={project.image}
            target="_blank"
            rel="noreferrer"
            className="block mt-5 rounded-2xl overflow-hidden bg-black/30 border border-white/10"
          >
            <img src={project.image} alt={project.title} className="w-full h-auto" />
          </a>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Business Challenge</div>
              <p className="mt-2 text-sm text-muted-foreground">{project.challenge}</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Automation Solution</div>
              <p className="mt-2 text-sm text-muted-foreground">{project.solution}</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Workflow</div>
            <div className="flex flex-wrap items-center gap-2">
              {project.flow.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="chip !py-1.5 !text-xs">{step}</span>
                  {i < project.flow.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools Used</div>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span key={t} className="chip !text-[11px]">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Features</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[oklch(0.75_0.17_200)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- testimonials ----------------------------- */

function Testimonials() {
  const steps = [
    "You share your business challenge.",
    "Together we design the right automation solution.",
    "Your workflow becomes faster, smarter, and easier to manage.",
    "Your success story earns its place here.",
  ];
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Your <span className="gradient-text">success story</span> starts here.</>}
          subtitle="Every successful partnership begins with a conversation. The next project showcased here could be yours."
        />

        <div className="max-w-3xl mx-auto glass rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div
            className="absolute -top-16 -left-6 text-[10rem] leading-none font-display opacity-10 pointer-events-none select-none"
            aria-hidden
          >
            "
          </div>
          <Quote className="h-8 w-8 mx-auto text-[oklch(0.78_0.18_320)]" />
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold">Your Testimonial Could Be Here</h3>
          <p className="mt-4 text-muted-foreground italic">
            "The best portfolios are built one successful project at a time. Let's collaborate,
            solve a real business challenge, and your experience could become the next featured
            success story on this page."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center text-xs text-muted-foreground">
              You
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-muted-foreground">YOUR NAME</div>
              <div className="text-xs text-muted-foreground/70">YOUR COMPANY</div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s} className="glass rounded-2xl p-5 relative">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[oklch(0.72_0.19_260)] to-[oklch(0.78_0.18_320)] flex items-center justify-center font-semibold text-sm">
                {i + 1}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {whyClients.map((w) => (
            <div key={w.title} className="glass rounded-2xl p-5 card-hover">
              <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                <w.icon className="h-4 w-4 text-[oklch(0.75_0.17_200)]" />
              </div>
              <div className="font-semibold text-sm">{w.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{w.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold">Let's build something worth talking about.</h3>
          <p className="mt-3 text-muted-foreground">
            Whether you're looking to automate repetitive work, improve customer experiences,
            streamline operations, or connect your business tools — I'd love to help.
          </p>
          <a href="#contact" className="btn-primary mt-6">
            BECOME MY NEXT SUCCESS STORY <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- contact ----------------------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", country: "",
    service: "", timeline: "", budget: "", message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Rigil,%0D%0A%0D%0AName: ${form.name}%0D%0ACompany: ${form.company}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0ACountry: ${form.country}%0D%0AService: ${form.service}%0D%0ATimeline: ${form.timeline}%0D%0ABudget: ${form.budget}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:rigil.ancheta@gmail.com?subject=New project inquiry from ${encodeURIComponent(form.name || "your website")}&body=${body}`;
    setSent(true);
  };

  const input = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[oklch(0.72_0.19_260)] focus:border-transparent transition";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build <span className="gradient-text">smarter workflows</span> together.</>}
          subtitle="Whether it's AI automation, workflow optimization, CRM automation, API integration, or dependable technical support — I'd love to help you simplify operations."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            <NodeNetwork />
            <div className="relative">
              <h3 className="text-2xl font-bold">Let's talk about your project</h3>
              <p className="mt-3 text-muted-foreground text-sm">
                Every business has repetitive tasks that consume valuable time. No pressure, no
                complicated technical discussions — just a conversation about how automation can
                help your business.
              </p>

              <div className="mt-8 glass rounded-2xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What happens next</div>
                <ul className="mt-3 space-y-2 text-sm">
                  {[
                    "I'll review your inquiry.",
                    "I'll reach out to discuss your project.",
                    "We'll identify opportunities for automation.",
                    "I'll recommend practical solutions tailored to your business.",
                    "If we're a good fit, we'll start building smarter workflows.",
                  ].map((s) => (
                    <li key={s} className="flex gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[oklch(0.75_0.17_200)]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Connect with me</div>
                <div className="space-y-2">
                  <a href="mailto:rigil.ancheta@gmail.com" className="glass rounded-xl p-4 flex items-center gap-3 card-hover">
                    <Mail className="h-5 w-5 text-[oklch(0.75_0.17_200)]" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-xs text-muted-foreground">rigil.ancheta@gmail.com</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                  <a href="https://www.upwork.com/freelancers/~01dcc33f9129c2d9c1" target="_blank" rel="noreferrer" className="glass rounded-xl p-4 flex items-center gap-3 card-hover">
                    <Sparkles className="h-5 w-5 text-[oklch(0.78_0.18_320)]" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Upwork</div>
                      <div className="text-xs text-muted-foreground">View my Upwork profile</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                  <a href="https://www.onlinejobs.ph/jobseekers/info/2303948" target="_blank" rel="noreferrer" className="glass rounded-xl p-4 flex items-center gap-3 card-hover">
                    <Handshake className="h-5 w-5 text-[oklch(0.72_0.19_260)]" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">OnlineJobs.ph</div>
                      <div className="text-xs text-muted-foreground">View my OnlineJobs.ph profile</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                  <div className="glass rounded-xl p-4 flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Phone</div>
                      <div className="text-xs text-muted-foreground">(+63) 917-891-0495</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-3xl p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Full Name *"><input required className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
              <Field label="Company Name"><input className={input} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Email Address *"><input type="email" required className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></Field>
              <Field label="Phone Number"><input className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></Field>
            </div>
            <Field label="Country"><input className={input} value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} /></Field>
            <Field label="Service Needed *">
              <select required className={input} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Select a service</option>
                {["AI Automation","n8n Workflow Development","AI Agent Development","GoHighLevel Automation","CRM Automation","API Integration","Workflow Optimization","Business Process Analysis","Technical Virtual Assistance","Automation Consultation","Other"].map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Estimated Timeline">
                <select className={input} value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}>
                  <option value="">Select timeline</option>
                  {["ASAP","Within 1 Week","Within 2 Weeks","Within 1 Month","Flexible"].map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Budget Range">
                <select className={input} value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                  <option value="">Select budget</option>
                  {["Under $500","$500 – $1,000","$1,000 – $3,000","$3,000+","Let's Discuss"].map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Project Description *">
              <textarea required rows={5} className={input} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the process you'd like to automate..." />
            </Field>
            <button type="submit" className="btn-primary w-full">
              {sent ? "Opening your email…" : "LET'S DISCUSS YOUR PROJECT"} <Send className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Submitting opens your email client with the project details pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

/* ----------------------------- final CTA ----------------------------- */

function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative glass rounded-3xl overflow-hidden p-10 lg:p-16 text-center">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(600px 300px at 20% 20%, oklch(0.72 0.19 260 / 0.4), transparent 70%), radial-gradient(600px 300px at 80% 80%, oklch(0.78 0.18 320 / 0.4), transparent 70%)",
            }}
          />
          <div className="relative">
            <span className="chip"><Sparkles className="h-3 w-3" /> Ready when you are</span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
              Ready to <span className="gradient-text">eliminate repetitive work</span>?
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              Technology should help your business move faster — not create more manual work. Let's
              build solutions that save time, reduce repetitive tasks, and help your business operate
              more efficiently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#contact" className="btn-primary">LET'S BUILD YOUR AUTOMATION <ArrowRight className="h-4 w-4" /></a>
              <a href="#projects" className="btn-ghost">VIEW MY PROJECTS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- footer ----------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-display font-bold text-lg">
              <span className="gradient-text">RIGIL</span> KENT ANCHETA
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              AI Automation Specialist · n8n Developer · GoHighLevel Specialist · Technical Virtual Assistant
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Helping businesses simplify operations through AI-powered automation, workflow
              optimization, and practical technical solutions.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigate</div>
            <ul className="mt-3 space-y-2 text-sm">
              {[["Home","#top"],["Services","#services"],["Work Experience","#experience"],["Previous Works","#projects"],["Testimonials","#testimonials"],["Contact","#contact"]].map(([l,h]) => (
                <li key={h}><a href={h} className="text-muted-foreground hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-muted-foreground hover:text-foreground" href="mailto:rigil.ancheta@gmail.com">Email</a></li>
              <li><a className="text-muted-foreground hover:text-foreground" href="https://www.upwork.com/freelancers/~01dcc33f9129c2d9c1" target="_blank" rel="noreferrer">Upwork</a></li>
              <li><a className="text-muted-foreground hover:text-foreground" href="https://www.onlinejobs.ph/jobseekers/info/2303948" target="_blank" rel="noreferrer">OnlineJobs.ph</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© 2026 Rigil Kent Ancheta. All Rights Reserved.</div>
          <div className="flex items-center gap-2">
            <Database className="h-3 w-3" /> Built with n8n-mindset ·
            <CalendarClock className="h-3 w-3" /> Available worldwide
          </div>
        </div>
      </div>
    </footer>
  );
}
