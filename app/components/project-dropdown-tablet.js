import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";

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
          <p className={styles.projectinfo}>
            {type}
            <br />
            {role}
          </p>
          <button
            onClick={() => {
              setDD(!DD);
            }}
          >
            Expand \
          </button>
          {/* <a
            className={`${styles.projectlink} ${styles.underline}`}
            href={url}
            target="_blank"
          >
            {linktext}
          </a> */}
        </div>
        <div className={`${DD ? styles.block : styles.hidden}`}>
          <img className={styles.projectimage} src={img} alt={alt} />

          <div style={{ marginLeft: "32px" }}>
            <h3>ABOUT</h3>
            <p style={{ paddingTop: "16px", maxWidth: "400px" }}>{about}</p>
          </div>
          <div style={{ marginLeft: "32px", maxWidth: "200px" }}>
            <h3>STACK</h3>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDropdownTablet;
