'use client'

import Image from 'next/image'
import { PortfolioProject } from './project';
import GridProject from './components/GridProject';
import { useState } from 'react';
import ProjectModal from './components/ProjectModal';
import NavigationBar from './components/NavigationBar';

const PORTFOLIO_PROJECTS: { [ id: string ]: PortfolioProject } = {
    "multiverse": {
        name: "Burning Man: Multiverse",
        companyName: "Celestial Bodies Camp",
        year: "2020",
        role: "Independent Collaborator",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript,ES6,HTML5,CSS3"],
        description: "A socialy distanced and virtual 2020 simulation of what would happen on Playa.",
        thumbImgUrl: "/img/portfolio/multiverse/multiverse_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/multiverse/multiverse_thumb.mp4",
        videoLinkUrl: "https://youtu.be/niPZFy9t9b0",
        liveUrl: "https://multiverse.campcelestialbodies.org/"
    },
    "climatempo": {
        name: "Climatempo Forecast",
        companyName: "HXD Smart Solutions",
        year: "2012",
        role: "Full Stack Engineer (Intern)",
        platforms: ["Tizen (Samsung TVs)", "webOS (LG TVs)", "Web"],
        stack: ["JavaScript,XML,JSON,ES6,HTML5,CSS3,UX/UI Design,i18n"],
        description: "The leading weather forecast cross-platform app in Brazil",
        thumbImgUrl: "/img/portfolio/climatempo/climatempo_thumb.jpg",
        thumbGifUrl: "/img/portfolio/climatempo/climatempo_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097271/Climatempo-Weather-Forecast",
    },
    "dell": {
        name: "Dell OME Training Game",
        companyName: "Kaon Interactive",
        year: "2018",
        role: "Lead Full Stack Engineer (Contract)",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["WebSockets,SQLite,JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n"],
        description: "Dell's gamified experience to showcase their cutting-edge corporate server deployment application",
        thumbImgUrl: "/img/portfolio/dell/dell_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/dell/dell_thumb.mp4",
        thumbGifUrl: "/img/portfolio/dell/dell_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097417/Dell-OME-Gamified-Experience",
        videoLinkUrl: "https://youtu.be/McDy33GSPUM",
    },
    "thermofisher": {
        name: "Thermo Fisher Precision Medicine",
        companyName: "Kaon Interactive",
        year: "2018",
        role: "Lead Full Stack Engineer (Contract)",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n"],
        description: "Thermo Fisher Scientific's Precision Medicine technology showcase app.",
        thumbImgUrl: "/img/portfolio/thermofisher/thermo_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/thermofisher/thermo_thumb.mp4",
        thumbGifUrl: "/img/portfolio/thermofisher/thermo_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097771/Thermo-Fisher-Precision-Medicine",
        videoLinkUrl: "https://youtu.be/JUgZ73YrFKs",
    },
    "abbott": {
        name: "Abbott Transformation",
        companyName: "Kaon Interactive",
        year: "2016",
        role: "Lead Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n,Gather Content"],
        description: "B2B sales showcase for Abbott Diagnostics' Transformation laboratory solutions.",
        thumbImgUrl: "/img/portfolio/abbott/abbott_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/abbott/abbott_thumb.mp4",
        thumbGifUrl: "/img/portfolio/abbott/abbott_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74096955/Abbott-Transformation",
        videoLinkUrl: "https://youtu.be/CLGU7GhBO0k",
    },
    "strikeapose": {
        name: "Strike A Pose",
        companyName: "Personal Project",
        year: "2020",
        role: "Lead Game Designer & Engineer",
        platforms: ["iOS", "Android", "Desktop", "Web"],
        stack: ["JavaScript,ES6,HTML5,CSS3,UX/UI Design,Heroku"],
        description: "A dystopian rhythm action-adventure video game, but make it fashion.",
        thumbImgUrl: "/img/portfolio/strikeapose/strikeapose_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/strikeapose/strikeapose_thumb.mp4",
        videoLinkUrl: "https://youtu.be/zbpl4O8iWtE",
        liveUrl: "https://strike-a-pose.herokuapp.com/"
    },
    "kaon": {
        name: "Kaon.com",
        companyName: "Kaon Interactive",
        year: "2017",
        role: "Senior Full Stack Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["Ruby on Rails,MongoDB,JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n"],
        description: "Kaon creates advanced software technology and platforms to enable global companies to simplify their complex stories at every customer touch-point",
        thumbImgUrl: "/img/portfolio/kaon/kaon_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/kaon/kaon_thumb.mp4",
        thumbGifUrl: "/img/portfolio/kaon/kaon_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74096433/Kaoncom",
        videoLinkUrl: "https://youtu.be/2RX7FPld2lI",
        liveUrl: "http://www.kaon.com/"
    },
    "dxma": {
        name: "DxMA '16 Catalog",
        companyName: "Kaon Interactive",
        year: "2016",
        role: "Full Stack Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n"],
        description: "The digital catalog for DxMA's best B2B apps award ceremony",
        thumbImgUrl: "/img/portfolio/dxma/dxma_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/dxma/dxma_thumb.mp4",
        thumbGifUrl: "/img/portfolio/dxma/dxma_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097473/DxMA-Awards-Catalog",
        videoLinkUrl: "https://youtu.be/aQ6I_z8w9vo",
    },
    "f5": {
        name: "F5 Hybrid Cloud",
        companyName: "Kaon Interactive",
        year: "2016",
        role: "Full Stack Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n"],
        description: "A showcase app for F5 Networks' best practices on cloud computing and security",
        thumbImgUrl: "/img/portfolio/f5/f5_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/f5/f5_thumb.mp4",
        thumbGifUrl: "/img/portfolio/f5/f5_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097513/F5-Hybrid-Cloud",
        videoLinkUrl: "https://youtu.be/Bp1X9JAe0VE",
        liveUrl: "http://m.kaon.com/c/f5"
    },
    "hyundai": {
        name: "Hyundai HB20s Launch",
        companyName: "HXD Smart Solutions",
        year: "2013",
        role: "Full Stack Engineer",
        platforms: ["Tizen (Samsung TVs)", "webOS (LG TVs)", "Web"],
        stack: ["JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n"],
        description: "Hyundai's marketing app for the launch of HB20 and HB20s new models in Brazil",
        thumbImgUrl: "/img/portfolio/hyundai/hyundai_thumb.jpg",
        thumbGifUrl: "/img/portfolio/hyundai/hyundai_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097571/Hyundai-HB20s-Launch",
    },
    "photobooth": {
        name: "Photobooth",
        companyName: "Personal Project",
        year: "2019",
        role: "Lead Designer & Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "A web application that snaps a picture when you smile. Machine Learning, AI, and Material Design included.",
        thumbImgUrl: "/img/portfolio/photobooth/photobooth_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/photobooth/photobooth_thumb.mp4",
        videoLinkUrl: "https://youtu.be/N8bxdOAP8Aw",
        liveUrl: "https://face-api-photobooth.herokuapp.com/"
    },
    "haystack": {
        name: "In a Haystack",
        companyName: "Worcester Polytechnic Institute",
        year: "2016",
        role: "Lead Engineer and Game Designer",
        platforms: ["Desktop", "Web", "iOS"],
        stack: ["RPGMaker MV Script,Game Design,JavaScript,JSON,ES6,i18n"],
        description: "A graduate thesis proof-of-concept video game project implementation",
        thumbImgUrl: "/img/portfolio/in-a-haystack/haystack_thumb.jpg",
        thumbGifUrl: "/img/portfolio/in-a-haystack/haystack_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097641/In-a-Haystack",
        liveUrl: "http://www.jezzlucena.com/in-a-haystack/"
    },
    "cocacola": {
        name: "Coca-Cola FM",
        companyName: "HXD Smart Solutions",
        year: "2012",
        role: "Generalist Software Engineer (Intern)",
        platforms: ["webOS (LG TVs)", "Web"],
        stack: ["ActionScript 3,XML,UX/UI Design,i18n"],
        description: "Coca-Cola FM's official Smart TV app in Latin America",
        thumbImgUrl: "/img/portfolio/coca-cola/coca_thumb.jpg",
        thumbGifUrl: "/img/portfolio/coca-cola/coca_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097365/Coca-Cola-FM",
    },
    "pong4x": {
        name: "Pong! 4X",
        companyName: "Independent Project",
        year: "2014",
        role: "Lead Engineer and Game Designer",
        platforms: ["Desktop"],
        stack: ["Processing 3,Game Design,UX/UI Design,i18n"],
        description: "Proof-of-concept computer game that takes the classic Pong to a whole new hectic multiplayer experience",
        thumbImgUrl: "/img/portfolio/pong-4x/pong4x_thumb.jpg",
        thumbGifUrl: "/img/portfolio/pong-4x/pong4x_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097689/Pong-4X",
        githubUrl: "https://github.com/jezzlucena/pong_4x",
    },
    "bandip": {
        name: "Bandplay",
        companyName: "HXD Smart Solutions",
        year: "2013",
        role: "Full Stack Engineer",
        platforms: ["Tizen (Samsung TVs)", "webOS (LG TVs)", "Web"],
        stack: ["JavaScript,XML,JSON,ES6,HTML5,CSS3,UX/UI Design,i18n"],
        description: "Band TV's leading video-on-demand multiplatform app in Brazil",
        thumbImgUrl: "/img/portfolio/band-ip/band_thumb.jpg",
        thumbGifUrl: "/img/portfolio/band-ip/band_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097179/Band-IP",
    }
};

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<PortfolioProject>();
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full text-right">by Jezz Lucena</div>
        
            <div className="mt-1 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/logo.png"
                    alt="Logo"
                    width={280}
                    height={280}
                    priority
                />
            </div>
        
            <div className="mt-10 mb-32 grid text-center md:text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 md:grid-cols-2 lg:text-left">
                {Object.entries(PORTFOLIO_PROJECTS).map(
                    ([key, project]) => {
                        return (
                            <GridProject
                                project={project}
                                key={key}
                                onClick={() => setSelectedProject(project)}
                            />
                        );
                    }
                )}
            </div>

            <NavigationBar />
            
            {selectedProject ? 
                <ProjectModal
                project={selectedProject} 
                onClose={() => setSelectedProject(undefined)}
                />
                : null
            }
        </main>
    )
}
