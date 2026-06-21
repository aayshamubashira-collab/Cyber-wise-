import { Course, WhyChooseUsItem, LearningExperienceItem, Benefit, Testimonial } from "./types";

export const COURSES: Course[] = [
  {
    id: "ai-digital-marketing",
    title: "AI-Powered Digital Marketing",
    shortDesc: "Master SEO, Social Media Marketing, Google Ads, Meta Ads, Content Marketing, and top-tier AI automation tools.",
    description: "Equip yourself with the absolute cutting-edge of digital branding. This program integrates generative AI workflows (ChatGPT, Midjourney, Jasper) into traditional digital marketing frameworks so you can work 10x faster and deliver massive business growth.",
    duration: "4 Months (Full-Time or Weekend Batch)",
    level: "Beginner to Advanced",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    icon: "Megaphone",
    features: [
      "Generative AI Content Ideation",
      "Comprehensive SEO & Keywords Strategy",
      "Advanced Meta & Google Ads Campaigns",
      "Data-Driven Marketing Analytics"
    ],
    curriculum: [
      "Introduction to Generative AI in Marketing",
      "Search Engine Optimization (SEO) & Blogging",
      "Social Media Marketing (SMM) & Brand Design",
      "Performance Marketing (Google, Meta, LinkedIn Ads)",
      "Email Marketing Automation & Funnel Building",
      "Analytics (GA4), Search Console, and Web Auditing"
    ],
    careerPathways: [
      "AI Digital Marketing Executive",
      "SEO Specialist",
      "Performance Marketing Manager",
      "Content Strategy Specialist",
      "Social Media Campaign Architect"
    ],
    certifications: [
      "CyberWise Certified AI Marketer Certificate",
      "Google Ads Certification",
      "HubSpot Content Marketing Accreditation",
      "Meta Certified Digital Marketing Associate"
    ]
  },
  {
    id: "videography-content-creation",
    title: "Professional Videography & Content Creation",
    shortDesc: "Master professional camera operation, advanced video editing software, storytelling, and online content production.",
    description: "From lighting and sound capture to cinematic framing and high-impact editing, this course prepares you to dominate platforms like YouTube, Instagram, and premium production houses with stellar cinematic aesthetics.",
    duration: "3 Months (Hands-On Lab & Fieldwork)",
    level: "Beginner to Pro",
    category: "Media Production",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
    icon: "Video",
    features: [
      "Cinematic Lighting & Sound Design",
      "Camera & Gimbal Mechanics",
      "Premiere Pro & DaVinci Resolve Masterclass",
      "Viral Storytelling & Hooking Hooks"
    ],
    curriculum: [
      "Camera Anatomy, Exposure Triangle & Aesthetics",
      "Professional Lighting & External Audio Management",
      "Visual Storytelling, Scripting & Storyboarding",
      "Post-Production: Editing in Adobe Premiere Pro",
      "Color Grading in DaVinci Resolve",
      "Distribution: YouTube SEO & Reel Algorithm Optimization"
    ],
    careerPathways: [
      "Professional Videographer",
      "Corporate Video Editor",
      "Social Media Content Specialist",
      "YouTube Creative Producer",
      "Independent Documentary Filmmaker"
    ],
    certifications: [
      "CyberWise Professional Creator Qualification",
      "Adobe Certified Professional (Premiere Pro)"
    ]
  },
  {
    id: "ecommerce-online-business",
    title: "E-Commerce & Online Business",
    shortDesc: "Build automated online shops, manage international marketplaces, master global branding, and maximize profit.",
    description: "Launch your own global digital storefront. Learn to find winning products, manage Shopify/Amazon platforms, implement high-converting payment gateways, set up logistics, and scale via organic and paid automation.",
    duration: "3 Months (Live Store Incubator)",
    level: "Intermediate",
    category: "Business",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800",
    icon: "ShoppingBag",
    features: [
      "Shopify Store Creation & Setup",
      "Amazon & Flipkart Seller Central Mastery",
      "International Product Sourcing & Logistics",
      "Conversion Rate Optimization (CRO)"
    ],
    curriculum: [
      "E-Commerce Fundamentals & Business Models",
      "Sourcing and Dropshipping Workflows",
      "Shopify Design & Customization (No Code)",
      "Amazon Seller, Flipkart, and Local Marketplace Listings",
      "Payment Gateway Integration & Logistics Automation",
      "Growth Hacking, Retargeting, and Client Support"
    ],
    careerPathways: [
      "E-Commerce Store Operator",
      "Shopify Developer / Consultant",
      "Marketplace Specialist (Amazon/Flipkart)",
      "Digital Brand Entrepreneur",
      "Dropshipping Growth Architect"
    ],
    certifications: [
      "CyberWise Certified E-Commerce Specialist",
      "Shopify Partner Academy Certifications"
    ]
  },
  {
    id: "spoken-english-communication",
    title: "Spoken English & Communication Skills",
    shortDesc: "Elevate your fluency, build ultimate confidence, master public speaking, and crack multi-national interviews.",
    description: "Transform your professional trajectory. This experiential course replaces traditional grammar rote learning with intensive conversation clubs, public debate circles, confidence-building labs, and tailored corporate mock interviews.",
    duration: "2 Months (Experiential Speaking Gym)",
    level: "All Levels",
    category: "Languages",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800",
    icon: "MessageSquare",
    features: [
      "Experiential Conversational Gyms",
      "Corporate Communication Patterns",
      "Confidence Triggers & Stage Mastery",
      "HR Interview Drills & Aptitude Coaching"
    ],
    curriculum: [
      "Overcoming Stage Fright & Psychological Triggers",
      "Accent Neutralization & Fluid Audio Training",
      "Public Speaking, Group Discussions & Debates",
      "Professional Resume Formulation & LinkedIn Optimization",
      "The Art of the Interview: Pitching Yourself Professionally",
      "Advanced Negotiation & International Business Etiquette"
    ],
    careerPathways: [
      "Global Virtual Relations Officer",
      "Corporate Relations Representative",
      "Customer Success Specialist",
      "International Business BD Advisor",
      "Public Relations Coordinator"
    ],
    certifications: [
      "CyberWise Executive Communicator Certification",
      "IELTS / TOEFL Foundation Assessment Certificate"
    ]
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "ai",
    title: "AI Integrated Learning",
    description: "Every curriculum is updated to encompass modern generative AI tools, giving you a 10x workflow productivity boost ahead of traditional courses.",
    icon: "Cpu"
  },
  {
    id: "experts",
    title: "Industry Expert Trainers",
    description: "Learn directly from active creators, agency owners, performance marketers, and business leaders with massive real-world track records.",
    icon: "Sparkles"
  },
  {
    id: "hands-on",
    title: "Hands-On Projects",
    description: "Zero theoretical filler. Spend 90% of your classroom time building real brands, filming with pro equipment, and writing live copy.",
    icon: "Terminal"
  },
  {
    id: "internship",
    title: "Internship Support",
    description: "Work on live agency briefs during your course, qualifying for real experience letters and robust resume additions.",
    icon: "Briefcase"
  },
  {
    id: "placement",
    title: "Placement Assistance",
    description: "Benefit from structured HR networking events, mock interview prep, and direct hiring line setups with major startups.",
    icon: "GraduationCap"
  },
  {
    id: "ugc",
    title: "UGC Accredited Degrees",
    description: "Pursue regular or integrated degrees through recognized UGC accredited university pathways for robust academic background proof.",
    icon: "BookmarkCheck"
  },
  {
    id: "career",
    title: "Career Guidance",
    description: "Get one-on-one portfolio architecture assessments, LinkedIn keyword setups, and career-path mapping from recruitment leads.",
    icon: "TrendingUp"
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship Support",
    description: "Interested in establishing a startup? Connect with startup incubators, register your brand, and get mentorship from local founders.",
    icon: "Lightbulb"
  }
];

