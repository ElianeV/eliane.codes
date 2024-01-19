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
      <div className={styles.border} style={{ textAlign: "right" }}>
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
      <div className={`${styles.border} ${styles.navigationelement}`}>
        MY WORK
      </div>
      <div className={styles.border}></div>
      <div className={`${styles.border} ${styles.tagline} ${oswald.className}`}>
        WEB
      </div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div className={styles.border}></div>
      <div
        className={`${styles.border} ${styles.tagline} ${oswald.className}`}
        style={{ paddingRight: "8px" }}
      >
        DEV<span style={{ color: "#CB450C" }}>EL</span>OP
      </div>
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
      <div
        className={`${styles.border} ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px" }}
      >
        DES<span style={{ color: "#CB450C" }}>I</span>GN
      </div>
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
      <div
        className={`${styles.border} ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px" }}
      >
        <span style={{ color: "#CB450C" }}>AN</span>D
      </div>
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
      <div className={`${styles.border} ${styles.navigationelement}`}>
        <a href="mailto:eliane.vdc@protonmail.com">CONTACT</a>
      </div>
      <div className={styles.border}></div>
      <div className={`${styles.biography} ${styles.border}`}>
        <div style={{ maxWidth: "350px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ex
        </div>
      </div>
      <div className={`${styles.biography}`}></div>
      <div className={`${styles.biography}`}></div>
      <div className={styles.border}></div>
      <div
        className={`${styles.border} ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "8px" }}
      >
        ELEVAT<span style={{ color: "#CB450C" }}>E</span>
      </div>
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
