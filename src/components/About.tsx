import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import WorldMap from "./WorldMap";
import visionImg from "@/assets/about-vision.jpg";
import missionImg from "@/assets/about-mission.jpg";
import philosophyImg from "@/assets/about-philosophy.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] top-1/2 -right-40 animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Who We Are</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A Premier Global<br />
              <span className="text-gradient">Management & Coordination</span> Firm
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I Link International is a diversified holding entity dedicated to catalyzing
              sustainable economic growth and institutional excellence. We serve as a critical
              bridge connecting international capital to emerging market opportunities,
              specializing in Market Systems Development (MSD), digital transformation, and
              high-impact strategic investment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Regional HQ</div>
                </div>
                <div className="font-display text-xl font-semibold">Kigali, Rwanda</div>
                <div className="text-sm text-muted-foreground mt-1">Vision Arcade</div>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Operations</div>
                </div>
                <div className="font-display text-xl font-semibold">Dar es Salaam</div>
                <div className="text-sm text-muted-foreground mt-1">Kinondoni, Tanzania</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <WorldMap />
          </motion.div>
        </div>

        {/* Vision / Mission / Philosophy */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              title: "Our Vision",
              image: visionImg,
              body: "To be the leading global hub for integrated investment and management, driving inclusive growth across both emerging and developed markets.",
            },
            {
              title: "Our Mission",
              image: missionImg,
              body: "To provide world-class strategic oversight, operational support, and technical consultancy — empowering partners to deliver high-impact solutions in energy, technology, education and business development.",
            },
            {
              title: "Core Philosophy",
              image: philosophyImg,
              body: "Institutional Excellence. We are committed to raising standards in every entity we touch, ensuring rigorous governance and sustainable value creation.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary mb-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">0{i + 1}</div>
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">{c.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
