
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 transition-all duration-500",
        isScrolled 
          ? cn(
              "backdrop-blur-xl shadow-lg transition-all duration-500",
              theme === 'dark' 
                ? "bg-dark-background/90 border-b border-dark-muted/20"
                : "bg-white/90 border-b border-gray-100"
            )
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Point One Labs"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pulse-500 to-indigo-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img 
              src="/logo.png" 
              alt="Point One Labs Logo" 
              className="relative h-8 sm:h-10 transition-all duration-300" 
            />
          </div>
          <span className={cn(
            "hidden sm:block text-xl font-bold bg-clip-text text-transparent transition-all duration-500",
            theme === 'dark' 
              ? "bg-gradient-to-r from-dark-text-light to-dark-primary"
              : "bg-gradient-to-r from-gray-900 to-pulse-600"
          )}>
            Point One Labs
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <a 
            href="#" 
            className={cn(
              "group relative px-4 py-2 rounded-xl font-medium transition-all duration-300",
              theme === 'dark' 
                ? "text-dark-text-light hover:text-dark-primary hover:bg-dark-primary/10"
                : "text-gray-900 hover:text-pulse-600 hover:bg-pulse-50"
            )}
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            <span className="relative z-10">Home</span>
            <div className={cn(
              "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300",
              theme === 'dark' 
                ? "bg-gradient-to-r from-dark-primary to-dark-secondary"
                : "bg-gradient-to-r from-pulse-500 to-indigo-600"
            )}></div>
          </a>
          <a 
            href="#features" 
            className={cn(
              "ml-1 group relative px-4 py-2 rounded-xl font-medium transition-all duration-300",
              theme === 'dark' 
                ? "text-dark-text-light hover:text-dark-primary hover:bg-dark-primary/10"
                : "text-gray-900 hover:text-pulse-600 hover:bg-pulse-50"
            )}
          >
            <span className="relative z-10">Services</span>
            <div className={cn(
              "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300",
              theme === 'dark' 
                ? "bg-gradient-to-r from-dark-primary to-dark-secondary"
                : "bg-gradient-to-r from-pulse-500 to-indigo-600"
            )}></div>
          </a>
          <a 
            href="#details" 
            className={cn(
              "ml-1 group relative px-4 py-2 rounded-xl font-medium transition-all duration-300",
              theme === 'dark' 
                ? "text-dark-text-light hover:text-dark-primary hover:bg-dark-primary/10"
                : "text-gray-900 hover:text-pulse-600 hover:bg-pulse-50"
            )}
          >
            <span className="relative z-10">Contact</span>
            <div className={cn(
              "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300",
              theme === 'dark' 
                ? "bg-gradient-to-r from-dark-primary to-dark-secondary"
                : "bg-gradient-to-r from-pulse-500 to-indigo-600"
            )}></div>
          </a>
          
          {/* Theme Toggle */}
          <div className="ml-6 mr-8">
            <ThemeToggle />
          </div>
          
          {/* CTA Button */}
          <a 
            href="#get-access" 
            className={cn(
              "ml-auto group relative inline-flex items-center px-6 py-2 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
              theme === 'dark' 
                ? "bg-gradient-to-r from-dark-primary to-dark-secondary"
                : "bg-gradient-to-r from-pulse-500 to-indigo-600"
            )}
          >
            <span className="relative z-10">Get Started</span>
            <div className={cn(
              "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              theme === 'dark' 
                ? "bg-gradient-to-r from-dark-primary to-dark-secondary"
                : "bg-gradient-to-r from-pulse-600 to-indigo-700"
            )}></div>
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button 
            className={cn(
              "relative p-3 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300",
              theme === 'dark' 
                ? "bg-dark-900/80 border border-dark-muted/30"
                : "bg-white/80 border border-gray-200"
            )}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={cn(
              cn(
                "block w-5 h-0.5 transition-all duration-300",
                theme === 'dark' ? "bg-dark-text-light" : "bg-gray-700"
              ),
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            )}></span>
            <span className={cn(
              cn(
                "block w-5 h-0.5 transition-all duration-300",
                theme === 'dark' ? "bg-dark-text-light" : "bg-gray-700"
              ),
              isMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              cn(
                "block w-5 h-0.5 transition-all duration-300",
                theme === 'dark' ? "bg-dark-text-light" : "bg-gray-700"
              ),
              isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            )}></span>
          </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 backdrop-blur-xl flex flex-col pt-20 px-6 md:hidden transition-all duration-500 ease-in-out",
        theme === 'dark' ? "bg-dark-background/95" : "bg-white/95",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-4 mt-8">
          <a 
            href="#" 
            className="group flex items-center justify-center py-4 px-6 w-full text-center rounded-2xl bg-gradient-to-r from-pulse-50 to-indigo-50 border border-pulse-200 hover:from-pulse-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className={cn(
              "text-lg font-semibold transition-colors duration-500",
              theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
            )}>Home</span>
          </a>
          <a 
            href="#features" 
            className="group flex items-center justify-center py-4 px-6 w-full text-center rounded-2xl bg-gradient-to-r from-pulse-50 to-indigo-50 border border-pulse-200 hover:from-pulse-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className="text-lg font-semibold text-gray-900">Services</span>
          </a>
          <a 
            href="#details" 
            className="group flex items-center justify-center py-4 px-6 w-full text-center rounded-2xl bg-gradient-to-r from-pulse-50 to-indigo-50 border border-pulse-200 hover:from-pulse-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span className="text-lg font-semibold text-gray-900">Contact</span>
          </a>
          
          {/* Mobile CTA */}
          <a 
            href="#get-access" 
            className="group flex items-center justify-center py-4 px-6 w-full text-center rounded-2xl bg-gradient-to-r from-pulse-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-4"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <span>Get Started</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
