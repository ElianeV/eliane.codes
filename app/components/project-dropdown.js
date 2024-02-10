import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

function ProjectDropdown({ name, type, role, linktext, url }) {
  return (
    <div className={`${styles.borderdelay8} ${styles.titlecontainer}`}>
      <div className={`${styles.projecttitle} ${oswald.className}`}>{name}</div>
      <div className={styles.projectinfo}>
        {type}
        <br />
        {role}
      </div>
      <a className={styles.projectlink} href={url}>
        {linktext}
      </a>
    </div>
  );
}

export default ProjectDropdown;
