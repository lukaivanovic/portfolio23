import styles from '../styles/App.module.css';
import Project from '../components/Project';

export default function ProjectsGrid() {
  return (
    <div className={styles.projects}>
      <Project
        title="WeWeb"
        description="No-code supercharged app builder"
        url="weweb"
        image="/weweb2.png"
        previewImage="/weweb-preview.webp"
        link="https://www.weweb.io"
        linkName="weweb.io"
      />
      <Project
        title="Digital Assets"
        description="Buy, sell and store cryptocurrencies"
        url="bitcoin-store"
        image="/digital-assets.png"
        previewImage="/bitcoin-preview.webp"
        link="https://www.bitcoin-store.net"
        linkName="bitcoin-store.net"
      />
    </div>
  );
}
