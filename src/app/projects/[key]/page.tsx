import PROJECTS from '../../json/projects'
import type { Project } from '../../types/Project';
import { notFound } from 'next/navigation';
import styles from "./Project.module.scss"
import Heading from '@/app/components/Heading/Heading';
import Image from 'next/image';
import Keywords from '@/app/components/Keywords/Keywords';
import Link from 'next/link';
import Button from '@/app/components/Button/Button';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>
}) {
  const { key } = await params;
  const project: Project = PROJECTS[key];

  if (project) return { title: `${project.i18nKeys.name} - Jezz Lucena` };
}

/**
 * Page that displays an individual detailed project
 */
export default async function Project({
  params,
}: {
  params: Promise<{ key: string }>
}) {
  const { key } = await params;
  const project: Project = PROJECTS[key];

  if (!project) {
    notFound();
  }

  return (
    <div className={`${styles.content} bg-white relative`}>
      <div className={`${styles.anchor} absolute -top-[60px]`} id="content"></div>

      <div className={`${styles.project} w-[100%] mx-auto py-[70px] px-[50px]`}>
        <div className={styles.textContainer}>
          <Heading>{ project.i18nKeys.name }</Heading>

          {project.thumbVideoUrl ? (
            <div className={`${styles.projectPicture} max-w-[900px] mx-auto`}>
              <video className={styles.profileVideoBackground} src={project.thumbVideoUrl} autoPlay muted playsInline loop></video>
              <video className={styles.profileVideo} src={project.thumbVideoUrl} autoPlay muted playsInline loop></video>
            </div>
          ) : (
            <Image src={project.thumbImgUrl} width={0} height={0} unoptimized className={`${styles.projectPicture} max-w-[900px] mx-auto`} alt="Project Preview Image"/>
          )}
          
          <div className={`${styles.description} max-w-[900px] mx-auto`}>
            <div className={styles.projectName}>
              <span className={styles.label}>Project</span>
              { project.i18nKeys.description }
            </div>
            <div className={styles.projectCompany}>
              <span className={styles.label}>Company</span>
              { project.i18nKeys.company }
            </div>
            <div className={styles.projectYear}>
              <span className={styles.label}>Shipped On</span>
              { project.year }
            </div>
            <div className={styles.projectRole}>
              <span className={styles.label}>Role</span>
              { project.i18nKeys.role }
            </div>

            <br/>

            <Keywords label="Stack" keywords={project.stack.split(',')} />
            <br/>

            <Keywords label="Platforms" keywords={project.platforms.split(',')} />
            <br/>

            <div className={styles.projectButtons}>
              <span className={styles.label}>Related Links</span>
              {project.liveDemoUrl && (
                <Link
                  href={project.liveDemoUrl}
                  target="_blank"
                >
                  <Button className={styles.button}>Try Live Demo</Button>
                </Link>
              )}
              {project.videoUrl && (
                <Link
                  href={project.videoUrl}
                  target="_blank"
                >
                  <Button className={styles.button}>Watch Video</Button>
                </Link>
              )}
              {project.behanceUrl && (
                <Link
                  href={project.behanceUrl}
                  target="_blank"
                >
                  <Button className={styles.button}>View on Behance</Button>
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                >
                  <Button className={styles.button}>View on GitHub</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
