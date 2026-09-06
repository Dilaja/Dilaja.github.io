import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { translations } from './translations';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  const [language, setLanguage] = useState('en');

  // Select the dictionary based on current language state
  const t = translations[language] || translations.en;

  return (
    <div className="bg-[#121212] min-h-screen text-slate-100 font-sans">
      {/* Pass state down to Navbar */}
      <Navbar language={language} setLanguage={setLanguage} t={t} />
      
      {/* Pass dictionary down to sections */}
      <Hero t={t} />
      <About t={t} />
      <Experience t={t} />
      <Skills t={t} />
      <Projects t={t} />
       <Education t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}