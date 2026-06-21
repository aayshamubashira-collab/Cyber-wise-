import { motion, AnimatePresence } from "motion/react";
import { Course } from "../types";
import LucideIcon from "./LucideIcon";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onApply: (courseTitle: string) => void;
}

export default function CourseModal({ course, onClose, onApply }: CourseModalProps) {
  if (!course) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0d0923]/95 p-6 md:p-8 shadow-2xl shadow-brand-purple/20 text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 rounded-full bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LucideIcon name="X" size={20} />
          </button>

          {/* Header Banner */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-indigo shadow-lg shadow-brand-purple/30">
              <LucideIcon name={course.icon} className="text-white" size={28} />
            </div>
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-purple-light">
                {course.category} • {course.level}
              </span>
              <h3 className="font-display text-2xl font-bold md:text-3xl tracking-tight text-white mt-1">
                {course.title}
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-4">
            {/* Left Column: Description & Career Paths */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-2">Overview</h4>
                <p className="text-sm leading-relaxed text-slate-300">{course.description}</p>
              </div>

              {/* Career Opportunities */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-purple-light mb-3">
                  <LucideIcon name="TrendingUp" size={16} /> Career Pathways
                </h4>
                <ul className="space-y-2">
                  {course.careerPathways.map((path, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                      {path}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications Included */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                  <LucideIcon name="Award" size={16} /> Certifications Provided
                </h4>
                <ul className="space-y-2">
                  {course.certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <LucideIcon name="CheckCircle2" className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Syllabus & Course Info */}
            <div className="space-y-6 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              {/* Timing info */}
              <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
                <div>
                  <span className="text-[10px] uppercase text-white/45 block tracking-wider">Duration</span>
                  <span className="text-sm font-medium text-slate-200 flex items-center gap-1 mt-0.5">
                    <LucideIcon name="Clock" size={12} className="text-brand-purple-light" />
                    {course.duration}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-white/45 block tracking-wider">Accreditation</span>
                  <span className="text-sm font-medium text-slate-200 flex items-center gap-1 mt-0.5">
                    <LucideIcon name="Globe" size={12} className="text-brand-purple-light" />
                    UGC Pathways Available
                  </span>
                </div>
              </div>

              {/* Curriculum Breakdown */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-3">Syllabus Curriculum</h4>
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                  {course.curriculum.map((moduleStr, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg bg-white/[0.02] p-2.5 hover:bg-white/[0.04] transition-colors border border-white/[0.03]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-purple/20 text-[10px] font-mono font-bold text-brand-purple-light">
                        {i + 1}
                      </span>
                      <span className="text-xs text-slate-300">{moduleStr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              * Classes are held primarily physical-offline at CyberWise Campus, Perinthalmanna.
            </p>
            <button
              onClick={() => {
                onApply(course.title);
                onClose();
              }}
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-indigo px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-purple/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-purple/35"
            >
              <span>Download Syllabus & Register</span>
              <LucideIcon name="ArrowRight" className="transition-transform group-hover:translate-x-1" size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
