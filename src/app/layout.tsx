import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space_Grotesk_init = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-Space_Grotesk",
});

export const metadata: Metadata = {
  title: "MNA ServiceHub",
  description:
    "MNA ServiceHub acts as a centralized digital platform that enables all local service-related activities to be managed efficiently from a single place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-Space_Grotesk ${space_Grotesk_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
