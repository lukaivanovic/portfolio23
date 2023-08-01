import Image from 'next/image';
import styles from '../styles/Nav.module.css';
import profileImage from '../public/avatar.png';
import TwitterIcon from './Icons/TwitterIcon';
import GithubIcon from './Icons/GithubIcon';
import LinkedinIcon from './Icons/LinkedinIcon';
import DribbbleIcon from './Icons/DribbbleIcon';
import logoHidden from '../public/logo-hidden.png';
import logoVisible from '../public/logo-visible.png';
import { useState } from 'react';

export default function Nav() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div className={styles.navParent}>
      <div className={styles.nav}>
        <a
          target="_blank"
          href=""
          rel="noopener noreferrer"
          className="link"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {!isHovering ? (
            <Image
              src={logoHidden}
              width="120"
              height="36"
              alt="Logo"
              className={styles.logo}
              quality="100"
              priority="true"
            />
          ) : (
            <Image
              src={logoVisible}
              width="120"
              height="36"
              alt="Logo"
              className={styles.logo}
              quality="100"
              priority="true"
            />
          )}
        </a>

        <div className={styles.navLinks}>
          <a
            target="_blank"
            href="mailto: hi@ivanovicluka.co"
            rel="noopener noreferrer"
            className="link"
          >
            hi@ivanovicluka.co
          </a>
          <a
            target="_blank"
            href="mailto: hi@ivanovicluka.co"
            rel="noopener noreferrer"
            className="button"
          >
            Contact
          </a>
          <div className={styles.socialLinks}>
            <TwitterIcon></TwitterIcon>
            <GithubIcon></GithubIcon>
            <LinkedinIcon></LinkedinIcon>
            <DribbbleIcon></DribbbleIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
