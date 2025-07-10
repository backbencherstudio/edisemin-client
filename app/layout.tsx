import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const cabinetGrotesk = localFont({
  src: "../public/fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
});

export const metadata: Metadata = {
  title: "Edisemin",
  description: "Edisemin",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cabinetGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
