import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Discuss Your Software Project",
  description: "Contact ClearClients about fintech software, M-Pesa integrations, payment APIs, backend development, cloud engineering, DevOps or AI applications.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return <main><section className="page-hero"><div className="container"><div className="eyebrow">CONTACT</div><h1>Discuss Your Software Project</h1><p>Tell us what you need to build, integrate or modernize. Share the problem, technical requirements or existing system you are working with.</p></div></section><section className="section"><div className="container contact-grid"><div><h2>Project Scope</h2><p>ClearClients works across payment APIs, M-Pesa integrations, fintech applications, backend development, cloud engineering, DevOps and AI integration.</p><p>The information you provide helps define the appropriate engineering approach.</p></div><ContactForm /></div></section></main>;
}
