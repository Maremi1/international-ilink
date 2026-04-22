import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ilink-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#consultancy", label: "Consultancy" },
  { href: "#academy", label: "Academy" },
  { href: "#investment", label: "Investment" },
  { href: "#technology", label: "Technology" },
  { href: "#foundation", label: "Foundation" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`glass-strong rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-all`}>
          <a href="#top" className="flex items-center gap-3 group">
            <img src={logo} alt="iLink International" className="h-10 w-auto" width={40} height={40} />
            <span className="font-display font-bold text-lg hidden sm:inline tracking-tight">
              iLink <span className="text-primary">International</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
          >
            Partner With Us
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
