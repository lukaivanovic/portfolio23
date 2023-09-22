import styles from '../styles/About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.availability}>
          <Image src="/availableIcon.svg" width="16" height="16"></Image>
          <span className="label">Available for inquiries</span>
        </div>
        <h1>Making and designing software</h1>
        <p className="contentText">
          Specialized in core product ideation for small and mid-sized startups.
          Technical background and front-end skills.
        </p>
      </div>
    </div>
  );
}
