import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050409] border-t border-purple-900/30 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-900/20 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#home" className="text-2xl font-extrabold tracking-tight inline-block">
              <span className="text-white">MUHSINA</span>
              <span className="text-fuchsia-500 drop-shadow-[0_0_12px_rgba(217,70,239,0.7)]">
                .
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Crafting premium digital experiences through purposeful design, robust engineering, and modern web standards.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="mailto:[muhsinashaheer127@gmail.com]"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/muhsina-s-a015a6350/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/muhsinashaheer127-dotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-fuchsia-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-fuchsia-400 hover:text-white hover:border-fuchsia-500 hover:bg-purple-900/40 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Muhsina S. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Powered by</span>
            <span className="text-fuchsia-500">•</span>
            <span>PromptLogix</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
