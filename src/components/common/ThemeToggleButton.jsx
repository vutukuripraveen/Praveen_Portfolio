import React from "react";
import IconButton from "@mui/material/IconButton";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  return (
    <div className="flex items-center justify-center">
      <IconButton onClick={toggleTheme}>
        {theme === "dark" ? (
          <MoonIcon className="h-6 w-6 text-blue-500" />
        ) : (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          >
            <SunIcon className="h-6 w-6 text-yellow-500" />
          </motion.div>
        )}
      </IconButton>
    </div>
  );
};

export default ThemeToggleButton;
