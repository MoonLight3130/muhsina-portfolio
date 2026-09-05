import React from 'react';
import {
  Layout,
  Layers,
  Sparkles,
  Smartphone,
  Server,
  Zap,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Layout: Layout,
  Layers: Layers,
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  Server: Server,
  Zap: Zap,
};

export default function Services() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-fuchsia-400 text-xs sm:text-sm font-semibold mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Sparkles className="w-4 h-4" />
            <span>What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized <span className="gradient-text-purple">Services</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            High-caliber technical execution customized for scale, speed, and visual appeal.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Layout;

            return (
              <div
                key={service.id}
                className="glass-card p-8 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Corner Ambient Glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-600/10 rounded-full blur-2xl group-hover:bg-fuchsia-600/20 transition duration-500 pointer-events-none" />

                <div>
                  {/* Glowing Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:border-fuchsia-500/60 group-hover:bg-purple-900/40 group-hover:shadow-[0_0_25px_rgba(217,70,239,0.4)] group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-fuchsia-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-400 group-hover:text-fuchsia-300 hover:gap-3 transition-all cursor-pointer pt-4 border-t border-purple-950"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
