import { getDisplayName } from "next/dist/shared/lib/utils";
import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";
import ProjectDropdown from "../components/project-dropdown";

const oswald = Oswald({ subsets: ["latin"] });

const Work = () => {
  return (
    <div className={styles.myworkcontainer}>
      {/* ROW 1*/}

      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 2*/}
      <div className={styles.borderdelay8}></div>
      <div
        className={styles.borderdelay8}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        ELIANE.CODES \<br />
        MY WORK
        <Link href="/">Back</Link>
      </div>

      <div className={styles.borderdelay8}></div>

      {/* ROW 3*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 4*/}
      <div className={styles.borderdelay8}></div>
      <div
        className={styles.borderdelay8}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p style={{ maxWidth: "400px" }}>
          Providing custom digital solutions that bring long-term strategic
          value and make your business thrive. Stand out while staying true to
          your essence.
        </p>
        <p
          className={`${styles.tagline} ${oswald.className}`}
          style={{ paddingRight: "4px" }}
        >
          MY WORK
        </p>
      </div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 5*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 6*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 7*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 8*/}
      <div className={styles.borderdelay8}></div>
      <ProjectDropdown
        name="DEVIVED GAMES"
        type="Freelance"
        role="Branding, web design & development"
        linktext="UNDER DEVELOPMENT \"
        url=""
      />
      <div className={styles.borderdelay8}></div>

      {/* ROW 9*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 10*/}
      <div className={styles.borderdelay8}></div>
      <div
        className={`${styles.borderdelay8} ${styles.projecttitle} ${oswald.className}`}
      >
        WOMEN'S ROCK FESTIVAL
      </div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 11*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 12*/}
      <div className={styles.borderdelay8}></div>
      <div
        className={`${styles.borderdelay8} ${styles.projecttitle} ${oswald.className}`}
      >
        WHAT DO YOU FEEL LIKE
      </div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 13*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 14*/}
      <div className={styles.borderdelay8}></div>
      <div
        className={`${styles.borderdelay8} ${styles.projecttitle} ${oswald.className}`}
      >
        BENDY CANDLE
      </div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 15*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 16*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 17*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 18*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 19*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
    </div>
  );
};

export default Work;