export const LEARNING_EXPERIENCES: LearningExperienceItem[] = [
  {
    id: "live-projects",
    title: "Live Projects",
    description: "Run real campaigns for actual businesses. Spend actual ad spend budgets, track performance metrics, and optimize conversions in real-time.",
    details: ["Real client briefs", "Real-world test budgets", "Performance diagnostics"],
    icon: "Zap"
  },
  {
    id: "case-studies",
    title: "Industry Case Studies",
    description: "Deconstruct viral brands, unicorn e-com startups, and cinematic social campaigns. Understand patterns of modern consumer psychology.",
    details: ["Growth strategies", "Viral ad breakdowns", "Storytelling formulas"],
    icon: "BookOpen"
  },
  {
    id: "workshops",
    title: "Practical Workshops",
    description: "Immersive 12-hour bootcamps on specialized skills (e.g., DaVinci Resolve color pipelines, Shopify speed optimization, prompt engineering).",
    details: ["Focus on tools", "Live feedback sessions", "Takeaway templates & cheat sheets"],
    icon: "Users"
  },
  {
    id: "portfolio",
    title: "Portfolio Development",
    description: "Graduate with a stunning, high-traffic digital hub showcasing your campaigns, cinematic videos, custom-built shops, and pitch decks.",
    details: ["Personal URL setups", "Showreels on YouTube", "Verified case study reports"],
    icon: "Layers"
  },
  {
    id: "career-prep",
    title: "Career Preparation",
    description: "Simulated job test screens, psychological posture training, salary negotiations, and technical panel challenges.",
    details: ["Mock HR interviews", "Aptitude assessments", "Interactive soft skill feedback"],
    icon: "ShieldAlert"
  },
  {
    id: "mentorship",
    title: "Professional Mentorship",
    description: "Weekly ask-me-anything calls and personalized project feedback from professionals active in domestic and international tech hubs.",
    details: ["1-on-1 progress reviews", "Insider industry insights", "Direct slack/chat access"],
    icon: "Award"
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "cert",
    title: "Industry Certification",
    description: "Obtain recognized credentials validating your expertise in modern media, commerce development, and marketing.",
    icon: "Award"
  },
  {
    id: "career-train",
    title: "Career-Oriented Training",
    description: "Skip theoretical systems. Every module is modeled strictly to mimic real duties of agency executives and media directors.",
    icon: "Target"
  },
  {
    id: "real-exp",
    title: "Real Project Experience",
    description: "Establish evidence of your talent. Showcase functional campaigns and live production shoots that validate your competence.",
    icon: "Smile"
  },
  {
    id: "portfolio-build",
    title: "Portfolio Building",
    description: "Aggregate your top artifacts into a spectacular presentation deck ready to win competitive salaries.",
    icon: "Files"
  },
  {
    id: "interview-prep",
    title: "Interview Preparation",
    description: "Simulated HR scenarios, portfolio narration, and response techniques designed to exude maximum leadership confidence.",
    icon: "UserCheck"
  },
  {
    id: "networking",
    title: "Networking Opportunities",
    description: "Join our exclusive state-wide developer, marketer, and content creator alumni circle for regular job alerts and trade secrets.",
    icon: "Network"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Arun Kumar",
    role: "Freelance Videographer & Creator",
    course: "Professional Videography & Content Creation",
    comment: "This course in Perinthalmanna completely changed my approach to video. Instead of just learning camera settings, we spent hours modeling cinematic lighting, framing, and editing with high-end tools. Within months I secured my first corporate video client pays standard retainer!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"
  },
  {
    id: "2",
    name: "Farhana Sherin",
    role: "Digital Marketing Specialist",
    course: "AI-Powered Digital Marketing",
    comment: "What I loved about CyberWise is the seamless addition of AI tools directly into digital marketing lessons. Running real Meta ad budgets for local shops in Kerala taught me conversion mechanics faster than any degree program ever could. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
  },
  {
    id: "3",
    name: "Nithin Prasad",
    role: "Shopify Brand Founder",
    course: "E-Commerce & Online Business",
    comment: "I went from having a vague business idea to a fully functioning local e-commerce store with integrated logistics in just 3 months. The mentors walked me hand-in-hand through product research, Shopify optimizations, and performance scaling. A goldmine of practical education!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Do you offer UGC Accredited Degree Programs?",
    answer: "Yes! Through our trusted academic university partners, CyberWise Skillversity facilitates UGC-accredited BBA, BCA, and B.Com degree pathways integrated with practical digital marketing, e-commerce, and content creation skills, giving you the best of both worlds.",
    category: "Academic"
  },
  {
    question: "Where is CyberWise Skillversity located exactly?",
    answer: "We are located in the heart of Perinthalmanna, Kerala. Perinthalmanna is a major hub of education and healthcare with convenient public transport connections from all parts of Malappuram and neighboring districts.",
    category: "General"
  },
  {
    question: "What is the fee structure and do you offer payment options?",
    answer: "Our fees are highly competitive since we focus on modern, fast-track skill acquisition. We offer flexible installment plans for students so finances never become an obstacle to career progression.",
    category: "Admissions"
  },
  {
    question: "Are these classes online or offline?",
    answer: "We put maximum emphasize on physical hands-on training using state-of-the-art camera equipment, high-spec digital marketing dashboards, and physical collaboration hubs. Hence, our core programs are primarily offered offline in our Perinthalmanna campus, supplemented by online study assets.",
    category: "General"
  },
  {
    question: "Is there a placement support system?",
    answer: "Absolutely. CyberWise has dedicated partnerships with agencies, scale-ups, and startups across Kerala, Bangalore, and Dubai. We provide portfolio reviews, resume optimization meetings, and direct interviews for our high-performing graduates.",
    category: "Career"
  }
];
