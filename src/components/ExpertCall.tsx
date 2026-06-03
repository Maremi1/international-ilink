import { motion } from "framer-motion";
import { Globe2, Users, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import expertHero from "@/assets/expert-hero.jpg";

const ExpertCall = () => {
  return (
    <section id="expert-call" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Global Call for Expression of Interest · Ref ILI/EOI/2026/001
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Join the <span className="text-gradient">Strategic Expert Pool</span> & Global Consultancy Network
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are formalizing a pool of elite talent to support our subsidiaries through
              board-level advisory, technical implementation, and corporate transformations —
              coordinated from our hubs in Kigali, Rwanda and Dar es Salaam, Tanzania.
            </p>

            <div className="space-y-3">
              {[
                { icon: Globe2, label: "Tier 1 · Strategic — Board representation & advisory" },
                { icon: Layers, label: "Tier 2 · Technical — System implementation & solutions" },
                { icon: Users, label: "Tier 3 · Associate — Operational support & execution" },
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
              to="/expert-call"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card overflow-hidden"
          >
            <img
              src={expertHero}
              alt="African business consultants in a global strategy boardroom meeting"
              className="w-full h-auto"
              loading="lazy"
              width={1536}
              height={1024}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertCall;
