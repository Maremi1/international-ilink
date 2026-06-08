import { motion } from "framer-motion";
import { Briefcase, TrendingUp, GraduationCap, Cpu } from "lucide-react";
import imgConsultancy from "@/assets/pillar-consultancy.jpg";
import imgInvestment from "@/assets/pillar-investment.jpg";
import imgAcademy from "@/assets/pillar-academy.jpg";
import imgTechnology from "@/assets/pillar-technology.jpg";

const pillars = [
  {
    icon: Briefcase,
    title: "Global Consultancy",
    subtitle: "Corporate Advisory",
    desc: "Strategic guidance for business development, restructuring, and operational efficiency.",
    href: "#consultancy",
    img: imgConsultancy,
  },
  {
    icon: TrendingUp,
    title: "Strategic Investment",
    subtitle: "Asset Management",
    desc: "Equity, funds, IPs and royalties across global jurisdictions for long-term value.",
    href: "#investment",
    img: imgInvestment,
  },
  {
    icon: GraduationCap,
    title: "iLink Academy",
    subtitle: "Human Capital",
    desc: "Bridging the skills gap with leadership, digital and advanced sales training.",
    href: "#academy",
    img: imgAcademy,
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    subtitle: "Digital Platforms",
    desc: "Proprietary marketplaces, fintech, EdTech and smart infrastructure platforms.",
    href: "#technology",
    img: imgTechnology,
  },
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Ecosystem</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            An Integrated <span className="text-gradient">Operational Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            iLink International acts as a diversified holding and management entity across
            four strategic pillars — fully aligned, fully integrated.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card group cursor-pointer relative overflow-hidden flex flex-col"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
              <div className="relative p-8 -mt-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <p.icon size={26} className="text-primary-foreground" />
                </div>
                <div className="text-xs uppercase tracking-wider text-primary mb-2">0{i + 1} · {p.subtitle}</div>
                <h3 className="font-display text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
