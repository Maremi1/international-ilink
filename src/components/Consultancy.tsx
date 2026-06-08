import { motion } from "framer-motion";
import { Target, Layers, Building2, Users, Lightbulb } from "lucide-react";
import boardroom from "@/assets/boardroom.jpg";
import bizDevImg from "@/assets/cons-business-dev.jpg";
import outsourcingImg from "@/assets/cons-outsourcing.jpg";
import restructuringImg from "@/assets/cons-restructuring.jpg";
import boardImg from "@/assets/cons-board.jpg";
import brainstormingImg from "@/assets/cons-brainstorming.jpg";

const services = [
  { icon: Target, title: "Business Development", image: bizDevImg, desc: "Growth hacking & feasibility analysis to identify and capture new market opportunities." },
  { icon: Layers, title: "Outsourcing", image: outsourcingImg, desc: "Managing non-core functions so leadership can focus on strategic operations." },
  { icon: Building2, title: "Corporate Setup & Restructuring", image: restructuringImg, desc: "M&A, legal formation, and organizational redesign for scalable growth." },
  { icon: Users, title: "Board Representation", image: boardImg, desc: "Seasoned experts providing independent oversight and governance." },
  { icon: Lightbulb, title: "Strategic Brainstorming", image: brainstormingImg, desc: "Visioning sessions for executive leadership and transformation roadmaps." },
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card overflow-hidden mb-10 relative"
        >
          <img
            src={boardroom}
            alt="African business professionals collaborating in a corporate boardroom meeting"
            loading="lazy"
            width={1600}
            height={896}
            className="w-full h-[280px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2 drop-shadow-[0_1px_2px_hsl(var(--background)/0.6)]">Strategic Advisory</div>
            <p className="font-display text-xl md:text-2xl font-semibold max-w-2xl text-card-foreground drop-shadow-[0_1px_2px_hsl(var(--background)/0.5)]">
              From the boardroom to the market — tactical execution for institutional growth.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 w-11 h-11 rounded-lg bg-primary/90 backdrop-blur flex items-center justify-center shadow-[0_0_24px_hsl(var(--primary)/0.5)]">
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
              </div>
              <div className="p-6 flex-1">
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
