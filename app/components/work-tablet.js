"use client";
import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";
import ProjectDropdownTablet from "../components/project-dropdown-tablet";
import { useState } from "react";

const oswald = Oswald({ subsets: ["latin"] });

const WorkTablet = () => {
  const [proj1, setProj1] = useState(false);
  const [proj2, setProj2] = useState(false);
  const [proj3, setProj3] = useState(false);
  const [proj4, setProj4] = useState(false);
  return (
    <div className={styles.myworkcontainerTablet}>
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
        <p style={{ maxWidth: "350px" }}>
          Providing custom digital solutions that bring long-term strategic
          value and make your business thrive. Stand out while staying true to
          your essence.
        </p>
        <p
          className={`${styles.taglineTabletWork} ${oswald.className}`}
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
      <ProjectDropdownTablet
        name="DEVIVED GAMES"
        type="Freelance"
        role="Branding, web design & development"
        linktext="UNDER DEVELOPMENT \"
        url="/my-work"
        DD={proj1}
        setDD={setProj1}
        img="/devivedgamesimg.jpeg"
        alt="Close-up picture of a hand typing on a keyboard."
        about="Devived Games is a video game development company in need of a comprehensive brand package. This includes a distinctive visual identity, logo and website."
        about2="The aim is to highlight the company's dedication to delivering high-quality games and prioritization of user feedback."
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
      <ProjectDropdownTablet
        name="WOMEN'S ROCK FESTIVAL"
        type="Freelance"
        role="Web design & development"
        linktext="LIVE SITE \"
        url="https://wrf.vercel.app"
        DD={proj2}
        setDD={setProj2}
        img="/wrfimg.jpeg"
        alt="Woman rock climbing."
        about="Ireland's Women's Rock festival is an outdoor climbing event organised by women for women. Following a succesful first edition in 2022, the team recognized the need for a professional website."
        about2="Noteworthy features of the new website include a custom booking system, email automation and a database designed to effortlessly retrieve information of over 80 participant and volunteers."
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
      <ProjectDropdownTablet
        name="WHAT DO YOU FEEL LIKE"
        type="Personal project"
        role="Web design & development"
        linktext="LIVE SITE \"
        url="https://whatdoyoufeellike.vercel.app"
        DD={proj3}
        setDD={setProj3}
        img="/wdyflimg.jpeg"
        alt="A bowl of spaghetti bolognese."
        about="What do you feel like? This website lets you create your own online recipe book. What started off as a passion project has really helped me get inspired in the kitchen."
        about2="Recipes can easily be modified and a convenient filter function allows you to quickly locate what you are looking for."
        designstack="Figma, Linearity Curve"
        developmentstack="JavaScript/TypeScript, TailwindCSS, Next, Vercel, Prisma, Prostgres, AWS"
      />
      <div className={styles.borderdelay0}></div>

      {/* ROW 13*/}
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>
      <div className={styles.borderdelay0}></div>

      {/* ROW 14*/}
      <div className={styles.borderdelay0}></div>
      <ProjectDropdownTablet
        name="BENDY CANDLE"
        type="Personal project"
        role="Web design & development"
        linktext="LIVE SITE \"
        url="https://bendycandle.netlify.app"
        DD={proj4}
        setDD={setProj4}
        img="/bendycandleimg.jpeg"
        alt="Woman doing stretches on a yoga mat."
        about="Bendy Candle lets you create your own flexibility routine and use a countdown timer while holding passive stretches."
        about2="It ensures hands-free usage by incorporating visual and auditory cues to signal transitions between exercises."
        designstack="Linearity Curve"
        developmentstack="JavaScipt, SCSS, Netlify"
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

export default WorkTablet;
