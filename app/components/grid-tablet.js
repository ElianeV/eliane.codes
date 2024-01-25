import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

function GridTablet({ infront }) {
  return (
    <div
      className={`${styles.gridcontainerTablet} ${
        infront ? styles.positionfront : styles.positionback
      }`}
    >
      {/* ROW 1*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>

      {/* ROW 2*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div className={infront ? styles.bordertransparent : styles.borderdelay8}>
        ELIANE.CODES \<br />
        HOME
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
        style={{ textAlign: "right" }}
      >
        <a href="https://github.com/ElianeV" target="_blank">
          Github
        </a>
        <br />
        <a href="https://www.linkedin.com/in/eliane-vdc/" target="_blank">
          Linkedin
        </a>
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>

      {/* ROW 3*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>

      {/* ROW 4*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay4
        } ${styles.navigationelement}`}
      >
        <Link href="/my-work">MY WORK</Link>
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay8
        } ${styles.navigationelement}`}
      >
        <a href="mailto:eliane.vdc@protonmail.com">CONTACT</a>
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>

      {/* ROW 5*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay5
        } ${styles.tagline} ${oswald.className}`}
      >
        WEB
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay6
        } ${styles.tagline} ${oswald.className}`}
        style={{ paddingRight: "8px" }}
      >
        DEV<span style={{ color: "#CB450C" }}>EL</span>OP
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 6*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>

      {/* ROW 7*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay7
        } ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px" }}
      >
        DES<span style={{ color: "#CB450C" }}>I</span>GN
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>

      {/* ROW 8*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 9*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay8
        } ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px" }}
      >
        <span style={{ color: "#CB450C" }}>AN</span>D
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>

      {/* ROW 10*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>

      {/* ROW 11*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={`${styles.biography} ${
          infront ? styles.bordertransparent : styles.borderdelay6
        }`}
      >
        <div style={{ maxWidth: "370px" }}>
          Building websites and applications with a focus on impactful
          communication through design. Employing a collaborative and thoughtful
          approach to creating seamless user experiences.
        </div>
      </div>
      <div
        className={`${styles.biography} ${
          infront ? styles.bordertransparent : styles.borderdelay6
        }`}
      ></div>
      <div
        className={`${styles.biography} ${
          infront ? styles.bordertransparent : styles.borderdelay6
        }`}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay7
        } ${styles.tagline} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "8px" }}
      >
        ELEVAT<span style={{ color: "#CB450C" }}>E</span>
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 12*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>

      {/* ROW 13*/}
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>

      {/* ROW 14*/}
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>

      {/* ROW 15*/}
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
    </div>
  );
}

export default GridTablet;
