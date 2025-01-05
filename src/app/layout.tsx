import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "./__component/container";
import Navbar from "./__component/navbar";
import ClientOnly from "./__component/client-only";
import Footer from "./__component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exclude E-commers",
  description: "Full E Commerce Website UI UX Design by MD Rimel (@mdrimel15)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* LAYOUT UI */}
        <ClientOnly>
          <Navbar />
          <Container className="min-h-screen  py-2 bg-zinc-50">
            {children}
          </Container>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
