import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, HandHeart, Leaf, Sprout, Globe, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImg from "@/assets/foundation-hero.jpg";
import empowermentImg from "@/assets/foundation-empowerment.jpg";
import humanitarianImg from "@/assets/foundation-humanitarian.jpg";
import resilienceImg from "@/assets/foundation-resilience.jpg";

const pillars = [
  {
    icon: Heart,
    title: "Socio-Economic Empowerment",
    image: empowermentImg,
    text: "We equip individuals and communities with the skills, capital, and networks needed to build lasting livelihoods — moving people from dependence to self-sufficiency through training, micro-enterprise support, and mentorship.",
  },
  {
    icon: HandHeart,
    title: "Humanitarian Support",
    image: humanitarianImg,
    text: "In moments of crisis, we mobilize rapid, dignified humanitarian relief — distributing essential supplies, food, and medical aid to families and communities facing hardship across the regions we serve.",
  },
  {
    icon: Leaf,
    title: "Community Resilience",
    image: resilienceImg,
    text: "We invest in sustainable systems — community gardens, clean infrastructure, and local cooperatives — that help communities withstand shocks and grow stronger generation after generation.",
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Lives Impacted" },
  { icon: Globe, value: "12", label: "Communities Served" },
  { icon: Sprout, value: "30+", label: "Active Programs" },
];

const Foundation = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SEO 
        title="Mama Mia's Foundation | iLink International"
        description="Mama Mia's Foundation is the philanthropic heart of iLink International, creating sustainable mechanisms for socio-economic empowerment and humanitarian support."
        canonicalUrl="/foundation"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <Link
            to="/#foundation"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Mama Mia's Foundation
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Building a Future of <span className="text-gradient">Dignity & Opportunity</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mama Mia's Foundation is the philanthropic heart of iLink International.
                We move beyond charity to create sustainable mechanisms for socio-economic
                empowerment — turning generosity into long-term, measurable change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass-card overflow-hidden"
            >
              <img
                src={heroImg}
                alt="Community leader addressing a gathering under a tree at golden hour"
                className="w-full h-auto"
                width={1536}
                height={1024}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe lasting change comes not from handouts, but from opportunity.
              Funded by a portion of iLink International's profits, the Foundation channels
              resources into programs that empower people to lift themselves, their families,
              and their communities — creating ripples of resilience that endure.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-8 text-center">
                <s.icon size={28} className="text-primary mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
            What We <span className="text-gradient">Do</span>
          </h2>

          <div className="space-y-12">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="glass-card overflow-hidden [direction:ltr]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-72 object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="[direction:ltr]">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <p.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="glass-card p-10 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Partner in Purpose
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in building sustainable, dignified futures for communities around the world.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Foundation;
