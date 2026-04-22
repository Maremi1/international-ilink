import logo from "@/assets/ilink-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="iLink" className="h-8 w-auto" width={32} height={32} />
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} iLink International. All rights reserved.
            </div>
          </div>
          <div className="text-xs text-muted-foreground tracking-wider uppercase">
            Bridging Capital · Innovation · Global Markets
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
