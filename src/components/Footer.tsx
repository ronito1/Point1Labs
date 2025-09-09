
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className={cn(
      "relative overflow-hidden transition-all duration-500",
      theme === 'dark' 
        ? "bg-gradient-to-br from-dark-background via-dark-900 to-dark-800" 
        : "bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"
    )}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pulse-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20 pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pulse-500 to-indigo-600 rounded-xl blur opacity-20"></div>
                  <img 
                    src="/logo.png" 
                    alt="Point One Labs Logo" 
                    className="relative h-10" 
                  />
                </div>
                <span className={cn(
                  "text-2xl font-bold bg-clip-text text-transparent transition-all duration-500",
                  theme === 'dark' 
                    ? "bg-gradient-to-r from-dark-text-light to-dark-primary" 
                    : "bg-gradient-to-r from-white to-pulse-300"
                )}>
                  Point One Labs
                </span>
              </div>
              <p className={cn(
                "text-lg leading-relaxed mb-6 max-w-md transition-colors duration-500",
                theme === 'dark' ? "text-dark-muted" : "text-gray-300"
              )}>
                A connected ecosystem where services, startups, and community drive real-world innovation.
              </p>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'Discord'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className={cn(
                      "group w-12 h-12 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110",
                      theme === 'dark' 
                        ? "bg-dark-muted/20 hover:bg-dark-primary/20" 
                        : "bg-white/10 hover:bg-pulse-500/20"
                    )}
                  >
                    <span className={cn(
                      "text-sm font-semibold transition-colors duration-500",
                      theme === 'dark' 
                        ? "text-dark-text-light group-hover:text-dark-primary" 
                        : "text-white group-hover:text-pulse-300"
                    )}>
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>


            {/* Contact Info */}
            <div>
              <h3 className={cn(
                "font-semibold text-lg mb-6 transition-colors duration-500",
                theme === 'dark' ? "text-dark-text-light" : "text-white"
              )}>Contact</h3>
              <div className="space-y-3">
                <p className={cn(
                  "transition-colors duration-500",
                  theme === 'dark' ? "text-dark-muted" : "text-gray-300"
                )}>hello@pointonelabs.com</p>
                <p className={cn(
                  "transition-colors duration-500",
                  theme === 'dark' ? "text-dark-muted" : "text-gray-300"
                )}>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={cn(
            "border-t pt-8 transition-all duration-500",
            theme === 'dark' ? "border-dark-muted/30" : "border-gray-700"
          )}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={cn(
                "text-sm mb-4 md:mb-0 transition-colors duration-500",
                theme === 'dark' ? "text-dark-muted" : "text-gray-400"
              )}>
                © 2024 Point One Labs. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {['Privacy Policy', 'Terms of Service'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className={cn(
                      "text-sm transition-colors duration-300",
                      theme === 'dark' 
                        ? "text-dark-muted hover:text-dark-primary" 
                        : "text-gray-400 hover:text-pulse-300"
                    )}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
