import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Wallet,
  Network,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Mail,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImg from "@/assets/scorecard-hero.jpg";
import financialImg from "@/assets/scorecard-financial.jpg";
import operationsImg from "@/assets/scorecard-operations.jpg";
import technicalImg from "@/assets/scorecard-technical.jpg";

const pillars = [
  {
    icon: Wallet,
    title: "Financial Capacity",
    weight: "35%",
    text: "Heavy emphasis on liquidity and operational runway — the capacity to sustain rapid scaling.",
  },
  {
    icon: Network,
    title: "Operational Reach",
    weight: "25%",
    text: "Physical infrastructure, regional pick-up nodes, and localized vendor networks.",
  },
  {
    icon: Cpu,
    title: "Technical & Regulatory",
    weight: "25%",
    text: "API integration capabilities, PSP licensing, and national data compliance.",
  },
  {
    icon: HeartHandshake,
    title: "Strategic Alignment",
    weight: "15%",
    text: "Brand integrity and fit with the Mama Mia's Foundation mission.",
  },
];

const pillar2 = [
  { cat: "Network", score: "10 pts", text: "Pre-existing SME or vendor database featuring 500+ contacts." },
  { cat: "Infrastructure", score: "10 pts", text: "Verified access to physical nodes for regional Pick-up Centers." },
  { cat: "Market Experience", score: "5 pts", text: "Minimum of 5+ years navigating National Retail or Logistics." },
];

const pillar3 = [
  { cat: "IT Talent", score: "10 pts", text: "In-house CTO or team capable of Mobile Money / Bank API integration." },
  { cat: "Regulatory Standing", score: "10 pts", text: "Valid Payment Service Provider (PSP) license or impeccable Tax Record." },
  { cat: "Data Security", score: "5 pts", text: "Demonstrated fluency with national Data Protection Acts." },
];

const pillar4 = [
  { cat: "Mission Fit", score: "5 pts", text: "Ideological alignment with Mama Mia's Foundation objectives." },
  { cat: "Brand Integrity", score: "5 pts", text: "Strict commitment to curating high-quality, localized content." },
  { cat: "Growth Vision", score: "5 pts", text: "Realistic feasibility of the applicant's 5-Year Scaling Plan." },
];

const decisions = [
  { range: "< 60", title: "Decline", text: "Fails to meet minimum infrastructure requirements for the Soko ecosystem." },
  { range: "60 – 74", title: "Conditional", text: "Promising, but requires a local co-partner or increased security deposit." },
  { range: "75 – 89", title: "Qualified", text: "Clears the threshold. Proceed to formal interview and due diligence." },
  { range: "90 – 100", title: "Platinum", text: "Elite candidate. Proceed to immediate Master Franchise Agreement." },
];

const docs = [
  { title: "Company Profile", text: "Historic performance in retail, logistics, or fintech." },
  { title: "Proof of Capital", text: "Formal bank reference letters covering the Fee and OpEx reserves." },
  { title: "Market Entry Plan", text: "A summarized strategic roadmap for achieving Year 1 targets." },
  { title: "Tax Clearance & Incorporation", text: "Validated legal standing in the requested sovereign territory." },
];

