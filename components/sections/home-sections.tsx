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
  const featuredProjects = projects.filter(p => p.featured);
  return <>
    <section className="hero hero-fintech"><div className="container hero-grid">
      <div><div className="eyebrow">FINTECH SOFTWARE ENGINEERING</div><h1>Build What Moves Money.</h1><p>ClearClients builds secure payment APIs, fintech applications, backend systems and cloud delivery workflows around real transaction flows.</p><div className="hero-actions"><Link className="button button-gold" href="/contact">Discuss Your Project</Link><Link className="button button-outline" href="/projects">See Project Proof</Link></div><div className="proof-chips"><span>✓ Live applications</span><span>✓ Public source code</span><span>✓ API documentation</span><span>✓ Automated delivery</span></div></div>
      <div className="visual-frame hero-visual"><img src="/visuals/home.svg" alt="ClearClients fintech engineering dashboard with payment API and M-Pesa flow" /></div>
    </div></section>

    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="SOFTWARE ENGINEERING SERVICES" title="Specific Engineering for Specific Product Problems" body="Each service starts with the operational problem, then connects architecture, implementation and deployment to measurable proof in working software."/><div className="service-grid">{services.map(s=><article className="card service-card" key={s.title}><h3>{s.title}</h3><p>{s.description}</p><div className="mini-proof"><strong>Problem</strong><span>{s.problem}</span></div><div className="tags">{s.capabilities.slice(0,4).map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></article>)}</div><div className="section-action"><Link className="button button-outline" href="/services">Explore Services</Link></div></div></section>

    <section className="section dark-section"><div className="container feature-grid"><div className="visual-frame dark-visual"><img src={featured.visual} alt={`${featured.title} payment engineering visual`} /></div><div className="project-copy"><div className="eyebrow">FEATURED ENGINEERING PROJECT</div><h2>{featured.title}</h2><p>{featured.description}</p><div className="case-block dark-case"><small>PROBLEM</small><p>{featured.problem}</p></div><div className="case-block dark-case"><small>SOLUTION</small><p>{featured.solution}</p></div><div className="proof-chips dark-chips">{featured.proof?.map(x=><span key={x}>✓ {x}</span>)}</div><div className="links"><a className="button button-gold" href={featured.liveUrl}>Live Application</a><a className="button button-outline-light" href={featured.apiDocsUrl}>API Documentation</a></div></div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="PROJECT PROOF" title="Working Applications Across Payments, Banking and Payroll" body="The strongest proof is a system you can open, inspect and trace from user flow through API and deployment."/><div className="project-grid proof-project-grid">{featuredProjects.map(p=><article className="card project-card" key={p.title}><div className="project-thumb"><img src={p.visual} alt={`${p.title} project preview`} /></div><div className="category">{p.category}</div><h3>{p.title}</h3><p>{p.description}</p><div className="proof-chips compact">{p.proof?.slice(0,3).map(x=><span key={x}>✓ {x}</span>)}</div><div className="project-actions">{p.liveUrl?<a className="text-link" href={p.liveUrl}>Live Application ↗</a>:null}<Link className="text-link" href="/projects">Case Study →</Link></div></article>)}</div></div></section>

    <section className="section section-soft"><div className="container"><SectionHeading eyebrow="PAYMENT ENGINEERING" title="Software Built Around the Full Transaction Flow" body="Payment reliability depends on validation, states, callbacks, retries, reconciliation and operational visibility working together."/><div className="flow-grid">{["CUSTOMER","APPLICATION","PAYMENT API","M-PESA","CALLBACK","TRANSACTION STATE","RECONCILIATION"].map((x,i)=><span key={x} style={{display:"contents"}}><div className="flow-node">{x}</div>{i<6?<div className="flow-arrow">→</div>:null}</span>)}</div></div></section>

    <section className="section dark-section"><div className="container"><SectionHeading light eyebrow="SOFTWARE DELIVERY" title="How We Build" body="The SDLC keeps requirements, architecture, code, tests and production operation connected."/><div className="sdlc-grid">{sdlc.map(([n,t,d])=><div className="sdlc-card" key={n}><div className="sdlc-number">{n}</div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="ENGINEERING STACK" title="Technologies We Build With" body="Application development, cloud infrastructure, software delivery and artificial intelligence sit in one engineering stack."/><div className="stack-grid">{technologyGroups.map(g=><div className="stack-group" key={g.title}><h3>{g.title}</h3><div className="tags">{g.items.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></div>)}</div></div></section>

    <section className="section section-soft"><div className="container founder-grid"><div className="founder-panel"><small>ENGINEERING LEADERSHIP</small><h2>Samuel Mutua Kimani</h2><p>Co-Founder & Chief Software Engineer</p></div><div><h2>Software, Cloud and AI Engineering Leadership</h2><p>Experience spans system administration, cloud engineering, software development, DevOps and AI/ML operations, with current work centered on backend APIs, fintech software, deployment automation and AI integration.</p><p><strong>Master of Science in Artificial Intelligence</strong><br/>The Open University of Kenya, Sep 2026 - Dec 2027</p><div className="links"><a className="button button-outline" href={site.linkedin}>LinkedIn</a><a className="button button-outline" href={site.github}>GitHub</a></div></div></div></section>

    <section className="section dark-section final-cta"><div className="container"><h2>Need a Payment API, Fintech Platform or Backend System?</h2><p>Share what needs to be built, integrated or modernized.</p><Link className="button button-gold" href="/contact">Discuss Your Project</Link></div></section>
  </>;
}
