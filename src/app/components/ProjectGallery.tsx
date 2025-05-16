'use client'

import { useEffect, useState } from 'react';
import useWindowScroll from '../hooks/useWindowScroll';
import PROJECTS from '../json/projects';
import { debounce } from 'lodash';
// import useEventListener from '../hooks/useEventListener';
import styles from './ProjectGallery.module.scss'
import GalleryItem from './GalleryItem';

interface ProjectGalleryProps {
  galleryMode: 'columns' | 'list',
  isShowingGallery: boolean,
  resizeCount: number
}

export default function ProjectGallery({ galleryMode, isShowingGallery, resizeCount }: ProjectGalleryProps) {
  const { scrollY } = useWindowScroll();
  const [isMasonryActive, setMasonryActive] = useState(false);

  const getColumns = (numColumns: number) => {
    const colArrays: string[][] = Array.from({ length: numColumns }, () => []);
    let columnIndex = 0;

    for (const key in PROJECTS) {
      colArrays[columnIndex].push(key);
      columnIndex = (columnIndex + 1) % numColumns;
    }

    return colArrays;
  }

  const [columns, setColumns] = useState<string[][]>(getColumns(3));

  const handleMasonryLayout = () => {
    if (typeof window === 'undefined') return;

    const galleryBox = document.querySelector('.gallery')?.getBoundingClientRect();
    document.querySelectorAll('.column .item').forEach(item => {
      const masonryItem = document.querySelector(`.masonryItem[data-key=${item.getAttribute('data-key')}]`);
      console.log(masonryItem);
      const itemBox = item.getBoundingClientRect();
      const roundedBox = {
        height: Math.round(itemBox.height * 10) / 10,
        width: Math.round(itemBox.width * 10) / 10,
        x: Math.round((itemBox.x - (galleryBox?.left || 0)) * 10) / 10,
        y: Math.round((itemBox.y - (galleryBox?.top || 0 + scrollY)) * 10) / 10,
      }
      masonryItem?.setAttribute('style', `height: ${roundedBox.height}px; width: ${roundedBox.width}px; transform: translate(${roundedBox.x}px, ${roundedBox.y}px)`);
    });
    setMasonryActive(true);
  }

  const handleWindowResize = debounce(() => {
    let numColumns: number;

    if (galleryMode === 'list') {
      numColumns = 1;
    } else if (typeof window === 'undefined' || window.innerWidth >= 1280) { // xl
      numColumns = 5;
    } else if (window.innerWidth >= 1024) { // lg
      numColumns = 4;
    } else if (window.innerWidth >= 768) { // md
      numColumns = 3;
    } else if (window.innerWidth >= 393) { // iPhone 14 Pro viewport dimensions
      numColumns = 2;
    } else { // xs and lower
      numColumns = 1;
    }

    setColumns(getColumns(numColumns));

    setTimeout(handleMasonryLayout, 0);
  }, 100);

  useEffect(handleWindowResize, [resizeCount]);

  useEffect(() => {
    handleWindowResize();
  });

  // useEventListener('resize', handleWindowResize);

  return (
    <div
      className={`gallery relative ${styles.gallery} ${isShowingGallery ? styles.show : ""} ${galleryMode === 'columns' ? styles.column : styles.list} ${isMasonryActive ? styles.masonryActive : ""}`}
    >
      {columns.map((projectKeys, index) => (
        <div className={`column ${styles.column}`} key={index}>
          <div className={styles.layoutItem}>
            {projectKeys.map(key => (
              <GalleryItem
                project={PROJECTS[key]}
                key={key}
                projectKey={key}
                galleryMode={galleryMode}
              />
            ))}
          </div>
        </div>
      ))}
      {Object.keys(PROJECTS).map(key => (
        <div
          className={`absolute top-0 left-0 masonryItem ${styles.masonryItem}`}
          data-key={key}
          key={key}
        >
          <GalleryItem
            project={PROJECTS[key]}
            projectKey={key}
            galleryMode={galleryMode}
          />
        </div>
      ))}
    </div>
  )
}