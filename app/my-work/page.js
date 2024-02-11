"use client";
import { getDisplayName } from "next/dist/shared/lib/utils";
import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";
import ProjectDropdown from "../components/project-dropdown";
import { useState } from "react";

const oswald = Oswald({ subsets: ["latin"] });

const Work = () => {
  const [proj1, setProj1] = useState(false);
  const [proj2, setProj2] = useState(false);
  const [proj3, setProj3] = useState(false);
  const [proj4, setProj4] = useState(false);
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
        <p>
          <Link href="/">ELIANE.CODES \</Link>
          <br />
          MY WORK
        </p>
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
        DD={proj1}
        setDD={setProj1}
      />
      <div className={styles.borderdelay8}></div>

      {/* ROW 9*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 10*/}
      <div className={styles.borderdelay8}></div>
      <ProjectDropdown
        name="WOMEN'S ROCK FESTIVAL"
        type="Freelance"
        role="Web design & development"
        linktext="LIVE SITE \"
        url=""
        DD={proj2}
        setDD={setProj2}
      />
      <div className={styles.borderdelay8}></div>

      {/* ROW 11*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 12*/}
      <div className={styles.borderdelay8}></div>
      <ProjectDropdown
        name="WHAT DO YOU FEEL LIKE"
        type="Freelance"
        role="Web design & development"
        linktext="LIVE SITE \"
        url=""
        DD={proj3}
        setDD={setProj3}
      />
      <div className={styles.borderdelay8}></div>

      {/* ROW 13*/}
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>
      <div className={styles.borderdelay8}></div>

      {/* ROW 14*/}
      <div className={styles.borderdelay8}></div>
      <ProjectDropdown
        name="BENDY CANDLE"
        type="Freelance"
        role="Web design & development"
        linktext="LIVE SITE \"
        url=""
        DD={proj4}
        setDD={setProj4}
      />
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
