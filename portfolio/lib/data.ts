export type Domain =
  | "AI Engineering"
  | "Computer Vision"
  | "ML Deployment"
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

export const projects: Project[] = [
  {
    id: "ai-ds-employee",
    title: "AI Data Science Employee (DataMind AI)",
    domain: "AI Engineering",
    complexity: "Advanced",
    shortDesc:
      "Production-grade autonomous AI Data Science system performing profiling, cleaning, EDA insights, AutoML and deployment.",
    fullDesc:
      "AI Data Science Employee is a production-ready autonomous data science platform that replicates a real data scientist workflow. The system performs data profiling, quality checks, automated cleaning, LLM-powered EDA insights using Ollama, AutoML training, and exposes a FastAPI inference layer. Built with a deterministic modular architecture designed for scalability and real-world deployment.",
    impact:
      "End-to-end autonomous data science pipeline reducing manual analysis effort significantly.",
    techStack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Ollama",
      "LLMs",
      "AutoML",
      "Pandas",
      "Scikit-learn",
      "Docker",
    ],
    highlights: [
      "Production-grade modular AI DS pipeline",
      "Multi-agent orchestration architecture",
      "Local LLM integration via Ollama",
      "Automated profiling, cleaning & EDA",
      "FastAPI deployment-ready system",
    ],
    github: "https://github.com/sudhanva777/AI-Data-Science-Agent-AI-for-Bharat",
    demo: undefined,
    featured: true,
  },
  {
    id: "asd-eye-tracking",
    title: "Autism Detection using Eye Tracking + ML",
    domain: "Computer Vision",
    complexity: "Advanced",
    shortDesc:
      "Research-focused AI system predicting Autism Spectrum Disorder using eye-tracking behavioral data.",
    fullDesc:
      "EarlyVue ASD is a research-oriented autism screening system built using gaze behavioral analysis. The architecture separates eye-tracker capture from prediction pipelines and uses structured CSV inputs for reproducibility. The model is trained on Srijan, Kaggle and clinical datasets with ensemble ML methods.",
    impact:
      "Designed as an assistive diagnostic AI workflow using behavioral machine learning signals.",
    techStack: [
      "Python",
      "Machine Learning",
      "Eye Tracking",
      "Feature Engineering",
      "Ensemble Models",
      "Scikit-learn",
    ],
    highlights: [
      "Separated eye tracker and ML prediction modules",
      "CSV-based inference pipeline",
      "Combined multiple ASD datasets",
      "Research-grade feature engineering workflow",
    ],
    github: "https://github.com/sudhanva777/EarlyVue-ASD-WebApp",
    demo: undefined,
    featured: true,
  },
  {
    id: "credit-risk-ml",
    title: "Credit Card Fraud Detection using ML",
    domain: "Data Science",
    complexity: "Intermediate",
    shortDesc:
      "Machine learning pipeline for detecting fraudulent credit card transactions using classification models.",
    fullDesc:
      "An end-to-end machine learning system designed to detect fraudulent credit card transactions. The project includes data preprocessing, imbalance handling, feature engineering, model training and evaluation using multiple classification algorithms.",
    impact:
      "Improved fraud detection performance using structured ML workflow and model comparison.",
    techStack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "EDA",
      "Feature Engineering",
      "Classification Models",
    ],
    highlights: [
      "End-to-end ML pipeline",
      "Fraud detection modeling",
      "Feature engineering and EDA",
      "Model evaluation and tuning",
    ],
    github: "https://github.com/sudhanva777/Credit-Card-Fraud-detection-using-ML",
    demo: undefined,
    featured: false,
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
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "AI / ML Engineer",
    company: "Inventron Technologies",
    type: "Full-time",
    period: "Feb 2026 – Present",
    location: "Bangalore, India",
    description:
      "Designing and deploying end-to-end machine learning systems. Responsible for model development, productionization, and monitoring pipelines.",
    achievements: [
      "Built and deployed 3 production ML models serving 10K+ daily predictions",
      "Reduced model inference latency by 40% through ONNX optimization",
      "Established MLOps practices including drift monitoring and auto-retraining",
      "Collaborated with product and data teams to translate business goals into ML solutions",
    ],
    tags: ["Python", "PyTorch", "FastAPI", "Docker", "AWS"],
  },
  {
    id: "exp-2",
    role: "Data Science Intern",
    company: "Codveda Technologies",
    type: "Internship",
    period: "Jun 2023 – Dec 2023",
    location: "Bangalore, India",
    description:
      "Worked on predictive analytics and data pipeline development. Supported the analytics team with EDA, feature engineering, and model prototyping.",
    achievements: [
      "Engineered 20+ features for customer behavior prediction model (AUC: 0.87)",
      "Automated weekly reporting pipeline saving 6 hours/week of manual work",
      "Delivered EDA findings to stakeholders via Tableau dashboards",
      "Contributed to data quality framework reducing null rates from 12% to 1.4%",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "SQL", "Tableau"],
  },
  {
    id: "exp-3",
    role: "Research Assistant — ML",
    company: "St. Joseph Engineering College",
    type: "Research",
    period: "Aug 2022 – May 2023",
    location: "Mangalore, India",
    description:
      "Assisted in NLP research. Responsible for data collection, preprocessing pipelines, and baseline model experiments.",
    achievements: [
      "Preprocessed and curated 80K-record multilingual dataset for NLP research",
      "Implemented 4 baseline transformer models for comparative study",
      "Co-authored internal research report summarizing benchmark results",
      "Maintained experiment tracking using MLflow across 100+ runs",
    ],
    tags: ["Python", "HuggingFace", "MLflow", "NLP", "Research"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Three.js",
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Flask",
      "Docker",
    ],
  },
  {
    category: "Full-Stack Development",
    icon: "🔗",
    skills: [
      "Full-Stack Application Development",
      "Frontend–Backend Integration",
      "API Integration",
      "End-to-End Application Development",
    ],
  },
  {
    category: "AI & Agentic AI",
    icon: "🤖",
    skills: [
      "Agentic AI",
      "AI Agents",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Generative AI",
      "Machine Learning",
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "ONNX",
      "OpenCV",
    ],
  },
  {
    category: "Database & Data Engineering",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
    ],
  },
  {
    category: "Data Analytics & Visualization",
    icon: "📊",
    skills: [
      "Power BI",
      "Python Data Analysis",
      "Pandas",
      "NumPy",
      "SQL",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "SHAP",
      "Tableau",
    ],
  },
  {
    category: "Cloud & MLOps",
    icon: "☁️",
    skills: [
      "AWS (EC2, S3)",
      "GCP",
      "MLflow",
      "Apache Airflow",
      "dbt",
      "GitHub Actions",
    ],
  },
  {
    category: "AI Coding Assistants & Developer Tools",
    icon: "🛠️",
    skills: [
      "Claude Code",
      "OpenAI Codex",
      "Google Antigravity",
      "Git",
      "GitHub",
    ],
  },
];

