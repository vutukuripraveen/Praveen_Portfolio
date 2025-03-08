import React from "react";
import { motion } from "framer-motion";
import {
  frontendIcons,
  backendIcons,
  toolsIcons,
} from "../utils/TechStackIcons.jsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTheme } from "../context/ThemeContext.jsx";
import useOnScreen from "../hooks/useOnScreen.jsx";

const TechStack = () => {
  const [stack, setStack] = React.useState("frontend");
  const { theme, toggleTheme } = useTheme();
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  const handleChange = (event, newStack) => {
    setStack(newStack);
  };

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.85 },
  };

  const getIcons = () => {
    switch (stack) {
      case "frontend":
        return frontendIcons;
        break;
      case "backend":
        return backendIcons;
        break;
      case "tools":
        return toolsIcons;
        break;
      default:
        return frontendIcons;
        break;
    }
  };

  return (
    <motion.div
      className=" max-w-6xl mx-auto p-10"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      ref={ref}
      id="TechStack"
    >
      {/* <div className="text-center mx-auto pb-7 text-3xl font-bold">
        Tech stack
      </div> */}
      <Typography variant="h4" textAlign="center" mb={3}>
        Tech Stack
      </Typography>
      <span className="flex justify-center mb-3">
        <Box>
          <Tabs
            value={stack}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            sx={{
              "& .MuiButtonBase-root MuiTab-root MuiTab-textColorSecondary, .css-1a4cg4j-MuiButtonBase-root-MuiTab-root, .css-1mrn996":
                {
                  color: `${
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.6)"
                      : "rgba(0, 0, 0, 0.6)"
                  }`,
                },
              "& .css-1a4cg4j-MuiButtonBase-root-MuiTab-root.Mui-selected, .css-1mrn996.Mui-selected":
                {
                  color: "#9c27b0",
                },
            }}
          >
            <Tab value="frontend" label="Frontend" />
            <Tab value="backend" label="Backend" />
            <Tab value="tools" label="Tools" />
          </Tabs>
        </Box>
      </span>
      <div className="flex gap-10 flex-wrap justify-center items-center">
        {getIcons().map((icon, index) => {
          return (
            <div
              className={`flex flex-col items-center justify-center w-24 h-24 ${
                theme === "dark"
                  ? "bg-[#494c4e]"
                  : "bg-gray-100 hover:bg-gray-200"
              } rounded-lg shadow transition duration-150 ease-in-out`}
              key={index}
            >
              <span className="w-12 h-12 flex items-center justify-center">
                {icon.svg}
              </span>
              <span
                className={`mt-2 text-sm font-semibold ${
                  theme == "dark" ? "text-white" : "text-gray-700"
                }`}
              >
                {icon.title}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TechStack;
