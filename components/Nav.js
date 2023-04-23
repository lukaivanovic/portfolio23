import Image from 'next/image';
import styles from '../styles/App.module.css';
import profileImage from '../public/avatar.png';
import TwitterIcon from '../components/TwitterIcon';
import GithubIcon from '../components/GithubIcon';
import LinkedinIcon from '../components/LinkedinIcon';
import DribbbleIcon from '../components/DribbbleIcon';

export default function Nav() {
  return (
    <div className={styles.navParent}>
      <div className={styles.nav}>
        <Image src={profileImage} className={styles.profileImage} />
        <div className={styles.navLinks}>
          <a
            target="_blank"
            href="mailto: hi@ivanovicluka.co"
            rel="noopener noreferrer"
            className="link"
          >
            hi@ivanovicluka.co
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
