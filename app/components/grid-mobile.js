import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

function GridMobile({ infront }) {
  return (
    <div
      className={`${styles.gridcontainerMobile} ${
        infront ? styles.positionfront : styles.positionback
      }`}
    >
      {/* ROW 1*/}

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
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>

      {/* ROW 2*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
        style={{ gridArea: "nav" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <Link href="/">ELIANE.CODES \</Link>
            <br />
            HOME
          </p>
          <div style={{ textAlign: "right" }}>
            <a href="https://github.com/ElianeV" target="_blank">
              Github
            </a>
            <br />
            <a href="https://www.linkedin.com/in/eliane-vdc/" target="_blank">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>

      {/* ROW 3*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 4*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay8
        } ${styles.navigationelement}`}
        style={{
          gridArea: "link",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href="/my-work">MY WORK</Link>
        <a
          href="mailto:eliane.vdc@protonmail.com"
          style={{ textAlign: "right" }}
        >
          CONTACT
        </a>
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 5*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>

      {/* ROW 6*/}

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
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay6
        } ${styles.taglineMobile} ${oswald.className}`}
        style={{ paddingRight: "8px", gridArea: "develop" }}
      >
        DEV<span style={{ color: "#CB450C" }}>EL</span>OP
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 7*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay7
        } ${styles.taglineMobile} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px", gridArea: "design" }}
      >
        DES<span style={{ color: "#CB450C" }}>I</span>GN
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 8*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>

      {/* ROW 9*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay8
        } ${styles.taglineMobile} ${oswald.className}`}
        style={{ textAlign: "right", paddingRight: "4px", gridArea: "and" }}
      >
        <span style={{ color: "#CB450C" }}>AN</span>D
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 10*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>

      {/* ROW 11*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={`${
          infront ? styles.bordertransparent : styles.borderdelay7
        } ${styles.taglineMobile} ${oswald.className}`}
        style={{
          textAlign: "right",
          paddingRight: "8px",
          gridArea: "elevate",
        }}
      >
        ELEVAT<span style={{ color: "#CB450C" }}>E</span>
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>

      {/* ROW 12*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
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
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 13*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 14*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
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

      {/* ROW 15*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay7}
      ></div>

      {/* ROW 16*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={`${styles.biographyTablet} ${
          infront ? styles.bordertransparent : styles.borderdelay6
        }`}
      >
        Building websites and applications with a focus on impactful
        communication through design. Employing a collaborative and thoughtful
        approach to creating seamless user experiences.
      </div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 17*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
    </div>
  );
}

export default GridMobile;
