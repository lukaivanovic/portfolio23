import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Project.module.css';

export default function Project({
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

  // const something = document.querySelector('something');

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={isHovering ? styles.projectHover : styles.project}>
      <Link
        href={url}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={styles.projectContent}>
          <Image
            src={previewImage}
            width="1860"
            height="984"
            alt="Project preview"
            className={styles.projectPreview}
            quality="100"
            priority="true"
          />

          <div className={styles.projectDetails}>
            <div className={styles.projectInformation}>
              <span className="text">{title}</span>
              <h3>{description}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
