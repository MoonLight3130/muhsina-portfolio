import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section based on scroll offset
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#07070d]/85 backdrop-blur-md border-b border-purple-900/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo matching screenshot */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-baseline group"
        >

          <span className="text-fuchsia-500 drop-shadow-[0_0_12px_rgba(217,70,239,0.7)]">
            Muhsina
          </span>
          <span className="text-white">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${isActive
                  ? 'text-fuchsia-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.9)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Download CV Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/Muhsina-ATS.pdf"
            download="Muhsina-ATS.pdf"
            className="btn-nav-cv inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold tracking-wide"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-purple-950/40 border border-purple-900/30 transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0714]/95 backdrop-blur-xl border-b border-purple-900/30 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between py-2 text-base font-medium transition-colors ${isActive
                    ? 'text-fuchsia-400 font-semibold pl-2 border-l-2 border-fuchsia-500'
                    : 'text-slate-300 hover:text-white'
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && <ArrowUpRight className="w-4 h-4 text-fuchsia-400" />}
                </a>
              );
            })}
            <div className="pt-4 border-t border-purple-900/30">
              <a
                href="/Muhsina-ATS.pdf"
                download="Muhsina-ATS.pdf"
                className="btn-primary-glow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-white font-semibold text-sm cursor-pointer"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
