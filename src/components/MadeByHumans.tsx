
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
const MadeByHumans = () => {
  const { theme } = useTheme();
  return <section id="made-by-humans" className={cn(
    "w-full py-0 transition-all duration-500",
    theme === 'dark' ? "bg-dark-background" : "bg-cal-50"
  )}>
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        {/* Removed the pulse-chip button/element that was here */}
        
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between" style={{
          backgroundImage: "url('/background-section3.png')"
        }}>
            <div className="flex items-center text-white">
              <img src="/logo.png" alt="Point One Labs Logo" className="h-5 sm:h-6 w-auto mr-3 invert" />
              <span className="text-white text-xl font-medium"></span>
            </div>
            
            <div style={{
            overflow: "hidden",
            maxHeight: "80px",
            marginTop: "40px"
          }}>
              <h2 style={{
              marginBottom: "-30px",
              padding: "0px 0px 100px"
            }} className="sm:text-5xl font-playfair text-white italic mt-0 mx-0 font-thin text-6xl md:text-7xl py-0 px-0 text-center lg:text-7xl">
              PointOne Labs
              </h2>
            </div>
            
            {/* White box at the bottom with overflow */}
            <div className={cn(
              "w-[120%] h-10 rounded-t-lg absolute left-[-10%] bottom-0 transition-all duration-500",
              theme === 'dark' ? "bg-dark-background" : "bg-cal-50"
            )}></div>
          </div>
        </div>
      </div>
    </section>;
};
export default MadeByHumans;
