import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, GitHubIcon } from './SocialIcons';
import HeroNeonFrame from './HeroNeonFrame';

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Greeting */}
            <p className="text-base sm:text-lg text-slate-300 font-medium tracking-wide mb-2 flex items-center gap-2">
              <span>Hello, I'm</span>
            </p>

            {/* Main Name Heading matching reference */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-3">
              <span className="gradient-text-purple inline-block">Muhsina</span>{' '}
              <span className="text-white inline-block">S</span>
            </h1>

            {/* Profession / Role */}
            <h2 className="text-2xl sm:text-3xl font-bold text-fuchsia-400 drop-shadow-[0_0_15px_rgba(217,70,239,0.4)] mb-6">
              Frontend Developer
            </h2>

            {/* Professional Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-normal">
              I'm a passionate Frontend Developer focused on building modern,
              responsive, and user-friendly web applications. I transform ideas
              into polished digital experiences using clean code, thoughtful
              UI/UX, and modern web technologies.
            </p>

            {/* Action Buttons matching screenshot */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <button
                onClick={scrollToContact}
                className="btn-primary-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white text-base font-semibold group cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToContact}
                className="btn-secondary-glow inline-flex items-center px-7 py-3.5 rounded-2xl text-slate-200 text-base font-medium hover:text-white cursor-pointer"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center space-x-4">
              <a
                href="mailto:[muhsinashaheer127@gmail.com]"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn group"
                aria-label="Visit Facebook Profile"
              >
                <FacebookIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://wa.me/+919747133559"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn group"
                aria-label="Visit WhatsApp Profile"
              >
                <TwitterIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://www.linkedin.com/in/muhsina-s-a015a6350/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn group"
                aria-label="Visit LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://github.com/muhsinashaheer127-dotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn group"
                aria-label="Visit GitHub Profile"
              >
                <GitHubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Glowing Neon Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroNeonFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
