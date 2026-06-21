import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LEARNING_EXPERIENCES, BENEFITS } from "../data";
import LucideIcon from "./LucideIcon";

export default function LearningExperience() {
  const [activeExp, setActiveExp] = useState<string>(LEARNING_EXPERIENCES[0].id);

  const selectedExperience = LEARNING_EXPERIENCES.find((exp) => exp.id === activeExp) || LEARNING_EXPERIENCES[0];

  return (
    <section className="relative bg-[#070412] py-20 overflow-hidden">
      {/* Accent glow patterns */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: LEARNING EXPERIENCE ================= */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-24">
          
          {/* Left Column: List selectors */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-purple-light bg-brand-purple/10 px-3.5 py-1 rounded-full">
                Experiential Pedagogy
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mt-3">
                The Practical Learning Experience
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-indigo rounded-full mt-4" />
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              We skip standard textbook theories. Our teaching matches dynamic studio briefs—you develop, execute, optimize, and present.
            </p>

            {/* List selectors stack */}
            <div className="space-y-2.5">
              {LEARNING_EXPERIENCES.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(exp.id)}
                  className={`w-full flex items-center gap-3 rounded-2xl border p-4.5 text-left transition-all backdrop-blur-md ${
                    activeExp === exp.id
                      ? "bg-[#1d124a]/80 border-brand-purple/50 shadow-lg shadow-brand-purple/10"
                      : "bg-[#0f0a28]/40 border-white/5 hover:bg-[#120f38]/60 hover:border-white/10"
                  }`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                    activeExp === exp.id
                      ? "bg-brand-purple text-white shadow"
                      : "bg-white/5 text-slate-400"
                  }`}>
                    <LucideIcon name={exp.icon} size={18} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold transition-all ${
                      activeExp === exp.id ? "text-white" : "text-slate-300"
                    }`}>
                      {exp.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Experience interactive display with details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#120d30] to-[#0a071c] p-6 md:p-8 shadow-xl"
              >
                {/* Visual badge top right representing a workspace preview */}
                <div className="absolute top-6 right-6 font-mono text-[10px] font-bold tracking-wider text-white/30 uppercase">
                  Studio Module
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-indigo text-white shadow-lg shadow-brand-purple/30 mb-6">
                  <LucideIcon name={selectedExperience.icon} size={28} />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {selectedExperience.title}
                </h3>

                <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                  {selectedExperience.description}
                </p>

                {/* Sub-details checklist */}
                <div className="space-y-3.5 border-t border-white/5 pt-6">
                  <h4 className="font-mono text-xs font-semibold text-brand-purple-light uppercase tracking-wider">
                    Detailed Curriculum Scope
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedExperience.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 rounded-lg bg-white/[0.02] p-3 border border-white/[0.02]">
                        <LucideIcon name="Check" className="text-emerald-400 shrink-0" size={14} />
                        <span className="text-xs text-slate-300 font-sans font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ================= SECTION 2: STUDENT BENEFITS ================= */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-purple-light bg-brand-purple/10 px-3.5 py-1 rounded-full">
              Post-Graduation Acceleration
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Student Career Benefits
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
              Our support continues long after classroom lectures. We configure your dynamic career trajectory step-by-step.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-indigo mx-auto rounded-full mt-4" />
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2.5xl border border-white/5 bg-[#0f0a28]/40 p-6 backdrop-blur-md hover:border-brand-purple/30 hover:bg-[#120e36] transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/10 to-brand-indigo/10 text-brand-purple-light group-hover:bg-brand-purple group-hover:text-white transition-all mb-4">
                  <LucideIcon name={benefit.icon} size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2 tracking-tight group-hover:text-brand-purple-light transition-colors">
                  {benefit.title}
                </h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
