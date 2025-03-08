import React from "react";
import ContactForm from "./ContactForm.jsx";
import {
  Grid,
  Box,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import coder from "../../assets/coder.png";
import useOnScreen from "../../hooks/useOnScreen.jsx";

function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [ref, visible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.85 },
  };

  return (
    <motion.div
      className=" max-w-6xl mx-auto p-10"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={variants}
      ref={ref}
      id="Contact"
    >
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <Typography variant="h4" textAlign="center" mb={3}>
          Contact Me
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          //   style={{ minHeight: "100vh" }}
        >
          {matches && ( // Only render this Grid item if 'matches' is true
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={coder} alt="coder" />
              </motion.div>
            </Grid>
          )}
          <Grid item xs={12} md={9}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
}

export default Contact;
