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
    description: "Platform for developing and refining innovative concepts",
    icon: "💡",
    category: "studios",
    gradient: "from-indigo-500 via-purple-600 to-blue-700",
    backgroundImage: "/background-section2.png"
  },
  {
    title: "Prototype Development",
    description: "Rapid prototyping and MVP creation for experimental projects",
    icon: "🔧",
    category: "studios",
    gradient: "from-purple-500 via-blue-600 to-indigo-700",
    backgroundImage: "/background-section3.png"
  },
  {
    title: "Innovation Labs",
    description: "Dedicated spaces for research and experimental development",
    icon: "🧪",
    category: "studios",
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    backgroundImage: "/background-section1.png"
  },
  {
    title: "Tech Stack Integration",
    description: "Modern technology integration for cutting-edge solutions",
    icon: "⚡",
    category: "studios",
    gradient: "from-indigo-600 via-purple-500 to-blue-600",
    backgroundImage: "/background-section2.png"
  },
  
  // Chaos Features
  {
    title: "Community Building",
    description: "Fostering connections and collaboration within our ecosystem",
    icon: "🤝",
    category: "chaos",
    gradient: "from-purple-600 via-blue-500 to-indigo-600",
    backgroundImage: "/background-section3.png"
  },
  {
    title: "Event Management",
    description: "Organizing workshops, meetups, and networking events",
    icon: "🎪",
    category: "chaos",
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    backgroundImage: "/background-section1.png"
  },
  {
    title: "Knowledge Sharing",
    description: "Documentation, tutorials, and educational content sharing",
    icon: "📚",
    category: "chaos",
    gradient: "from-indigo-500 via-purple-600 to-blue-700",
    backgroundImage: "/background-section2.png"
  },
  {
    title: "Open Source Projects",
    description: "Contributing to and maintaining open source initiatives",
    icon: "🌱",
    category: "chaos",
    gradient: "from-purple-500 via-blue-600 to-indigo-700",
    backgroundImage: "/background-section3.png"
  }
];

const FeatureCard = ({ feature, index }: { feature: FeatureProps; index: number }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105",
        "animate-fade-in opacity-0"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={cn(
        "relative z-10 p-6 sm:p-8 h-full",
        theme === 'dark' 
          ? "bg-dark-900/90 backdrop-blur-sm border border-dark-muted/20" 
          : "bg-white/90 backdrop-blur-sm border border-gray-100"
      )}>
        <div className="flex items-start gap-4 mb-4">
          <div className="text-3xl sm:text-4xl">{feature.icon}</div>
          <div className="flex-1">
            <h3 className={cn(
              "text-lg sm:text-xl font-semibold mb-2 transition-colors duration-500",
              theme === 'dark' ? "text-dark-text-light" : "text-gray-900"
            )}>
              {feature.title}
            </h3>
            <p className={cn(
              "text-sm sm:text-base leading-relaxed transition-colors duration-500",
              theme === 'dark' ? "text-dark-muted" : "text-gray-700"
            )}>
              {feature.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Gradient Overlay */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
        `bg-gradient-to-br ${feature.gradient}`
      )}></div>
      
      {/* Background Image */}
      {feature.backgroundImage && (
        <div 
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            backgroundImage: `url(${feature.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      )}
    </div>
  );
};

const EcosystemFeatures = () => {
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
    )} id="ecosystem-features" ref={sectionRef}>
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
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                "hover:scale-105 active:scale-95",
                activeCategory === category.key
                  ? "bg-pulse-500 text-white shadow-lg shadow-pulse-500/25"
                  : theme === 'dark'
                    ? "bg-dark-800 text-dark-text-light hover:bg-dark-700 border border-dark-muted/20"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
              )}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((feature, index) => (
            <FeatureCard key={`${feature.category}-${feature.title}`} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemFeatures;
