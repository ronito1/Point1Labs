
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add("animate-fade-in");
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated]);

  // Re-trigger animations when theme changes
  useEffect(() => {
    if (hasAnimated && cardRef.current) {
      cardRef.current.classList.remove("animate-fade-in");
      // Force reflow
      cardRef.current.offsetHeight;
      cardRef.current.classList.add("animate-fade-in");
    }
  }, [theme, hasAnimated]);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6 transition-all duration-300",
        theme === 'dark' 
          ? "bg-dark-900/80 border border-dark-muted/20 lg:hover:bg-dark-800/90" 
          : "bg-white/80 border border-gray-100 lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className={cn(
        "rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-5 transition-all duration-500",
        theme === 'dark' 
          ? "bg-dark-primary/20 text-dark-primary" 
          : "bg-pulse-50 text-pulse-500"
      )}>
        {icon}
      </div>
      <h3 className={cn(
        "text-lg sm:text-xl font-semibold mb-2 sm:mb-3 transition-colors duration-500",
        theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
      )}>{title}</h3>
      <p className={cn(
        "text-sm sm:text-base transition-colors duration-500",
        theme === 'dark' ? "text-dark-muted" : "text-gray-700"
      )}>{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Re-trigger animations when theme changes
  useEffect(() => {
    if (hasAnimated && sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-in-element");
      elements.forEach((el) => {
        el.classList.remove("animate-fade-in");
        // Force reflow
        el.offsetHeight;
        el.classList.add("animate-fade-in");
      });
    }
  }, [theme, hasAnimated]);
  
  return (
    <section className={cn(
      "py-12 sm:py-16 md:py-20 pb-0 relative transition-all duration-500",
      theme === 'dark' ? "bg-dark-background" : "bg-cal-100"
    )} id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Services</span>
          </div>
          <h2 className={cn(
            "section-title mb-3 sm:mb-4 opacity-0 fade-in-element transition-colors duration-500",
            theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
          )}>
            Comprehensive Services, <br className="hidden sm:block" />Innovative Solutions
          </h2>
          <p className={cn(
            "section-subtitle mx-auto opacity-0 fade-in-element transition-colors duration-500",
            theme === 'dark' ? "text-dark-muted" : "text-gray-700"
          )}>
            From agency services to experimental ventures and community collaboration - everything you need to turn ideas into impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 2L2 7v10c0 5.55 4.45 10 10 10s10-4.45 10-10V7L12 2z"></path><path d="M8 11l2 2 4-4"></path></svg>}
            title="Web Development"
            description="From MVPs to scalable applications, we build robust web solutions that grow with your business needs."
            index={0}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M9 12l2 2 4-4"></path><path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"></path><path d="M21 14H3c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"></path></svg>}
            title="AI Services"
            description="Chatbots, automation, and ML solutions that streamline operations and enhance user experiences."
            index={1}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
            title="Content Creation"
            description="SEO-driven content, blogs, and media that amplify your brand voice and drive engagement."
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
