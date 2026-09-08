import Link from "next/link";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { technologyGroups } from "@/content/technologies";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnologyTag } from "@/components/ui/technology-tag";

const sdlc = [
  ["01", "Plan", "Requirements, scope, risks and success criteria."],
  ["02", "Design", "Architecture, API contracts, data models and UI/UX."],
  ["03", "Build", "Frontend, backend, integrations and infrastructure."],
  ["04", "Test", "Unit, API, integration and security validation."],
  ["05", "Deploy", "CI/CD, containers, cloud and health checks."],
  ["06", "Operate", "Monitoring, logs, incidents, updates and performance."]
] as const;

export function HomeSections() {
  const featured = projects[0];
  return <>
    <section className="hero"><div className="container hero-grid">
      <div><div className="eyebrow">FINTECH SOFTWARE ENGINEERING</div><h1>Fintech Software.<br/>Payment Infrastructure.<br/>Cloud Engineering.</h1><p>ClearClients designs and builds secure payment APIs, fintech platforms, backend systems, cloud applications and AI-enabled software.</p><div className="hero-actions"><Link className="button button-gold" href="/contact">Discuss Your Project</Link><Link className="button button-outline-light" href="/projects">View Projects</Link></div><div className="tags">{["Python","Java","FastAPI","Azure","AWS","Docker","Kubernetes","OpenAI"].map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></div>
      <div className="payment-console"><div className="console-top"><strong>PAYMENT API</strong><span className="console-status">● API HEALTHY</span></div><div className="console-field">POST /api/payments/stk-push</div><div className="console-field">phone: 0712 345 678</div><div className="console-field">amount: KES 1,500</div><div className="console-field">reference: INV-2048</div><div className="console-flow"><div>REQUEST</div><div>PENDING</div><div>CALLBACK</div><div>COMPLETED</div></div></div>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="ENGINEERING STACK" title="Built With Modern Production Technologies" body="We use proven software, cloud, DevOps and AI technologies to build systems that are maintainable, testable and ready for deployment."/><div className="tags">{["Python","Java","JavaScript","TypeScript","FastAPI","Spring Boot","React","Azure","AWS","Docker","Kubernetes","Terraform","OpenAI","ChatGPT","Codex","Claude","Gemini","MLOps"].map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></div></section>

    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="SOFTWARE ENGINEERING SERVICES" title="What We Build" body="Software designed around real transaction flows, APIs, business logic, infrastructure and operational requirements."/><div className="service-grid">{services.map(s=><article className="card" key={s.title}><h3>{s.title}</h3><p>{s.description}</p><div className="tags">{s.capabilities.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></article>)}</div></div></section>

    <section className="section dark-section"><div className="container feature-grid"><div className="project-shot"><div className="dashboard-row"><div className="dashboard-stat"><span>TRANSACTIONS</span><b>128</b></div><div className="dashboard-stat"><span>SUCCESS RATE</span><b>96.8%</b></div><div className="dashboard-stat"><span>VALUE</span><b>KES 284K</b></div></div><div className="dashboard-table"><div className="fake-line gold"></div>{[1,2,3,4,5,6].map(i=><div className="fake-line" key={i} style={{width: `${90-i*6}%`}}></div>)}</div></div><div className="project-copy"><div className="eyebrow">FEATURED ENGINEERING PROJECT</div><h2>{featured.title}</h2><p>A production-structured payment service demonstrating the complete M-Pesa transaction lifecycle through APIs, callbacks, transaction states and operational controls.</p><div className="tags">{featured.technologies.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div><a className="url" href={featured.githubUrl}>{featured.githubUrl}</a><div className="links"><a className="button button-gold" href={featured.liveUrl}>Live Application</a><a className="button button-outline-light" href={featured.apiDocsUrl}>API Documentation</a></div></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="PAYMENT ENGINEERING" title="Software Built Around Real Transaction Flows" body="Payment systems require reliable validation, state management, callbacks, retries, reconciliation and operational visibility. ClearClients designs these controls into the software architecture from the beginning."/><div className="flow-grid">{["CUSTOMER","APPLICATION","PAYMENT API","M-PESA","CALLBACK","TRANSACTION STATE","RECONCILIATION"].map((x,i)=><span key={x} style={{display:"contents"}}><div className="flow-node">{x}</div>{i<6?<div className="flow-arrow">→</div>:null}</span>)}</div></div></section>

    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="PROJECTS" title="Working Software. Public Source Code." body="Our projects demonstrate how we approach architecture, APIs, business logic, automated testing, CI/CD and cloud deployment."/><div className="project-grid">{projects.map(p=><article className="card project-card" key={p.title}><div className="category">{p.category}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.technologies.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div><a className="url" href={p.githubUrl}>{p.githubUrl}</a><div className="project-actions">{p.liveUrl?<a className="text-link" href={p.liveUrl}>Live Application ↗</a>:null}{p.apiDocsUrl?<a className="text-link" href={p.apiDocsUrl}>API Docs ↗</a>:null}</div></article>)}</div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="ENGINEERING STACK" title="Technologies We Build With" body="Our engineering stack covers application development, cloud infrastructure, software delivery and artificial intelligence."/><div className="stack-grid">{technologyGroups.map(g=><div className="stack-group" key={g.title}><h3>{g.title}</h3><div className="tags">{g.items.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></div>)}</div></div></section>

    <section className="section dark-section"><div className="container"><SectionHeading light eyebrow="SOFTWARE DELIVERY" title="How We Build" body="Clear engineering processes improve maintainability, reduce deployment risk and make software easier to test, deploy and operate."/><div className="sdlc-grid">{sdlc.map(([n,t,d])=><div className="sdlc-card" key={n}><div className="sdlc-number">{n}</div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="section"><div className="container ai-grid"><div><SectionHeading eyebrow="AI ENGINEERING" title="AI Integrated Into Production Software" body="ClearClients applies AI where it improves software products, engineering workflows, automation and operational systems."/><div className="tags">{["OpenAI","ChatGPT","Codex","Claude","Gemini","LLM APIs","AI Agents","MLOps","LLMOps","Model Evaluation"].map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></div><div className="ai-arch"><div className="ai-layer">APPLICATION</div><div className="ai-layer">AI SERVICE LAYER</div><div className="ai-models"><div className="ai-layer">OpenAI</div><div className="ai-layer">Claude</div><div className="ai-layer">Gemini</div></div><div className="ai-layer">TOOLS + DATA</div></div></div></section>

    <section className="section section-soft"><div className="container founder-grid"><div className="founder-panel"><small>ENGINEERING LEADERSHIP</small><h2>Samuel Mutua Kimani</h2><p>Co-Founder & Chief Software Engineer</p></div><div><h2>Software, Cloud and AI Engineering Leadership</h2><p>Samuel is a Computer Science professional whose experience spans system administration, cloud engineering, cloud architecture, software development, DevOps and AI/ML operations. His work includes backend APIs, payment systems, cloud deployment, automation, containerization and LLM evaluation.</p><p><strong>Master of Science in Artificial Intelligence</strong><br/>The Open University of Kenya, Sep 2026 - Dec 2027</p><div className="career-flow">{["Systems","Cloud","Architecture","Software","DevOps","AI/ML Ops"].map(x=><span key={x}>{x}</span>)}</div><div className="links"><a className="button button-outline" href={site.linkedin}>LinkedIn</a><a className="button button-outline" href={site.github}>GitHub</a></div></div></div></section>

    <section className="section dark-section final-cta"><div className="container"><h2>Need a Payment API, Fintech Platform or Cloud Application?</h2><p>Tell us what you need to build, integrate or modernize.</p><Link className="button button-gold" href="/contact">Discuss Your Project</Link></div></section>
  </>;
}
