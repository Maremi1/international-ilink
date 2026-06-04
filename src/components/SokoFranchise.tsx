import { motion } from "framer-motion";
import { Globe, Store, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sokoHero from "@/assets/soko-hero.jpg";

const SokoFranchise = () => {
  return (
    <section id="soko-franchise" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card overflow-hidden order-last lg:order-first"
          >
            <img
              src={sokoHero}
              alt="African woman using the Mama Mia's Soko digital marketplace app at a local market"
              className="w-full h-auto"
              loading="lazy"
              width={1536}
              height={1024}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Official Call for Expression of Interest · Mama Mia's Soko
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Own the <span className="text-gradient">Soko Franchise</span> in Your Country
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              "Village Roots. National Prosperity." Secure exclusive national rights to operate
              the Mama Mia's Soko digital marketplace — a turnkey, high-volume commerce platform
              bridging global tech with local economies.
            </p>

            <div className="space-y-3">
              {[
                { icon: Globe, label: "National Exclusivity — own your sovereign territory" },
                { icon: Store, label: "Turnkey tech stack + global brand + multi-currency" },
                { icon: TrendingUp, label: "10% gross margin revenue engine across all streams" },
              ].map((it) => (
                <div key={it.label} className="glass rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <it.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">{it.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/soko-franchise"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SokoFranchise;
