import React, { useState } from 'react';
import { Code2, Server, Wrench, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skillsData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'tools', label: 'Tools & Workflow', icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...skillsData.frontend.map((s) => ({ ...s, category: 'Frontend' })),
        ...skillsData.backend.map((s) => ({ ...s, category: 'Backend' })),
        ...skillsData.tools.map((s) => ({ ...s, category: 'Tools' })),
      ];
    }
    return skillsData[activeTab].map((s) => ({
      ...s,
      category: activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
    }));
  };

  const filtered = getFilteredSkills();

  return (
    <section id="skills" className="relative py-24 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-fuchsia-400 text-xs sm:text-sm font-semibold mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Code2 className="w-4 h-4" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My <span className="gradient-text-purple">Skills & Tech Stack</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Modern technologies and tooling I leverage daily to engineer high-impact products.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'btn-primary-glow text-white'
                    : 'bg-[#100c1e] text-slate-400 border border-purple-900/40 hover:text-white hover:border-purple-600/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="glass-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/70 text-fuchsia-400 border border-purple-500/30">
                    {skill.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-medium mb-4">
                  Category: <span className="text-slate-300">{skill.category}</span>
                </p>
              </div>

              {/* Progress Bar with neon gradient */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-400">Proficiency</span>
                  <span className="text-fuchsia-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-purple-950/70 border border-purple-900/30 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 transition-all duration-700 ease-out shadow-[0_0_12px_rgba(217,70,239,0.7)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
