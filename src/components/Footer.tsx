import logo from "@/assets/ilink-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 mt-10">
      {/* Animated brand strip */}
      <div className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.18) 35%, hsl(var(--accent) / 0.25) 50%, hsl(var(--primary) / 0.18) 65%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "marquee 8s linear infinite",
          }}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="i Link" className="h-9 w-auto" width={36} height={36} />
            <span className="font-display text-lg font-bold">i Link International</span>
          </div>
          <div className="font-display text-sm md:text-base font-medium tracking-[0.25em] uppercase text-gradient">
            Bridging Capital · Innovation · Global Markets
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} i Link International. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground">
            Kigali, Rwanda · Dar es Salaam, Tanzania
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
