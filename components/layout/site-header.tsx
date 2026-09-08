import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label="ClearClients home"><span>Clear</span><strong>Clients</strong></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{site.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <details className="mobile-menu"><summary>Menu</summary><nav aria-label="Mobile navigation">{site.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></details>
        <Link href="/contact" className="button button-gold header-cta">Discuss Your Project</Link>
      </div>
    </header>
  );
}
