
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import { useTheme } from "@/contexts/ThemeContext";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className={cn(
        "overflow-hidden relative min-h-screen flex items-center transition-all duration-500",
        theme === 'dark' 
          ? "bg-gradient-to-br from-dark-background via-dark-900 to-dark-800"
          : "bg-gradient-to-br from-cal-100 via-cal-50 to-cal-200"
      )}
      id="hero" 
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-br from-pulse-400/20 to-indigo-400/20 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 -left-[10%] w-1/3 h-[50%] bg-gradient-to-br from-purple-400/15 to-blue-400/15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-br from-pulse-300/20 to-indigo-300/20 rounded-full blur-3xl parallax" data-speed="0.05"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div 
              className={cn(
                "inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm shadow-lg opacity-0 animate-slide-in-up transition-all duration-500",
                theme === 'dark' 
                  ? "bg-dark-primary/20 border border-dark-primary/30"
                  : "bg-white/80 border border-pulse-200"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-pulse-500 to-indigo-600 text-white mr-3 text-sm font-bold">01</span>
              <span className={cn(
                "font-semibold transition-colors duration-500",
                theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
              )}>Purpose</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight opacity-0 animate-slide-in-up" 
              style={{ animationDelay: "0.3s" }}
            >
              <span className={cn(
                "bg-clip-text text-transparent transition-all duration-500",
                theme === 'dark' 
                  ? "bg-gradient-to-r from-dark-text-light via-dark-primary to-dark-secondary"
                  : "bg-gradient-to-r from-gray-900 via-pulse-600 to-indigo-600"
              )}>
                Point One Labs:
              </span>
              <br className="hidden sm:inline" />
              <span className={cn(
                "transition-colors duration-500",
                theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
              )}>
                Where Innovation Meets Impact
              </span>
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className={cn(
                "text-lg sm:text-xl leading-relaxed opacity-0 animate-slide-in-up max-w-2xl transition-colors duration-500",
                theme === 'dark' ? "text-dark-muted" : "text-gray-700"
              )}
            >
              A connected ecosystem where services, startups, and community drive real-world innovation.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-in-up" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#get-access" 
                className={cn(
                  "group relative inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1",
                  theme === 'dark' 
                    ? "bg-gradient-to-r from-dark-primary to-dark-secondary"
                    : "bg-gradient-to-r from-pulse-500 to-indigo-600"
                )} 
              >
                <span className="relative z-10">Request Partnership</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  theme === 'dark' 
                    ? "bg-gradient-to-r from-dark-primary to-dark-secondary"
                    : "bg-gradient-to-r from-pulse-600 to-indigo-700"
                )}></div>
              </a>
              
              <a 
                href="#features" 
                className={cn(
                  "group inline-flex items-center justify-center px-8 py-4 backdrop-blur-sm font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1",
                  theme === 'dark' 
                    ? "bg-dark-900/80 text-dark-text-light border border-dark-muted/30"
                    : "bg-white/80 text-gray-900 border border-gray-200"
                )}
              >
                <span>Explore Features</span>
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pulse-400/20 to-indigo-400/20 rounded-3xl blur-3xl scale-110"></div>
              
              {/* Main Image Container */}
              <div className={cn(
                "relative rounded-3xl p-8 shadow-2xl transition-all duration-500",
                theme === 'dark' 
                  ? "bg-dark-900 border border-dark-muted/20"
                  : "bg-white border border-gray-100"
              )}>
                {lottieData ? (
                  <div className="relative z-10 opacity-0 animate-slide-in-up" style={{ animationDelay: "0.9s" }}>
                    <LottieAnimation 
                      animationPath={lottieData} 
                      className="w-full h-auto max-w-lg mx-auto"
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      ref={imageRef} 
                      src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" 
                      alt="Point One Labs Ecosystem" 
                      className="w-full h-auto object-cover transition-transform duration-500 ease-out" 
                      style={{ transformStyle: 'preserve-3d' }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pulse-500/10 to-indigo-500/10"></div>
                  </div>
                )}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pulse-400 to-indigo-500 rounded-2xl shadow-lg opacity-0 animate-slide-in-up" style={{ animationDelay: "1.1s" }}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl shadow-lg opacity-0 animate-slide-in-up" style={{ animationDelay: "1.3s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
