import { useState, useEffect } from "react";
import companyLogo from "@/assets/company-logo.png";
import datasyncImg from "@/assets/datasync.png";
import analysisViewImg from "@/assets/analysis-view.png";

const useTypingAnimation = (text: string, speed: number = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayedText, isComplete };
};

const Index = () => {
  const { displayedText, isComplete } = useTypingAnimation("Welcome to InicioNG Tech Hub", 80);

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
          <span className="text-xl font-semibold text-foreground">InicioNG Tech</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12 relative z-10">
        {/* Company Image */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={companyLogo} 
            alt="InicioNG Tech" 
            className="w-24 h-24 object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* Welcome Heading with Typing Animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight min-h-[60px] md:min-h-[72px]">
            {displayedText}
            {!isComplete && (
              <span className="inline-block w-1 h-8 md:h-12 bg-primary ml-1 animate-pulse" />
            )}
          </h1>
        </div>

        {/* Two Image Cards */}
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl justify-center">
          {/* DataSync Card */}
          <div className="group flex-1 max-w-sm flex flex-col items-center animate-fade-in-delay-1">
            <div className="w-full aspect-[5/4] rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer mb-4">
              <img 
                src={datasyncImg} 
                alt="DataSync" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground">DataSync</h3>
          </div>

          {/* Analysis View Card */}
          <div className="group flex-1 max-w-sm flex flex-col items-center animate-fade-in-delay-2">
            <div className="w-full aspect-[5/4] rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer mb-4">
              <img 
                src={analysisViewImg} 
                alt="Analysis View" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Analysis View</h3>
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
