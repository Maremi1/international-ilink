import { motion } from "framer-motion";
import { Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/ilink-logo.png";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-10 md:p-16 max-w-6xl mx-auto text-center relative overflow-hidden"
        >
          <img src={logo} alt="iLink International logo" className="h-20 w-auto mx-auto mb-8 animate-float" width={80} height={80} />

          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get In Touch</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Build the <span className="text-gradient">Future Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Partner with iLink International to unlock global opportunities, accelerate
            growth, and shape the next chapter of sustainable economic transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:info@ilinkbiz.com"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all"
            >
              <Mail size={18} />
              info@ilinkbiz.com
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.ilinkbiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass font-semibold hover:border-primary/40 transition-all"
            >
              <Globe size={18} />
              www.ilinkbiz.com
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="glass rounded-xl p-6 text-left">
              <div className="flex items-center gap-2 text-primary mb-2">
                <MapPin size={16} />
                <span className="text-xs uppercase tracking-wider font-semibold">iLink Rwanda</span>
              </div>
              <div className="font-display font-semibold text-lg">Regional Headquarters</div>
              <div className="text-sm text-muted-foreground mt-1">Vision Arcade, Kigali, Rwanda</div>
            </div>
            <div className="glass rounded-xl p-6 text-left">
              <div className="flex items-center gap-2 text-primary mb-2">
                <MapPin size={16} />
                <span className="text-xs uppercase tracking-wider font-semibold">iLink Tanzania</span>
              </div>
              <div className="font-display font-semibold text-lg">Operations Base</div>
              <div className="text-sm text-muted-foreground mt-1">Kinondoni, Dar es Salaam, Tanzania</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
