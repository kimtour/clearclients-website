export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  githubUrl: string;
  liveUrl?: string;
  apiDocsUrl?: string;
  featured?: boolean;
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
    featured: true
  },
  {
    title: "KenPay, Kenyan Payroll System",
    category: "FINTECH / PAYROLL",
    description: "Full-stack Kenyan payroll application calculating PAYE, NSSF, SHIF, Affordable Housing Levy, net salary and employer cost through a web application and REST API.",
    technologies: ["Python", "FastAPI", "Pydantic", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/kimtour/kenyan-payroll-system",
    liveUrl: "https://kenyan-payroll-system.onrender.com"
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
