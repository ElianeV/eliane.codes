import styles from "./page.module.css";
import { Oswald } from "next/font/google";
import Grid from "../../public/components/grid";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className={styles.diagonalcontainer}>
        <svg className={styles.svg}>
          <line className={styles.line} x1="0" y1="40px" x2="100%" y2="100%" />
          <line
            className={styles.line}
            x1="0"
            y1="40px"
            x2="100%"
            y2="100%"
            transform="translate(0,24)"
          />
        </svg>
      </div>

      <div className={`${styles.gridcontainer} ${styles.positionback}`}>
        {/* ROW 1*/}

        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>

        {/* ROW 2*/}

        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
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
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div
          className={`${styles.border} ${styles.tagline} ${oswald.className}`}
          style={{ paddingRight: "8px" }}
        >
          <p style={{ opacity: 0 }}>
            DEV<span style={{ color: "#CB450C" }}>EL</span>OP
          </p>
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
        <div className={styles.border}></div>
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
        <div className={styles.border}></div>
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
        <div className={styles.border}></div>
        <div className={styles.border}></div>
        <div className={`${styles.biography} ${styles.border}`}>
          <div style={{ maxWidth: "370px", opacity: 0 }}>
            Building websites and applications with a focus on impactful
            communication through design. Employing a collaborative and
            thoughtful approach to creating seamless user experiences.
          </div>
        </div>
        <div className={styles.biography}></div>
        <div className={styles.biography}></div>
        <div className={styles.border}></div>
        <div className={styles.border}></div>
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
      </div>

      <div className={`${styles.gridcontainer} ${styles.positionfront}`}>
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
        <div
          className={styles.bordertransparent}
          style={{ textAlign: "right" }}
        >
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
            communication through design. Employing a collaborative and
            thoughtful approach to creating seamless user experiences.
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
    </main>
  );
}
