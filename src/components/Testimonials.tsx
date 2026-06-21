import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";
import LucideIcon from "./LucideIcon";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="relative bg-[#0d0923]/95 py-20 overflow-hidden border-t border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-[10%] h-[300px] w-[300px] rounded-full bg-brand-purple/5 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] h-[300px] w-[300px] rounded-full bg-brand-indigo/5 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-purple-light bg-brand-purple/10 px-3.5 py-1 rounded-full">
            Success Narratives
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Graduates Say
          </h2>
          <p className="font-sans text-slate-400 text-sm max-w-md mx-auto">
            Read how other students in Perinthalmanna successfully transitioned their skill pathways.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-indigo mx-auto rounded-full mt-4" />
        </div>

        {/* Testimonials Carousel Slider container */}
        <div className="relative min-h-[360px] flex flex-col items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-b from-[#17103a]/70 to-[#0e0a29]/90 p-8 md:p-10 backdrop-blur-md shadow-2xl relative"
            >
              {/* Giant quote symbol */}
              <div className="absolute -top-6 -left-4 font-serif text-[180px] font-bold text-brand-purple/10 leading-none pointer-events-none select-none">
                “
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6 relative">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <LucideIcon key={i} name="Star" className="fill-brand-purple text-brand-purple-light" size={16} />
                ))}
              </div>

              {/* Message Comment */}
              <blockquote className="relative mb-8 text-base md:text-lg leading-relaxed text-slate-200 font-sans font-medium">
                "{current.comment}"
              </blockquote>

              {/* Student Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-6 relative">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-brand-purple/40 shadow">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-bold text-white block">
                      {current.name}
                    </cite>
                    <span className="text-xs text-brand-purple-light font-mono mt-0.5 block">
                      {current.role}
                    </span>
                  </div>
                </div>

                <div className="rounded-full bg-white/5 border border-white/5 px-4 py-1 text-xs text-slate-300">
                  {current.course}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all shadow-inner"
            >
              <LucideIcon name="ChevronLeft" size={20} />
            </button>
            
            {/* Interactive dots indicatiors */}
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? "w-6 bg-brand-purple" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all shadow-inner"
            >
              <LucideIcon name="ChevronRight" size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
