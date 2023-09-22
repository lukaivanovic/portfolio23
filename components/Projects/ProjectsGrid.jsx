import styles from '../../styles/App.module.css';
import Project from './Project';

export default function ProjectsGrid() {
  return (
    <div className="section">
      <div className={styles.projects}>
        <Project
          title="WeWeb"
          description="No-code front-end builder"
          url="weweb"
          logo="/logos/weweb.svg"
          previewImage="/weweb-o.webp"
          link="https://www.weweb.io"
          linkName="weweb.io"
          images='["/logos/akkio.svg", "/logos/akkio.svg"]'
        />
        <Project
          title="Akkio"
          description="Predictive AI for Analysts"
          url=""
          logo="/logos/akkio.svg"
          previewImage="/akkio-new.png"
          link="https://www.akkio.com"
          linkName="weweb.io"
        />
      </div>
    </div>
  );
}
