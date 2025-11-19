import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../config/fonts"; 

export const metadata: Metadata = {
  title: {
    template: '%s - Teslo | Shop',
    default: 'Home'
  },
  description: "A online shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
