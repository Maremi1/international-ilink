import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Cpu,
  GraduationCap,
  Leaf,
  Globe2,
  Layers,
  Users,
  CheckCircle2,
  Mail,
  Fingerprint,
  BarChart3,
  Cloud,
  HeartHandshake,
  Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImg from "@/assets/expert-hero.jpg";
import governanceImg from "@/assets/expert-governance.jpg";
import digitalImg from "@/assets/expert-digital.jpg";
import infrastructureImg from "@/assets/expert-infrastructure.jpg";
import evaluationImg from "@/assets/expert-evaluation.jpg";
import remoteImg from "@/assets/expert-remote.jpg";
import consciousImg from "@/assets/expert-conscious.jpg";

const tiers = [
  { icon: Globe2, title: "Tier 1 · Strategic", role: "Board Representation & Advisory", profile: "Former C-Suite, Industry Veterans" },
  { icon: Layers, title: "Tier 2 · Technical", role: "System Implementation & Solutions", profile: "Subject Matter Experts, Tech Leads" },
  { icon: Users, title: "Tier 3 · Associate", role: "Operational Support & Execution", profile: "Project Managers, Analysts" },
];

const pillars = [
  {
    icon: Building2,
    title: "Pillar I · Corporate Architecture & Governance",
    subtitle: "For the Architects of Business",
    image: governanceImg,
    points: [
      "M&A & Restructuring — guiding legal formations and mergers",
      "Board Representation — independent oversight and governance",
      "Strategic Brainstorming — high-stakes visioning for market disruption",
      "Global Expansion — structuring cross-border investments",
    ],
  },
  {
    icon: Cpu,
    title: "Pillar II · Digital Ecosystems & Tech Solutions",
    subtitle: "For the Digital Architects",
    image: digitalImg,
    points: [
      "Fintech & Insuretech — AI Credit Scoring, Bima Kwik, Family Banking",
      "Global Marketplaces — Mama Mia's Soko & Logistics Management",
      "Governance Tech — Digital Onboarding, Touchless KYC",
      "Security — Cyber Security & Smart Utility Metering (Gas/Water)",
    ],
  },
  {
    icon: GraduationCap,
    title: "Pillar III · Human Capital & i Link Academy",
    subtitle: "For the Transformers of Talent",
    image: infrastructureImg,
    points: [
      "Leadership Transformation — emotional intelligence and agile management",
      "Sales Excellence — high-performance strategies for international teams",
      "Digital Transformation Training — bridging the skills gap for the 4IR",
      "Flagship Vehicle — i Link Academy",
    ],
  },
  {
    icon: Leaf,
    title: "Pillar IV · Sustainable Infrastructure & MSD",
    subtitle: "For the Market Builders",
    image: infrastructureImg,
    points: [
      "Market Systems Development (MSD) — repairing market failures",
      "Green Energy Transitions — fossil fuel to CNG/EV migration",
      "Circular Economy — sustainable resource frameworks",
      "Smart Infrastructure — IoT-enabled Water and Gas metering",
    ],
  },
];

const rubric = [
  { label: "Technical Dominance", value: "30%", note: "" },
  { label: "Strategic Alignment", value: "25%", note: "Must possess Owner-Manager mindset" },
  { label: "Digital Fluency", value: "20%", note: "" },
  { label: "Regional & Global Reach", value: "15%", note: "" },
  { label: "Corporate Presence", value: "10%", note: "" },
];

const digitalReqs = [
  { icon: Cloud, label: "Remote Management Capability" },
  { icon: Fingerprint, label: "Touchless KYC & Onboarding" },
  { icon: BarChart3, label: "Data-Driven Decision Making" },
  { icon: Cpu, label: "Tech Stack Integration" },
];

const checklist = [
  { title: "EOI Letter", text: "One-page value proposition highlighting Active Management alignment." },
  { title: "Professional Profile (CV)", text: "Academic background and international assignments." },
  { title: "Statement of Expertise", text: "Skills mapped specifically to the 4 Thematic Pillars." },
  { title: "Country of Residence", text: "Statement of primary base." },
  { title: "Professional Headshot", text: "High-resolution, corporate-standard photograph." },
];

const ExpertCallPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SEO 
        title="Expert Call Network | i Link International"
        description="Join the i Link Expert Call Network to offer your specialized knowledge to global clients, governments, and corporations."
        canonicalUrl="/expert-call"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <Link
            to="/#expert-call"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Global Call for Expression of Interest · Ref ILI/EOI/2026/001
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Global <span className="text-gradient">Expert Directory</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                i Link International — the strategic arm of i Link Global Holding Company — invites
                elite talent to join its Strategic Expert Pool and Global Consultancy Network.
                We support our subsidiaries through board-level advisory, technical
                implementation, and corporate transformations.
              </p>
              <p className="text-sm text-muted-foreground">
                Coordination Hubs: Kigali, Rwanda &nbsp;|&nbsp; Dar es Salaam, Tanzania.
                Board-ready communication skills required for a borderless economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-card overflow-hidden"
            >
              <img
                src={heroImg}
                alt="African consultants collaborating in a global strategy boardroom"
                className="w-full h-auto"
                width={1536}
                height={1024}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
            The Expert <span className="text-gradient">Directory</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((t) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <t.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-primary text-sm font-medium mb-1">{t.role}</p>
                <p className="text-sm text-muted-foreground">{t.profile}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
            Four Thematic <span className="text-gradient">Pillars</span>
          </h2>
          <div className="space-y-12">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="glass-card overflow-hidden [direction:ltr]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-72 object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="[direction:ltr]">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <p.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">{p.title}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{p.subtitle}</p>
                  <ul className="space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Rubric */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden order-last lg:order-first"
            >
              <img
                src={evaluationImg}
                alt="African experts reviewing data in a boardroom evaluation session"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={832}
              />
            </motion.div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center lg:text-left">
                Integrated Evaluation <span className="text-gradient">Rubric</span>
              </h2>
              <p className="text-muted-foreground text-center lg:text-left mb-10">The filter for applicant selection</p>
              <div className="space-y-4">
                {rubric.map((r) => (
                  <div key={r.label} className="glass rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{r.label}</span>
                      <span className="font-display font-bold text-gradient">{r.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-primary/10 overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: r.value }} />
                    </div>
                    {r.note && <p className="text-xs text-muted-foreground mt-2">{r.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Consultant Requirements */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card overflow-hidden max-w-5xl mx-auto">
            <img
              src={remoteImg}
              alt="African consultant working remotely with holographic data dashboards"
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
              width={1280}
              height={832}
            />
            <div className="p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center">
                The Modern Digital Consultant
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Digital proficiency is not optional in a borderless economy. We require consultants
                who can operate without physical boundaries.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {digitalReqs.map((d) => (
                  <div key={d.label} className="glass rounded-2xl p-6 text-center">
                    <d.icon size={28} className="text-primary mx-auto mb-3" />
                    <p className="text-sm font-medium">{d.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conscious Capital */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card overflow-hidden max-w-5xl mx-auto grid lg:grid-cols-2 items-stretch">
            <img
              src={consciousImg}
              alt="African community joining hands in unity and empowerment"
              className="w-full h-full min-h-[260px] object-cover"
              loading="lazy"
              width={1280}
              height={832}
            />
            <div className="p-8 md:p-12 text-center lg:text-left flex flex-col justify-center">
              <HeartHandshake size={32} className="text-primary mx-auto lg:mx-0 mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Conscious Capital: Profit for Purpose
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                i Link International directs a portion of profits toward the objectives of Mama Mia's
                Foundation — Economic Empowerment, Humanitarian Support, and Community Resilience.
                We seek consultants who understand that commercial success must drive global
                humanitarian resilience.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Submission Checklist */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
            Submission Package <span className="text-gradient">Checklist</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {checklist.map((c, i) => (
              <div key={c.title} className="glass rounded-xl p-6 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 font-display font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Submit Your Expression of Interest
            </h2>
            <p className="text-muted-foreground mb-2">
              Subject line: EOI – [Niche Expertise] – [Full Name] – [Current Country]
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Review Process: Rolling basis. Shortlisted candidates are invited for strategic interviews.
            </p>
            <a
              href="mailto:info@ilinkbiz.com?subject=EOI%20%E2%80%93%20%5BNiche%20Expertise%5D%20%E2%80%93%20%5BFull%20Name%5D%20%E2%80%93%20%5BCurrent%20Country%5D"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
            >
              <Mail size={18} /> info@ilinkbiz.com
            </a>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 mb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto glass-strong rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Download size={32} className="text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-4">Global Strategic Expert Call</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Users can freely download our comprehensive document for full details on the Expression of Interest, thematic pillars, and expert requirements.
            </p>
            <a
              href="/Global_Strategic_Expert_Call.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
            >
              <Download size={20} />
              Download Document (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ExpertCallPage;
