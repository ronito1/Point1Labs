
import React, { useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  category: 'common' | 'agency' | 'studios' | 'chaos';
  gradient: string;
  backgroundImage?: string;
}

const features: FeatureProps[] = [
  // Common Features
  {
    title: "Online Presence",
    description: "Website, LinkedIn, Discord/Slack community management",
    icon: "🌐",
    category: "common",
    gradient: "from-blue-600 via-indigo-700 to-purple-800",
    backgroundImage: "/background-section1.png"
  },
  {
    title: "Branding",
    description: "Consistent visual + narrative identity across Labs, Studios, Chaos",
    icon: "🎨",
    category: "common",
    gradient: "from-indigo-700 via-purple-600 to-blue-500",
    backgroundImage: "/background-section2.png"
  },
  {
    title: "CRM/Project Management",
    description: "For agency operations & client tracking",
    icon: "📊",
    category: "common",
    gradient: "from-purple-600 via-blue-500 to-indigo-600",
    backgroundImage: "/background-section3.png"
  },
  
  // Agency Features
  {
    title: "Service Portfolio",
    description: "Landing pages showcasing our comprehensive service offerings",
    icon: "💼",
    category: "agency",
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    backgroundImage: "/background-section1.png"
  },
  {
    title: "Client Onboarding",
    description: "Streamlined proposal workflow and client management system",
    icon: "🚀",
    category: "agency",
    gradient: "from-indigo-600 via-purple-500 to-blue-600",
    backgroundImage: "/background-section2.png"
  },
  {
    title: "Payment Integration",
    description: "Seamless Stripe and Razorpay payment processing",
    icon: "💳",
    category: "agency",
    gradient: "from-purple-500 via-blue-500 to-indigo-600",
    backgroundImage: "/background-section3.png"
  },
  {
    title: "Case Studies",
    description: "Comprehensive portfolio showcasing successful projects",
    icon: "📈",
    category: "agency",
    gradient: "from-blue-600 via-purple-500 to-indigo-700",
    backgroundImage: "/background-section1.png"
  },
  
  // Studios Features
  {
    title: "Idea Incubation",
    description: "Notion/Trello boards for systematic idea tracking and development",
    icon: "💡",
    category: "studios",
    gradient: "from-purple-600 via-indigo-500 to-blue-600",
    backgroundImage: "/background-section2.png"
  },
  {
    title: "Content Hub",
    description: "YouTube, Podcast, and Blog integration for thought leadership",
    icon: "🎥",
    category: "studios",
    gradient: "from-indigo-600 via-purple-500 to-blue-700",
    backgroundImage: "/background-section3.png"
  },
  {
    title: "Metrics Dashboard",
    description: "Track MVP progress and content reach analytics",
    icon: "📊",
    category: "studios",
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    backgroundImage: "/background-section1.png"
  },
  
  // Chaos Features
  {
    title: "Community Platform",
    description: "Discord/Slack + forums for collaborative innovation",
    icon: "👥",
    category: "chaos",
    gradient: "from-slate-600 via-indigo-500 to-purple-600",
    backgroundImage: "/background-section2.png"
  },
  {
    title: "Event Management",
    description: "Hackathons, online meetups, and networking events",
    icon: "🎪",
    category: "chaos",
    gradient: "from-purple-600 via-indigo-500 to-blue-600",
    backgroundImage: "/background-section3.png"
  },
  {
    title: "Membership Tiers",
    description: "Free and paid premium access with exclusive benefits",
    icon: "⭐",
    category: "chaos",
    gradient: "from-indigo-600 via-purple-500 to-blue-700",
    backgroundImage: "/background-section1.png"
  },
  {
    title: "Resource Library",
    description: "Guides, AI tools, and knowledge sharing platform",
    icon: "📚",
    category: "chaos",
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    backgroundImage: "/background-section2.png"
  }
];

