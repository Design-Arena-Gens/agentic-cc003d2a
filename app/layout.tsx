import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viral YouTube Video Prompt Generator",
  description: "Generate eye-catching prompts for viral YouTube videos based on trending niches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
