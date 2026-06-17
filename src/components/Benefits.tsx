import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import teamImg from "@/assets/team.jpg";
import { useCountUp } from "@/hooks/use-count-up";

const benefits = [
  { title: "Consultancy Excellence", desc: "Access top-tier expertise for business development and corporate restructuring." },
  { title: "Workforce Empowerment", desc: "Leverage i Link Academy to upskill teams in leadership and digital transformation." },
  { title: "Technology Integration", desc: "Deploy robust, ready-made platforms (AI Scoring, Smart Metering) to modernize operations." },
  { title: "Strategic Growth", desc: "Access equity partnerships, IP sharing, and international fund investments." },
];

const stats = [
  { value: 4, suffix: "", label: "Strategic Pillars" },
  { value: 10, suffix: "+", label: "Digital Platforms" },
  { value: 2, suffix: "", label: "Regional Hubs" },
  { value: 100, suffix: "%", label: "Institutional Focus" },
];

const StatCard = ({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) => {
  const v = useCountUp(value, 1600, inView);
  return (
    <div className="glass-card p-6 text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-1">
        {v}{suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
};

const Benefits = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs tracking-[0.3em] text-primary mb-4">WHY i Link</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Unlock Global Opportunities<br />
            <span className="text-gradient">With i Link</span>
          </h2>
        </motion.div>

        {/* Animated stat cards */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} inView={inView} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card overflow-hidden"
          >
            <img
              src={teamImg}
              alt="Diverse professional team collaborating"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 flex gap-4"
              >
                <CheckCircle2 size={26} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg font-bold mb-1.5">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
