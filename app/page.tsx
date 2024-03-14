'use client'

import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

export type PageType = 'about' | 'portfolio';

export default function Home() {
    const [selectedPage, setSelectedPage] = useState<PageType>("portfolio");
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 md:p-12 p-6 lg:mt-6 mt-24 w-full">
            {selectedPage === "portfolio" && <Portfolio />}
            {selectedPage === "about" && <AboutMe />}

            <NavigationBar
                selectedPage={selectedPage}
                onSelectPage={page => setSelectedPage(page)}
            />
            <Footer />
        </main>
    )
}
