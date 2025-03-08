import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext.jsx';
import {
  LinkedIn,
  WhatsApp,
  GitHub,
  Email,
  CalendarMonth,
  Twitter,
  Instagram,
} from '@mui/icons-material';
// Add more icons as needed

const FixedPositionIcons = () => {
  const { theme, toggleTheme } = useTheme();

  const handleUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        m: 2,
        backgroundColor: theme === 'dark' ? '#2D3748' : 'background.paper',
        // Use theme's background color for paper for integration with theme
        boxShadow: 3, // Apply shadow for depth, can be adjusted as needed
        borderRadius: 2, // Soften the edges of the box
        p: 1, // Padding inside the box for spacing
        '& .MuiIconButton-root': {
          color: 'primary.main', // Adjust icon button color to use primary color
          '&:hover': {
            backgroundColor: 'primary.light', // Lighten the button on hover for feedback
            color: 'primary.contrastText', // Ensure text contrasts well with the light background
          },
        },
      }}
    >
      <Stack spacing={2}>
        <IconButton
          aria-label="LinkedIn profile"
          onClick={() =>
            handleUrl('https://www.linkedin.com/in/vutukuri-praveen-a03482176/')
          }
        >
          <LinkedIn className="w-5 h-5" />
        </IconButton>
        <IconButton
          aria-label="github"
          onClick={() => handleUrl('https://github.com/vutukuripraveen/')}
        >
          <GitHub className="w-5 h-5" />
        </IconButton>
        <IconButton
          aria-label="whatsapp"
          onClick={() => handleUrl('https://wa.me/+919392386356')}
        >
          <WhatsApp className="w-5 h-5" />
        </IconButton>
        <IconButton
          aria-label="Email"
          onClick={() => handleUrl('mailto:vutukuripraveen88@gmail.com')}
        >
          <Email className="w-5 h-5" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default FixedPositionIcons;
