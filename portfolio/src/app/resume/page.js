import Image from "next/image"; // 1. Import the Image component
import Link from 'next/link';
import styles from "./page.module.css";

// Color Pallet #283d3b, #197278, #edddd4, #c44536, #772e25

export default function Home() {
  return (
    <div>
      <div className={styles.Headerbar}>
        <div className={styles.Title}>
          <h1>Keaton Kuykendall</h1>
        </div>
        <div className={styles.page_links}>
          <h2><Link href="/">Home</Link></h2>
          <h2><Link href="/about_me">About Me</Link></h2>
          <h2><Link href="/resume">Resume</Link></h2>
          <h2><Link href="/projects">Projects</Link></h2>
          <h2><Link href="/blog">Blog</Link></h2>
        </div>
      </div>

      <div className={styles.page}>
        <h1>Resume</h1>
      </div>

      <div className={styles.foot}>
      </div>
    </div>
  );
}
