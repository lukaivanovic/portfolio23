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
        <div className={styles.projectContent}>
          <div className={styles.projectDetails}>
            <div className={styles.projectInformation}>
              <h3>{title}</h3>
              <span className="text">{description}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
