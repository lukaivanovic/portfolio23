import styles from '../styles/About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <h1>Making and designing software.</h1>
        <p className="contentText">
          A product designer trying to build impressive software. Enjoy wearing
          many hats including coding, product strategy, support, marketing.
        </p>
        <div className={styles.availability}>
          <Image src="/availableIcon.svg" width="16" height="16"></Image>
          <span className="label">Available for inquiries</span>
        </div>
      </div>
    </div>
  );
}
