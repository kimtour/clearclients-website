import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { TechnologyTag } from "@/components/ui/technology-tag";

export const metadata: Metadata = {
  title: "Software Engineering Projects",
  description: "Explore ClearClients fintech, payment, backend and AI projects, including M-Pesa payment infrastructure, banking APIs and Kenyan payroll software.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  const featured = projects.filter(p => p.featured);
  const more = projects.filter(p => !p.featured);
  return <main>
    <section className="page-hero page-hero-fintech"><div className="container"><div className="eyebrow">ENGINEERING PROOF</div><h1>Working Software, Not Capability Claims</h1><p>These projects show the APIs, business rules, test paths, deployment workflows and operational controls behind the services ClearClients offers.</p><Link className="button button-gold" href="/contact">Discuss Your Project</Link></div></section>

    <section className="section"><div className="container showcase-stack">{featured.map((p,index)=><article className={`project-case-study ${index % 2 ? "reverse" : ""}`} key={p.title}>
      <div className="visual-frame"><img src={p.visual} alt={`${p.title} software project visual`} /></div>
      <div className="showcase-copy"><div className="category">{p.category}</div><h2>{p.title}</h2><p className="lead-copy">{p.description}</p>
        <div className="case-block"><small>PROBLEM</small><p>{p.problem}</p></div><div className="case-block"><small>SOLUTION</small><p>{p.solution}</p></div>
        <div className="case-block"><small>PROOF</small><div className="proof-chips">{p.proof?.map(x=><span key={x}>✓ {x}</span>)}</div></div>
        <div className="tags">{p.technologies.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div>
        <div className="links">{p.liveUrl?<a className="button button-gold" href={p.liveUrl}>Live Application</a>:null}{p.apiDocsUrl?<a className="button button-outline" href={p.apiDocsUrl}>API Documentation</a>:null}<a className="button button-outline" href={p.githubUrl}>GitHub Source</a></div>
      </div>
    </article>)}</div></section>

    <section className="section section-soft"><div className="container"><div className="section-heading"><div className="eyebrow">MORE ENGINEERING WORK</div><h2>Additional Projects</h2><p>Supporting work across full-stack payment interfaces and machine learning.</p></div><div className="project-grid">{more.map(p=><article className="card project-card" key={p.title}><div className="category">{p.category}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.technologies.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div><div className="project-actions"><a className="text-link" href={p.githubUrl}>GitHub Source ↗</a></div></article>)}</div></div></section>

    <section className="section dark-section final-cta"><div className="container"><h2>Need Similar Engineering for Your Product?</h2><p>Bring the payment flow, API requirement, backend problem or cloud workload.</p><Link className="button button-gold" href="/contact">Discuss Your Project</Link></div></section>
  </main>;
}
