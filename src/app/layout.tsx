import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar/TopBar";
import Logo from "./components/Logo/Logo";
import styles from "./layout.module.scss"
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Jezz Lucena",
  description: "An online portfolio, coded in NextJS",
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
        <>
          <TopBar />

          <div className={`${styles.header} ${styles.fixed}`}>
            <Logo />
          </div>

          <div className={`${styles.header} ${styles.relative}`}>
            <div className={`${styles.text}`}>
              <span>Jezz Lucena</span>
              <span className={`${styles.title}`}>Full Stack Engineer</span>
            </div>
          </div>
          
          {children}

          <Footer />
        </>
      </body>
    </html>
  );
}
