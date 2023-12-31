import { PortfolioProject } from "@/app/project";
import { NextApiRequest, NextApiResponse } from "next";

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
    {
        key: "multiverse",
        name: "Burning Man: Multiverse",
        companyName: "Celestial Bodies Camp",
        year: "2020",
        role: "Independent Collaborator",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript (ES6)", "HTML 5", "CSS 3"],
        description: "A socialy distanced and virtual 2020 simulation of what would happen on Playa.",
        thumbImgUrl: "/img/portfolio/multiverse/multiverse_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/multiverse/multiverse_thumb.mp4",
        videoLinkUrl: "https://youtu.be/niPZFy9t9b0",
        liveUrl: "https://multiverse.campcelestialbodies.org/"
    },
    {
        key: "climatempo",
        name: "Climatempo Forecast",
        companyName: "HXD Smart Solutions",
        year: "2012",
        role: "Full Stack Engineer (Intern)",
        platforms: ["Tizen (Samsung TVs)", "webOS (LG TVs)", "Web"],
        stack: ["JavaScript (ES6)", "XML", "JSON", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "The leading weather forecast cross-platform app in Brazil",
        thumbImgUrl: "/img/portfolio/climatempo/climatempo_thumb.jpg",
        thumbGifUrl: "/img/portfolio/climatempo/climatempo_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097271/Climatempo-Weather-Forecast",
    },
    {
        key: "dell",
        name: "Dell OME Training Game",
        companyName: "Kaon Interactive",
        year: "2018",
        role: "Lead Full Stack Engineer (Contract)",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["WebSockets", "SQLite", "JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "Dell's gamified experience to showcase their cutting-edge corporate server deployment application",
        thumbImgUrl: "/img/portfolio/dell/dell_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/dell/dell_thumb.mp4",
        thumbGifUrl: "/img/portfolio/dell/dell_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097417/Dell-OME-Gamified-Experience",
        videoLinkUrl: "https://youtu.be/McDy33GSPUM",
    },
    {
        key: "thermofisher",
        name: "Thermo Fisher Precision Medicine",
        companyName: "Kaon Interactive",
        year: "2018",
        role: "Lead Full Stack Engineer (Contract)",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "Thermo Fisher Scientific's Precision Medicine technology showcase app.",
        thumbImgUrl: "/img/portfolio/thermofisher/thermo_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/thermofisher/thermo_thumb.mp4",
        thumbGifUrl: "/img/portfolio/thermofisher/thermo_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097771/Thermo-Fisher-Precision-Medicine",
        videoLinkUrl: "https://youtu.be/JUgZ73YrFKs",
    },
    {
        key: "abbott",
        name: "Abbott Transformation",
        companyName: "Kaon Interactive",
        year: "2016",
        role: "Lead Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "i18n", "Gather Content"],
        description: "B2B sales showcase for Abbott Diagnostics' Transformation laboratory solutions.",
        thumbImgUrl: "/img/portfolio/abbott/abbott_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/abbott/abbott_thumb.mp4",
        thumbGifUrl: "/img/portfolio/abbott/abbott_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74096955/Abbott-Transformation",
        videoLinkUrl: "https://youtu.be/CLGU7GhBO0k",
    },
    {
        key: "strikeapose",
        name: "Strike A Pose",
        companyName: "Personal Project",
        year: "2020",
        role: "Lead Game Designer & Engineer",
        platforms: ["iOS", "Android", "Desktop", "Web"],
        stack: ["JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "Heroku"],
        description: "A dystopian rhythm action-adventure video game, but make it fashion.",
        thumbImgUrl: "/img/portfolio/strikeapose/strikeapose_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/strikeapose/strikeapose_thumb.mp4",
        videoLinkUrl: "https://youtu.be/zbpl4O8iWtE",
        liveUrl: "https://strike-a-pose.herokuapp.com/"
    },
    {
        key: "kaon",
        name: "Kaon.com",
        companyName: "Kaon Interactive",
        year: "2017",
        role: "Senior Full Stack Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["Ruby on Rails", "MongoDB", "JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "Kaon creates advanced software technology and platforms to enable global companies to simplify their complex stories at every customer touch-point",
        thumbImgUrl: "/img/portfolio/kaon/kaon_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/kaon/kaon_thumb.mp4",
        thumbGifUrl: "/img/portfolio/kaon/kaon_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74096433/Kaoncom",
        videoLinkUrl: "https://youtu.be/2RX7FPld2lI",
        liveUrl: "http://www.kaon.com/"
    },
    {
        key: "dxma",
        name: "DxMA '16 Catalog",
        companyName: "Kaon Interactive",
        year: "2016",
        role: "Full Stack Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "The digital catalog for DxMA's best B2B apps award ceremony",
        thumbImgUrl: "/img/portfolio/dxma/dxma_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/dxma/dxma_thumb.mp4",
        thumbGifUrl: "/img/portfolio/dxma/dxma_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097473/DxMA-Awards-Catalog",
        videoLinkUrl: "https://youtu.be/aQ6I_z8w9vo",
    },
    {
        key: "f5",
        name: "F5 Hybrid Cloud",
        companyName: "Kaon Interactive",
        year: "2016",
        role: "Full Stack Engineer",
        platforms: ["iOS", "Android", "Desktop",  "Web"],
        stack: ["JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "A showcase app for F5 Networks' best practices on cloud computing and security",
        thumbImgUrl: "/img/portfolio/f5/f5_thumb.jpg",
        thumbVideoUrl: "/img/portfolio/f5/f5_thumb.mp4",
        thumbGifUrl: "/img/portfolio/f5/f5_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097513/F5-Hybrid-Cloud",
        videoLinkUrl: "https://youtu.be/Bp1X9JAe0VE",
        liveUrl: "http://m.kaon.com/c/f5"
    },
    {
        key: "hyundai",
        name: "Hyundai HB20s Launch",
        companyName: "HXD Smart Solutions",
        year: "2013",
        role: "Full Stack Engineer",
        platforms: ["Tizen (Samsung TVs)", "webOS (LG TVs)", "Web"],
        stack: ["JavaScript (ES6)", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "Hyundai's marketing app for the launch of HB20 and HB20s new models in Brazil",
        thumbImgUrl: "/img/portfolio/hyundai/hyundai_thumb.jpg",
        thumbGifUrl: "/img/portfolio/hyundai/hyundai_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097571/Hyundai-HB20s-Launch",
    },
    {
        key: "photobooth",
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
    {
        key: "haystack",
        name: "In a Haystack",
        companyName: "Worcester Polytechnic Institute",
        year: "2016",
        role: "Lead Engineer and Game Designer",
        platforms: ["Desktop", "Web", "iOS"],
        stack: ["RPGMaker MV Script", "Game Design", "JavaScript (ES6)", "i18n"],
        description: "A graduate thesis proof-of-concept video game project implementation",
        thumbImgUrl: "/img/portfolio/in-a-haystack/haystack_thumb.jpg",
        thumbGifUrl: "/img/portfolio/in-a-haystack/haystack_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097641/In-a-Haystack",
        liveUrl: "http://www.jezzlucena.com/in-a-haystack/"
    },
    {
        key: "cocacola",
        name: "Coca-Cola FM",
        companyName: "HXD Smart Solutions",
        year: "2012",
        role: "Generalist Software Engineer (Intern)",
        platforms: ["webOS (LG TVs)", "Web"],
        stack: ["ActionScript 3", "XML", "UX/UI Design", "i18n"],
        description: "Coca-Cola FM's official Smart TV app in Latin America",
        thumbImgUrl: "/img/portfolio/coca-cola/coca_thumb.jpg",
        thumbGifUrl: "/img/portfolio/coca-cola/coca_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097365/Coca-Cola-FM",
    },
    {
        key: "pong4x",
        name: "Pong! 4X",
        companyName: "Independent Project",
        year: "2014",
        role: "Lead Engineer and Game Designer",
        platforms: ["Desktop"],
        stack: ["Processing 3", "Game Design", "UX/UI Design", "i18n"],
        description: "Proof-of-concept computer game that takes the classic Pong to a whole new hectic multiplayer experience",
        thumbImgUrl: "/img/portfolio/pong-4x/pong4x_thumb.jpg",
        thumbGifUrl: "/img/portfolio/pong-4x/pong4x_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097689/Pong-4X",
        githubUrl: "https://github.com/jezzlucena/pong_4x",
    },
    {
        key: "bandip",
        name: "Bandplay",
        companyName: "HXD Smart Solutions",
        year: "2013",
        role: "Full Stack Engineer",
        platforms: ["Tizen (Samsung TVs)", "webOS (LG TVs)", "Web"],
        stack: ["JavaScript (ES6)", "XML", "JSON", "HTML 5", "CSS 3", "UX/UI Design", "i18n"],
        description: "Band TV's leading video-on-demand multiplatform app in Brazil",
        thumbImgUrl: "/img/portfolio/band-ip/band_thumb.jpg",
        thumbGifUrl: "/img/portfolio/band-ip/band_0.gif",
        behanceUrl: "https://www.behance.net/gallery/74097179/Band-IP",
    }
];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json(PORTFOLIO_PROJECTS);
// }

import { MongoClient, ObjectId } from 'mongodb';
    
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = new MongoClient(process.env.MONGODB_URI || '');

    await client.connect();
    const db = client.db();

    switch (req.method) {
    case 'GET':
        const projects = await db.collection('projects').find({}).toArray();
        res.status(200).json(projects);
        break;
    case 'POST':
        const newProject = req.body;
        const postResult = await db.collection('projects').insertOne(newProject);
        res.status(201).json(postResult);
        break;
    case 'PUT':
        const { id, ...data } = req.body;
        const putResult = await db.collection('projects').updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );
        res.status(200).json(putResult);
        break;
    case 'DELETE':
        const deleteResult = await db.collection('projects').deleteOne({
            _id: new ObjectId(req.body.id),
        });
        res.status(200).json(deleteResult);
        break;
    }

    await client.close();
}