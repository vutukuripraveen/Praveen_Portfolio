import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "../../context/ThemeContext.jsx";

const ProjectCardWithReadMore = ({
  title,
  description,
  imageUrl,
  githubLink,
  liveLink,
}) => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Animation variants for the sliding effect
  const slideVariants = {
    initial: { width: 0, opacity: 0, display: "none" },
    hover: {
      width: "100%",
      opacity: 1,
      display: "flex",
      transition: {
        type: "tween",
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const textColor = theme === "dark" ? "#E0E0E0" : "#333";

  return (
    <div style={{ width: 345, position: "relative", margin: "auto" }}>
      <motion.div
        initial="initial"
        whileHover="hover"
        className="w-full h-full"
      >
        <Card
          sx={{
            bgcolor: theme === "dark" ? "#12181D" : "background.paper",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            style={{ width: "345px", height: "140px", objectFit: "cover" }}
            image={imageUrl}
            alt={title}
          />
          <CardContent sx={{ color: textColor }}>
            <Typography
              sx={{ color: textColor }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              sx={{ color: textColor }}
              variant="body2"
              color="text.secondary"
              noWrap
            >
              {description.substring(0, 100)}...
            </Typography>
            <Button size="small" onClick={handleClickOpen}>
              Read More <ExpandMoreIcon />
            </Button>
          </CardContent>
        </Card>
        {/* Overlay */}
        <motion.div
          variants={slideVariants}
          className="absolute top-0 left-0 h-full flex justify-center items-center gap-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            zIndex: 1,
          }}
        >
          <IconButton
            color="inherit"
            href={githubLink}
            target="_blank"
            aria-label="GitHub link"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            href={liveLink}
            target="_blank"
            aria-label="Live demo link"
          >
            <LaunchIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </motion.div>
      {/* Dialog for full description */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        sx={{ color: textColor }}
      >
        <DialogTitle id="form-dialog-title" sx={{ color: textColor }}>
          {title}
        </DialogTitle>
        <DialogContent sx={{ color: textColor }}>
          <DialogContentText sx={{ color: textColor }}>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProjectCardWithReadMore;
