import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COURSES } from "../data";
import { Course } from "../types";
import LucideIcon from "./LucideIcon";

interface CoursesProps {
  onSelectCourse: (course: Course) => void;
}

export default function Courses({ onSelectCourse }: CoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Interactive Career Matcher Quiz State
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  // Dynamic Categories extract
  const categories = useMemo(() => {
    const list = new Set(COURSES.map((c) => c.category));
    return ["All", ...Array.from(list)];
  }, []);

  // Filtered Courses
  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Quiz evaluation helper
  const handleQuizAnswer = (option: string) => {
    setQuizAnswer(option);
  };

  const recommendedCourse = useMemo(() => {
    if (!quizAnswer) return null;
    if (quizAnswer === "creative") return COURSES.find((c) => c.id === "videography-content-creation");
    if (quizAnswer === "entrepreneur") return COURSES.find((c) => c.id === "ecommerce-online-business");
    if (quizAnswer === "growth") return COURSES.find((c) => c.id === "ai-digital-marketing");
    if (quizAnswer === "fluent") return COURSES.find((c) => c.id === "spoken-english-communication");
    return null;
  }, [quizAnswer]);

  return (
    <section id="courses" className="relative bg-[#0d0923] py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-0 h-[500px] w-[500px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-purple-light bg-brand-purple/10 px-3.5 py-1 rounded-full">
            Our Curriculum Gateway
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Future-Focused Career Path Pathways
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Choose from industry-verified curricula incorporating AI automation, practical studio works, and robust degree alternatives.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-indigo mx-auto rounded-full mt-4" />
        </div>

        {/* Career Path Finder Assistant Card */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1c124a]/85 to-[#0e0a29]/80 p-6 md:p-8 backdrop-blur-md shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-brand-purple-light mb-1">
                <LucideIcon name="Sparkles" size={18} className="animate-spin" style={{ animationDuration: '4s' }} />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">AI Career Pathway Advisor</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                Not sure where to begin your digital career?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1">
                Take our 10-second rapid preference filter to map your interest directly with the curriculum!
              </p>
            </div>
            <button
              onClick={() => {
                setShowQuiz(!showQuiz);
                setQuizAnswer(null);
              }}
              className="group shrink-0 mt-2 md:mt-0 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all"
            >
              <span>{showQuiz ? "Close Career Matcher" : "Launch Career Matcher"}</span>
              <LucideIcon name={showQuiz ? "ChevronUp" : "ChevronDown"} size={16} />
            </button>
          </div>

          <AnimatePresence>
            {showQuiz && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-6 pt-6 border-t border-white/5 space-y-6"
              >
                {!quizAnswer ? (
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-white">
                      Which of the following domains sounds most exciting to you?
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <button
                        onClick={() => handleQuizAnswer("creative")}
                        className="flex flex-col items-start gap-2 p-4 text-left rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/5 hover:border-brand-purple/40 transition-all text-white"
                      >
                        <LucideIcon name="Video" className="text-brand-purple-light" size={20} />
                        <div>
                          <p className="text-xs font-bold text-slate-100">Creative Production</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Videos, lighting, camera mechanics, stories.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleQuizAnswer("entrepreneur")}
                        className="flex flex-col items-start gap-2 p-4 text-left rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/5 hover:border-brand-purple/40 transition-all text-white"
                      >
                        <LucideIcon name="ShoppingBag" className="text-brand-purple-light" size={20} />
                        <div>
                          <p className="text-xs font-bold text-slate-100">E-Commerce Entrepreneurship</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Shopify, global products, online listings.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleQuizAnswer("growth")}
                        className="flex flex-col items-start gap-2 p-4 text-left rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/5 hover:border-brand-purple/40 transition-all text-white"
                      >
                        <LucideIcon name="Megaphone" className="text-brand-purple-light" size={20} />
                        <div>
                          <p className="text-xs font-bold text-slate-100">AI Ads & Brand Performance</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">SEO, Google/Meta campaigns, conversion stats.</p>
                        </div>
                      </button>

                      <button
                        onClick={() => handleQuizAnswer("fluent")}
                        className="flex flex-col items-start gap-2 p-4 text-left rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/5 hover:border-brand-purple/40 transition-all text-white"
                      >
                        <LucideIcon name="MessageSquare" className="text-brand-purple-light" size={20} />
                        <div>
                          <p className="text-xs font-bold text-slate-100">Professional Fluency</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Interviews confidence, public talks, vocabulary.</p>
                        </div>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-brand-purple/20 bg-brand-purple/5 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/20 text-brand-purple-light">
                        <LucideIcon name="Sparkles" size={24} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-brand-purple-light bg-brand-purple/20 px-2.5 py-0.5 rounded-full">
                          Recommended Track Match
                        </span>
                        <h4 className="font-display text-lg font-bold text-white mt-1">
                          {recommendedCourse?.title}
                        </h4>
                        <p className="text-xs text-slate-300 max-w-xl mt-1 leading-relaxed">
                          {recommendedCourse?.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => setQuizAnswer(null)}
                        className="text-white/50 hover:text-white text-xs font-sans transition-colors"
                      >
                        Start Over
                      </button>
                      <button
                        onClick={() => recommendedCourse && onSelectCourse(recommendedCourse)}
                        className="rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-brand-purple hover:bg-slate-100 transition-colors shadow-sm"
                      >
                        View Syllabus
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          
          {/* Categories select pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4.5 py-1.5 text-xs font-semibold tracking-wide transition-all border ${
                  selectedCategory === cat
                    ? "bg-brand-purple text-white border-brand-purple shadow-md shadow-brand-purple/20"
                    : "bg-white/5 text-slate-300 border-white/5 hover:bg-white/10 hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Text Filter search bar */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <LucideIcon name="Search" size={16} />
            </span>
            <input
              type="text"
              placeholder="Search skills (e.g. SEO, DaVinci Resolve...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-4 text-xs font-sans text-white placeholder-slate-400 transition-all focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple/45"
            />
          </div>

        </div>

        {/* Filtered Courses Cards Display */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#120e31]/60 p-5 backdrop-blur-md shadow-lg transition-transform hover:-translate-y-1 hover:border-white/10"
              >
                {/* Background high-fidelity Image preview */}
                <div className="relative overflow-hidden rounded-2xl w-full aspect-[2.1/1] mb-5">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0923] via-transparent to-transparent z-10" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-black/60 border border-white/10 px-3.5 py-1 backdrop-blur-md">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-brand-purple-light uppercase text-xs">
                      {course.category}
                    </span>
                  </div>

                  {/* Level Pill Tag */}
                  <div className="absolute top-4 right-4 z-20 rounded-full bg-[#a855f7]/85 px-3 py-1 text-xs font-semibold text-white shadow-md">
                    {course.level}
                  </div>
                </div>

                {/* Core description details */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-brand-purple-light transition-colors">
                      {course.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      {course.shortDesc}
                    </p>

                    {/* Features loop */}
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {course.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <LucideIcon name="CheckCircle2" className="text-brand-purple-light shrink-0" size={13} />
                          <span className="text-[11px] font-medium text-slate-200 truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info Row + Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-4 mt-6">
                    <div className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                      <LucideIcon name="Clock" size={12} className="text-brand-purple-light" />
                      <span>{course.duration}</span>
                    </div>

                    <button
                      onClick={() => onSelectCourse(course)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-purple/20 to-brand-indigo/20 hover:from-brand-purple hover:to-brand-indigo border border-brand-purple/30 text-white font-medium text-xs px-5 py-2.5 transition-all shadow-sm"
                    >
                      <span>Explore Syllabus</span>
                      <LucideIcon name="BookOpen" size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]">
            <LucideIcon name="Inbox" className="text-slate-500 mx-auto mb-3" size={40} />
            <p className="text-sm text-slate-300 font-bold">No careers matching current search criteria</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting the custom filters or query keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 rounded-xl bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
