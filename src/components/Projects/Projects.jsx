import React, { useState } from "react";
import HoverableCard from "./ProjectCard";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { projects } from "../../utils/projects";
import useOnScreen from "../../hooks/useOnScreen";

function Projects() {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.85 },
  };

  return (
    <motion.div
      ref={ref}
      className=" mx-auto px-10 py-20"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      id="Projects"
    >
      <Typography variant="h4" textAlign="center" mb={4}>
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <HoverableCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}

export default Projects;
