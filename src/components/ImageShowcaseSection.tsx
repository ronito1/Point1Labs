
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const ImageShowcaseSection = () => {
  const { theme } = useTheme();
  return (
    <section className={cn(
      "w-full pt-0 pb-8 sm:pb-12 transition-all duration-500",
      theme === 'dark' ? "bg-dark-background" : "bg-cal-50"
    )} id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className={cn(
            "text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3 sm:mb-4 transition-colors duration-500",
            theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
          )}>
            Building the Future Together
          </h2>
          <p className={cn(
            "text-base sm:text-lg transition-colors duration-500",
            theme === 'dark' ? "text-dark-muted" : "text-gray-700"
          )}>
            Our integrated ecosystem connects agency expertise, startup innovation, 
            and community collaboration to drive meaningful impact.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Point One Labs ecosystem showing interconnected services, studios, and community" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className={cn(
            "p-4 sm:p-8 transition-all duration-500",
            theme === 'dark' ? "bg-dark-900" : "bg-white"
          )}>
            <h3 className={cn(
              "text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 transition-colors duration-500",
              theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
            )}>Integrated Innovation Ecosystem</h3>
            <p className={cn(
              "text-sm sm:text-base transition-colors duration-500",
              theme === 'dark' ? "text-dark-muted" : "text-gray-800"
            )}>
              Built with strategic vision and sustainable practices, our ecosystem seamlessly 
              integrates agency services, experimental ventures, and community collaboration, 
              creating a foundation for long-term innovation and real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
