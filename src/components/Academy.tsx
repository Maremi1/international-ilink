import { motion } from "framer-motion";

const programs = [
  {
    n: "01",
    title: "Digital Transformation",
    desc: "Training organizations to move beyond legacy systems and adopt modern digital frameworks built for scale and resilience.",
  },
  {
    n: "02",
    title: "Leadership Transformation",
    desc: "Developing the next generation of global corporate leaders with a focus on emotional intelligence (EQ) and agile management.",
  },
  {
    n: "03",
    title: "Advanced Sales Strategies",
    desc: "Result-oriented training designed specifically for high-performance international sales teams operating across markets.",
  },
];

const Academy = () => {
  return (
    <section id="academy" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Pillar 02 · Human Capital</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            iLink Academy: Accelerating <span className="text-gradient">Human Capital</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bridging the skills gap for the 4th Industrial Revolution — equipping
            organizations and leaders to thrive in a borderless economy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card p-10 relative overflow-hidden group"
            >
              <div className="absolute -top-6 -right-2 font-display text-[8rem] font-bold text-primary/10 group-hover:text-primary/20 transition-colors leading-none">
                {p.n}
              </div>
              <div className="relative">
                <div className="text-xs uppercase tracking-wider text-primary mb-3">Program {p.n}</div>
                <h3 className="font-display text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;
