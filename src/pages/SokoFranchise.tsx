import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  Layers,
  HeartHandshake,
  Wallet,
  ShieldCheck,
  Warehouse,
  Cpu,
  CheckCircle2,
  Mail,
  TrendingUp,
  Download,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImg from "@/assets/soko-hero.jpg";
import marketImg from "@/assets/soko-market.jpg";
import partnerImg from "@/assets/soko-partner.jpg";
import logisticsImg from "@/assets/soko-logistics.jpg";

const network = [
  {
    icon: Layers,
    title: "i Link Limited",
    text: "The master franchisor. Provides the turnkey Soko tech stack and ensures global maintenance.",
  },
  {
    icon: Globe,
    title: "Mama Mia's Soko",
    text: "The high-frequency, low-commission transactional engine and consumer-facing brand.",
  },
  {
    icon: HeartHandshake,
    title: "Mama Mia's Foundation",
    text: "Drives digital inclusion and community upliftment via integrated ecosystem funding.",
  },
];

const tiers = [
  {
    cat: "Category A",
    pop: "50 Million+",
    fee: "$40,000",
    markets: "Tanzania, Kenya, Ethiopia, Nigeria, UK, France",
  },
  {
    cat: "Category B",
    pop: "20M – 50M",
    fee: "$30,000",
    markets: "Uganda, Angola, Ghana, Australia, Malaysia",
  },
  {
    cat: "Category C",
    pop: "Under 20 Million",
    fee: "$20,000",
    markets: "Rwanda, Burundi, UAE, Sweden, Singapore",
  },
];

const profits = [
  {
    cat: "Category A · Large Market",
    gtv: "$5,000,000",
    rev: "$340,000",
    opex: "$100,000",
    net: "$240,000",
  },
  {
    cat: "Category B · Mid Market",
    gtv: "$2,000,000",
    rev: "$140,000",
    opex: "$60,000",
    net: "$80,000",
  },
  {
    cat: "Category C · Focused Market",
    gtv: "$500,000",
    rev: "$40,000",
    opex: "$20,000",
    net: "$20,000",
  },
];

const capabilities = [
  {
    icon: Wallet,
    title: "Financial Liquidity",
    text: "Capacity to clear the one-time franchise fee plus a 6–12 month operational reserve (OpEx runway).",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    text: "Mechanisms to manage national VAT/GST, central bank reporting, and regional Data Protection Acts.",
  },
  {
    icon: Warehouse,
    title: "Physical Infrastructure",
    text: "Ability to establish strategic regional Pick-up Centers for frictionless physical fulfillment.",
  },
  {
    icon: Cpu,
    title: "Technical Oversight",
    text: "An internal engineering team to manage local API integrations (Mobile Money, Local Banks).",
  },
];

const scorecard = [
  {
    title: "Company Profile",
    text: "Demonstrated expertise in retail, logistics, or fintech sectors.",
  },
  {
    title: "Proof of Capital",
    text: "Validated bank reference confirming liquidity for the fee and OpEx reserve.",
  },
  {
    title: "Market Entry Plan",
    text: "An actionable roadmap to achieving 1% user penetration in Year 1.",
  },
  {
    title: "Legal Standing",
    text: "Certificate of Incorporation and current Tax Clearance in the target country.",
  },
];

