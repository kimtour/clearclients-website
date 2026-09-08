import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="wordmark footer-wordmark"><span>Clear</span><strong>Clients</strong></div>
          <p>Fintech Software Engineering</p>
          <p className="muted-light">Payment APIs | Backend | Cloud | DevOps | AI</p>
        </div>
        <div><h3>Company</h3>{site.navigation.map((i) => <Link key={i.href} href={i.href}>{i.label}</Link>)}</div>
        <div><h3>Engineering</h3><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
        <div><h3>Services</h3><Link href="/services">Payment APIs</Link><Link href="/services">Fintech Software</Link><Link href="/services">Cloud Engineering</Link><Link href="/services">DevOps</Link><Link href="/services">AI Engineering</Link></div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} ClearClients. All rights reserved.</div>
    </footer>
  );
}
