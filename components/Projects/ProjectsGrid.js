import styles from '../../styles/App.module.css';
import Project from './Project';
import { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';

export default function ProjectsGrid() {
  const [modalOpened, setIsModalOpened] = useState(false);

  const [modalPage, setModalPage] = useState('weweb');

  const openModal = (name) => {
    setModalPage(name);
    setIsModalOpened(true);
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  };

  const closeModal = () => {
    setIsModalOpened(false);
    document.body.style.overflow = 'unset';
    document.body.style.height = 'unset';
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
    <div className="section">
      <span className="contentText">Work</span>
      <div className={styles.projects}>
        {modalOpened ? (
          <div className={styles.modalParent}>
            <div className={styles.modalOverlay} onClick={closeModal}></div>
            <div
              className={`${styles.modalContent} ${
                modalOpened ? styles.modalParentSlideUp : null
              }`}
            >
              <ProjectModal name={modalPage}></ProjectModal>
            </div>
          </div>
        ) : null}
        <div>
          <Project
            title="Akkio"
            description="Predictive AI for Analysts"
            url=""
            logo="/logos/akkio.svg"
            previewImage="/akkio.webp"
            link="https://www.akkio.com"
            linkName="weweb.io"
          />
        </div>
        <div onClick={() => openModal('weweb')}>
          <Project
            title="WeWeb"
            description="No-code front-end builder"
            url="weweb"
            logo="/logos/weweb.svg"
            previewImage="/weweb-o.webp"
            link="https://www.weweb.io"
            linkName="weweb.io"
          />
        </div>
        <div onClick={() => openModal('bitcoin')}>
          <Project
            title="Digital Assets"
            description="Crypto Wallet & Exchange"
            url="bitcoin-store"
            logo="/logos/digital-assets.svg"
            previewImage="/bitcoin-preview.webp"
            link="https://www.bitcoin-store.net"
            linkName="bitcoin-store.net"
          />
        </div>
      </div>
    </div>
  );
}
