import type { Metadata } from "next";
import "./globals.css";
import "./visual-refresh.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://clearclients.com"),
  title: { default: "ClearClients | Fintech Software Development, Payment APIs & Cloud Engineering", template: "%s | ClearClients" },
  description: "ClearClients builds fintech software, M-Pesa integrations, payment APIs, backend platforms, cloud applications and AI-enabled systems.",
  alternates: { canonical: "/" },
  openGraph: { title: "ClearClients | Fintech Software Engineering", description: "Payment APIs, fintech platforms, backend systems, cloud engineering, DevOps and AI-enabled software.", url: "https://clearclients.com", siteName: "ClearClients", type: "website" }
};

const structuredData = [
  { "@context": "https://schema.org", "@type": "Organization", name: "ClearClients", url: "https://clearclients.com", sameAs: ["https://github.com/kimtour", "https://www.linkedin.com/in/samuel-mutua-kimani/"] },
  { "@context": "https://schema.org", "@type": "Person", name: "Samuel Mutua Kimani", jobTitle: "Co-Founder & Chief Software Engineer", worksFor: { "@type": "Organization", name: "ClearClients" }, sameAs: ["https://github.com/kimtour", "https://www.linkedin.com/in/samuel-mutua-kimani/"] }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} /></body></html>;
}
