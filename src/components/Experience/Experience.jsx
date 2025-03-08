import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "../../context/ThemeContext.jsx";
import useOnScreen from "../../hooks/useOnScreen.jsx";
import { educations, experiences } from "../../utils/Experience_Education.jsx";

export default function Experience() {
  const { theme } = useTheme();
  const [alignment, setAlignment] = React.useState("experience");
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.85 },
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const getTimelineContent = () => {
    return alignment === "experience" ? experiences : educations;
  };

  return (
    <>
      <motion.div
        ref={ref}
        className=" max-w-6xl mx-auto px-10 pt-20"
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={variants}
        id="Experience"
      >
        {/* <div className="text-center mx-auto pb-7 text-3xl font-bold ">
          Experience / Education
        </div> */}
        <Typography variant="h4" textAlign="center" mb={3}>
          Experience / Education
        </Typography>
        <span className="flex justify-center mb-3">
          <Box>
            <Tabs
              value={alignment}
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
              <Tab value="experience" label="Experience" />
              <Tab value="education" label="Education" />
            </Tabs>
          </Box>
        </span>
        <div>
          <Timeline position="alternate-reverse">
            {getTimelineContent().map((education, index) => {
              return (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      {alignment === "experience" ? (
                        <BriefcaseIcon className="w-5 h-5" />
                      ) : (
                        <AcademicCapIcon className="w-5 h-5" />
                      )}
                    </TimelineDot>

                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="shadow-md   ">
                    <Typography>
                      <h1 className="font-semibold text-lg">
                        {education.label}
                      </h1>
                    </Typography>
                    <Typography className="opacity-80">
                      {education.duration}
                    </Typography>
                    {alignment === "experience" ? (
                      <ul className="list-disc pl-5 text-left">
                        {education.description.map((desc, index) => (
                          <li key={index} className="mt-1 opacity-60">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Typography className="opacity-60">
                        {education.description}
                      </Typography>
                    )}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </motion.div>
    </>
  );
}
