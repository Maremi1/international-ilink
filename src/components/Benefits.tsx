import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  { title: "Consultancy Excellence", desc: "Access top-tier expertise for business development and corporate restructuring." },
  { title: "Workforce Empowerment", desc: "Leverage iLink Academy to upskill teams in leadership and digital transformation." },
  { title: "Technology Integration", desc: "Deploy robust, ready-made platforms (AI Scoring, Smart Metering) to modernize operations." },
  { title: "Strategic Growth", desc: "Access equity partnerships, IP sharing, and international fund investments." },
];

const Benefits = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why iLink</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Unlock Global Opportunities<br />
            <span className="text-gradient">With iLink</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 flex gap-5"
            >
              <CheckCircle2 size={28} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
