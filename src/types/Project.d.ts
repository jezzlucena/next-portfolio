export type Project = {
  i18nKeys: {
    name: string;
    description: string;
    company: string;
    role: string;
  };
  year: number;
  platforms: string;
  stack: string;
  thumbImgUrl: string;
  thumbAspectRatio?: number;
  thumbVideoUrl?: string;
  thumbGifUrl?: string;
  behanceUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}