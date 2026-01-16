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
  const fullHeadingText = "Welcome to InicioNG Tech Hub";
  const brandName = "InicioNG";
  const brandColorClass = "text-[#00afef]";
  const { displayedText, isComplete } = useTypingAnimation(fullHeadingText, 80);

  const brandStart = fullHeadingText.indexOf(brandName);
  const brandEnd = brandStart + brandName.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#00afef]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,175,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,175,239,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Floating particles effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00afef]/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
      </div>

      {/* Header with Logo */}
      <header className="py-8 px-8 relative z-10 animate-fade-in">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img 
            src={companyLogo} 
            alt="InicioNG Tech" 
            className="w-12 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl font-semibold text-white"><span className="text-[#00afef]">InicioNG</span> Tech</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start px-8 pt-8 pb-12 relative z-10">
        {/* Welcome Heading with Typing Animation */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight min-h-[60px] md:min-h-[72px]">
            {/*
              We render the typed text in three parts so we can color "InicioNG" as it appears.
              This also works while the text is still being typed.
            */}
            <span className="whitespace-pre-wrap">
              {/* Before brand */}
              <span>
                {displayedText.slice(0, Math.min(displayedText.length, brandStart))}
              </span>

              {/* Brand */}
              <span className={brandColorClass}>
                {displayedText.slice(
                  Math.min(displayedText.length, brandStart),
                  Math.min(displayedText.length, brandEnd)
                )}
              </span>

              {/* After brand */}
              <span>
                {displayedText.slice(Math.min(displayedText.length, brandEnd))}
              </span>
            </span>

            {/* Blinking cursor (always visible) */}
            <span
              aria-hidden="true"
              className="inline-block w-1 h-8 md:h-12 bg-[#00afef] ml-1 animate-blink"
            />

          </h1>
        </div>

        {/* Two Image Cards */}
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl justify-center">
          {/* DataSync Card */}
          <a
            href="https://surveytosql.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="group flex-1 max-w-md flex flex-col items-center animate-fade-in-delay-1"
            aria-label="Open DataSync"
          >
            <div className="relative w-full aspect-[5/4] rounded-2xl shadow-xl shadow-[#00afef]/10 overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-[#00afef]/30 hover:border-white/30 cursor-pointer mb-4">
              <img 
                src={datasyncImg} 
                alt="DataSync" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Hover text */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="px-4 py-2 rounded-xl bg-[#00afef]/90 backdrop-blur-sm text-sm font-medium text-white shadow-lg text-center max-w-[280px]">
                  Connect your SurveyCTO forms directly to PostgreSQL. Just click and sync.
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-[#00afef] transition-colors duration-300">DataSync</h3>
          </a>

          {/* Analysis View Card */}
          <a
            href="https://httpstat.us/404"
            target="_blank"
            rel="noreferrer"
            className="group flex-1 max-w-md flex flex-col items-center animate-fade-in-delay-2"
            aria-label="Open Analysis View"
          >
            <div className="relative w-full aspect-[5/4] rounded-2xl shadow-xl shadow-cyan-500/10 overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-cyan-500/30 hover:border-white/30 cursor-pointer mb-4">
              <img 
                src={analysisViewImg} 
                alt="Analysis View" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Hover text */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="px-4 py-2 rounded-xl bg-cyan-500/90 backdrop-blur-sm text-sm font-medium text-white shadow-lg">
                  Coming Soon
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">Analysis View</h3>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 text-center relative z-10 animate-fade-in">
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#00afef]/50 to-transparent mb-6" />
        <p className="text-slate-400 text-sm">
          © 2026 <span className="font-medium text-white"><span className="text-[#00afef]">InicioNG</span> Tech Team</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
