import { motion } from "framer-motion";
import { Target, Layers, Building2, Users, Lightbulb } from "lucide-react";

const services = [
  { icon: Target, title: "Business Development", desc: "Growth hacking & feasibility analysis to identify and capture new market opportunities." },
  { icon: Layers, title: "Outsourcing", desc: "Managing non-core functions so leadership can focus on strategic operations." },
  { icon: Building2, title: "Corporate Setup & Restructuring", desc: "M&A, legal formation, and organizational redesign for scalable growth." },
  { icon: Users, title: "Board Representation", desc: "Seasoned experts providing independent oversight and governance." },
  { icon: Lightbulb, title: "Strategic Brainstorming", desc: "Visioning sessions for executive leadership and transformation roadmaps." },
];

const Consultancy = () => {
  return (
    <section id="consultancy" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] top-20 left-1/4 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Pillar 01</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Global Consultancy &<br />
            <span className="text-gradient">Corporate Advisory</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Optimizing market position and operational efficiency through hands-on,
            results-oriented strategic guidance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-8"
            >
              <s.icon size={28} className="text-primary mb-5" />
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
