import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Link.module.css';

export default function LinkItem({
  title,
  description,
  link,
  linkName,
  url,
  logo,
  previewImage,
}) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div className={isHovering ? styles.linkHover : styles.link}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.linkContent}>
          <Image
            src={previewImage}
            width="1860"
            height="984"
            alt="Project preview"
            className={styles.linkPreview}
            quality="100"
            priority="true"
          />
          <div className={styles.projectDetails}>
            <div className={styles.projectInformation}>
              <h4>{title}</h4>
              <span className="contentText">{description}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