const SokoFranchisePage = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="Soko Franchise Sub-Network | i Link International"
        description="Expand the Soko platform across Africa by becoming a franchise partner. Manage regional business networks, verified accounts, and dispute resolution."
        canonicalUrl="/soko-franchise"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <Link
            to="/#soko-franchise"
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
                Mama Mia's Soko · Global Franchise Prospectus
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Global Tech.{" "}
                <span className="text-gradient">Village Roots.</span> National
                Prosperity.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Mama Mia's Soko is a premier, high-volume digital infrastructure
                platform designed for rapid market penetration and community
                wealth distribution. We are seeking Exclusive Country Franchise
                Partners to own and operate the Soko infrastructure within
                sovereign borders.
              </p>
              <p className="text-sm text-muted-foreground">
                Powered by i Link Limited · Proprietary &amp; Confidential
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
                alt="African woman using the Mama Mia's Soko app at a vibrant local market"
                className="w-full h-auto"
                width={1536}
                height={1024}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
            A Synergistic <span className="text-gradient">Global Network</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {network.map((n) => (
              <motion.div
                key={n.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <n.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {n.title}
                </h3>
                <p className="text-sm text-muted-foreground">{n.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridging media band */}
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
                src={marketImg}
                alt="African shoppers using mobile money at a busy local marketplace"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={832}
              />
            </motion.div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Bridging Global Tech with{" "}
                <span className="text-gradient">Local Economies</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Soko platform delivers a turnkey tech stack, a globally
                recognised brand, and a multi-currency ecosystem — built for
                community wealth distribution at scale.
              </p>
              <div className="glass rounded-xl p-5 flex items-center gap-4">
                <TrendingUp size={22} className="text-primary flex-shrink-0" />
                <p className="text-sm">
                  <span className="font-semibold">
                    The 10% Gross Margin Revenue Engine:
                  </span>{" "}
                  every $10.00 purchase generates a $1.00 revenue pool across
                  transactions, subscriptions, advertising and logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity tiers */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-center">
            National Exclusivity{" "}
            <span className="text-gradient">Framework</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            One-time country franchise fee payable upon signing to secure
            sovereign territory and initiate technical deployment.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((t) => (
              <motion.div
                key={t.cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 text-center"
              >
                <p className="text-primary text-sm font-medium mb-1">{t.cat}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Population: {t.pop}
                </p>
                <div className="font-display text-4xl font-bold text-gradient mb-4">
                  {t.fee}
                </div>
                <p className="text-sm text-muted-foreground">{t.markets}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profitability */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center">
            Year 1 Profitability <span className="text-gradient">Dynamics</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Calculated at 1% market penetration, $10 monthly spend, and the
            60/40 revenue split.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {profits.map((p) => (
              <div key={p.cat} className="glass-card p-6">
                <h3 className="font-bold mb-4">{p.cat}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly GTV</span>
                    <span className="font-medium">{p.gtv}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Franchisee Rev
                    </span>
                    <span className="font-medium">{p.rev}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly OpEx</span>
                    <span className="font-medium">{p.opex}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2 mt-2">
                    <span className="font-semibold">Net Monthly Profit</span>
                    <span className="font-display font-bold text-gradient">
                      {p.net}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            <span className="font-semibold text-foreground">
              ROI Benchmark:
            </span>{" "}
            complete recoupment of the one-time Franchise Fee in Month 1 of
            target achievement.
          </p>
        </div>
      </section>

      {/* Capabilities + logistics media */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Core Partner <span className="text-gradient">Capabilities</span>
              </h2>
              <div className="space-y-5">
                {capabilities.map((c) => (
                  <div
                    key={c.title}
                    className="glass rounded-xl p-5 flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <c.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{c.title}</h3>
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
                src={logisticsImg}
                alt="African logistics workers managing parcels at a Soko pick-up center"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={832}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scorecard */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-center">
            The Selection Scorecard <span className="text-gradient">Audit</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Mandatory documentation required for the Expression of Interest
            evaluation.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {scorecard.map((s) => (
              <div key={s.title} className="glass rounded-xl p-6 flex gap-4">
                <CheckCircle2
                  size={22}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
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
              Secure Your National Exclusivity
            </h2>
            <p className="text-muted-foreground mb-2">
              Submit your formal Statement of Capability to join the global Soko
              network.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Recipient: The Office of the CEO, i Link Limited · Subject:
              Franchise Expansion – [Your Country Name]
            </p>
            <a
              href="mailto:info@ilinkbiz.com?subject=Franchise%20Expansion%20%E2%80%93%20%5BYour%20Country%20Name%5D"
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
            <h3 className="font-display text-3xl font-bold mb-4">
              Mama Mia's Soko Prospectus
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Users can freely download our comprehensive Soko Global Franchise
              Prospectus for full details on market entry, profitability
              dynamics, and capability requirements.
            </p>
            <a
              href="/Soko_Global_Franchise_Prospectus.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
            >
              <Download size={20} />
              Download Prospectus (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SokoFranchisePage;
