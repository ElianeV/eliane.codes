"use client";
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

      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 2*/}
      <div className={styles.borderdelay0}></div>
      <div
        className={styles.borderdelay0}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>
          <Link href="/">ELIANE.CODES \</Link>
          <br />
          MY WORK
        </p>
        <Link className={styles.underline} href="/">
          Back
        </Link>
      </div>

      <div className={styles.borderdelay0}></div>

      {/* ROW 3*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 4*/}
      <div className={styles.borderdelay0}></div>
      <div
        className={styles.borderdelay0}
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
      <div className={styles.borderdelay0}></div>

      {/* ROW 5*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 6*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 7*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 8*/}
      <div className={styles.borderdelay0}></div>
      <ProjectDropdown
        name="DEVIVED GAMES"
        type="Freelance"
        role="Branding, web design & development"
        linktext="UNDER DEVELOPMENT \"
        url="/my-work"
        DD={proj1}
        setDD={setProj1}
        img="/devivedgamesimg.jpeg"
        alt="Close-up picture of a hand typing on a keyboard."
        about="Devived Games is a video game development company looking for a comprehensive brand package. This includes creating a distinctive visual identity, logo and website.   
         A solo developer in need of a complete brand which exudes modernity, professionalism and something else."
        designstack="Figma, Affinity Designer, Affinity Photo"
        developmentstack="Under construction. To be determinded."
      />
      <div className={styles.borderdelay0}></div>

      {/* ROW 9*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 10*/}
      <div className={styles.borderdelay0}></div>
      <ProjectDropdown
        name="WOMEN'S ROCK FESTIVAL"
        type="Freelance"
        role="Web design & development"
        linktext="LIVE SITE \"
        url="https://wrf.vercel.app"
        DD={proj2}
        setDD={setProj2}
        img="/wrfimg.jpeg"
        alt="Woman rock climbing."
        about="Ireland's Women's Rock festival is an outdoor climbing event organised by women for women. Following a succesful first edition in 2022, the team recognized the need for a professional website. Noteworthy features include a custom booking system, email automation and a database designed to effortlessly retrieve information of over 80 participant and volunteers."
        designstack="Figma, Linearity Curve"
        developmentstack="JavaScipt/TypeScript, TailwindCSS, Next, Vercel, Prisma, Postgres, Stripe, Sendgrid, Mapbox"
      />
      <div className={styles.borderdelay0}></div>

      {/* ROW 11*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 12*/}
      <div className={styles.borderdelay0}></div>
      <ProjectDropdown
        name="WHAT DO YOU FEEL LIKE"
        type="Personal project"
        role="Web design & development"
        linktext="LIVE SITE \"
        url="https://whatdoyoufeellike.vercel.app"
        DD={proj3}
        setDD={setProj3}
        img="/wdyflimg.jpeg"
        alt="A bowl of spaghetti bolognese."
        about="What do you feel like? This website lets you create your own online recipe book. This passion project has helped inspire me on many occasions what to cook and to easily follow instructions. Especially handy are the filter function and to be able to modify whenever you want to change the recipe."
        designstack="Figma, Linearity Curve"
        developmentstack="JavaScript/TypeScript, TailwindCSS, Next, Vercel, Prisma, AWS"
      />
      <div className={styles.borderdelay0}></div>

      {/* ROW 13*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 14*/}
      <div className={styles.borderdelay0}></div>
      <ProjectDropdown
        name="BENDY CANDLE"
        type="Personal project"
        role="Web design & development"
        linktext="LIVE SITE \"
        url="https://bendycandle.netlify.app"
        DD={proj4}
        setDD={setProj4}
        img="/bendycandleimg.jpeg"
        alt="Woman doing stretches on a yoga mat."
        about="An app designed to help time passive stretching which can be used hands-free."
        designstack="something, something, something"
        developmentstack="something, something, something"
      />
      <div className={styles.borderdelay0}></div>

      {/* ROW 15*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 16*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 17*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 18*/}
      <div className={styles.borderdelay0}></div>
      <div className={`${styles.borderdelay0} ${styles.CTA}`}>
        Want to collaborate? <br />
        <span style={{ fontWeight: "bold", marginTop: "16px" }}>
          <a
            className={styles.underline}
            href="mailto:eliane.vdc@protonmail.com"
          >
            REACH OUT
          </a>
        </span>
      </div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 19*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
    </div>
  );
};

export default Work;
