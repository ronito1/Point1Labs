import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const { theme } = useTheme();

  return (
    <section className={cn(
      "py-20 relative transition-all duration-500",
      theme === 'dark' ? "bg-dark-background" : "bg-white"
    )} id="testimonials">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6">
            <span>Testimonials</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 transition-colors duration-500",
            theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
          )}>
            What Our Clients Say
          </h2>
          <p className={cn(
            "text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500",
            theme === 'dark' ? "text-dark-muted" : "text-gray-700"
          )}>
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>
        
        <div className="text-center">
          <p className={cn(
            "text-lg transition-colors duration-500",
            theme === 'dark' ? "text-dark-muted" : "text-gray-600"
          )}>
            Testimonials coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;