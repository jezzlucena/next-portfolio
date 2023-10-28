'use client'

import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';

export type PageType = 'about' | 'portfolio';

export default function Home() {
    const [selectedPage, setSelectedPage] = useState<PageType>("portfolio");
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {selectedPage === "portfolio" && <Portfolio />}
            {selectedPage === "about" && <AboutMe />}

            <NavigationBar
                selectedPage={selectedPage}
                onSelectPage={page => setSelectedPage(page)}
            />
        </main>
    )
}
