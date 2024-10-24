import type { Metadata } from "next";
import localFont from "next/font/local";
import '@fontsource-variable/rubik'; 
import '@fontsource-variable/geologica';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mario Santacruz | Ingeniero de software",
  description: "Estudiante de ingenieria de software con metas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-rubik antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
