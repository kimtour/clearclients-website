import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { TechnologyTag } from "@/components/ui/technology-tag";

export const metadata: Metadata = {
  title: "Software Engineering Services",
  description: "ClearClients provides fintech software development, payment API integration, backend engineering, cloud engineering, DevOps and AI software services.",
  alternates: { canonical: "/services" }
};

const delivery = [
  ["01", "Plan", "Requirements, transaction flows, constraints, risks and success criteria."],
  ["02", "Design", "Architecture, API contracts, data models, security controls and user flows."],
  ["03", "Build", "Backend services, interfaces, integrations, infrastructure and automation."],
  ["04", "Test", "Unit, API, integration, failure-path and security validation."],
  ["05", "Deploy", "CI/CD, containers, environment configuration and health checks."],
  ["06", "Operate", "Logs, monitoring, incident response, updates and performance improvements."]
] as const;

const showcaseTitles = ["Payment APIs & Gateways", "Backend & API Development", "Cloud Engineering", "AI Engineering"];

export default function ServicesPage() {
  const showcases = showcaseTitles.map(title => services.find(s => s.title === title)!);
  return <main>
    <section className="page-hero page-hero-fintech"><div className="container"><div className="eyebrow">FINTECH SOFTWARE SERVICES</div><h1>Engineering Around Real Product Flows</h1><p>ClearClients builds payment infrastructure, fintech applications, backend APIs, cloud systems, delivery pipelines and AI integrations around the way the software must actually operate.</p><Link className="button button-gold" href="/contact">Discuss Your Project</Link></div></section>

    <section className="section"><div className="container"><div className="showcase-stack">{showcases.map((s, index)=><article className={`service-showcase ${index % 2 ? "reverse" : ""}`} key={s.title}>
      <div className="visual-frame"><img src={s.visual} alt={`${s.title} product and engineering visual`} /></div>
      <div className="showcase-copy"><div className="eyebrow">SERVICE {String(index + 1).padStart(2,"0")}</div><h2>{s.title}</h2><p className="lead-copy">{s.description}</p>
        <div className="proof-triad"><div><small>PROBLEM</small><p>{s.problem}</p></div><div><small>SOLUTION</small><p>{s.solution}</p></div><div><small>PROOF</small><ul>{s.proof.map(x=><li key={x}>{x}</li>)}</ul></div></div>
        <div className="tags">{s.capabilities.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div><div className="links"><Link className="button button-gold" href="/contact">Discuss This Build</Link><Link className="button button-outline" href="/projects">See Project Proof</Link></div>
      </div>
    </article>)}</div></div></section>

    <section className="section section-soft"><div className="container"><div className="section-heading"><div className="eyebrow">ALL CAPABILITIES</div><h2>Software Engineering Services</h2><p>The full service set stays focused on software development and fintech delivery.</p></div><div className="service-grid">{services.map(s=><article className="card" key={s.title}><h3>{s.title}</h3><p>{s.description}</p><div className="tags">{s.capabilities.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></article>)}</div></div></section>

    <section className="section dark-section"><div className="container"><div className="section-heading section-heading-light"><div className="eyebrow">SOFTWARE DELIVERY</div><h2>SDLC From Requirement to Operation</h2><p>Each phase produces a concrete engineering output, so design decisions, code, tests and deployment stay connected.</p></div><div className="sdlc-grid">{delivery.map(([n,t,d])=><div className="sdlc-card" key={n}><div className="sdlc-number">{n}</div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="section final-cta"><div className="container"><h2>Have a Payment, Fintech or Backend Problem to Solve?</h2><p>Share the current system, required integration and expected outcome.</p><Link className="button button-gold" href="/contact">Discuss Your Project</Link></div></section>
  </main>;
}
