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
          <img className={styles.projectimageMobile} src={img} alt={alt} />

          <h3 style={{ marginTop: "26px" }}>ABOUT</h3>
          <p style={{ paddingTop: "16px" }}>{about}</p>

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
          <a
            className={`${styles.projectlinkTablet} ${styles.underline}`}
            href={url}
            target="_blank"
          >
            {linktext}
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectDropdownMobile;
