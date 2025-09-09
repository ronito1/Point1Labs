
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  return (
    <section className={cn(
      "py-20 relative overflow-hidden transition-all duration-500",
      theme === 'dark' 
        ? "bg-gradient-to-br from-dark-background via-dark-900 to-dark-800"
        : "bg-gradient-to-br from-cal-100 via-cal-50 to-cal-200"
    )} id="get-access" ref={ctaRef}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pulse-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10 opacity-0 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className={cn(
            "relative rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden transition-all duration-500",
            theme === 'dark' 
              ? "bg-dark-900 border border-dark-muted/20"
              : "bg-white border border-gray-100"
          )}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pulse-400 to-indigo-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-dark-primary/20 to-dark-secondary/20 border border-dark-primary/30 mb-8">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-dark-primary to-dark-secondary text-white mr-3 text-sm font-bold">05</span>
                <span className="font-semibold text-dark-text-light">Get Started</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-8">
                <span className="bg-gradient-to-r from-dark-text-light via-dark-primary to-dark-secondary bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="text-dark-text-light">Your Innovation Journey?</span>
              </h2>
              
              <p className="text-xl text-dark-muted mb-12 max-w-3xl mx-auto leading-relaxed">
                Join our ecosystem of innovators, entrepreneurs, and visionaries. Get access to our comprehensive suite of services and be part of the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-dark-primary to-dark-secondary text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-primary to-dark-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="#features" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-dark-900/80 backdrop-blur-sm text-dark-text-light font-semibold rounded-2xl border border-dark-muted/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span>Explore Features</span>
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-dark-900/60 backdrop-blur-sm rounded-2xl border border-dark-muted/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-dark-primary to-dark-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
