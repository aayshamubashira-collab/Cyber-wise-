import LucideIcon from "./LucideIcon";
import CyberWiseLogo from "./CyberWiseLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05030d] border-t border-white/5 py-16 overflow-hidden text-slate-400">
      
      {/* Subtle bottom glow flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top grids breakdown */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/5">
          
          {/* CyberWise identity column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CyberWiseLogo size={42} />
              <span className="font-display text-lg font-bold text-white tracking-widest uppercase">
                CyberWise
              </span>
            </div>
            
            <p className="text-xs leading-relaxed text-slate-400">
              Perinthalmanna's premium education and vocational academy bridging modern media and marketing. Built with practical industry curriculums.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Social icons circles */}
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-brand-purple hover:text-white transition-colors" aria-label="Facebook">
                <LucideIcon name="Facebook" size={14} />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-brand-purple hover:text-white transition-colors" aria-label="Instagram">
                <LucideIcon name="Instagram" size={14} />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-brand-purple hover:text-white transition-colors" aria-label="Twitter">
                <LucideIcon name="Twitter" size={14} />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-brand-purple hover:text-white transition-colors" aria-label="Youtube">
                <LucideIcon name="Youtube" size={14} />
              </a>
            </div>
          </div>

          {/* Quick links channel */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-brand-purple-light transition-colors">About Us</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-purple-light transition-colors">Career Pathways</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-purple-light transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-purple-light transition-colors">Counseling Desk</a>
              </li>
            </ul>
          </div>

          {/* Core courses listings */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Our Courses
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#courses" className="hover:text-brand-purple-light transition-colors text-slate-400">AI-Powered Digital Marketing</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-purple-light transition-colors text-slate-400">Professional Videography & Production</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-purple-light transition-colors text-slate-400">E-Commerce & Online Store Management</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-purple-light transition-colors text-slate-400">Spoken English & Public Confidence</a>
              </li>
            </ul>
          </div>

          {/* Geolocation contacts detail */}
          <div className="space-y-3.5">
            <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase">
              Location Hub
            </h4>
            <div className="flex gap-2.5 text-xs items-start">
              <LucideIcon name="MapPin" className="text-brand-purple-light shrink-0 mt-0.5" size={14} />
              <p className="leading-relaxed">
                CyberWise Campus,<br />
                Near Main Town Junction,<br />
                Perinthalmanna, Kerala, pin: 679322
              </p>
            </div>
            <div className="flex gap-2.5 text-xs items-center">
              <LucideIcon name="Phone" className="text-brand-purple-light shrink-0" size={14} />
              <span>+91 90740 68291</span>
            </div>
          </div>

        </div>

        {/* Footer bottom metadata rows */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 text-[11px] text-slate-500 font-sans">
          <p>© {currentYear} CyberWise Skillversity, Perinthalmanna. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Academic Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-white transition-colors font-mono text-[10px] text-brand-purple-light">UGC Pathways Integrated</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
