import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

function ProjectDropdown({
  name,
  type,
  role,
  linktext,
  url,
  DD,
  setDD,
  about,
  designstack,
  developmentstack,
}) {
  return (
    <>
      <div
        onClick={() => {
          setDD(!DD);
        }}
        className={`${styles.borderdelay8} ${styles.projectcontainer}`}
      >
        <div className={`${styles.titlecontainer}`}>
          <h2 className={`${styles.projecttitle} ${oswald.className}`}>
            {name}
          </h2>
          <p className={styles.projectinfo}>
            {type}
            <br />
            {role}
          </p>
          <a className={styles.projectlink} href={url} target="_blank">
            {linktext}
          </a>
        </div>
        <div className={`${DD ? styles.block : styles.hidden}`}>
          <div className={styles.projectimage}></div>
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

export default ProjectDropdown;
