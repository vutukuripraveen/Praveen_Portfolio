import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import useOnScreen from '../hooks/useOnScreen.jsx';

const About = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.85 },
  };

  return (
    <motion.div
      id="About"
      className="max-w-6xl mx-auto px-10 pt-10"
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
      ref={ref}
    >
      {/* <div className="text-center text-3xl font-bold mb-4">About Me</div> */}
      <Typography variant="h4" textAlign="center" mb={3}>
        About Me
      </Typography>
      <p className="text-lg ">
        Hey there, I'm Praveen, a passionate full-stack developer. With
        expertise in both front-end and back-end technologies, I'm dedicated to
        creating seamless digital experiences. Let's build something amazing
        together! Feel free to explore my portfolio and reach out to collaborate
        on your next project. Innovation awaits, and I'm here to bring your
        ideas to life.
      </p>
    </motion.div>
  );
};

export default About;
