'use client'

import "./globals.css";
import TopBar from "./components/TopBar/TopBar";
import Logo from "./components/Logo/Logo";
import styles from "./layout.module.scss"
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import Head from "next/head";

const useHoveredOnTouch = () => {
  const handleTouch = (event: TouchEvent) => {
    for (const touch of event.touches) {
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      target?.classList.add('hovered');
    }
  };
  
  const handleTouchEnd = () => {
    setTimeout(() => {
      document.querySelectorAll('.hovered').forEach(elm => elm.classList.remove('hovered'));
    }, 100);
  };
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.addEventListener('touchstart', handleTouch);
    document.addEventListener('touchmove', handleTouch);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('touchmove', handleTouch);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    }
  });
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useHoveredOnTouch();

  useEffect(() => {
    if (typeof document !== 'undefined') document.title = 'Portfolio - Jezz Lucena';
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Portfolio - Jezz Lucena</title>
      </Head>
      <body
        className="antialiased"
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
