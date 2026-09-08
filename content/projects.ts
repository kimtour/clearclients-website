export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  githubUrl: string;
  liveUrl?: string;
  apiDocsUrl?: string;
  featured?: boolean;
  visual?: string;
  problem?: string;
  solution?: string;
  proof?: readonly string[];
};

export const projects: readonly Project[] = [
  {
    title: "M-Pesa Payment Gateway",
    category: "FINTECH / PAYMENTS",
    description: "Production-structured M-Pesa payment service covering STK Push initiation, asynchronous callbacks, transaction states, retries, refunds, analytics and transaction event tracking.",
    technologies: ["Python", "FastAPI", "Docker", "GitHub Actions", "Render"],
    githubUrl: "https://github.com/kimtour/mpesa-payment-gateway",
    liveUrl: "https://mpesa-payment-gateway.onrender.com",
    apiDocsUrl: "https://mpesa-payment-gateway.onrender.com/docs",
    featured: true,
    visual: "/visuals/payments.svg",
    problem: "Businesses need a reliable way to initiate M-Pesa payments and reconcile asynchronous transaction confirmations without fragile manual checks.",
    solution: "A FastAPI payment service manages STK Push requests, callbacks, transaction states, retries, refunds and operational tracking as one workflow.",
    proof: ["Live application", "Swagger API documentation", "Callback and webhook flow", "Docker and GitHub Actions delivery"]
  },
  {
    title: "Bank Transaction API",
    category: "FINTECH / BANKING",
    description: "Full-stack banking application demonstrating REST API engineering, JWT authentication, account operations, transfers, transaction history, automated testing and cloud deployment.",
    technologies: ["Python", "FastAPI", "JWT", "SQLAlchemy", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/kimtour/bank-transaction-api",
    liveUrl: "https://samuel-kimani-bank-api-demo.onrender.com/",
    apiDocsUrl: "https://samuel-kimani-bank-api-demo.onrender.com/docs",
    featured: true,
    visual: "/visuals/backend.svg",
    problem: "Financial applications need protected account and transaction APIs with enforceable ownership, balance and transfer rules.",
    solution: "A FastAPI service and browser dashboard provide JWT authentication, account management, deposits, withdrawals, transfers and audit-friendly transaction history.",
    proof: ["Live authenticated dashboard", "Interactive Swagger API", "Automated API tests", "Docker build and live smoke checks"]
  },
  {
    title: "KenPay, Kenyan Payroll System",
    category: "FINTECH / PAYROLL",
    description: "Full-stack Kenyan payroll application calculating PAYE, NSSF, SHIF, Affordable Housing Levy, net salary and employer cost through a web application and REST API.",
    technologies: ["Python", "FastAPI", "Pydantic", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/kimtour/kenyan-payroll-system",
    liveUrl: "https://kenyan-payroll-system.onrender.com",
    featured: true,
    visual: "/visuals/home.svg",
    problem: "Payroll teams need repeatable statutory calculations and clear payroll outputs without spreadsheet-driven errors and duplicated work.",
    solution: "A web application and REST API calculate Kenyan payroll deductions, net salary and employer cost through validated payroll logic.",
    proof: ["Live web application", "REST API", "Statutory calculation engine", "Docker and GitHub Actions workflow"]
  },
  {
    title: "M-Pesa Payment Gateway Demo",
    category: "FULL STACK / PAYMENTS",
    description: "React and FastAPI payment interface demonstrating payment initiation, transaction state management, webhook verification and frontend-to-backend API integration.",
    technologies: ["React", "TypeScript", "FastAPI", "REST APIs", "Webhooks"],
    githubUrl: "https://github.com/kimtour/mpesa-payment-gateway-demo"
  },
  {
    title: "ML on Graphs",
    category: "AI / MACHINE LEARNING",
    description: "Machine-learning project covering graph analysis, Graph Neural Networks, link prediction, edge classification, community detection, graph-level learning and model explainability.",
    technologies: ["Python", "Machine Learning", "Graph Neural Networks", "Jupyter"],
    githubUrl: "https://github.com/kimtour/ML-on-Graphs"
  }
] as const;
