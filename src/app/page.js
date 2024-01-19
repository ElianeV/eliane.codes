import styles from "./page.module.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.container}>
      {/* ROW 1*/}

      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={`${styles.appear} ${styles.delay1}`}></div>
      <div className={styles.border}></div>
      <div className={`${styles.appear} ${styles.delay2}`}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>

      {/* ROW 2*/}

      <div className={styles.border}></div>
      <div className={styles.border}>
        ELIANE.CODES \<br />
        HOME
      </div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}>
        Github <br />
        Linkedin
      </div>
      <div className={styles.border}></div>

      {/* ROW 3*/}

      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>

      {/* ROW 4*/}

      <div className={styles.border}></div>
      <div className={styles.border}>MY WORK</div>
      <div className={styles.border}></div>
      <div className={`${styles.border} ${oswald.className}`}>WEB</div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}>DEVELOP</div>
      <div className={styles.border}></div>

      {/* ROW 5*/}

      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>

      {/* ROW 6*/}

      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}>DESIGN</div>
      <div className={styles.border}></div>

      {/* ROW 7*/}

      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>

      {/* ROW 8*/}

      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}>AND</div>
      <div className={styles.border}></div>

      {/* ROW 9*/}

      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>

      {/* ROW 10*/}

      <div className={styles.border}></div>
      <div className={styles.border}>CONTACT</div>
      <div className={styles.border}></div>
      <div className={styles.border}>Lorem ipsum</div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}>ELEVATE</div>
      <div className={styles.border}></div>

      {/* ROW 11*/}

      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
    </main>
  );
}
