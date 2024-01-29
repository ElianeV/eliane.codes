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
        className={infront ? styles.bordertransparent : styles.borderdelay1}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
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
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 4*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 5*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
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
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 6*/}

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
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>

      {/* ROW 7*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay6}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay4}
      ></div>
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
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 9*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
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
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 11*/}

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
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
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
        className={infront ? styles.bordertransparent : styles.borderdelay1}
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
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay5}
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
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay8}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>

      {/* ROW 16*/}

      <div
        className={infront ? styles.bordertransparent : styles.borderdelay3}
      ></div>
      <div
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
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
        className={infront ? styles.bordertransparent : styles.borderdelay2}
      ></div>
    </div>
  );
}

export default GridMobile;
