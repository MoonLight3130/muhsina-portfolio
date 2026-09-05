import React from 'react';
import { UserCheck, Briefcase, Laptop, Users, Award, Code2 } from 'lucide-react';
import { statsData } from '../data/statsData';

const iconMap = {
  UserCheck: UserCheck,
  Briefcase: Briefcase,
  Laptop: Laptop,
  Users: Users,
  Award: Award,
  Code2: Code2,
};

export default function Stats() {
  return (
    <section className="relative pb-20 pt-4 z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {statsData.map((stat) => {
            const IconComponent = iconMap[stat.iconName] || Briefcase;

            return (
              <div
                key={stat.id}
                className="glass-card p-6 sm:p-7 flex items-center gap-5 group cursor-default"
              >
                {/* Neon Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:border-fuchsia-500/60 group-hover:bg-purple-900/30 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors" />
                </div>

                {/* Stat Text */}
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-fuchsia-200 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-slate-400 leading-snug mt-1 group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
