import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

interface HeroProps {
  onExploreCourses: () => void;
  onContactUs: () => void;
}

export default function Hero({ onExploreCourses, onContactUs }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#070412] pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Glow effects */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-purple/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-brand-indigo/10 blur-[130px] pointer-events-none" />
      
      {/* Background visual grid elements */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-color-dodge bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, transparent 20%, #070412 100%), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="none" stroke="white" stroke-width="0.5" stroke-dasharray="2,2"/></svg>')`
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Accreditation Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1.5 backdrop-blur-md"
            >
              <LucideIcon name="Sparkles" className="text-brand-purple-light animate-pulse" size={14} />
              <span className="font-display text-xs font-semibold tracking-wider text-brand-purple-light uppercase">
                Perinthalmanna's Premier Tech & Media Hub
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Bridge Academic Learning <br />
              <span className="bg-gradient-to-r from-brand-purple-light via-brand-purple to-brand-indigo bg-clip-text text-transparent">
                With Real Industry Careers
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-base leading-relaxed text-slate-300 max-w-2xl sm:text-lg"
            >
              Master AI-Powered Digital Marketing, Professional Videography, E-Commerce, and Spoken English with UGC Accredited Degree Pathways.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={onExploreCourses}
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-indigo px-8 py-4 font-semibold text-white shadow-lg shadow-brand-purple/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-purple/40"
              >
                <span>Explore Careers</span>
                <LucideIcon name="ArrowRight" className="transition-transform group-hover:translate-x-1" size={18} />
              </button>

              <button
                onClick={onContactUs}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5"
              >
                <span>Enquire Now</span>
                <LucideIcon name="MapPin" className="text-brand-purple-light" size={18} />
              </button>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5"
            >
              <div>
                <span className="font-display text-2xl font-bold text-white sm:text-3xl">100%</span>
                <p className="text-xs text-slate-400 font-sans mt-1">Practical Curriculum</p>
              </div>
              <div className="border-l border-white/5 pl-4">
                <span className="font-display text-2xl font-bold text-white sm:text-3xl">UGC</span>
                <p className="text-xs text-slate-400 font-sans mt-1">Degree Alternatives</p>
              </div>
              <div className="border-l border-white/5 pl-4">
                <span className="font-display text-2xl font-bold text-white sm:text-3xl">AI+</span>
                <p className="text-xs text-slate-400 font-sans mt-1">Integrated Workflows</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Stage */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Animated orbital rings of wisdom */}
              <div className="absolute inset-[-15px] rounded-full border border-brand-purple/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-[-35px] rounded-full border border-dashed border-brand-indigo/15 animate-[spin_60s_linear_infinite]" />
              
              {/* Premium Hero Frame Image */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#160f38] p-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
                  alt="Students learning future technology with AI at CyberWise Skillversity Kerala"
                  className="rounded-[2.2rem] w-full object-cover aspect-[4/3] sm:aspect-square"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded floating digital agency dashboard feedback preview */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/60 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      <LucideIcon name="LineChart" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest">Client Campaign Live</p>
                      <p className="text-xs text-slate-300 mt-0.5">ROI optimized +240% using AI funnels</p>
                    </div>
                  </div>
                </div>

                {/* CyberWise floating video creation badge */}
                <div className="absolute top-6 right-6 rounded-full border border-white/10 bg-brand-purple/80 px-3 py-1 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">Live Camera Lab</span>
                </div>
              </div>
              
              {/* Ambient purple blobs around the screen */}
              <div className="absolute top-4 left-4 h-16 w-16 bg-brand-purple rounded-full blur-xl opacity-40 animate-pulse" />
              <div className="absolute bottom-10 right-4 h-24 w-24 bg-brand-indigo rounded-full blur-2xl opacity-40 animate-bounce" style={{ animationDuration: '6s' }} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
