import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "../data";
import LucideIcon from "./LucideIcon";

interface ContactProps {
  prefilledCourse: string;
  onClearPrefill: () => void;
}

export default function Contact({ prefilledCourse, onClearPrefill }: ContactProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    batch: "Regular Batch (Day)",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Sync pre-filled course when the user clicks from a modal
  useEffect(() => {
    if (prefilledCourse) {
      setForm((prev) => ({ ...prev, course: prefilledCourse }));
    }
  }, [prefilledCourse]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.course) {
      alert("Please enter Name, Phone Number, and select a Course.");
      return;
    }

    setIsSubmitting(true);
    // Mimic API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onClearPrefill();
    }, 1500);
  };

  const handleResetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      course: "",
      batch: "Regular Batch (Day)",
      message: ""
    });
    setIsSubmitted(false);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="contact" className="relative bg-[#070412] py-20 overflow-hidden text-white border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-brand-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 h-[450px] w-[450px] rounded-full bg-brand-indigo/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-purple-light bg-brand-purple/10 px-3.5 py-1 rounded-full">
            Inquiry desk
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Register Your Career Pathway
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Get in touch with an admissions advisor or apply for course counseling in our Perinthalmanna campus today.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-indigo mx-auto rounded-full mt-4" />
        </div>

        {/* Core Layout Split */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT: Contact info cards + Vector Map locator (col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                CyberWise Skillversity
              </h3>
              <p className="text-sm text-slate-300 font-sans">
                Our main physical classrooms are located in the business center of Perinthalmanna, offering premium setups for multi-camera labs and marketing campaigns.
              </p>
            </div>

            {/* Coordinates detail blocks */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple/20 text-brand-purple-light">
                  <LucideIcon name="MapPin" size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">Campus Location</h4>
                  <p className="text-sm font-semibold text-slate-100 mt-1">Perinthalmanna, Kerala, India</p>
                  <p className="text-xs text-slate-400 mt-0.5">Central town junction connections</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple/20 text-brand-purple-light">
                  <LucideIcon name="PhoneCall" size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">Admissions Desk</h4>
                  <p className="text-sm font-semibold text-slate-100 mt-1 hover:text-brand-purple-light transition-colors">
                    <a href="tel:+919074068291">+91 90740 68291</a>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Monday to Saturday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-purple/20 text-brand-purple-light">
                  <LucideIcon name="Mail" size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">General Email</h4>
                  <p className="text-sm font-semibold text-slate-100 mt-1 hover:text-brand-purple-light transition-colors">
                    <a href="mailto:info@cyberwiseskillversity.com">info@cyberwiseskillversity.com</a>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Response is typically within 12 hours</p>
                </div>
              </div>
            </div>

            {/* Stylized high-contrast vector map representation and pulsing pin */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0923] p-4 shadow-md h-56 flex flex-col justify-between">
              {/* Backgrid style pattern */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
                  backgroundSize: "16px 16px"
                }}
              />
              
              <div className="relative flex justify-between items-center bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 backdrop-blur-sm z-10">
                <span className="text-[10px] font-mono tracking-wider font-semibold text-brand-purple-light uppercase">
                  Perinthalmanna Hub Map Locality
                </span>
                <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
              </div>

              {/* Central pulsing coordinate marker indicating CyberWise */}
              <div className="relative flex-1 flex items-center justify-center">
                {/* Simulated streets lines vectors */}
                <svg className="absolute inset-x-0 w-full h-full opacity-25" viewBox="0 0 400 150">
                  <path d="M 10 30 Q 150 90, 390 100" stroke="#a855f7" strokeWidth="2" fill="none" />
                  <path d="M 50 150 C 120 70, 240 70, 320 0" stroke="#6366f1" strokeWidth="1" strokeDasharray="4,4" fill="none" />
                  <path d="M 190 0 L 190 150" stroke="#a855f7" strokeWidth="1.5" fill="none" />
                </svg>

                {/* Pulse locator pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-purple p-2 text-white shadow-xl shadow-brand-purple/50 animate-bounce">
                    <LucideIcon name="MapPin" size={20} />
                  </div>
                  <span className="h-6 w-16 bg-brand-purple/20 border border-brand-purple/30 rounded px-2 text-[8px] tracking-wide font-mono mt-1 text-white uppercase text-center bg-black/50 backdrop-blur-sm">
                    CyberWise
                  </span>
                </div>
              </div>

              <div className="relative z-10 text-[10px] text-slate-400 font-sans italic text-center">
                Convenient parking & public bus hub connection is just walk-away distance.
              </div>
            </div>
          </div>

          {/* RIGHT: Admissions interactive Application Form (col 7) */}
          <div className="lg:col-span-7">
            
            {/* Sliding Container based on submission progress */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#120d30] to-[#070412] p-6 md:p-8 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="border-b border-white/5 pb-4">
                      <h3 className="font-display text-xl font-bold text-white">Enrollment Counseling Request</h3>
                      <p className="text-xs text-slate-400 mt-1">Pre-fill details to secure high-priority career slots & syllabus booklet drafts.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-sans text-white placeholder-slate-500 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/45"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="Mobile number with WhatsApp"
                          className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-sans text-white placeholder-slate-500 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/45"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="yourname@gmail.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-sans text-white placeholder-slate-500 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/45"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                          Selected Program *
                        </label>
                        <select
                          name="course"
                          required
                          value={form.course}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-white/10 bg-[#120d30] p-3 text-xs font-sans text-slate-200 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/45"
                        >
                          <option value="">Select a career track...</option>
                          <option value="AI-Powered Digital Marketing">AI-Powered Digital Marketing</option>
                          <option value="Professional Videography & Content Creation">Professional Videography & Content Creation</option>
                          <option value="E-Commerce & Online Business">E-Commerce & Online Business</option>
                          <option value="Spoken English & Communication Skills">Spoken English & Communication Skills</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                          Preferred Batch Speed
                        </label>
                        <select
                          name="batch"
                          value={form.batch}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-white/10 bg-[#120d30] p-3 text-xs font-sans text-slate-200 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/45"
                        >
                          <option value="Regular Batch (Day)">Regular Batch (Offline)</option>
                          <option value="Weekend Special (Saturday/Sunday)">Weekend Accelerator</option>
                          <option value="Integrated UGC Degree Track">Integrated University Degree Track</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                        Specific Questions or Work Goals
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Tell us about yourself or your startup business ideas..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-sans text-white placeholder-slate-500 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/45"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-indigo py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-purple/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-purple/40 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "Transmitting counseling brief..." : "Submit Inquiry Brief"}</span>
                      {!isSubmitting && <LucideIcon name="Send" className="transition-transform group-hover:translate-x-1" size={14} />}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-md">
                      <LucideIcon name="CheckCircle2" size={32} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-white">Application Received!</h3>
                      <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                        Thank you, <span className="text-white font-bold">{form.name}</span>! An academic advisor from our Perinthalmanna campus will contact you soon on <span className="text-white font-bold">{form.phone}</span> with your syllabus documents.
                      </p>
                    </div>

                    {/* Pre-admission receipt box specs */}
                    <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-4 max-w-sm mx-auto text-left space-y-2.5">
                      <p className="text-[10px] font-mono text-slate-400 text-center uppercase tracking-wider pb-1.5 border-b border-white/5">Admissions Routing Voucher</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Class Match:</span>
                        <span className="text-brand-purple-light font-bold truncate max-w-[200px]">{form.course}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Assigned Hub:</span>
                        <span className="text-slate-200">Perinthalmanna HQ</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Session Status:</span>
                        <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px]">Queue Level 1</span>
                      </div>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="rounded-xl bg-white/5 border border-white/10 px-6 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10 transition-all"
                    >
                      Register Another Student
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>

        </div>

        {/* Dynamic Accordion FAQs Row nested in contact sector */}
        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Resolvers</span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">Frequently Answered Queries</h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-brand-purple-light text-xs font-mono">Q{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <LucideIcon
                    name={activeFaq === idx ? "Minus" : "Plus"}
                    className={`text-brand-purple transition-transform duration-300`}
                    size={16}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.02]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
