import { motion } from "framer-motion";
import { Coins, FileText, Globe2 } from "lucide-react";
import marketsImg from "@/assets/markets.jpg";
import Marquee from "./Marquee";

const items = [
  {
    icon: Coins,
    title: "Equity & Funds",
    desc: "Active participation in Venture Capital (VC) and Private Equity (PE) within high-growth sectors across multiple regions.",
  },
  {
    icon: FileText,
    title: "IPs & Royalties",
    desc: "Professional management of intellectual property portfolios and generating solution-based royalty streams.",
  },
  {
    icon: Globe2,
    title: "Diversified Assets",
    desc: "Comprehensive management of funds, shares, and life insurance assets across multiple global jurisdictions.",
  },
];

const sectors = [
  "Venture Capital",
  "Private Equity",
  "Intellectual Property",
  "Royalties",
  "Sovereign Funds",
  "Life Insurance",
  "Real Estate",
  "Infrastructure",
];

const Investment = () => {
  return (
    <section id="investment" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] -top-20 -right-20 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Pillar 03</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Strategic Investment & <span className="text-gradient">Partnership</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Long-term value creation and asset management — built on rigorous due
              diligence and disciplined capital allocation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card overflow-hidden relative"
          >
            <img
              src={marketsImg}
              alt="Global financial markets visualization"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-card/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Sector ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card py-5 mb-12"
        >
          <Marquee
            items={sectors.map((s) => (
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-medium">
                  {s}
                </span>
              </div>
            ))}
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-10"
            >
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-6">
                <it.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investment;
