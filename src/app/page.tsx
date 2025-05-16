'use client'

import { useRef, useState } from "react";
import styles from "./Portfolio.module.scss"
import Heading from "./components/Heading";
import ProjectGallery from "./components/ProjectGallery";

export default function Portfolio() {
  const [galleryMode, setGalleryMode] = useState<'columns' | 'list'>('columns');
  const [isShowingGallery, setShowingGallery] = useState(true);
  const galleryTimeout = useRef<NodeJS.Timeout | null>(null);
  const [resizeCount, doResizeCount] = useState(0);

  const toggleGalleryMode = () => {
    setShowingGallery(false);

    if (galleryTimeout.current) clearTimeout(galleryTimeout.current);
    galleryTimeout.current = setTimeout(() => {
      if (galleryMode === 'columns') {
        setGalleryMode('list');
      } else {
        setGalleryMode('columns');
      }
      setShowingGallery(true);
      setTimeout(() => doResizeCount(prev => prev + 1), 0);
    }, 700);
  }

  return (
    <div className={`${styles.content} relative bg-white`}>
      <div className={`${styles.anchor} absolute -top-[60px]`} id="content"></div>
      <div className="w-[100%] mx-auto py-[30px] px-[10px] md:px-[30px] lg:px-[50px]">
        <Heading>
          <span>Some of my work</span>

          <div className={`${styles.toggle} ${isShowingGallery ? styles.show : ""} ${galleryMode === 'columns' ? styles.columns : styles.list}`} onClick={toggleGalleryMode}>
            <div className={`${styles.icon} ${styles.columns}`}>
              <div className={styles.symbol}></div>
            </div>
            <div className={`${styles.icon} ${styles.list}`}>
              <div className={styles.symbol}></div>
            </div>
          </div>
        </Heading>

        <ProjectGallery
          galleryMode={galleryMode}
          isShowingGallery={isShowingGallery}
          resizeCount={resizeCount}
        />
      </div>
    </div>
  );
}
