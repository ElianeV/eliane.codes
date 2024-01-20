import styles from "../../src/app/page.module.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

function Grid(gridClassName) {
  return (
    <div className={gridClassName}>
      {/* ROW 1*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={`${styles.appear} ${styles.delay1}`}></div>
      <div className={styles.bordertransparent}></div>
      <div className={`${styles.appear} ${styles.delay2}`}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 2*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}>
        ELIANE.CODES \<br />
        HOME
      </div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent} style={{ textAlign: "right" }}>
        Github <br />
        Linkedin
      </div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 3*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 4*/}

      <div className={styles.bordertransparent}></div>
      <div
        className={`${styles.bordertransparent} ${styles.navigationelement}`}
      >
        MY WORK
      </div>
      <div className={styles.bordertransparent}></div>
      <div
        className={`${styles.bordertransparent} ${styles.tagline} ${oswald.className}`}
      >
        WEB
      </div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div
        className={`${styles.bordertransparent} ${styles.tagline} ${oswald.className}`}
        style={{ paddingRight: "8px" }}
      >
        DEV<span style={{ color: "#CB450C" }}>EL</span>OP
      </div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 5*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 6*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div
        className={`${styles.bordertransparent} ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px" }}
      >
        DES<span style={{ color: "#CB450C" }}>I</span>GN
      </div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 7*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 8*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div
        className={`${styles.bordertransparent} ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px" }}
      >
        <span style={{ color: "#CB450C" }}>AN</span>D
      </div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 9*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>

      {/* ROW 10*/}

      <div className={styles.bordertransparent}></div>
      <div
        className={`${styles.bordertransparent} ${styles.navigationelement}`}
      >
        <a href="mailto:eliane.vdc@protonmail.com">CONTACT</a>
      </div>
      <div className={styles.bordertransparent}></div>
      <div className={`${styles.biography} ${styles.bordertransparent}`}>
        <div style={{ maxWidth: "370px" }}>
          Building websites and applications with a focus on impactful
          communication through design. Employing a collaborative and thoughtful
          approach to creating seamless user experiences.
        </div>
      </div>
      <div className={styles.biography}></div>
      <div className={styles.biography}></div>
      <div className={styles.bordertransparent}></div>
      <div
        className={`${styles.bordertransparent} ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "8px" }}
      >
        ELEVAT<span style={{ color: "#CB450C" }}>E</span>
      </div>

      <div className={styles.bordertransparent}></div>

      {/* ROW 11*/}

      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
      <div className={styles.bordertransparent}></div>
    </div>
  );
}

export default Grid;
