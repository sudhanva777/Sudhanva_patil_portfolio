export type Domain =
  | "AI Engineering"
  | "Backend Development"
  | "Data Science"
  | "Data Analytics";

export type Complexity = "Advanced" | "Intermediate" | "Foundation";

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  domain: Domain;
  complexity: Complexity;
  techStack: string[];
  impact?: string;
  highlights: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "insight-flow-agent",
    title: "Q&A Data Analysis Agent (InsightFlow)",
    domain: "AI Engineering",
    complexity: "Advanced",
    shortDesc:
      "Full-stack AI agent that converts natural-language questions into executable pandas code with a sandboxed execution layer.",
    fullDesc:
      "Built a full-stack agent that converts natural-language questions into executable pandas code, run against uploaded datasets via a FastAPI backend and React frontend. Designed a sandboxed execution layer to safely validate and run LLM-generated code, isolating dataset analysis from the host environment. Built REST endpoints for dataset upload, querying, history, and health checks, with SQLite-backed persistence; deployed live on Vercel.",
    impact:
      "Automates end-to-end dataset querying from natural language with secure sandboxed Python execution.",
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Groq API",
      "Pandas",
      "SQLite",
      "Docker",
      "REST APIs",
    ],
    highlights: [
      "Converts natural-language questions into executable pandas code",
      "Sandboxed execution layer to safely validate and run LLM-generated code",
      "REST endpoints for dataset upload, querying, history, and health checks",
      "SQLite-backed persistence and live frontend deployment on Vercel",
    ],
    github: "https://github.com/sudhanva777/AI-Data-Science-Agent-AI-for-Bharat",
    demo: undefined,
    featured: true,
  },
  {
    id: "time-series-forecasting",
    title: "Time Series Forecasting Using Deep Learning",
    domain: "Data Science",
    complexity: "Advanced",
    shortDesc:
      "Full-stack sales forecasting application analyzing historical company data and comparing multi-model predictions.",
    fullDesc:
      "Developed a full-stack sales forecasting application with a React frontend and Python backend for analyzing historical company sales data and generating future forecasts. Implemented and integrated time-series forecasting approaches using Prophet, TimeGPT, and a deep learning model to compare and generate sales predictions.",
    impact:
      "Enables strategic business planning through automated multi-model sales forecasts and comparative evaluation.",
    techStack: [
      "Python",
      "React",
      "JavaScript",
      "Prophet",
      "TimeGPT",
      "Deep Learning",
      "FastAPI",
    ],
    highlights: [
      "Full-stack sales forecasting application with React frontend and Python backend",
      "Time-series pipelines integrating Prophet, TimeGPT, and deep learning",
      "Comparative prediction models for historical company sales analysis",
      "Integrated data processing, model execution, and validation workflows",
    ],
    github: "https://github.com/sudhanva777",
    demo: undefined,
    featured: true,
  },
  {
    id: "ecommerce-backend-api",
    title: "E-Commerce Backend API",
    domain: "Backend Development",
    complexity: "Intermediate",
    shortDesc:
      "Scalable RESTful backend application built with FastAPI, PostgreSQL, SQLAlchemy, and Docker for core e-commerce operations.",
    fullDesc:
      "Engineered a scalable RESTful backend application using FastAPI and PostgreSQL to support core e-commerce operations. Implemented modular APIs for product, inventory, cart, and order management with robust input validation and exception handling. Designed a normalized relational database schema using SQLAlchemy and PostgreSQL, ensuring efficient data retrieval and integrity. Containerized the application using Docker.",
    impact:
      "Engineered a high-performance e-commerce backend with modular REST architecture, normalized schema, and Docker isolation.",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "REST APIs",
      "SQL",
    ],
    highlights: [
      "Modular APIs for product, inventory, cart, and order management",
      "Robust input validation and comprehensive exception handling",
      "Normalized relational database schema design using SQLAlchemy and PostgreSQL",
      "Fully containerized using Docker for scalable deployment",
    ],
    github: "https://github.com/sudhanva777",
    demo: undefined,
    featured: true,
  },
  {
    id: "powerbi-analytics",
    title: "Healthcare Analytics Dashboard (Power BI)",
    domain: "Data Analytics",
    complexity: "Foundation",
    shortDesc:
      "Interactive healthcare analytics dashboard built with Power BI using KPI tracking and DAX-driven insights.",
    fullDesc:
      "A healthcare analytics dashboard transforming raw datasets into executive-level insights. Built using Power BI with strong focus on KPI storytelling, DAX measures, and interactive visualization design for decision-making.",
    impact:
      "Delivered business-friendly healthcare insights using modern BI visualization practices.",
    techStack: [
      "Power BI",
      "DAX",
      "Data Modeling",
      "Visualization",
      "Analytics",
    ],
    highlights: [
      "Interactive KPI dashboard",
      "Advanced DAX calculations",
      "Healthcare analytics storytelling",
      "Executive-level visual layout",
    ],
    github: "https://github.com/sudhanva777/Healthcare-Dashboard-using-PowerBI",
    demo: undefined,
    featured: false,
  },
  {
    id: "ai-voice-assistant",
    title: "AI Voice Assistant (Johan)",
    domain: "AI Engineering",
    complexity: "Advanced",
    shortDesc:
      "Real-time local voice companion with VAD recording, GPU Whisper transcription, acoustic emotion detection, and streaming LLM replies.",
    fullDesc:
      "A local-inference, real-time German conversation companion built with Python, PyTorch, and React. Integrates Silero VAD for voice-triggered recording, faster-whisper on GPU for transcription, SpeechBrain for acoustic emotion recognition, Wav2Vec2 for pronunciation scoring, and streaming Ollama (Mistral) with Piper TTS adaptive prosody. Features both a standalone CLI mode and a FastAPI WebSocket server with an interactive React dashboard.",
    impact:
      "Enables zero-cloud-latency conversational tutoring with acoustic emotion awareness and adaptive prosody.",
    techStack: [
      "Python",
      "FastAPI",
      "Whisper",
      "Ollama",
      "PyTorch",
      "WebSockets",
      "React",
      "SpeechBrain",
      "Piper TTS",
      "SQLite",
    ],
    highlights: [
      "Real-time streaming pipeline using Silero VAD and GPU Whisper transcription",
      "SpeechBrain acoustic emotion detection and Wav2Vec2 pronunciation scoring",
      "Concurrent token streaming and sentence-by-sentence Piper TTS audio playback",
      "Dual-mode architecture: CLI companion and FastAPI WebSocket control server with React UI",
    ],
    github: "https://github.com/sudhanva777/AI-voice-assistent",
    demo: undefined,
    featured: false,
  },
  {
    id: "qa-da-agent",
    title: "Q&A Data Analysis Agent",
    domain: "AI Engineering",
    complexity: "Advanced",
    shortDesc:
      "Conversational data intelligence system translating natural-language queries into sandboxed pandas execution with Groq API.",
    fullDesc:
      "Full-stack analytical agent designed as a split architecture with a FastAPI backend and React frontend. Translates natural language questions into executable pandas code run in a sandboxed Python execution runtime to ensure metrics are computed directly from uploaded datasets rather than LLM guesswork. Exposes REST endpoints for dataset upload, conversational querying, session history, and health checks.",
    impact:
      "Grounds natural-language queries in sandboxed pandas execution to deliver verified analytical metrics.",
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Groq API",
      "Pandas",
      "Docker",
      "Tailwind CSS",
      "REST APIs",
    ],
    highlights: [
      "Sandboxed Python execution layer protecting host environment during dynamic code execution",
      "High-throughput Groq LLM integration for natural language to pandas translation",
      "Modular FastAPI backend with endpoints for file ingestion, chat queries, and query history",
      "Modern React and Tailwind CSS UI with dataset preview tables and chat interface",
    ],
    github: "https://github.com/sudhanva777/QA_DA_Agent",
    demo: undefined,
    featured: false,
  },
  {
    id: "spiral-galaxy-sim",
    title: "Spiral (Aether 3D Simulation)",
    domain: "Data Science",
    complexity: "Advanced",
    shortDesc:
      "Cinematic GPU-accelerated deep-space particle simulation featuring custom GLSL shaders, Keplerian dynamics, and Web Audio.",
    fullDesc:
      "A cinematic, GPU-accelerated astrophysical particle simulation built with Three.js, React, and custom GLSL shaders. Simulates Keplerian differential galactic rotation curves, 3D simplex/curl noise turbulence, gravitational raycasting wells, and multi-band spectral color mapping across up to 300,000 live particles. Includes cinematic post-processing and a generative Web Audio ambient synthesizer.",
    impact:
      "Renders up to 300,000 live GPU particles at 60 FPS with custom GLSL shaders and dynamic orbital physics.",
    techStack: [
      "Three.js",
      "React",
      "TypeScript",
      "GLSL Shaders",
      "WebGL",
      "Web Audio API",
      "Vite",
    ],
    highlights: [
      "Custom vertex and fragment shaders simulating Keplerian galactic rotation curves",
      "Simplex noise and curl noise for procedural plasma filaments and magnetic jets",
      "Interactive gravitational well with 3D mouse raycasting and camera parallax",
      "Cinematic UnrealBloomPass post-processing and generative Web Audio synthesis",
    ],
    github: "https://github.com/sudhanva777/spiral",
    demo: undefined,
    featured: false,
  },
  {
    id: "drug-safety-dashboard",
    title: "Drug Safety Analysis Dashboard",
    domain: "Data Science",
    complexity: "Advanced",
    shortDesc:
      "Clinical pharmacovigilance platform analyzing 528K+ FDA FAERS adverse event records with LightGBM and Random Forest.",
    fullDesc:
      "A high-performance pharmacological intelligence platform designed to ingest, clean, and model adverse drug reactions from the FDA FAERS database. Ingests over 528,000 pharmacovigilance reports with an automated data sanitizer and synonyms mapper. Compiles and trains multi-model AI classifiers (LightGBM, Random Forest, Logistic Regression) to assess fatality and hospitalization risks, featuring live training log streaming and epidemiological maps.",
    impact:
      "Processes 528K+ FDA FAERS records to predict drug adverse outcome severity with automated multi-model machine learning.",
    techStack: [
      "Python",
      "Streamlit",
      "LightGBM",
      "Scikit-Learn",
      "Pandas",
      "Plotly",
      "EDA",
    ],
    highlights: [
      "Ingestion and automated cleaning pipeline for 528,000+ FDA FAERS reports",
      "Multi-model risk prediction using LightGBM, Random Forest, and Logistic Regression",
      "Dynamic application state manager with live Python stdout training log streaming",
      "Interactive demographic and geographic visualizations across 162 countries",
    ],
    github: "https://github.com/sudhanva777/drug-safty-analysis-dashboard-",
    demo: undefined,
    featured: false,
  },
  {
    id: "time-series-analysis-dashboard",
    title: "Time Series Analysis Dashboard",
    domain: "Data Science",
    complexity: "Advanced",
    shortDesc:
      "Demand forecasting intelligence platform integrating zero-shot foundation models (TimesFM, Chronos) with drift detection.",
    fullDesc:
      "A modular forecasting intelligence platform built with Streamlit for multi-product demand forecasting, model benchmarking, and operational monitoring. Features zero-shot foundation model forecasting using Google TimesFM and Amazon Chronos, dual-stage covariate handling with Ridge residualization, probabilistic confidence intervals (80/90/95th percentiles), and automated data drift and anomaly alerts.",
    impact:
      "Enables zero-shot demand forecasting and distribution shift detection with probabilistic confidence intervals.",
    techStack: [
      "Python",
      "Streamlit",
      "TimesFM",
      "Chronos",
      "Plotly",
      "Pandas",
      "Scikit-Learn",
    ],
    highlights: [
      "Zero-shot forecasting leveraging Google TimesFM and Amazon Chronos foundation models",
      "Dual-stage covariate handling for promotional drivers using Ridge residualization",
      "Automated probabilistic forecasting with 80th, 90th, and 95th percentile confidence bands",
      "Operational monitoring with data drift detection and spike/anomaly alerting",
    ],
    github: "https://github.com/sudhanva777/Time-series-analysis-dashboard-",
    demo: undefined,
    featured: false,
  },
  {
    id: "ai-career-copilot",
    title: "AI Career Copilot",
    domain: "AI Engineering",
    complexity: "Advanced",
    shortDesc:
      "Full-stack career platform featuring ATS resume scoring, semantic skill gap analysis, and LLM mock interview coaching.",
    fullDesc:
      "A full-stack career platform built with FastAPI and React. Analyzes uploaded resumes using Sentence-Transformers semantic embeddings to calculate ATS scores (0–100) and extract missing skills. Integrates local Ollama (Llama 3) for contextual resume bullet improvements and role-specific mock interviews across 5 question categories with automated 0–10 scoring, radar chart analytics, and print-ready PDF reports.",
    impact:
      "Empowers job seekers with local zero-cost LLM interview prep, ATS scoring, and semantic skill gap analytics.",
    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Ollama",
      "Llama 3",
      "Sentence-Transformers",
      "spaCy",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Semantic skill extraction and ATS scoring using Sentence-Transformers embeddings",
      "Interactive AI interview coach with 5 evaluation categories powered by local Llama 3",
      "Context-aware resume bullet rewrite suggestions and job description matching",
      "Secure JWT authentication, rate limiting with SlowAPI, and print-safe PDF export",
    ],
    github: "https://github.com/sudhanva777/ai_career_copilot-",
    demo: undefined,
    featured: false,
  },
  {
    id: "gensoft-ai-labs",
    title: "GENSOFT AI LABS Official Website",
    domain: "Backend Development",
    complexity: "Intermediate",
    shortDesc:
      "Production company website for GENSOFT AI LABS with Next.js 14 App Router, Framer Motion, and automated contact notifications.",
    fullDesc:
      "The official responsive web platform for GENSOFT AI LABS, an AI and software development company. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features smooth Framer Motion animations, mobile-first responsive layouts, SEO optimization, and a secure contact dispatch pipeline with Nodemailer email delivery and optional WhatsApp integration via Twilio.",
    impact:
      "Delivers an enterprise-grade digital presence with SEO optimization, sub-second page loads, and real-time lead dispatch.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
      "Twilio",
      "REST APIs",
    ],
    highlights: [
      "Modern Next.js 14 App Router architecture with modular component design",
      "Fluid page transitions and scroll animations powered by Framer Motion",
      "Secure API routes for contact inquiries with Nodemailer SMTP dispatch",
      "Mobile-first responsive design and Lighthouse SEO optimization",
    ],
    github: "https://github.com/sudhanva777/gensoft-ai-labs-official",
    demo: undefined,
    featured: false,
  },
  {
    id: "healthcare-dashboard-powerbi",
    title: "Healthcare Dashboard using Power BI",
    domain: "Data Analytics",
    complexity: "Foundation",
    shortDesc:
      "Interactive clinical and operational healthcare intelligence dashboard built with Microsoft Power BI and DAX.",
    fullDesc:
      "An interactive healthcare analytics dashboard in Microsoft Power BI visualizing inpatient and outpatient trends. Features comprehensive DAX-computed KPIs for patient wait times, bed occupancy rates, departmental load distribution, and clinical outcome metrics, providing healthcare administrators with intuitive visual reporting for data-driven decisions.",
    impact:
      "Translates complex clinical operations data into intuitive Power BI executive KPIs and departmental visual reports.",
    techStack: [
      "Power BI",
      "DAX",
      "Data Modeling",
      "Healthcare Analytics",
      "Business Intelligence",
      "Excel",
    ],
    highlights: [
      "Real-time visual monitoring of inpatient and outpatient admission metrics",
      "Custom DAX calculations for average length of stay and bed occupancy rates",
      "Interactive drill-through filters by department, age cohort, and admission type",
      "Executive-level KPI storytelling and data modeling",
    ],
    github: "https://github.com/sudhanva777/Healthcare-Dashboard-using-PowerBI",
    demo: undefined,
    featured: false,
  },
  {
    id: "ai-security-system",
    title: "AI Security System",
    domain: "AI Engineering",
    complexity: "Advanced",
    shortDesc:
      "Intelligent threat detection system featuring YOLOv8 weapon detection, pose behavior analysis, and an adaptive color-coded HUD.",
    fullDesc:
      "A comprehensive, production-ready AI security detection system in Python. Features real-time weapon detection with YOLOv8, facial emotion recognition with MediaPipe Face Mesh, and pose-based suspicious behavior classification (fighting, falling, sneaking, loitering). Incorporates MOG2 motion pre-filtering for 2-3x FPS improvement, a weighted threat-level scoring engine, automated SMTP email alerts, and an adaptive sci-fi HUD interface.",
    impact:
      "Combines 4 distinct computer vision models with real-time threat weighting, automated alerting, and 2-3x FPS motion optimization.",
    techStack: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "MediaPipe",
      "PyTorch",
      "DeepFace",
      "Computer Vision",
      "SMTP",
    ],
    highlights: [
      "Multi-model vision pipeline combining YOLOv8 weapon detection and MediaPipe pose/face analysis",
      "Pose-based behavior classification detecting fighting, falling, sneaking, and loitering",
      "MOG2 motion pre-filtering boosting system processing speeds by 2-3x FPS",
      "Unified threat engine with automated email alerts and dynamic color-coded HUD",
    ],
    github: "https://github.com/sudhanva777/AI-Security-System---Full-Security-Detection-System",
    demo: undefined,
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Artificial Intelligence Intern",
    company: "Inventeron Technologies and Business Solutions LLP",
    type: "Internship",
    period: "Jan 2026 – May 2026",
    location: "Bengaluru, India",
    description:
      "Developing a full-stack sales forecasting application and automated forecasting pipelines from historical business data.",
    achievements: [
      "Developed a full-stack sales forecasting application using React, HTML, CSS, and JavaScript for the frontend and Python for backend processing and forecasting workflows",
      "Built time-series forecasting pipelines using Prophet, TimeGPT, and a deep learning model to forecast company sales from historical business data and support data-driven planning",
      "Integrated data processing, model execution, and forecast results into the application, contributing to testing, debugging, validation, and delivery of the project",
    ],
    tags: [
      "Python",
      "React",
      "JavaScript",
      "FastAPI",
      "Deep Learning",
      "HTML/CSS",
      "Prophet",
      "TimeGPT",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React", "Three.js"],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    category: "Database Technologies",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "Redis", "SQL"],
  },
  {
    category: "AI and Agentic Development",
    icon: "🤖",
    skills: ["Generative AI", "LLMs", "RAG", "AI Agents", "Agentic AI"],
  },
  {
    category: "Data Science and Analytics",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Power BI"],
  },
  {
    category: "Tools and Development Workflow",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Claude Code",
      "Codex",
      "Antigravity",
    ],
  },
  {
    category: "Core Computer Science",
    icon: "💻",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Software Engineering",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "OCI – Generative AI Professional",
    issuer: "Oracle",
    badge: "Oracle Certified",
  },
  {
    name: "Applied Data Science with Python",
    issuer: "IBM",
    badge: "IBM Certified",
  },
];

