import { motion } from "framer-motion";
import { Briefcase, Building, Landmark } from "lucide-react";

const models = [
  {
    icon: Briefcase,
    title: "For Investors",
    items: ["Strategic Joint Ventures", "Equity Partnerships", "International Fund Investments"],
  },
  {
    icon: Building,
    title: "For Corporations",
    items: ["Digital Transformation Implementation", "Departmental Outsourcing", "Strategic Advisory"],
  },
  {
    icon: Landmark,
    title: "For Institutions / Governments",
    items: ["Smart Infrastructure (Water/Gas) Deployment", "University EdTech Platforms", "Governance Digitization"],
  },
];

const Engagement = () => {
  return (
    <section id="engagement" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] top-20 right-1/4 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Engagement Models</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tailored Models of <span className="text-gradient">Engagement</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Who you are, and how we partner. Choose the engagement model that fits your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card p-10 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <m.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-5">{m.title}</h3>
              <ul className="space-y-3">
                {m.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
