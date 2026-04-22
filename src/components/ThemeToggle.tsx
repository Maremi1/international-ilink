import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`relative inline-flex items-center w-16 h-9 rounded-full glass border border-border hover:border-primary/40 transition-all p-1 ${className}`}
    >
      {/* Track icons */}
      <span className="absolute left-2 text-yellow-500 pointer-events-none">
        <Sun size={14} />
      </span>
      <span className="absolute right-2 text-primary pointer-events-none">
        <Moon size={14} />
      </span>

      {/* Sliding thumb */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground shadow-md ${
          isDark ? "ml-auto" : "mr-auto"
        }`}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
