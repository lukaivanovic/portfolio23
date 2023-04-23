import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/App.module.css';
import back from '../public/back.svg';

export default function BackLink() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link href="/">
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={styles.backLink}
      >
        <Image src={back} width="20" height="20" className={styles.icon} />
        Back to home
      </div>
    </Link>
  );
}