const ScorecardPage = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SEO 
        title="11-Point Scorecard Verification | iLink International"
        description="Become an operator for iLink's 11-Point Scorecard Verification process. Verify suppliers, buyers, and businesses for global standards compliance."
        canonicalUrl="/scorecard"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <Link
            to="/#scorecard"
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
                Official Franchise Selection Scorecard
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Applicant Evaluation &amp; <span className="text-gradient">Requirements Guide</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Securing an Exclusive Country Franchise requires clearing a strict 75% evaluation
                threshold. Applicants are scored across four weighted capability pillars, with a
                minimum aggregate of 75/100 required to pass the initial audit phase.
              </p>
              <p className="text-sm text-muted-foreground">
                Proprietary &amp; Confidential · iLink Limited
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
                alt="Executives evaluating franchise applicants against a scorecard"
                className="w-full h-auto"
                width={1536}
                height={1024}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threshold band */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <Lock size={28} className="text-primary" />
            </div>
            <div className="font-display text-6xl md:text-7xl font-bold text-gradient mb-4">75%</div>
            <p className="text-lg text-muted-foreground">
              The minimum aggregate score required to pass the initial audit and secure a
              <span className="font-semibold text-foreground"> "Go" </span> decision from the iLink
              Executive Board.
            </p>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
            Four Weighted <span className="text-gradient">Capability Pillars</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <p.icon size={22} className="text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-gradient mb-2">{p.weight}</div>
                <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 2 media */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden"
            >
              <img
                src={operationsImg}
                alt="Operations team at a regional Soko pick-up center"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={832}
              />
            </motion.div>
            <div>
              <p className="text-primary text-sm font-medium mb-2">Pillar 2 · 25 Points</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Operational <span className="text-gradient">Reach</span>
              </h2>
              <div className="space-y-4">
                {pillar2.map((c) => (
                  <div key={c.cat} className="glass rounded-xl p-4 flex items-start gap-4">
                    <span className="font-display font-bold text-gradient whitespace-nowrap">{c.score}</span>
                    <div>
                      <h3 className="font-semibold text-sm">{c.cat}</h3>
                      <p className="text-sm text-muted-foreground">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1 + 3 media */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="order-last lg:order-first">
              <p className="text-primary text-sm font-medium mb-2">Pillar 3 · 25 Points</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Technical &amp; <span className="text-gradient">Regulatory</span>
              </h2>
              <div className="space-y-4">
                {pillar3.map((c) => (
                  <div key={c.cat} className="glass rounded-xl p-4 flex items-start gap-4">
                    <span className="font-display font-bold text-gradient whitespace-nowrap">{c.score}</span>
                    <div>
                      <h3 className="font-semibold text-sm">{c.cat}</h3>
                      <p className="text-sm text-muted-foreground">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden"
            >
              <img
                src={technicalImg}
                alt="Tech engineers managing API integration and data security"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={832}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial + Strategic media */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden"
            >
              <img
                src={financialImg}
                alt="Finance professional analyzing liquidity reports"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={832}
              />
            </motion.div>
            <div>
              <p className="text-primary text-sm font-medium mb-2">Pillar 4 · 15 Points</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Strategic <span className="text-gradient">Alignment</span>
              </h2>
              <div className="space-y-4">
                {pillar4.map((c) => (
                  <div key={c.cat} className="glass rounded-xl p-4 flex items-start gap-4">
                    <span className="font-display font-bold text-gradient whitespace-nowrap">{c.score}</span>
                    <div>
                      <h3 className="font-semibold text-sm">{c.cat}</h3>
                      <p className="text-sm text-muted-foreground">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center">
            Four Definitive <span className="text-gradient">Executive Decisions</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Final aggregate scoring triggers one of four outcomes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {decisions.map((d) => (
              <div key={d.title} className="glass-card p-7 text-center">
                <div className="font-display text-3xl font-bold text-gradient mb-2">{d.range}</div>
                <h3 className="font-display text-lg font-bold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory docs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center">
            Mandatory <span className="text-gradient">EOI Documentation</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Required to initiate the audit and evaluation process.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {docs.map((s) => (
              <div key={s.title} className="glass rounded-xl p-6 flex gap-4">
                <CheckCircle2 size={22} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
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
              Submit Your Statement of Capability
            </h2>
            <p className="text-muted-foreground mb-2">
              Initiate the audit with your formal Expression of Interest.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Recipient: The Office of the CEO, iLink Limited · Subject: Franchise Expansion – [Country]
            </p>
            <a
              href="mailto:info@ilinkbiz.com?subject=Franchise%20Expansion%20%E2%80%93%20%5BCountry%5D"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
            >
              <Mail size={18} /> info@ilinkbiz.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ScorecardPage;
