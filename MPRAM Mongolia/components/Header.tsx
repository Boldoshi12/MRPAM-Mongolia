import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Globe, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'mn' ? 'en' : 'mn');
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-mrpam-blue/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg py-2 border-white/5' 
          : 'bg-mrpam-blue dark:bg-slate-950 py-5 border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 shrink-0 group relative z-50">
            <div className={`rounded-full bg-gradient-to-br from-mrpam-gold to-yellow-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 ring-2 ring-white/10 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
              <svg className={`${isScrolled ? 'w-6 h-6' : 'w-7 h-7'} text-white transition-all`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="flex flex-col transition-all origin-left">
              <span className={`font-heading font-bold text-white leading-none tracking-tight ${isScrolled ? 'text-lg' : 'text-xl'}`}>MRPAM</span>
              <span className={`text-gray-300 uppercase tracking-wider font-medium transition-all ${isScrolled ? 'text-[10px] opacity-80' : 'text-xs'}`}>Mineral Resources Authority</span>
            </div>
          </Link>

          {/* Desktop Navigation - Pill Design */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/5 backdrop-blur-sm shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-mrpam-blue bg-white shadow-sm' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          {/* Actions Area */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Search Button */}
            <Link to="/search" className="w-10 h-10 flex items-center justify-center rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none group">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
            
            <div className="w-px h-6 bg-white/10 mx-1"></div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-300 hover:text-mrpam-gold hover:bg-white/10 transition-all focus:outline-none group"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' 
                ? <Sun className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" /> 
                : <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
              }
            </button>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/30"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'mn' ? 'EN' : 'MN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 -mr-2 text-gray-200 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Full Screen Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-mrpam-blue dark:bg-slate-950 transition-all duration-500 lg:hidden flex flex-col items-center justify-center ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'
        }`}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-mrpam-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-mrpam-teal/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-xs space-y-6 text-center relative z-10">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block text-3xl font-bold transition-all duration-300 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${
                location.pathname === item.path 
                  ? 'text-mrpam-gold' 
                  : 'text-white/80 hover:text-white'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {t(item.label)}
            </Link>
          ))}
          
          <div className="w-16 h-1 bg-white/10 mx-auto my-10 rounded-full"></div>
          
          <div className="flex flex-col gap-4 items-center">
             <Link 
                to="/search" 
                onClick={() => setIsOpen(false)} 
                className="flex items-center space-x-3 text-lg text-gray-300 hover:text-white"
             >
                <Search className="w-5 h-5" />
                <span>{t('hero.searchButton')}</span>
             </Link>
             
             <div className="flex items-center gap-6 mt-4">
                <button onClick={() => { toggleTheme(); setIsOpen(false); }} className="p-4 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors">
                    {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
                <button onClick={() => { toggleLanguage(); setIsOpen(false); }} className="px-6 py-4 bg-white/5 rounded-full text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
                    <Globe className="w-5 h-5" />
                    {language === 'mn' ? 'English' : 'Монгол'}
                </button>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;