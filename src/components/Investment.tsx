import { motion } from "framer-motion";
import { Coins, FileText, Globe2 } from "lucide-react";

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

const Investment = () => {
  return (
    <section id="investment" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] -top-20 -right-20 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
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
