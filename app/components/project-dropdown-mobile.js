import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

function ProjectDropdownMobile({
  name,
  type,
  role,
  linktext,
  url,
  DD,
  setDD,
  img,
  alt,
  about,
  about2,
  designstack,
  developmentstack,
}) {
  return (
    <>
      <div
        className={`${styles.borderdelay8} ${styles.projectcontainerTablet}`}
      >
        <div className={`${styles.titlecontainer}`}>
          <div>
            <h2 className={`${styles.projecttitleMobile} ${oswald.className}`}>
              {name}
            </h2>
            <p className={styles.projectinfoMobile}>
              {type}
              <br />
              {role}
            </p>
          </div>
          <button
            className={`${styles.projectButtonMobile} ${styles.underline}`}
            onClick={() => {
              setDD(!DD);
            }}
          >
            {DD ? "-" : "+"}
          </button>
        </div>
        <div
          className={`${DD ? styles.block : styles.hidden}`}
          style={{ flexDirection: "column" }}
        >
          <Link href={url} target="_blank">
            <img className={styles.projectimageMobile} src={img} alt={alt} />
          </Link>

          <h3 style={{ marginTop: "26px" }}>ABOUT</h3>
          <p style={{ paddingTop: "16px" }}>{about}</p>
          <p style={{ paddingTop: "16px" }}>{about2}</p>

          <h3 style={{ marginTop: "32px" }}>STACK</h3>
          <p style={{ paddingTop: "16px" }}>
            <span style={{ textDecoration: "underline" }}>Development:</span>{" "}
            <br />
            {developmentstack}
          </p>
          <p style={{ paddingTop: "16px" }}>
            <span style={{ textDecoration: "underline" }}>Design:</span>
            <br />
            {designstack}
          </p>
          <Link
            className={`${styles.projectlinkTablet} ${styles.underline}`}
            href={url}
            target="_blank"
          >
            {linktext}
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectDropdownMobile;
