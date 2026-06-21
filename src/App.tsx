import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import LearningExperience from "./components/LearningExperience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CourseModal from "./components/CourseModal";
import { Course } from "./types";
import LucideIcon from "./components/LucideIcon";
import CyberWiseLogo from "./components/CyberWiseLogo";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [prefilledCourseName, setPrefilledCourseName] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Monitor screen scrolls to add background blurring on the header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleApplyCourse = (courseTitle: string) => {
    setPrefilledCourseName(courseTitle);
    
    // Smooth scroll down directly to contact module
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#070412] text-slate-100 font-sans antialiased selection:bg-brand-purple selection:text-white">
      
      {/* Dynamic Sticky Header Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#070412]/80 backdrop-blur-md py-3 shadow-lg"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 text-left group"
            >
              <CyberWiseLogo size={42} />
              <div className="leading-tight">
                <span className="font-display text-base font-bold tracking-wider text-white uppercase block">
                  CyberWise
                </span>
                <span className="font-sans text-[9px] text-brand-purple-light uppercase tracking-widest block font-semibold">
                  Skillversity
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white transition-colors"
              >
                Admissions
              </button>
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => handleApplyCourse("")}
                className="rounded-xl bg-gradient-to-r from-brand-purple/20 to-brand-indigo/20 border border-brand-purple/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:from-brand-purple hover:to-brand-indigo hover:border-transparent transition-all"
              >
                Apply Online
              </button>
            </div>

            {/* Mobile Hamburger button Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/85 hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              <LucideIcon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>

          </div>
        </div>

        {/* Mobile menu collapsible panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 border-t border-white/5 bg-[#070412]/95 backdrop-blur-lg py-5 px-6 space-y-4 absolute top-full left-0 right-0 shadow-xl">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm font-semibold tracking-wide text-slate-300 hover:text-white py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="block w-full text-left text-sm font-semibold tracking-wide text-slate-300 hover:text-white py-2"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-sm font-semibold tracking-wide text-slate-300 hover:text-white py-2"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm font-semibold tracking-wide text-slate-300 hover:text-white py-2"
            >
              Admissions
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleApplyCourse("");
              }}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-purple py-3 text-sm font-bold text-white shadow-lg"
            >
              <span>Apply Online</span>
              <LucideIcon name="Sparkles" size={14} />
            </button>
          </div>
        )}
      </header>

      {/* Main Container Stage splits */}
      <main>
        {/* HERO */}
        <Hero
          onExploreCourses={() => scrollToSection("courses")}
          onContactUs={() => scrollToSection("contact")}
        />

        {/* ABOUT */}
        <About />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* COURSES EXPLORER */}
        <Courses onSelectCourse={(course) => setSelectedCourse(course)} />

        {/* PEDAGOGY & BENEFITS */}
        <LearningExperience />

        {/* WRITTEN REVIEWS */}
        <Testimonials />

        {/* ADMISSION PANEL */}
        <Contact
          prefilledCourse={prefilledCourseName}
          onClearPrefill={() => setPrefilledCourseName("")}
        />
      </main>

      {/* COMPACT FOOTER */}
      <Footer />

      {/* HIGH-FIDELITY IMMERSIVE MODAL WINDOW */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onApply={handleApplyCourse}
      />

      {/* FLOATING WHATSAPP SYSTEM */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Help Tooltip */}
        <div className="relative group flex items-center">
          <div className="bg-[#0b071a]/95 text-slate-200 text-xs py-2 px-4 rounded-xl border border-white/10 shadow-xl backdrop-blur-md max-w-xs animate-fade-in transition-all opacity-90 group-hover:opacity-100 flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Chat with Careers Advisor!</span>
          </div>
        </div>

        {/* Floating action trigger */}
        <a
          href="https://wa.me/917558026894?text=Hi%20CyberWise%20Skillversity!%20I'm%20interested%20in%20learning%20more%20about%20your%20AI%20and%20Digital%20Careers%20courses%20in%20Perinthalmanna."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact CyberWise Skillversity on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-emerald-500/20 hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 group relative"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-[#25d366]/30 animate-ping" />
          
          {/* Custom SVG WhatsApp icon */}
          <svg className="h-7 w-7 fill-current relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.012 2C6.48 2 2 6.48 2 12.012c0 1.8.48 3.552 1.392 5.112L2 22l5.028-1.32c1.512.828 3.24 1.26 4.98 1.26a10.01 10.01 0 0 0 10.008-10.008C22.016 6.48 17.536 2 12.012 2zm0 18.336c-1.572 0-3.11-.42-4.464-1.224l-.324-.192-3.324.876.888-3.24-.216-.348a8.311 8.311 0 0 1-1.272-4.38c0-4.596 3.744-8.328 8.34-8.328 2.22 0 4.308.864 5.868 2.436a8.219 8.219 0 0 1 2.436 5.892c-.008 4.608-3.752 8.328-8.348 8.328zM16.596 14.1c-.252-.12-1.488-.732-1.716-.816-.228-.084-.396-.12-.564.12-.168.252-.648.816-.804.996-.156.18-.312.192-.564.072-.252-.12-1.068-.396-2.028-1.26-.744-.66-1.248-1.488-1.392-1.74-.144-.252-.012-.384.108-.504.12-.108.252-.288.384-.432.12-.144.168-.252.252-.42.084-.168.048-.324-.024-.468-.072-.144-.564-1.356-.768-1.848-.204-.492-.408-.42-.564-.432-.144-.012-.312-.012-.48-.012-.168 0-.444.06-.672.312-.228.252-.876.852-.876 2.076s.888 2.412 1.008 2.58c.12.168 1.752 2.676 4.248 3.756.588.252 1.056.408 1.416.516.6.192 1.14.168 1.572.108.48-.072 1.488-.612 1.704-1.188.216-.588.216-1.092.156-1.188-.06-.108-.228-.168-.48-.288z" />
          </svg>
        </a>
      </div>

    </div>
  );
}
