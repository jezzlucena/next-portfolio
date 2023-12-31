export type PortfolioProject = {
    _id?: string;
    key: string;
    name: string;
    companyName: string;
    year: string;
    role: string;
    platforms: string[];
    stack: string[];
    description: string;
    thumbImgUrl: string;
    thumbGifUrl?: string;
    thumbVideoUrl?: string;
    behanceUrl?: string;
    videoLinkUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
};