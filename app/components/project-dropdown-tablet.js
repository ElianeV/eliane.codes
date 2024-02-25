import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

function ProjectDropdownTablet({
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
        className={`${styles.borderdelay0} ${styles.projectcontainerTablet}`}
      >
        <div className={`${styles.titlecontainerTouch}`}>
          <h2 className={`${styles.projecttitleTablet} ${oswald.className}`}>
            {name}
          </h2>
          <p className={styles.projectinfoTablet}>
            {type}
            <br />
            {role}
          </p>
          <button
            className={`${styles.projectButtonTablet} ${styles.underline}`}
            onClick={() => {
              setDD(!DD);
            }}
          >
            {DD ? "COLLAPSE \\" : "EXPAND \\"}
          </button>
        </div>
        <div className={`${DD ? styles.block : styles.hidden}`}>
          <div>
            <Link href={url} target="_blank">
              <img className={styles.projectimageTablet} src={img} alt={alt} />
            </Link>
          </div>

          <div style={{ marginLeft: "32px", width: "100%" }}>
            <h3>ABOUT</h3>
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
      </div>
    </>
  );
}

export default ProjectDropdownTablet;
