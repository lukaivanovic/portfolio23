import styles from '../styles/ProjectModal.module.css';
import Weweb from '../projects/weweb.mdx';
import BitcoinStore from '../projects/bitcoin-store.mdx';
import Akkio from '../projects/akkio.mdx';

export default function ProjectModal(props) {
  switch (props.name) {
    case 'weweb':
      return (
        <div className={styles.modalContent}>
          <div className={styles.modalProject}>
            <Weweb></Weweb>
          </div>
        </div>
      );

    case 'bitcoin':
      return (
        <div className={styles.modalContent}>
          <div className={styles.modalProject}>
            <BitcoinStore></BitcoinStore>
          </div>
        </div>
      );

    case 'akkio':
      return (
        <div className={styles.modalContent}>
          <div className={styles.modalProject}>
            <Akkio></Akkio>
          </div>
        </div>
      );
  }
}
