import type { Metadata } from "next";
import { Newsreader, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./hero.css";
import { ThemeProvider } from "@/lib/theme";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/seo";

// Display: Newsreader at regular weight (editorial serif, used for h1/h2).
// Body + UI: Geist, with Geist Mono for small technical labels.
const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const ogImage = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Muhammad Shahab",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Angular Developer",
    "Next.js Developer",
    "NestJS Developer",
    ".NET Developer",
    "AI Agent Orchestration",
    "Islamabad Pakistan Software Engineer",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImage],
  },
  // Deliberately no `icons` override here — app/favicon.ico's automatic
  // file-convention handling already emits a correctly basePath-prefixed
  // <link>; setting `icons.icon` to a plain "/favicon.ico" string would
  // silently override it with an unprefixed (and thus 404ing) path.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen font-[family-name:var(--font-body)] text-[16px] leading-[1.6]"
        suppressHydrationWarning
      >
        {/* Gates the one-time hero reveal on JS so no-JS visitors see the
            finished page. Runs before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
