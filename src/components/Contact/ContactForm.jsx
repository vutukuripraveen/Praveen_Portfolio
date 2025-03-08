import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { useTheme } from "../../context/ThemeContext.jsx";

const ContactForm = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

  // Validate form inputs
  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (!!formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // Simulate form submission
      setOpenSnackbar(true); // Show success message
      // Reset form state or provide further user feedback
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500, margin: "auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            error={!!formErrors.name}
            helperText={formErrors.name}
            InputLabelProps={{
              style: {
                color: theme === "dark" ? "#fff" : undefined,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme === "dark" ? "#fff" : undefined,
                },
                "& input": {
                  color: theme === "dark" ? "#fff" : undefined,
                },
                "&:hover": {
                  "& fieldset": {
                    border: theme === "dark" ? "2px solid #fff" : undefined,
                  },
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            error={!!formErrors.email}
            helperText={formErrors.email}
            InputLabelProps={{
              style: {
                color: theme === "dark" ? "#fff" : undefined,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme === "dark" ? "#fff" : undefined,
                },
                "& input": {
                  color: theme === "dark" ? "#fff" : undefined,
                },
                "&:hover": {
                  "& fieldset": {
                    border: theme === "dark" ? "2px solid #fff" : undefined,
                  },
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            error={!!formErrors.message}
            helperText={formErrors.message}
            InputLabelProps={{
              style: {
                color: theme === "dark" ? "#fff" : undefined,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme === "dark" ? "#fff" : undefined,
                },
                "& input, & textarea": {
                  color: theme === "dark" ? "#fff" : undefined,
                },
                "&:hover": {
                  "& fieldset": {
                    border: theme === "dark" ? "2px solid #fff" : undefined,
                  },
                },
              },
            }}
          />
          <Box textAlign="center" mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </Box>
        </form>
      </motion.div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
