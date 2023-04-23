import styles from '../styles/App.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <h1>Software designer for startups and early-stage companies</h1>
        <p>
          Solving complex UX problems, conceptualizing new ideas and creating
          accompanying interfaces. Coding when not designing.
        </p>
        <p>
          Previously worked on a m-banking app for an European bank, a growing
          no-code app builder and largest cryptocurrency exchange in SE Europe.
        </p>
      </div>
    </div>
  );
}
