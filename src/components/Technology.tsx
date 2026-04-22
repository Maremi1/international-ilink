import { motion } from "framer-motion";
import { ShoppingBag, Banknote, Users, Shield, Wifi, GraduationCap } from "lucide-react";
import platformsImg from "@/assets/platforms.jpg";

const groups = [
  {
    icon: ShoppingBag,
    title: "Global Marketplaces",
    items: ["Mama Mia's Soko (E-commerce)", "Parcel Delivery Management"],
  },
  {
    icon: Banknote,
    title: "Fintech & Insuretech",
    items: ["Bima Kwik", "AI Credit Scoring", "Family Banking Management"],
  },
  {
    icon: Users,
    title: "Community Finance",
    items: ["Digital Vicoba (Microfinance)", "Book Lending Management"],
  },
  {
    icon: Shield,
    title: "Governance & Operations",
    items: ["Touchless KYC", "Digital Onboarding", "Membership / Donation Mgmt"],
  },
  {
    icon: GraduationCap,
    title: "Educational Technology",
    items: ["University E-learning", "Professional Certifications"],
  },
  {
    icon: Wifi,
    title: "Smart Infrastructure & Security",
    items: ["IoT Smart Water/Gas Metering", "Cyber Security Systems & Training"],
  },
];

const Technology = () => {
  return (
    <section id="technology" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Pillar 04 · Digital Platforms</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Proprietary Platforms for a <span className="text-gradient">Digital Economy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From marketplaces and fintech to smart infrastructure — ready-made platforms
            digitizing operations for governments and enterprises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card overflow-hidden mb-12"
        >
          <img
            src={platformsImg}
            alt="Digital platforms portfolio: marketplaces, fintech, EdTech and smart infrastructure"
            className="w-full h-auto"
            loading="lazy"
            width={1280}
            height={896}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center">
                  <g.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold">{g.title}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
