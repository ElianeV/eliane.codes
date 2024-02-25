import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

function ProjectDropdown({
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
      <div className={`${styles.borderdelay8} ${styles.projectcontainer}`}>
        <div
          onClick={() => {
            setDD(!DD);
          }}
          className={`${styles.titlecontainer}`}
        >
          <h2 className={`${styles.projecttitle} ${oswald.className}`}>
            {name}
          </h2>
          <p className={styles.projectinfo}>
            {type}
            <br />
            {role}
          </p>
          <Link
            className={`${styles.projectlink} ${styles.underline}`}
            href={url}
            target="_blank"
          >
            {linktext}
          </Link>
        </div>
        <div className={`${DD ? styles.block : styles.hidden}`}>
          <Link href={url} target="_blank">
            <img className={styles.projectimage} src={img} alt={alt} />
          </Link>

          <div style={{ marginLeft: "32px" }}>
            <h3>ABOUT</h3>
            <p
              style={{
                paddingTop: "16px",
                minWidth: "340px",
                maxWidth: "500px",
              }}
            >
              {about}
            </p>
            <p
              style={{
                paddingTop: "16px",
                minWidth: "340px",
                maxWidth: "500px",
              }}
            >
              {about2}
            </p>
          </div>
          <div style={{ marginLeft: "32px", maxWidth: "200px" }}>
            <h3>STACK</h3>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDropdown;
