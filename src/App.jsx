import './App.css';
import Layout from './components/Layout.jsx';
import About from './components/About.jsx';
import HeroSection from './components/HeroSection.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Experience from './components/Experience/Experience.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import FixedPositionIcons from './components/FixedPositionIcons.jsx';

function App() {
  return (
    <ThemeProvider>
      <Layout />
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <FixedPositionIcons />
    </ThemeProvider>
  );
}

export default App;
