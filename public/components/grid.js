import styles from "../../src/app/page.module.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

function Grid({ infront }) {
  console.log(infront);
  return (
    <div
      className={`${styles.gridcontainer} ${
        infront ? styles.positionfront : styles.positionback
      }`}
    >
      {/* ROW 1*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 2*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div className={infront ? styles.bordertransparent : styles.borderdelay4}>
        ELIANE.CODES \<br />
        HOME
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
        style={{ textAlign: "right" }}
      >
        Github <br />
        Linkedin
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 3*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 4*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay4
        } ${styles.navigationelement}`}
      >
        MY WORK
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay4
        } ${styles.tagline} ${oswald.className}`}
      >
        WEB
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay4
        } ${styles.tagline} ${oswald.className}`}
        style={{ paddingRight: "8px" }}
      >
        DEV<span style={{ color: "#CB450C" }}>EL</span>OP
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 5*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 6*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay4
        } ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px" }}
      >
        DES<span style={{ color: "#CB450C" }}>I</span>GN
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 7*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 8*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay4
        } ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px" }}
      >
        <span style={{ color: "#CB450C" }}>AN</span>D
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 9*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 10*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay4
        } ${styles.navigationelement}`}
      >
        <a href="mailto:eliane.vdc@protonmail.com">CONTACT</a>
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${styles.biography} ${
          infront ? styles.bordertransparent : styles.borderdelay4
        }`}
      >
        <div style={{ maxWidth: "370px" }}>
          Building websites and applications with a focus on impactful
          communication through design. Employing a collaborative and thoughtful
          approach to creating seamless user experiences.
        </div>
      </div>
      <div className={styles.biography}></div>
      <div className={styles.biography}></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay4
        } ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "8px" }}
      >
        ELEVAT<span style={{ color: "#CB450C" }}>E</span>
      </div>

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 11*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
    </div>
  );
}

export default Grid;