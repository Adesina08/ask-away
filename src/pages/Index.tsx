const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with Logo */}
      <header className="py-6 px-8">
        <div className="flex items-center gap-2">
          <div className="w-12 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">Logo</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        {/* Welcome Heading */}
        <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-16 text-center">
          Welcome to InicioNG Tech Hub
        </h1>

        {/* Two Cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-2xl justify-center">
          <div className="w-40 h-32 border-2 border-foreground rounded-sm" />
          <div className="w-40 h-32 border-2 border-foreground rounded-sm" />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-8 text-center">
        <p className="text-foreground text-sm">
          © 2026 InicioNG Tech Team
        </p>
      </footer>
    </div>
  );
};

export default Index;
