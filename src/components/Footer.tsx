export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">iN</span>
            </div>
            <span className="font-bold text-xl"><span className="text-[#00afef]">InicioNG</span> Tech Hub</span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
              Services
            </a>
            <a href="#portfolio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
              Portfolio
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
              About
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 <span className="text-[#00afef]">InicioNG</span> Tech Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
