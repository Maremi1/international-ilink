import { motion } from "framer-motion";
import { Coins, FileText, Globe2 } from "lucide-react";
import marketsImg from "@/assets/markets.jpg";
import equityImg from "@/assets/inv-equity.jpg";
import ipImg from "@/assets/inv-ip.jpg";
import diversifiedImg from "@/assets/inv-diversified.jpg";
import Marquee from "./Marquee";

const items = [
  {
    icon: Coins,
    title: "Equity & Funds",
    image: equityImg,
    desc: "Active participation in Venture Capital (VC) and Private Equity (PE) within high-growth sectors across multiple regions.",
  },
  {
    icon: FileText,
    title: "IPs & Royalties",
    image: ipImg,
    desc: "Professional management of intellectual property portfolios and generating solution-based royalty streams.",
  },
  {
    icon: Globe2,
    title: "Diversified Assets",
    image: diversifiedImg,
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
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-primary/90 backdrop-blur flex items-center justify-center shadow-[0_0_24px_hsl(var(--primary)/0.5)]">
                  <it.icon size={22} className="text-primary-foreground" />
                </div>
              </div>
              <div className="p-8 flex-1">
                <h3 className="font-display text-2xl font-bold mb-4">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investment;
