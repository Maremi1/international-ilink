import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-globe.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Global digital network connecting markets worldwide"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] -top-20 -left-20 animate-pulse-glow" />
      <div className="glow-orb w-[400px] h-[400px] bottom-10 right-0 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              A PREMIER GLOBAL MANAGEMENT & COORDINATION FIRM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          >
            Bridging Capital,<br />
            Innovation &{" "}
            <span className="text-gradient animate-text-glow-pulse">Global Markets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Your strategic gateway to sustainable economic growth — connecting international
            capital to emerging market opportunities through Market Systems Development,
            digital transformation, and high-impact strategic investment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all"
            >
              Build the Future With Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-foreground font-semibold hover:border-primary/40 transition-all"
            >
              Explore Our Ecosystem
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
          >
            {[
              { v: "4", l: "Strategic Pillars" },
              { v: "2", l: "Regional Hubs" },
              { v: "10+", l: "Digital Platforms" },
              { v: "∞", l: "Global Opportunities" },
            ].map((s) => (
              <div key={s.l} className="glass-card p-6 text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-1">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