export const personalInfo = {
  name: "Sudhanva Patil",
  title: "AI Engineer & Data Scientist",
  taglines: [
    "Building production-grade AI systems.",
    "Autonomous Data Science agents.",
    "Medical AI research tools.",
    "Applied ML solutions that ship.",
  ],
  bio: [
    "I'm Sudhanva Patil — an AI Engineer and Data Scientist based in India. I build production-grade AI systems: autonomous Data Science agents, medical AI research tools, and applied machine learning solutions.",
    "My work covers the full ML lifecycle — from EDA and feature engineering through model training, evaluation, and production deployment. I focus on systems that run reliably in the real world.",
    "I'm interested in agentic AI pipelines, computer vision for healthcare, and MLOps practices that make ML teams more effective.",
  ],
  location: "Hospet, Karnataka, India",
  phone: "+91 8792873141",
  phoneTel: "+918792873141",
  email: "sudhanvapatil2004@gmail.com",
  github: "https://github.com/sudhanva777",
  linkedin: "https://linkedin.com/in/sudhanvapatil",
  resumePath: "/resume.pdf",
  profilePhoto: "/images/profile.jpg",
  stats: [
    { value: "4", label: "AI Projects Built" },
    { value: "2", label: "Advanced Systems" },
    { value: "4", label: "Certifications" },
  ],
};
