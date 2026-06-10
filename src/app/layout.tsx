import type { Metadata } from "next";
import { Orbitron, Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--orbitron", display: "swap" });
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--rajdhani",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sufyanpubg.vercel.app"),
  title: {
    default: "Sufyan | Professional PUBG Player & Esports Athlete — Pakistan",
    template: "%s | Sufyan PUBG",
  },
  description:
    "Official portfolio of Sufyan — elite PUBG Mobile player from Pakistan. Explore K/D stats, top highlights, ranked achievements and competitive gameplay from one of Pakistan's rising esports talents.",
  keywords: [
    "PUBG player Pakistan",
    "PUBG Mobile Pakistan",
    "professional PUBG",
    "PUBG portfolio",
    "PUBG esports Pakistan",
    "Sufyan PUBG",
    "PUBG Mobile highlights",
    "PUBG stats Pakistan",
    "Pakistani gamer",
    "PUBG Mobile pro player",
    "competitive gaming Pakistan",
    "esports Pakistan",
    "best PUBG player Pakistan",
    "PUBG Mobile Gold rank",
    "PUBG squad player",
  ],
  authors: [{ name: "Sufyan", url: "https://sufyanpubg.vercel.app" }],
  creator: "Sufyan",
  publisher: "Sufyan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_PK",
    url: "https://sufyanpubg.vercel.app",
    siteName: "Sufyan PUBG Portfolio",
    title: "Sufyan | Professional PUBG Player & Esports Athlete",
    description:
      "Elite PUBG Mobile player from Pakistan. K/D 4.2, 18% win rate, 2800+ kills. Official portfolio with highlights, stats & achievements.",
    images: [
      {
        url: "/image/pubgprofile.png",
        width: 1200,
        height: 630,
        alt: "Sufyan — Professional PUBG Player from Pakistan",
      },
    ],
    firstName: "Sufyan",
    username: "SufyanPUBG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sufyan | Professional PUBG Player from Pakistan",
    description: "Elite PUBG Mobile player from Pakistan. K/D 4.2, 18% win rate, 2800+ kills.",
    images: ["/image/pubgprofile.png"],
  },
  alternates: { canonical: "https://sufyanpubg.vercel.app" },
  category: "Gaming",
  other: {
    "google-site-verification": "Z0fvaHcvyEB79_KwGKEauHA7ziTGWPEHkzSGtrHLSxA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sufyanpubg.vercel.app/#person",
      name: "Sufyan",
      alternateName: ["SufyanPUBG", "SufyanDev"],
      description:
        "Professional PUBG Mobile player from Pakistan known for precision aiming, tactical squad leadership, and aggressive gameplay.",
      url: "https://sufyanpubg.vercel.app",
      image: {
        "@type": "ImageObject",
        url: "https://sufyanpubg.vercel.app/image/pubgprofile.png",
        width: 800,
        height: 800,
        caption: "Sufyan — Professional PUBG Player",
      },
      nationality: { "@type": "Country", name: "Pakistan" },
      knowsAbout: ["PUBG Mobile", "Battle Royale", "Esports", "Competitive Gaming", "FPS Games"],
      jobTitle: "Professional PUBG Mobile Player",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://sufyanpubg.vercel.app/#website",
      url: "https://sufyanpubg.vercel.app",
      name: "Sufyan PUBG Portfolio",
      description: "Official portfolio of Sufyan, professional PUBG Mobile player from Pakistan",
      publisher: { "@id": "https://sufyanpubg.vercel.app/#person" },
      inLanguage: "en-PK",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://sufyanpubg.vercel.app/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      url: "https://sufyanpubg.vercel.app",
      name: "Sufyan — PUBG Player Portfolio",
      isPartOf: { "@id": "https://sufyanpubg.vercel.app/#website" },
      mainEntity: { "@id": "https://sufyanpubg.vercel.app/#person" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://sufyanpubg.vercel.app" },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-PK"
      className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#ffd700" />
        <meta name="msapplication-TileColor" content="#080808" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080808] text-white antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
