import Head from 'next/head';
import styles from '../styles/App.module.css';
import Nav from '../components/Nav';
import About from '../components/About';
import { useState, useEffect } from 'react';
import ProjectsGrid from '../components/ProjectsGrid';
import ProjectModal from '../components/ProjectModal';

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
        <meta name="og:type" content="website"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@lukaivnvc"></meta>
        <meta name="twitter:title" content="ivnvncluka - product design"></meta>
        <meta
          name="twitter:description"
          content="Looking to work on great products with great teams."
        ></meta>
        <meta
          name="twitter:image"
          content="https://uploads-ssl.webflow.com/61e01b31ffff93bff1f722af/6396fe76931bdf13023e6d96_og_image.png"
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
      </div>
    </>
  );
}
