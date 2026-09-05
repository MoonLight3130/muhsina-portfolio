import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="cosmic-background min-h-screen text-slate-100 selection:bg-fuchsia-500 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section matching reference */}
        <Hero />

        {/* Stats Section with 4 glass cards */}
        <Stats />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
