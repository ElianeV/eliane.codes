import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";

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
  designstack,
  developmentstack,
}) {
  return (
    <>
      <div
        className={`${styles.borderdelay8} ${styles.projectcontainerTablet}`}
      >
        <div className={`${styles.titlecontainer}`}>
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
            <img className={styles.projectimageTablet} src={img} alt={alt} />
          </div>

          <div style={{ marginLeft: "32px", width: "100%" }}>
            <h3>ABOUT</h3>
            <p style={{ paddingTop: "16px" }}>{about}</p>

            <h3 style={{ marginTop: "32px" }}>STACK</h3>
            <p style={{ paddingTop: "16px" }}>
              <span style={{ textDecoration: "underline" }}>Design:</span>
              <br />
              {designstack}
            </p>
            <p style={{ paddingTop: "16px" }}>
              <span style={{ textDecoration: "underline" }}>Development:</span>{" "}
              <br />
              {developmentstack}
            </p>
            <a
              className={`${styles.projectlinkTablet} ${styles.underline}`}
              href={url}
              target="_blank"
            >
              {linktext}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDropdownMobile;
