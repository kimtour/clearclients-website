import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { TechnologyTag } from "@/components/ui/technology-tag";

export const metadata: Metadata = {
  title: "Software Engineering Services",
  description: "ClearClients provides fintech software development, payment API integration, backend engineering, cloud engineering, DevOps and AI software services.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return <main><section className="page-hero"><div className="container"><div className="eyebrow">SERVICES</div><h1>Software Engineering Services</h1><p>Fintech, payment, backend, cloud and AI systems engineered around real operational requirements.</p><Link className="button button-gold" href="/contact">Discuss Your Project</Link></div></section><section className="section"><div className="container service-grid">{services.map((s)=><article className="card" key={s.title}><h2 style={{fontSize:"1.8rem"}}>{s.title}</h2><p>{s.description}</p><div className="tags">{s.capabilities.map(x=><TechnologyTag key={x}>{x}</TechnologyTag>)}</div></article>)}</div></section></main>;
}
