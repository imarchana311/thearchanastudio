import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { useTranslation } from 'react-i18next';
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: t('services.bridal.title'), path: '/services/bridal' },
    { name: t('services.hd.title'), path: '/services/hd' },
    { name: t('services.engagement.title'), path: '/services/engagement' },
    { name: t('services.party.title'), path: '/services/party' },
    { name: t('services.hairStyling.title'), path: '/services/hairStyling' },
    { name: t('services.hairChemical.title'), path: '/services/hairChemical' },
    { name: t('services.hairCutting.title'), path: '/services/hairCutting' },
    { name: t('services.nailArt.title'), path: '/services/nailArt' },
    { name: t('services.saree.title'), path: '/services/saree' },
    { name: t('services.threading.title'), path: '/services/threading' },
    { name: t('services.guest.title'), path: '/services/guest' },
  ];

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services', hasDropdown: true },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.testimonials'), path: '/testimonials' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/portfolio?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-xl shadow-primary/5 no-line-rule">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto relative">
        <NavLink 
          to="/" 
          className="flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://drive.google.com/uc?export=view&id=1qpF7M9od5EaMrfNhaiLhQ2tLzITdsPU4" 
            alt="The Archana Studio" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </NavLink>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-label tracking-wide text-sm uppercase">
          {navItems.map((item) => (
            <div 
              key={item.path} 
              className="relative group"
              onMouseEnter={() => {
                if (item.hasDropdown) {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setIsServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item.hasDropdown) {
                  timeoutRef.current = setTimeout(() => {
                    setIsServicesOpen(false);
                  }, 100);
                }
              }}
            >
              {item.hasDropdown ? (
                <NavLink 
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 transition-colors duration-300 py-2",
                      isActive 
                        ? "text-primary border-b-2 border-secondary pb-1" 
                        : "text-neutral-500 hover:text-secondary"
                    )
                  }
                >
                  <span>{item.name}</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                </NavLink>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "transition-colors duration-300 block py-2",
                      isActive 
                        ? "text-primary border-b-2 border-secondary pb-1" 
                        : "text-neutral-500 hover:text-secondary"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              )}

              {item.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl overflow-hidden py-3 border border-primary/5 z-[100]"
                    >
                      <div className="grid grid-cols-1 gap-1 px-2">
                        {services.map((service) => (
                          <NavLink
                            key={service.path}
                            to={service.path}
                            className="group/item flex items-center justify-between px-4 py-3 text-[11px] font-medium text-neutral-600 hover:bg-primary/5 hover:text-primary rounded-xl transition-all duration-200"
                            onClick={() => {
                              if (timeoutRef.current) clearTimeout(timeoutRef.current);
                              setIsServicesOpen(false);
                            }}
                          >
                            <span>{service.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          
          <div className="relative" ref={searchRef}>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-neutral-500 hover:text-secondary transition-colors"
              aria-label="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="fixed md:absolute top-24 md:top-full left-6 right-6 md:left-auto md:right-0 md:w-80 bg-white shadow-2xl rounded-2xl p-4 border border-primary/5 z-[110]"
                >
                  <form onSubmit={handleSearch} className="flex gap-2">
                    <input
                      autoFocus
                      type="text"
                      placeholder={t('portfolio.searchPlaceholder') || "Search services..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-neutral-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                    <button type="submit" className="bg-primary text-white p-3 rounded-xl hover:bg-secondary transition-colors">
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Desktop Book Now Button */}
          <NavLink to="/contact" className="hidden md:block bg-primary text-white px-8 py-3 rounded-xl font-medium tracking-wide hover:scale-95 duration-200 ease-in-out">
            {t('nav.bookNow')}
          </NavLink>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-primary/5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4 font-label tracking-widest text-sm uppercase">
              {navItems.map((item) => (
                <div key={item.path} className="flex flex-col">
                  {item.hasDropdown ? (
                    <>
                      <button 
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between py-2 text-neutral-500"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={cn("w-5 h-5 transition-transform", isServicesOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col pl-4 gap-3 mt-2 border-l border-primary/10"
                          >
                            {services.map((service) => (
                              <NavLink
                                key={service.path}
                                to={service.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsServicesOpen(false);
                                }}
                                className="flex items-center justify-between text-xs text-neutral-400 py-2 px-2 hover:bg-primary/5 rounded-lg transition-colors"
                              >
                                <span>{service.name}</span>
                                <ArrowRight className="w-3 h-3 opacity-50" />
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "transition-colors duration-300 py-2",
                          isActive ? "text-primary font-bold" : "text-neutral-500"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <NavLink 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white px-8 py-4 rounded-xl font-medium tracking-widest text-center mt-4"
              >
                {t('nav.bookNow')}
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
