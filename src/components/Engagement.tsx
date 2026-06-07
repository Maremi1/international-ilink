import { motion } from "framer-motion";
import { Briefcase, Building, Landmark } from "lucide-react";
import imgInvestors from "@/assets/engage-investors.jpg";
import imgCorporations from "@/assets/engage-corporations.jpg";
import imgInstitutions from "@/assets/engage-institutions.jpg";

const models = [
  {
    icon: Briefcase,
    title: "For Investors",
    items: ["Strategic Joint Ventures", "Equity Partnerships", "International Fund Investments"],
    img: imgInvestors,
  },
  {
    icon: Building,
    title: "For Corporations",
    items: ["Digital Transformation Implementation", "Departmental Outsourcing", "Strategic Advisory"],
    img: imgCorporations,
  },
  {
    icon: Landmark,
    title: "For Institutions / Governments",
    items: ["Smart Infrastructure (Water/Gas) Deployment", "University EdTech Platforms", "Governance Digitization"],
    img: imgInstitutions,
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
              className="glass-card group overflow-hidden flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent" />
              </div>
              <div className="p-10 -mt-10 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
