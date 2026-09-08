import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { TechnologyTag } from "@/components/ui/technology-tag";

export const metadata: Metadata = {
  title: "Software Engineering Projects",
  description: "Explore ClearClients fintech, payment, backend and AI projects, including an M-Pesa payment gateway, Kenyan payroll platform and graph machine-learning work.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return <main><section className="page-hero"><div className="container"><div className="eyebrow">PROJECTS</div><h1>Engineering Projects</h1><p>Working applications, APIs and machine-learning projects demonstrating how we design, build, test and deploy software.</p></div></section><section className="section section-soft"><div className="container project-grid">{projects.map(p=><article className="card project-card" key={p.title}><div className="category">{p.category}</div><h2 style={{fontSize:"1.8rem"}}>{p.title}</h2><p>{p.description}</p><div className="tags">{p.technologies.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div><a className="url" href={p.githubUrl}>{p.githubUrl}</a><div className="project-actions">{p.liveUrl?<a className="text-link" href={p.liveUrl}>Live Application ↗</a>:null}{p.apiDocsUrl?<a className="text-link" href={p.apiDocsUrl}>API Documentation ↗</a>:null}</div></article>)}</div></section></main>;
}
