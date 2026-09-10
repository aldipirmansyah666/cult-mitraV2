import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import ScrollToTop from "@/components/ui/ScrollToTop";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = { themeColor: "#001444" };

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Partner Usaha | Daftar Gratis`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Partner Usaha`,
    description: siteConfig.description,
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "Cult Mitra" }],
  },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} — Partner Usaha`, description: siteConfig.description, images: ["/images/og-default.png"] },
  robots: { index: true, follow: true },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cultmitra.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cult Mitra",
  url: siteUrl,
  logo: `${siteUrl}/images/brand/logo-cultxcum.png`,
  description: siteConfig.description,
  contactPoint: { "@type": "ContactPoint", telephone: "+62-851-7323-1909", contactType: "customer service", email: "cultmitra@gmail.com", availableLanguage: ["Indonesian"] },
};

const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "Cult Mitra", url: siteUrl, inLanguage: "id-ID" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
