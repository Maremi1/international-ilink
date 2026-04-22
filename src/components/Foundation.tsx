import { motion } from "framer-motion";
import { Heart, HandHeart, Leaf } from "lucide-react";
import foundationImg from "@/assets/foundation.jpg";

const Foundation = () => {
  return (
    <section id="foundation" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card overflow-hidden order-2 lg:order-1"
          >
            <img
              src={foundationImg}
              alt="Diverse hands holding soil with a green sprout — symbol of sustainable empowerment"
              className="w-full h-auto"
              loading="lazy"
              width={1280}
              height={896}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Mama Mia's Foundation</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Catalyzing Sustainable<br />
              <span className="text-gradient">Socio-Economic Empowerment</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              iLink International directs a portion of profits to our philanthropic arm,
              Mama Mia's Foundation. We move beyond charity to create mechanisms for
              sustainable development.
            </p>

            <div className="space-y-3">
              {[
                { icon: Heart, label: "International socio-economic empowerment" },
                { icon: HandHeart, label: "Humanitarian support" },
                { icon: Leaf, label: "Community resilience" },
              ].map((it) => (
                <div key={it.label} className="glass rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <it.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">{it.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
