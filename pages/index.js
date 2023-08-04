import Head from 'next/head';
import styles from '../styles/App.module.css';
import Nav from '../components/Nav';
import About from '../components/About';
import { useState, useEffect } from 'react';
import ProjectsGrid from '../components/Projects/ProjectsGrid';
import LinksGrid from '../components/Link/LinksGrid';
import ProjectModal from '../components/Projects/ProjectModal';
import TwitterIcon from '../components/Icons/TwitterIcon';
import GithubIcon from '../components/Icons/GithubIcon';
import LinkedinIcon from '../components/Icons/LinkedinIcon';
import DribbbleIcon from '../components/Icons/DribbbleIcon';

export default function Home() {
  const [modalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Luka Ivanović</title>
        <meta
          name="description"
          content="Looking to work on great products with great teams. Previous clients include corporations, agencies and startups. Open to EU and US opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Making and designing software"
        ></meta>
        <meta
          property="og:description"
          content="A product designer trying to build impressive software. Enjoy wearing
          many hats including coding, product strategy, support, marketing."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/devcwma6c/image/upload/v1691058345/og-image_qfd8pw.png"
        ></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@lukaivnvc"></meta>
        <meta name="twitter:title" content="ivnvncluka - product design"></meta>
        <meta
          name="twitter:description"
          content="Looking to work on great products with great teams."
        ></meta>
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/devcwma6c/image/upload/v1691058345/og-image_qfd8pw.png"
        ></meta>
      </Head>
      <Nav></Nav>
      {modalOpened ? (
        <div className={styles.modalParent}>
          <div className={styles.modalOverlay} onClick={closeModal}></div>
          <ProjectModal></ProjectModal>
        </div>
      ) : null}

      <div className={styles.main}>
        <About></About>
        <ProjectsGrid></ProjectsGrid>
        <LinksGrid></LinksGrid>
        <div className="section">
          <div className={styles.socialLinks}>
            <TwitterIcon></TwitterIcon>
            <GithubIcon></GithubIcon>
            <LinkedinIcon></LinkedinIcon>
            <DribbbleIcon></DribbbleIcon>
          </div>
        </div>
      </div>
    </>
  );
}
