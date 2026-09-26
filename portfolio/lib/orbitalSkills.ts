export interface OrbitalSkill {
  id: string;
  name: string;
  shortRole: string;
  description: string;
  color: string;
}

export interface OrbitalCategory {
  id: string;
  name: string;
  icon: string;
  theme: {
    name: string;
    accent: string;
    secondary: string;
    glow: string;
    border: string;
    bgGradient: string;
  };
  skills: OrbitalSkill[];
}

export const ORBITAL_CATEGORIES: OrbitalCategory[] = [
  {
    id: "programming-languages",
    name: "Programming Languages",
    icon: "💻",
    theme: {
      name: "Warm Gold & Amber",
      accent: "#f59e0b",
      secondary: "#eab308",
      glow: "rgba(245, 158, 11, 0.35)",
      border: "rgba(245, 158, 11, 0.3)",
      bgGradient: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(234,179,8,0.05) 50%, transparent 70%)",
    },
    skills: [
      {
        id: "python",
        name: "Python",
        shortRole: "Primary Engineering Language",
        description:
          "Core programming language powering backend services, FastAPI microservices, data science pipelines, and LLM agent orchestration.",
        color: "#3776ab",
      },
      {
        id: "sql",
        name: "SQL",
        shortRole: "Relational Querying & Schema",
        description:
          "Declarative data querying language for normalized schemas, relational database design, indexing, and complex analytical aggregations.",
        color: "#00758f",
      },
      {
        id: "java",
        name: "Java",
        shortRole: "Enterprise & OOP Fundamentals",
        description:
          "Object-oriented programming language foundational for data structures, algorithms, modular application design, and enterprise system principles.",
        color: "#ea2d2e",
      },
    ],
  },
  {
    id: "backend-development",
    name: "Backend Development",
    icon: "⚙️",
    theme: {
      name: "Cyan & Deep Blue",
      accent: "#06b6d4",
      secondary: "#3b82f6",
      glow: "rgba(6, 182, 212, 0.35)",
      border: "rgba(6, 182, 212, 0.3)",
      bgGradient: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)",
    },
    skills: [
      {
        id: "fastapi",
        name: "FastAPI",
        shortRole: "Async REST API Framework",
        description:
          "High-performance modern Python web framework used for building production-grade asynchronous REST APIs, WebSocket channels, and AI endpoints.",
        color: "#009688",
      },
      {
        id: "node-js",
        name: "Node.js",
        shortRole: "JavaScript Server Runtime",
        description:
          "Asynchronous event-driven JavaScript runtime environment for executing scalable network applications and microservices.",
        color: "#339933",
      },
      {
        id: "rest-apis",
        name: "REST APIs",
        shortRole: "API Design & Architecture",
        description:
          "Stateless architectural style utilizing HTTP verbs, structured JSON contracts, status code standards, and secure client-server communication.",
        color: "#6366f1",
      },
      {
        id: "pydantic",
        name: "Pydantic",
        shortRole: "Data Validation & Modeling",
        description:
          "Data validation and settings management using Python type hints, ensuring type safety and error-resilient request/response serialization.",
        color: "#e92063",
      },
      {
        id: "sqlalchemy",
        name: "SQLAlchemy",
        shortRole: "Python Object Relational Mapper",
        description:
          "Enterprise-grade SQL toolkit and ORM enabling clean object-relational mapping, transactional safety, and high-performance query execution.",
        color: "#d71f00",
      },
      {
        id: "jwt-authentication",
        name: "JWT Authentication",
        shortRole: "Stateless Security & Tokens",
        description:
          "Secure user authentication utilizing JSON Web Tokens with cryptographic signing, bcrypt password hashing, and role-based access control.",
        color: "#a855f7",
      },
      {
        id: "javascript",
        name: "JavaScript",
        shortRole: "Full-Stack Scripting",
        description:
          "Dynamic asynchronous language for server logic, API integration, and full-stack event handling across modern web ecosystems.",
        color: "#f7df1e",
      },
      {
        id: "html",
        name: "HTML",
        shortRole: "Web Document Structuring",
        description:
          "Semantic HTML5 structuring providing accessible, clean document foundations for templates and server-rendered views.",
        color: "#e34f26",
      },
      {
        id: "css",
        name: "CSS",
        shortRole: "Styling & Responsive Layouts",
        description:
          "Cascading stylesheets implementing responsive layouts, CSS Flexbox/Grid, fluid media queries, and modern visual design tokens.",
        color: "#1572b6",
      },
    ],
  },
  {
    id: "frontend-development",
    name: "Frontend Development",
    icon: "🎨",
    theme: {
      name: "Bright Cyan & Sky Blue",
      accent: "#38bdf8",
      secondary: "#60a5fa",
      glow: "rgba(56, 189, 248, 0.35)",
      border: "rgba(56, 189, 248, 0.3)",
      bgGradient: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(96,165,250,0.06) 50%, transparent 70%)",
    },
    skills: [
      {
        id: "next-js",
        name: "Next.js",
        shortRole: "Production React Framework",
        description:
          "Enterprise React framework featuring App Router architecture, server-side rendering, static site generation, and optimized asset delivery.",
        color: "#ffffff",
      },
      {
        id: "javascript",
        name: "JavaScript",
        shortRole: "Client-Side Reactive Logic",
        description:
          "Modern ES6+ client-side scripting powering responsive user interactions, async API client communication, and dynamic DOM manipulation.",
        color: "#f7df1e",
      },
      {
        id: "css",
        name: "CSS",
        shortRole: "Modern UI Styling & Animations",
        description:
          "Vanilla CSS & utility design systems delivering fluid micro-interactions, dark-mode styling, glassmorphism, and responsive viewports.",
        color: "#1572b6",
      },
      {
        id: "html",
        name: "HTML",
        shortRole: "Semantic HTML5 Markup",
        description:
          "Clean semantic markup with accessibility standards, SEO tags, structured heading hierarchies, and optimized web standards.",
        color: "#e34f26",
      },
    ],
  },
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
    icon: "🤖",
    theme: {
      name: "Electric Blue & Purple",
      accent: "#818cf8",
      secondary: "#a855f7",
      glow: "rgba(129, 140, 248, 0.35)",
      border: "rgba(129, 140, 248, 0.3)",
      bgGradient: "radial-gradient(circle, rgba(129,140,248,0.2) 0%, rgba(168,85,247,0.07) 50%, transparent 70%)",
    },
    skills: [
      {
        id: "pytorch",
        name: "PyTorch",
        shortRole: "Deep Learning & Tensors",
        description:
          "Open-source machine learning framework for training deep neural networks, computer vision inference, and GPU-accelerated computing.",
        color: "#ee4c2c",
      },
      {
        id: "scikit-learn",
        name: "Scikit-learn",
        shortRole: "Statistical Machine Learning",
        description:
          "Essential ML toolkit for supervised and unsupervised algorithms, classification, regression, model evaluation, and feature preprocessing.",
        color: "#f89939",
      },
      {
        id: "xgboost",
        name: "XGBoost",
        shortRole: "Gradient Boosted Decision Trees",
        description:
          "Scalable, distributed gradient boosting library engineered for lightning-fast tabular predictions and high-accuracy machine learning benchmarks.",
        color: "#00a86b",
      },
      {
        id: "llms",
        name: "LLMs",
        shortRole: "Large Language Models",
        description:
          "Integration of frontier foundation models via Groq, Ollama, and OpenAI for reasoning, conversational workflows, and code translation.",
        color: "#a78bfa",
      },
      {
        id: "generative-ai",
        name: "Generative AI (GenAI)",
        shortRole: "Multimodal Generative AI",
        description:
          "Designing generative intelligence pipelines, prompt architectures, synthetic data generation, and context-aware conversational applications.",
        color: "#8b5cf6",
      },
      {
        id: "ai-agents",
        name: "AI Agents",
        shortRole: "Autonomous Tool-Using Agents",
        description:
          "Full-stack AI agents capable of parsing natural language, generating executable code in sandboxed runtimes, and executing multi-step goals.",
        color: "#6366f1",
      },
      {
        id: "agentic-ai",
        name: "Agentic AI",
        shortRole: "Agentic Workflows & Multi-Agent",
        description:
          "Multi-agent orchestration frameworks with autonomous goal decomposition, dynamic planning, reflexivity, and tool execution loops.",
        color: "#818cf8",
      },
      {
        id: "rag",
        name: "RAG",
        shortRole: "Retrieval-Augmented Generation",
        description:
          "Enhancing LLM responses with external knowledge retrieval, semantic embeddings, vector indexing, and ground-truth validation.",
        color: "#7c3aed",
      },
    ],
  },
  {
    id: "data-science-analytics",
    name: "Data Science & Data Analytics",
    icon: "📊",
    theme: {
      name: "Cyan & Teal",
      accent: "#14b8a6",
      secondary: "#06b6d4",
      glow: "rgba(20, 184, 166, 0.35)",
      border: "rgba(20, 184, 166, 0.3)",
      bgGradient: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, rgba(6,182,212,0.06) 50%, transparent 70%)",
    },
    skills: [
      {
        id: "power-bi",
        name: "Power BI",
        shortRole: "Business Intelligence & DAX",
        description:
          "Enterprise analytics visualization platform for executive KPI storytelling, multi-table data modeling, and custom DAX calculations.",
        color: "#f2c811",
      },
      {
        id: "excel",
        name: "Excel",
        shortRole: "Spreadsheet Analytics & Modeling",
        description:
          "Advanced data manipulation utilizing pivot tables, statistical functions, VLOOKUP/XLOOKUP, and structured business reporting.",
        color: "#107c41",
      },
      {
        id: "pandas",
        name: "Pandas",
        shortRole: "DataFrame Manipulation",
        description:
          "High-performance Python library for structured data manipulation, time-series analysis, dataset filtering, and cohort extraction.",
        color: "#150458",
      },
      {
        id: "numpy",
        name: "NumPy",
        shortRole: "Numerical Scientific Computing",
        description:
          "Fundamental library for multidimensional array manipulation, vectorized mathematical computation, Fourier transforms, and linear algebra.",
        color: "#013243",
      },
      {
        id: "matplotlib",
        name: "Matplotlib",
        shortRole: "Scientific Plotting & Charts",
        description:
          "Comprehensive data visualization library for rendering publication-grade static line charts, histograms, heatmaps, and scatter plots.",
        color: "#11557c",
      },
      {
        id: "seaborn",
        name: "Seaborn",
        shortRole: "Statistical Data Graphics",
        description:
          "High-level statistical data visualization library built on Matplotlib, providing elegant aesthetic themes and complex bivariate plots.",
        color: "#4c72b0",
      },
    ],
  },
  {
    id: "dbms-databases",
    name: "DBMS & Databases",
    icon: "🗄️",
    theme: {
      name: "Purple & Violet",
      accent: "#a855f7",
      secondary: "#8b5cf6",
      glow: "rgba(168, 85, 247, 0.35)",
      border: "rgba(168, 85, 247, 0.3)",
      bgGradient: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
    },
    skills: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        shortRole: "Advanced Relational Database",
        description:
          "Robust open-source object-relational database management system with ACID transactions, complex joins, JSONB support, and indexing.",
        color: "#336791",
      },
      {
        id: "redis",
        name: "Redis",
        shortRole: "In-Memory Key-Value Store",
        description:
          "Sub-millisecond in-memory data store used for high-speed caching, distributed rate limiting, session storage, and pub/sub message brokers.",
        color: "#dc382d",
      },
    ],
  },
  {
    id: "devops-tools",
    name: "DevOps & Tools",
    icon: "☁️",
    theme: {
      name: "Blue & Cyan",
      accent: "#2563eb",
      secondary: "#38bdf8",
      glow: "rgba(37, 99, 235, 0.35)",
      border: "rgba(37, 99, 235, 0.3)",
      bgGradient: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(56,189,248,0.06) 50%, transparent 70%)",
    },
    skills: [
      {
        id: "docker",
        name: "Docker",
        shortRole: "Containerization & Isolation",
        description:
          "Industry standard container platform packaging applications and runtime dependencies for repeatable cross-environment deployments.",
        color: "#2496ed",
      },
      {
        id: "aws",
        name: "AWS",
        shortRole: "Cloud Infrastructure & S3",
        description:
          "Amazon Web Services cloud computing, EC2 virtual servers, S3 scalable object storage, IAM access control, and deployment pipelines.",
        color: "#ff9900",
      },
      {
        id: "vercel",
        name: "Vercel",
        shortRole: "Edge Serverless Deployment",
        description:
          "Frontend cloud deployment platform offering automated CI/CD builds, serverless edge runtime execution, and global CDN delivery.",
        color: "#ffffff",
      },
      {
        id: "render",
        name: "Render",
        shortRole: "Cloud App & Database Hosting",
        description:
          "Unified cloud platform for deploying automated web services, FastAPI backend containers, background workers, and managed databases.",
        color: "#46e3b7",
      },
      {
        id: "git",
        name: "Git",
        shortRole: "Version Control System",
        description:
          "Distributed version control tracking source code revisions, atomic commits, branching workflows, and codebase history management.",
        color: "#f05032",
      },
      {
        id: "github",
        name: "GitHub",
        shortRole: "Collaboration & CI/CD",
        description:
          "Cloud code hosting platform for pull requests, automated GitHub Actions CI/CD workflows, issue tracking, and open-source contribution.",
        color: "#ffffff",
      },
      {
        id: "linux",
        name: "Linux",
        shortRole: "Server OS & Bash Scripting",
        description:
          "POSIX operating system environment for server administration, shell scripting, package management, process monitoring, and Docker hosts.",
        color: "#fcc624",
      },
    ],
  },
];
