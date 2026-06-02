import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyJournal - Your Private Space to Reflect & Grow",
  description:
    "Track moods, write daily thoughts, and build healthy journaling habits with complete privacy. MyJournal is a beautiful, minimal journaling and mood tracking app for your personal wellness.",
  keywords: [
    "journal app",
    "private diary",
    "mood tracker",
    "daily journal",
    "diary with lock",
    "journaling app",
    "mood tracking",
    "personal diary",
    "private journal",
    "wellness app",
  ],
  authors: [{ name: "MyJournal" }],
  creator: "MyJournal",
  publisher: "MyJournal",
  metadataBase: new URL("https://myjournal.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myjournal.app",
    title: "MyJournal - Your Private Space to Reflect & Grow",
    description:
      "Track moods, write daily thoughts, and build healthy journaling habits with complete privacy.",
    siteName: "MyJournal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyJournal - Private Journaling App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyJournal - Your Private Space to Reflect & Grow",
    description:
      "Track moods, write daily thoughts, and build healthy journaling habits with complete privacy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://myjournal.app",
  },
  icons: {
    icon: "/assets/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5b79ff" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
