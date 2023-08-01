import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/App.module.css';

export default function Icon() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Link
      target="_blank"
      href="https://twitter.com/lukaivnvc"
      rel="noopener noreferrer"
      className="link"
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={styles.socialIcon}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.095 43.5015C33.2083 43.5015 43.1155 28.4948 43.1155 15.481C43.1155 15.0548 43.1155 14.6305 43.0867 14.2081C45.0141 12.814 46.6778 11.0878 48 9.11048C46.2028 9.90728 44.2961 10.4296 42.3437 10.6599C44.3996 9.4293 45.9383 7.49349 46.6733 5.21288C44.7402 6.3601 42.6253 7.16853 40.4198 7.60328C38.935 6.02443 36.9712 4.97896 34.8324 4.62865C32.6935 4.27834 30.4988 4.64271 28.5879 5.66539C26.677 6.68806 25.1564 8.31203 24.2615 10.286C23.3665 12.2599 23.1471 14.4738 23.6371 16.585C19.7218 16.3886 15.8915 15.3711 12.3949 13.5985C8.89831 11.8259 5.81353 9.3378 3.3408 6.29576C2.08146 8.46375 1.69574 11.0302 2.2622 13.4726C2.82865 15.915 4.30468 18.0497 6.38976 19.442C4.82246 19.3961 3.2893 18.9733 1.92 18.2094V18.3342C1.92062 20.6079 2.7077 22.8114 4.14774 24.5709C5.58778 26.3304 7.59212 27.5377 9.8208 27.9879C8.37096 28.3834 6.84975 28.4412 5.37408 28.1569C6.00363 30.1135 7.22886 31.8246 8.87848 33.0508C10.5281 34.277 12.5197 34.957 14.5747 34.9959C12.5329 36.6009 10.1946 37.7875 7.69375 38.4879C5.19287 39.1883 2.57843 39.3888 0 39.0778C4.50367 41.9679 9.74385 43.5009 15.095 43.4938"
            fill={isHovering ? '#BCBCBC' : '#1D1D1F'}
          />
        </svg>
      </div>
    </Link>
  );
}
