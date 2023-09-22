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
  images,
}) {
  return (
    <div className={styles.project}>
      <div className={styles.projectContent}>
        <div className={styles.projectDetails}>
          <div className={styles.projectInformation}>
            <span className="text">{title}</span>
            <h3>{description}</h3>
          </div>
        </div>
      </div>
      <Image
        src={previewImage}
        width="1860"
        height="984"
        alt="Project preview"
        className={styles.projectPreview}
        quality="100"
        priority="true"
      />
      <div className={styles.projectInformation}>
        <span className="text">{title}</span>
        <h3>{description}</h3>
      </div>
      <Image
        src={previewImage}
        width="1860"
        height="984"
        alt="Project preview"
        className={styles.projectPreview}
        quality="100"
        priority="true"
      />
      <div className={styles.projectInformation}>
        <span className="text">{title}</span>
        <h3>{description}</h3>
      </div>
      <Image
        src={previewImage}
        width="1860"
        height="984"
        alt="Project preview"
        className={styles.projectPreview}
        quality="100"
        priority="true"
      />
      <div className={styles.projectInformation}>
        <span className="text">{title}</span>
        <h3>{description}</h3>
      </div>
    </div>
  );
}
