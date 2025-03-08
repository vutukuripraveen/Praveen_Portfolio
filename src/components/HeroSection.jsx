import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import PraveenVutukuri from '../assets/PraveenVutukuri.jpg';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Download, Visibility } from '@mui/icons-material';

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleTitleIndex, setVisibleTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleDownload = () => {
    const downloadUrl =
      'https://drive.google.com/file/d/1GGofT4zW0RZTANSUctp_z8l5yFO4BPiI/view';
    window.open(downloadUrl, '_blank');
  };

  const hoverAnimation = {
    scale: 1.1, // Scale up to 110% on hover
    transition: {
      duration: 0.2,
      type: 'spring',
    },
  };
  const jobTitles = [
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
  ];

  useEffect(() => {
    const currentJobTitle = jobTitles[visibleTitleIndex];

    // Function to update the title based on current action (typing or deleting)
    const updateTitle = () => {
      if (isDeleting) {
        // Deleting logic
        return currentJobTitle.slice(0, charIndex - 1);
      } else {
        // Typing logic
        return currentJobTitle.slice(0, charIndex + 1);
      }
    };

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setCurrentTitle(updateTitle);
          setCharIndex(charIndex - 1);
        }, 100); // Speed of "deleting" effect
      } else {
        setIsDeleting(false);
        setVisibleTitleIndex((visibleTitleIndex + 1) % jobTitles.length);
        setCharIndex(0); // Explicitly reset for clarity
      }
    } else {
      if (charIndex < currentJobTitle.length) {
        setTimeout(() => {
          setCurrentTitle(updateTitle);
          setCharIndex(charIndex + 1);
        }, 100); // Speed of typing effect
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Delay before starting to delete the text
      }
    }
  }, [charIndex, visibleTitleIndex, isDeleting]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 70;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div id="herosection">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '100vh',
            position: 'relative',
            overflow: 'auto',
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{
              position: 'absolute',
              color: 'black',
              right: 50,
              top: 12,
              zIndex: 1,
            }}
            component={motion.div}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <CloseIcon />
          </IconButton>

          <iframe
            src="https://drive.google.com/file/d/1GGofT4zW0RZTANSUctp_z8l5yFO4BPiI/view"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Resume"
          ></iframe>
        </div>
      </Modal>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center p-10"
      >
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-16">
            <div className="text-center">
              <motion.div
                className="inline-block rounded-full overflow-hidden mb-5"
                style={{ width: '150px', height: '150px' }}
                whileHover={hoverAnimation}
              >
                <img
                  src={PraveenVutukuri}
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h1 className="text-5xl font-bold mb-4">Hello, I'm Praveen</h1>
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl"
                >
                  {currentTitle}
                  <span className="cursor">|</span>
                </motion.div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  onClick={() => scrollToSection('Contact')}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact Me
                </a>
                <a className="flex items-center">
                  <p className="text-sm font-semibold leading-6 r-2">Resume</p>
                  <button className="focus:outline-none">
                    <EyeIcon className="w-5 h-5 mx-2" onClick={handleOpen} />
                  </button>
                  <button
                    className="focus:outline-none"
                    onClick={handleDownload}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            {/* <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            }}
          >
            <ChevronDownIcon className="mt-10 w-6 h-6 mx-auto animate-bounce" />
          </motion.div> */}
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