const FeatureCard = ({
  title,
  description,
  icon,
  category,
  gradient,
  backgroundImage = "/background-section1.png"
}: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <div 
      className={cn(
        "group relative h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden",
        theme === 'dark' 
          ? "bg-dark-900 border border-dark-muted/20" 
          : "bg-white border border-gray-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon and Category Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300",
              theme === 'dark' 
                ? "bg-gradient-to-br from-dark-primary/20 to-dark-primary/10 text-dark-primary" 
                : "bg-gradient-to-br from-pulse-50 to-pulse-100 text-pulse-500"
            )}>
              {icon}
            </div>
            <div>
              <span className={cn(
                "inline-block px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide transition-all duration-500",
                theme === 'dark' 
                  ? "text-dark-primary bg-dark-primary/20" 
                  : "text-pulse-600 bg-pulse-50"
              )}>
                {category}
              </span>
            </div>
          </div>
          
          {/* Hover Arrow */}
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300",
            theme === 'dark' ? "bg-dark-primary" : "bg-pulse-500",
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          )}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Title and Description */}
        <div className="flex-1">
          <h3 className={cn(
            "text-xl font-bold mb-4 transition-colors duration-300",
            theme === 'dark' 
              ? "text-dark-text-light group-hover:text-dark-primary" 
              : "text-gray-900 group-hover:text-pulse-600"
          )}>
            {title}
          </h3>
          <p className={cn(
            "leading-relaxed text-sm transition-colors duration-500",
            theme === 'dark' ? "text-dark-muted" : "text-gray-700"
          )}>
            {description}
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className={cn(
          "mt-6 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
          theme === 'dark' 
            ? "bg-gradient-to-r from-dark-primary to-dark-secondary" 
            : "bg-gradient-to-r from-pulse-500 to-pulse-600"
        )}></div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-gradient-to-br from-pulse-400 to-pulse-600 blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 blur-2xl"></div>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { theme } = useTheme();

  const categories = [
    { key: 'all', label: 'All Features', count: features.length },
    { key: 'common', label: 'Common', count: features.filter(f => f.category === 'common').length },
    { key: 'agency', label: 'Agency', count: features.filter(f => f.category === 'agency').length },
    { key: 'studios', label: 'Studios', count: features.filter(f => f.category === 'studios').length },
    { key: 'chaos', label: 'Chaos', count: features.filter(f => f.category === 'chaos').length }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <section className={cn(
      "py-20 relative overflow-hidden transition-all duration-500",
      theme === 'dark' 
        ? "bg-gradient-to-b from-dark-background to-dark-900"
        : "bg-gradient-to-b from-cal-100 to-cal-50"
    )} id="features" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pulse-100 to-indigo-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-2 text-sm font-bold">04</span>
              <span className="font-semibold">Features</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 via-pulse-600 to-indigo-600 bg-clip-text text-transparent">
            Our Ecosystem Features
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and services that power our innovation ecosystem
          </p>
        </div>
        
        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105",
                activeCategory === category.key
                  ? theme === 'dark'
                    ? 'bg-gradient-to-r from-dark-primary to-dark-secondary text-white shadow-xl shadow-dark-primary/25'
                    : 'bg-gradient-to-r from-pulse-500 to-indigo-600 text-white shadow-xl shadow-pulse-500/25'
                  : theme === 'dark'
                    ? 'bg-dark-900 text-dark-text-light hover:bg-dark-800 shadow-lg hover:shadow-xl border border-dark-muted/30'
                    : 'bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200'
              )}
            >
              <span className="flex items-center gap-2">
                {category.label}
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-bold transition-all duration-300",
                  activeCategory === category.key
                    ? theme === 'dark'
                      ? 'bg-white/20 text-white'
                      : 'bg-white/20 text-white'
                    : theme === 'dark'
                      ? 'bg-dark-primary/20 text-dark-primary'
                      : 'bg-pulse-100 text-pulse-600'
                )}>
                  {category.count}
                </span>
              </span>
              
              {/* Active indicator */}
              {activeCategory === category.key && (
                <div className={cn(
                  "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full transition-all duration-300",
                  theme === 'dark' ? 'bg-white' : 'bg-white'
                )}></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFeatures.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon}
                category={feature.category}
                gradient={feature.gradient} 
                backgroundImage={feature.backgroundImage} 
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className={cn(
            "rounded-3xl p-12 text-white relative overflow-hidden transition-all duration-500",
            theme === 'dark'
              ? "bg-gradient-to-r from-dark-primary to-dark-secondary"
              : "bg-gradient-to-r from-pulse-500 to-indigo-600"
          )}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Explore Our Features?</h3>
              <p className="text-xl mb-8 opacity-90">
                Get started with our ecosystem and unlock the full potential of innovation
              </p>
              <button className={cn(
                "px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",
                theme === 'dark'
                  ? "bg-white text-dark-primary hover:bg-gray-100"
                  : "bg-white text-pulse-600 hover:bg-gray-100"
              )}>
                Get Started Today
              </button>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
