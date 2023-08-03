import styles from '../../styles/Link.module.css';
import { useState, useEffect } from 'react';
import LinkItem from './LinkItem';

export default function LinksGrid() {
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
    <div className={styles.links}>
      <div>
        <LinkItem
          title="Figma to HTML plugin"
          description="Easily convert Figma designs to HTML and WeWeb. Built with TypeScript."
          url="https://www.figma.com/community/plugin/1227257007623431685"
          previewImage="/akkio.webp"
        />
      </div>
      <div>
        <LinkItem
          title="WeWeb Academy"
          description="Platform for learning WeWeb through courses and lessons. Built with XANO and WeWeb."
          url="https://academy.weweb.io/"
          previewImage="/weweb-o.webp"
        />
      </div>
    </div>
  );
}
