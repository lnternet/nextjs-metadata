import type { Metadata } from "next";
import "./globals.css";
import ClientContextProviders from "./clientContextProviders";

export const metadata: Metadata = {
  title: "nextjs-metadata",
  description: "Test of metadata in Next.js",
  openGraph: {
    title: "nextjs-metadata",
    description: "Test of metadata in Next.js",
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
        <ClientContextProviders>{children}</ClientContextProviders>
      </body>
    </html>
  );
}
