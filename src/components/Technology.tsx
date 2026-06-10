import { motion } from "framer-motion";
import { ShoppingBag, Banknote, Users, Shield, Wifi, GraduationCap } from "lucide-react";
import platformsImg from "@/assets/platforms.jpg";
import marketplaceImg from "@/assets/tech-marketplace.jpg";
import fintechImg from "@/assets/tech-fintech.jpg";
import communityImg from "@/assets/tech-community.jpg";
import governanceImg from "@/assets/tech-governance.jpg";
import edtechImg from "@/assets/tech-edtech.jpg";
import infrastructureImg from "@/assets/tech-infrastructure.jpg";

const groups = [
  {
    icon: ShoppingBag,
    title: "Global Marketplaces",
    image: marketplaceImg,
    items: ["Mama Mia's Soko (E-commerce)", "Parcel Delivery Management"],
  },
  {
    icon: Banknote,
    title: "Fintech & Insuretech",
    image: fintechImg,
    items: ["Bima Kwik", "AI Credit Scoring", "Family Banking Management"],
  },
  {
    icon: Users,
    title: "Community Finance",
    image: communityImg,
    items: ["Digital Vicoba (Microfinance)", "Book Lending Management"],
  },
  {
    icon: Shield,
    title: "Governance & Operations",
    image: governanceImg,
    items: ["Touchless KYC", "Digital Onboarding", "Membership / Donation Mgmt"],
  },
  {
    icon: GraduationCap,
    title: "Educational Technology",
    image: edtechImg,
    items: ["University E-learning", "Professional Certifications"],
  },
  {
    icon: Wifi,
    title: "Smart Infrastructure & Security",
    image: infrastructureImg,
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
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 w-11 h-11 rounded-lg bg-primary/90 backdrop-blur flex items-center justify-center shadow-[0_0_24px_hsl(var(--primary)/0.5)]">
                  <g.icon size={20} className="text-primary-foreground" />
                </div>
              </div>
              <div className="p-6 flex-1">
                <h3 className="font-display text-lg font-bold mb-4">{g.title}</h3>
                <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="text-foreground/70 mt-1" aria-hidden="true">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
