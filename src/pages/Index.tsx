const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Header with Logo */}
      <header className="py-8 px-8 relative z-10 animate-fade-in">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-14 h-12 bg-hero-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span className="text-primary-foreground font-bold text-lg">iN</span>
          </div>
          <span className="text-xl font-semibold text-foreground">InicioNG</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12 relative z-10">
        {/* Welcome Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Innovation Starts Here
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Welcome to{" "}
            <span className="text-gradient">InicioNG Tech Hub</span>
          </h1>
        </div>

        {/* Two Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl justify-center">
          {/* Card 1 */}
          <div className="group flex-1 max-w-xs bg-card rounded-2xl border border-border p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-delay-1">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <div className="w-6 h-6 bg-primary rounded-md" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Our Services</h3>
            <p className="text-muted-foreground text-sm">Discover innovative solutions tailored for your business growth.</p>
          </div>

          {/* Card 2 */}
          <div className="group flex-1 max-w-xs bg-card rounded-2xl border border-border p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-delay-2">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <div className="w-6 h-6 bg-accent rounded-md" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Our Projects</h3>
            <p className="text-muted-foreground text-sm">Explore our portfolio of successful digital transformations.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 text-center relative z-10 animate-fade-in">
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-border to-transparent mb-6" />
        <p className="text-muted-foreground text-sm">
          © 2026 <span className="font-medium text-foreground">InicioNG Tech Team</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
