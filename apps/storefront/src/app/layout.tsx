import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Bowl Theory — Comfort, composed.",
  description: "Thoughtful rice bowls inspired by the flavours of home. Explore The Bowl Theory menu.",
  applicationName: "The Bowl Theory",
  openGraph: {
    title: "The Bowl Theory",
    description: "Comfort, composed.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
