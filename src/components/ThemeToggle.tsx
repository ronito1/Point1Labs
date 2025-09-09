import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-3 transition-all duration-300 transform hover:scale-110",
        "hover:bg-white/10 rounded-lg",
        "dark:hover:bg-dark-muted/20"
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative w-5 h-5">
        <Sun
          className={cn(
            "absolute inset-0 w-5 h-5 transition-all duration-300",
            theme === 'light' 
              ? "opacity-100 rotate-0 scale-100 text-yellow-500" 
              : "opacity-0 rotate-90 scale-75"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 w-5 h-5 transition-all duration-300",
            theme === 'dark' 
              ? "opacity-100 rotate-0 scale-100 text-blue-400" 
              : "opacity-0 -rotate-90 scale-75"
          )}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
