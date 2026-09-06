import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="flex items-center gap-1 bg-[#121212] border border-[#2c2c2c] rounded-lg p-1">
      <Globe className="w-4 h-4 text-[#00E5FF] ml-1.5" />
      <button 
        onClick={() => setLanguage('en')} 
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${language === 'en' ? 'bg-[#00E5FF] text-[#121212]' : 'text-slate-400 hover:text-white'}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('fi')} 
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${language === 'fi' ? 'bg-[#00E5FF] text-[#121212]' : 'text-slate-400 hover:text-white'}`}
      >
        FI
      </button>
      <button 
        onClick={() => setLanguage('sv')} 
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${language === 'sv' ? 'bg-[#00E5FF] text-[#121212]' : 'text-slate-400 hover:text-white'}`}
      >
        SV
      </button>
    </div>
  );
}

export default function Navbar({ language, setLanguage, t }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t?.about || 'About', href: '#about' },
    { name: t?.experience || 'Experience', href: '#experience' },
    { name: t?.skills || 'Skills', href: '#skills' },
    { name: t?.projects || 'Projects', href: '#projects' },
    { name: t?.education || 'Education', href: '#education' },
    { name: t?.contact || 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#121212]/90 backdrop-blur-md z-50 border-b border-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-[#00E5FF] tracking-wide">
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-[#00E5FF] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <LanguageSelector language={language} setLanguage={setLanguage} />
          </div>

          <div className="flex md:hidden items-center gap-3">
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-1.5 rounded-lg bg-[#1e1e1e] border border-[#2c2c2c]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1e1e1e] border-b border-[#2c2c2c] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-[#00E5FF] block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}