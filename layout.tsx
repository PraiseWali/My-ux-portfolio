import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Your Name — UX Designer",
    template: "%s — Your Name",
  },
  description:
    "UX Designer crafting intentional, human-centred digital experiences.",
  openGraph: {
    title: "Your Name — UX Designer",
    description: "UX Designer crafting intentional, human-centred digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