export const education = {
  degree: "B.E., Computer Science & Engineering (Data Science)",
  institution: "St. Joseph Engineering College, Mangaluru, India",
  period: "2022 – 2026",
  cgpa: "8.18 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering",
    "Machine Learning",
    "Statistical Methods",
  ],
};

export const personalInfo = {
  name: "Sudhanva Patil",
  title: "Backend Engineer | Software Engineer",
  roles: [
    "Backend Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
  ],
  taglines: [
    "Building full-stack apps & REST APIs.",
    "Python, FastAPI, React & PostgreSQL.",
    "Agentic AI pipelines & forecasting systems.",
    "Clean architecture & scalable software.",
  ],
  bio: [
    "I'm Sudhanva Patil — a Computer Science graduate with hands-on experience building full-stack applications, REST APIs, and database-driven systems using Python, FastAPI, React, JavaScript, SQL, and PostgreSQL.",
    "Skilled in backend development, API integration, Docker, Git, Linux, and software engineering fundamentals. My project experience ranges from architecting sandboxed AI data analysis agents to engineering modular e-commerce REST backends and sales forecasting pipelines.",
    "Seeking an entry-level Software Engineer, Backend Developer, or Full Stack Developer role where I can contribute to high-impact products and reliable systems.",
  ],
  location: "Bengaluru, India",
  phone: "+91-87928-73141",
  phoneTel: "+918792873141",
  email: "sudhanvapatil2004@gmail.com",
  github: "https://github.com/sudhanva777",
  linkedin: "https://linkedin.com/in/sudhanva-patil",
  resumePath: "/Resume_sudhanva.pdf",
  profilePhoto: "/images/profile.jpg",
  stats: [
    { value: "4", label: "Featured Projects" },
    { value: "2", label: "Certifications" },
    { value: "8.18", label: "CGPA (B.E. CSE)" },
  ],
};
