import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function About() {
  return (
    <section id="about" className="relative bg-[#0d0923] py-20 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-purple-light bg-brand-purple/10 px-3.5 py-1 rounded-full">
            Who We Are
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Empowering Future-Ready Careers
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-indigo mx-auto rounded-full mt-4" />
        </div>

        {/* Content Split Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Bridges the Gap Between Academic Theory & Career Demands
            </h3>
            
            <p className="font-sans text-slate-300 leading-relaxed text-base">
              CyberWise Skillversity in Perinthalmanna bridges the gap between academic education and industry-ready careers through practical training, real-world projects, expert mentorship, and future-focused skill development programs.
            </p>
            
            <p className="font-sans text-slate-300 leading-relaxed text-base">
              Our mission is to equip students with industry-relevant skills and academic excellence to succeed in the digital economy. We replace memorization with execution, guiding students step-by-step through direct studio and field assignments.
            </p>

            {/* Quick value badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-brand-purple/20 transition-colors">
                <div className="text-brand-purple-light">
                  <LucideIcon name="MapPin" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Central Location</h4>
                  <p className="text-xs text-slate-400">Perinthalmanna Hub</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-brand-purple/20 transition-colors">
                <div className="text-brand-purple-light">
                  <LucideIcon name="History" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Real Retainers</h4>
                  <p className="text-xs text-slate-400">Live Client Portfolios</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual / Mission-Vision Cards */}
          <div className="space-y-6">
            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-3xl border border-white/10 bg-[#160f38]/60 p-6 backdrop-blur-md shadow-lg transition-all"
            >
              {/* Card gradient boarders */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-purple to-transparent" />
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/20 text-brand-purple-light group-hover:bg-brand-purple group-hover:text-white transition-all">
                  <LucideIcon name="Target" size={24} />
                </div>
                <div>
                  <span className="font-mono text-xs text-brand-purple-light uppercase tracking-wider block font-semibold mb-1">
                    Our Mission
                  </span>
                  <h4 className="font-display text-xl font-bold text-white mb-2">
                    Actionable Vocational Employability
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Transform education into employability through practical, immersive, and industry-relevant training systems tuned to market shifts.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-3xl border border-white/10 bg-[#160f38]/60 p-6 backdrop-blur-md shadow-lg transition-all"
            >
              {/* Card gradient boarders */}
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-indigo to-transparent" />
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-indigo/20 text-brand-purple-light group-hover:bg-brand-indigo group-hover:text-white transition-all">
                  <LucideIcon name="Eye" size={24} />
                </div>
                <div>
                  <span className="font-mono text-xs text-brand-purple-light uppercase tracking-wider block font-semibold mb-1">
                    Our Vision
                  </span>
                  <h4 className="font-display text-xl font-bold text-white mb-2">
                    Kerala's Leading Career Incubator
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Become Kerala's leading skill-based education and career development institute, producing high-impact freelancers, key specialists, and digital business leaders.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
