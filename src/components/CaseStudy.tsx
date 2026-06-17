import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CaseStudy = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="case-study" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[450px] h-[450px] top-1/2 -left-32 animate-pulse-glow" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Case Study</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              See i Link in <span className="text-gradient">Action</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Watch how our integrated ecosystem turns capital, expertise and technology into
              measurable outcomes for partners across emerging and developed markets.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />Cross-border investment delivery</li>
              <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />Smart infrastructure deployment</li>
              <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />Workforce transformation at scale</li>
            </ul>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card overflow-hidden p-2 shadow-[0_0_60px_hsl(var(--primary)/0.25)]">
              <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden bg-muted">
                {load ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/41wXVemBxIY?rel=0&modestbranding=1"
                    title="i Link International — Case Study"
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/30 to-primary/10">
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.6)]">
                      <Play size={32} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
              </AspectRatio>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
