import { motion } from "framer-motion";
import { ShieldCheck, Scale, Globe, Handshake } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Financial Oversight", desc: "Regulatory adherence for managed portfolios across jurisdictions." },
  { icon: Scale, title: "Legal Expertise", desc: "International tax laws and commercial regulations." },
  { icon: Globe, title: "Global Expansion", desc: "Structuring cross-border investments and franchising." },
  { icon: Handshake, title: "Partner Onboarding", desc: "Seamless integration of international partners into our trust framework." },
];

const Governance = () => {
  return (
    <section id="governance" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bottom-0 left-0 animate-pulse-glow" />

      {/* World arc background SVG */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          "M 100 450 Q 600 100 1100 450",
          "M 200 500 Q 600 200 1000 500",
          "M 50 400 Q 600 50 1150 400",
          "M 300 520 Q 600 280 900 520",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#arcGrad)"
            strokeWidth="1.5"
            fill="none"
          />
        ))}
        {[
          [180, 380],
          [450, 240],
          [720, 200],
          [950, 360],
          [600, 140],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="hsl(var(--primary))" opacity="0.7" />
        ))}
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Trust Framework</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Rigorous Oversight in a <span className="text-gradient">Borderless Economy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Governance, compliance and global reach — engineered to give partners confidence
            at every stage of engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5">
                <it.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Governance;
