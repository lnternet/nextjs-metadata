import "./globals.css";
import ClientContextProviders from "./clientContextProviders";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body>
        <ClientContextProviders>{children}</ClientContextProviders>
      </body>
    </html>
  );
}
