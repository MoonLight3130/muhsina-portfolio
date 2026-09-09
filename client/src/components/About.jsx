import React from 'react';
import { Download, Sparkles, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import profileImg from '../assets/profile.png';

export default function About() {
  const highlights = [
    '1+ years engineering modern client-side architectures',
    'Expert in React, Vite, Next.js, and Tailwind CSS',
    'Specialist in high-fidelity UI/UX design translations',
    'Strong foundation in REST APIs and MERN full-stack backends',
  ];

  return (
    <section id="about" className="relative py-24 border-t border-purple-900/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-fuchsia-400 text-xs sm:text-sm font-semibold mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Sparkles className="w-4 h-4" />
            <span>Know Me Better</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-purple">Me</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Bridging the gap between creative visual designs and high-performance engineering.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stylized Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Glowing decorative frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-fuchsia-500 via-purple-600 to-sky-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-[#0c0916] border border-purple-500/30 p-2">
                <img
                  src="https://res.cloudinary.com/nmrxsjhh/image/upload/v1788676244/ChatGPT_Image_Sep_6_2026_12_00_33_PM_yu97mb.png"
                  alt="Muhsina Shaheer"
                  className="w-full h-auto object-cover rounded-xl transition duration-500 group-hover:scale-105"
                />

                {/* Floating Availability Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#090614]/85 backdrop-blur-md border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Status</p>
                    <p className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Available for Work
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-900/60 text-fuchsia-300 border border-purple-500/30">
                    Full-time / Contract
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Qualifications */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              I’m Muhsina, a Passionate <span className="text-fuchsia-400">Frontend Engineer</span>
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              With over a decade of dedicated software engineering experience, I specialize in architecting fast, intuitive, and visually arresting user interfaces. My journey combines deep technical empathy for web standards with an unrelenting obsession for refined micro-interactions.
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Whether building enterprise analytics platforms or high-converting consumer marketplaces, I focus on clean maintainable codebases, optimal bundle delivery, and accessible experiences for users around the globe.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Experience & Education Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-fuchsia-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Frontend Engineer</h4>
                  <p className="text-xs text-slate-400">PromptLogix • 2026 - Present</p>
                </div>
              </div>

              <div className="glass-card p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-fuchsia-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">B.Tech in Computer Science</h4>
                  <p className="text-xs text-slate-400">MES Institute, Kollam (KTU) · 2023-2027</p>
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <div>
              <a
                href="/Muhsina-ATS.pdf"
                download="Muhsina-ATS.pdf"
                className="btn-primary-glow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-white font-semibold text-sm cursor-pointer"
              >
                <span>Download My Full Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
