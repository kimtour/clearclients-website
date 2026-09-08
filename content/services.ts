export type Service = {
  title: string;
  description: string;
  capabilities: readonly string[];
  problem: string;
  solution: string;
  proof: readonly string[];
  visual: string;
};

export const services: readonly Service[] = [
  {
    title: "Payment APIs & Gateways",
    description: "Build payment services and integrations for M-Pesa, mobile money, financial platforms and digital applications.",
    capabilities: ["M-Pesa", "Daraja", "STK Push", "Webhooks", "Idempotency", "Reconciliation"],
    problem: "Payment products often become fragile when transaction initiation, callbacks, retries and reconciliation are handled as separate pieces.",
    solution: "We engineer the payment flow as one system, from API contracts and transaction states through callbacks, validation and operational controls.",
    proof: ["M-Pesa gateway live application", "Interactive API documentation", "Webhook and callback handling", "Automated CI/CD deployment"],
    visual: "/visuals/payments.svg"
  },
  {
    title: "Fintech Applications",
    description: "Develop financial platforms, transaction systems, payroll applications, reporting tools and operational software.",
    capabilities: ["Payments", "Transactions", "Payroll", "Reporting", "Dashboards"],
    problem: "Disconnected workflows and manual financial processes create operational friction and make product changes expensive.",
    solution: "We build focused fintech applications around the actual transaction, reporting and administration workflows the product needs.",
    proof: ["Payment application demos", "Kenyan payroll application", "Transaction dashboards", "Production-ready API architecture"],
    visual: "/visuals/home.svg"
  },
  {
    title: "Backend & API Development",
    description: "Design and build secure REST APIs, backend services, microservices and enterprise integrations.",
    capabilities: ["Python", "FastAPI", "Java", "Spring Boot", "Node.js", "PostgreSQL"],
    problem: "Frontend products cannot remain reliable when core business rules, integrations and data access are tightly coupled or poorly tested.",
    solution: "We design API-first backend services with clear contracts, validation, service boundaries, database models and automated tests.",
    proof: ["FastAPI production projects", "JWT-protected banking API", "Swagger/OpenAPI documentation", "Automated API test suites"],
    visual: "/visuals/backend.svg"
  },
  {
    title: "Cloud Engineering",
    description: "Design and deploy applications and infrastructure on modern cloud platforms with security and reliability in mind.",
    capabilities: ["Microsoft Azure", "AWS", "Containers", "Networking", "Monitoring"],
    problem: "Applications become difficult to operate when deployment, infrastructure and monitoring depend on undocumented manual steps.",
    solution: "We structure cloud environments around repeatable deployments, containerized workloads, health checks, logging and operational visibility.",
    proof: ["Containerized deployments", "Infrastructure configuration in source control", "Health checks", "Cloud-hosted portfolio applications"],
    visual: "/visuals/cloud.svg"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automate software delivery through repeatable build, test, deployment and infrastructure workflows.",
    capabilities: ["GitHub Actions", "GitLab CI", "Jenkins", "Docker", "Kubernetes", "Terraform"],
    problem: "Manual release steps slow delivery and allow defects or configuration drift to reach production.",
    solution: "We connect source control, automated testing, container builds and deployment checks into a repeatable delivery pipeline.",
    proof: ["GitHub Actions pipelines", "Docker build verification", "Post-deployment smoke tests", "Automated release workflows"],
    visual: "/visuals/cloud.svg"
  },
  {
    title: "AI Engineering",
    description: "Integrate modern AI capabilities into software products, engineering workflows and operational systems.",
    capabilities: ["OpenAI", "ChatGPT", "Codex", "Claude", "Gemini", "LLMOps"],
    problem: "AI features fail when they sit outside the product workflow, lack review controls or cannot connect safely to business data and tools.",
    solution: "We integrate AI as a controlled application layer with prompts, APIs, human review, validation and production workflows.",
    proof: ["LLM evaluation workflows", "Multi-model integrations", "AI-assisted automation", "Human-reviewed output patterns"],
    visual: "/visuals/ai.svg"
  }
] as const;
