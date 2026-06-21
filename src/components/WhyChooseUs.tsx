import { motion } from "motion/react";
import { WHY_CHOOSE_US } from "../data";
import LucideIcon from "./LucideIcon";

export default function WhyChooseUs() {
  // Stagger animation triggers
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative bg-[#070412] py-20 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-[5%] h-[400px] w-[400px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] h-[400px] w-[400px] rounded-full bg-brand-indigo/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-purple-light bg-brand-purple/10 px-3.5 py-1 rounded-full">
            The CyberWise Advantage
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Why Choose Us
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            We provide a modern ecosystem designed to elevate your professional caliber and secure your financial independence.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-indigo mx-auto rounded-full mt-4" />
        </div>

        {/* Dynamic Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE_US.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(168, 85, 247, 0.4)',
                backgroundColor: 'rgba(22, 15, 56, 0.7)' 
              }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0f0a28]/40 p-6 backdrop-blur-md transition-all shadow-inner"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-indigo/20 text-brand-purple-light mb-5">
                <LucideIcon name={item.icon} size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
