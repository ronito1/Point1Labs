
import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
const DetailsSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };
  return <section id="details" className={cn(
    "w-full py-0 transition-all duration-500",
    theme === 'dark' ? "bg-dark-background" : "bg-cal-50"
  )}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold">
                Our Services
              </h2>
            </div>
            
            {/* Card Content */}
            <div className={cn(
              "p-4 sm:p-8 transition-all duration-500",
              theme === 'dark' 
                ? "bg-dark-900" 
                : "bg-white border border-gray-100"
            )} style={{
            backgroundColor: theme === 'dark' ? "#0D0D0F" : "#FFFFFF",
            border: theme === 'dark' ? "none" : "1px solid #ECECEC"
          }}>
              <h3 className="text-lg sm:text-xl font-display mb-6 sm:mb-8">
                Comprehensive solutions across our ecosystem
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-500",
                    theme === 'dark' ? "bg-dark-primary" : "bg-pulse-500"
                  )}>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className={cn(
                      "p-3 rounded-lg backdrop-blur-sm transition-all duration-500",
                      theme === 'dark' 
                        ? "bg-dark-900/80 border border-dark-muted/30" 
                        : "bg-gray-50/80 border border-gray-100"
                    )}>
                      <span className={cn(
                        "font-semibold text-base transition-colors duration-500",
                        theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
                      )}>Agency:</span> <span className={cn(
                        "transition-colors duration-500",
                        theme === 'dark' ? "text-dark-muted" : "text-gray-700"
                      )}>Web Dev, AI Services, Content</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-500",
                    theme === 'dark' ? "bg-dark-primary" : "bg-pulse-500"
                  )}>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className={cn(
                      "p-3 rounded-lg backdrop-blur-sm transition-all duration-500",
                      theme === 'dark' 
                        ? "bg-dark-900/80 border border-dark-muted/30" 
                        : "bg-gray-50/80 border border-gray-100"
                    )}>
                      <span className={cn(
                        "font-semibold text-base transition-colors duration-500",
                        theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
                      )}>Studios:</span> <span className={cn(
                        "transition-colors duration-500",
                        theme === 'dark' ? "text-dark-muted" : "text-gray-700"
                      )}>MVP Development, Incubation</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-500",
                    theme === 'dark' ? "bg-dark-primary" : "bg-pulse-500"
                  )}>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className={cn(
                      "p-3 rounded-lg backdrop-blur-sm transition-all duration-500",
                      theme === 'dark' 
                        ? "bg-dark-900/80 border border-dark-muted/30" 
                        : "bg-gray-50/80 border border-gray-100"
                    )}>
                      <span className={cn(
                        "font-semibold text-base transition-colors duration-500",
                        theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
                      )}>Community:</span> <span className={cn(
                        "transition-colors duration-500",
                        theme === 'dark' ? "text-dark-muted" : "text-gray-700"
                      )}>Hackathons, Events, Mentorship</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-500",
                    theme === 'dark' ? "bg-dark-primary" : "bg-pulse-500"
                  )}>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className={cn(
                      "p-3 rounded-lg backdrop-blur-sm transition-all duration-500",
                      theme === 'dark' 
                        ? "bg-dark-900/80 border border-dark-muted/30" 
                        : "bg-gray-50/80 border border-gray-100"
                    )}>
                      <span className={cn(
                        "font-semibold text-base transition-colors duration-500",
                        theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
                      )}>Timeline:</span> <span className={cn(
                        "transition-colors duration-500",
                        theme === 'dark' ? "text-dark-muted" : "text-gray-700"
                      )}>2-12 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-500",
                    theme === 'dark' ? "bg-dark-primary" : "bg-pulse-500"
                  )}>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className={cn(
                      "p-3 rounded-lg backdrop-blur-sm transition-all duration-500",
                      theme === 'dark' 
                        ? "bg-dark-900/80 border border-dark-muted/30" 
                        : "bg-gray-50/80 border border-gray-100"
                    )}>
                      <span className={cn(
                        "font-semibold text-base transition-colors duration-500",
                        theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
                      )}>Support:</span> <span className={cn(
                        "transition-colors duration-500",
                        theme === 'dark' ? "text-dark-muted" : "text-gray-700"
                      )}>Ongoing Partnership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className={cn(
                "inline-block px-4 sm:px-6 py-2 text-white rounded-full text-xs mb-4 transition-all duration-500",
                theme === 'dark' 
                  ? "border border-dark-muted/30" 
                  : "border border-white"
              )}>
                Get started
              </div>
              <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                Let's build together
              </h2>
            </div>
            
            {/* Card Content - Form */}
            <div className={cn(
              "p-4 sm:p-8 transition-all duration-500",
              theme === 'dark' 
                ? "bg-dark-900" 
                : "bg-white border border-gray-100"
            )} style={{
            backgroundColor: theme === 'dark' ? "#0D0D0F" : "#FFFFFF",
            border: theme === 'dark' ? "none" : "1px solid #ECECEC"
          }}>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Full name" 
                    className={cn(
                      "w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-500",
                      theme === 'dark' 
                        ? "bg-dark-800 border border-dark-muted/30 text-dark-text-light placeholder-dark-muted" 
                        : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500"
                    )} 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email address" 
                    className={cn(
                      "w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-500",
                      theme === 'dark' 
                        ? "bg-dark-800 border border-dark-muted/30 text-dark-text-light placeholder-dark-muted" 
                        : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500"
                    )} 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Company (optional)" 
                    className={cn(
                      "w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-500",
                      theme === 'dark' 
                        ? "bg-dark-800 border border-dark-muted/30 text-dark-text-light placeholder-dark-muted" 
                        : "bg-white border border-gray-300 text-gray-900 placeholder-gray-500"
                    )} 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Get started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DetailsSection;
