import { motion } from "framer-motion";
import { ClipboardCheck, ShieldCheck, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import scorecardHero from "@/assets/scorecard-hero.jpg";

const Scorecard = () => {
  return (
    <section id="scorecard" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs tracking-[0.3em] text-primary mb-4">
              OFFICIAL FRANCHISE SELECTION SCORECARD · i Link Limited
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Clear the <span className="text-gradient">75% Threshold</span> to
              Qualify
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The i Link Executive Board uses a standardized, proprietary
              scorecard to objectively evaluate every applicant for Exclusive
              Country Franchise rights. A minimum aggregate score of 75/100 is
              required to pass the audit and secure a "Go" decision.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: ClipboardCheck,
                  label: "Four weighted capability pillars (100 pts)",
                },
                {
                  icon: ShieldCheck,
                  label: "Financial, operational, technical & strategic audit",
                },
                { icon: Target, label: "Four definitive executive outcomes" },
              ].map((it) => (
                <div
                  key={it.label}
                  className="glass rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <it.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">{it.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/scorecard"
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
              src={scorecardHero}
              alt="i Link executive board evaluating franchise applicants with a scorecard"
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

export default Scorecard;
