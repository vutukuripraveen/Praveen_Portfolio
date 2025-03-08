const variants = {
  slideIn: {
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
    hidden: { x: "-100%", opacity: 0 },
  },
  fadeIn: {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0 },
  },
  rotateIn: {
    visible: { rotate: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { rotate: -45, opacity: 0 },
  },
  scaleUp: {
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    hidden: { scale: 0.5, opacity: 0 },
  },
  slideFade: {
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    hidden: { y: 20, opacity: 0 },
  },
  // Path drawing variant for SVG paths
  pathDrawing: {
    visible: { pathLength: 1, opacity: 1, transition: { duration: 2 } },
    hidden: { pathLength: 0, opacity: 0 },
  },
};

export default variants;
