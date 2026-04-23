import Marquee from "./Marquee";

const partners = [
  "VENTURA CAPITAL",
  "MERIDIAN GROUP",
  "ATLAS HOLDINGS",
  "NORDIC FUND",
  "SAVANNAH BANK",
  "HORIZON EQUITY",
  "PRIME ADVISORY",
  "GLOBAL TRUST",
  "ZENITH PARTNERS",
];

const Partners = () => {
  return (
    <section className="relative py-16 md:py-20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Partners & Trust</div>
          <p className="text-sm text-muted-foreground">
            Collaborating with institutions, funds and corporations across continents
          </p>
        </div>
        <Marquee
          speed="slow"
          items={partners.map((name) => (
            <div className="flex items-center gap-3 px-6">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-sm bg-primary/70" />
              </div>
              <span className="font-display text-base md:text-lg font-semibold tracking-[0.18em] text-muted-foreground/80 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        />
      </div>
    </section>
  );
};

export default Partners;
