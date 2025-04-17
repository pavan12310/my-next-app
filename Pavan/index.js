// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Next.js Website</h1>
        <p>This is your starting point for something awesome 🚀</p>
      </header>
      <main className={styles.main}>
        <button className={styles.button}>Get Started</button>
      </main>
    </div>
  );
}
