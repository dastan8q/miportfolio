import type { Metadata } from "next";
import localFont from "next/font/local";
import '@fontsource-variable/rubik'; 
import '@fontsource-variable/geologica';
import "./globals.css";
import { Providers } from "./providers";

const geologicaRegular = localFont({
  src: "./fonts/Geologica/Geologica-Regular.ttf",
  variable: "--font-geologica-regular",
  weight: "400",
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
        className={`${geologicaRegular.variable} ${geistMono.variable} font-rubik antialiased`}
      >
       <Providers> {children} </Providers>

      </body>
    </html>
  );
}
