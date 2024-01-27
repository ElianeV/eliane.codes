import styles from "./page.module.css";
import { Oswald } from "next/font/google";
import Grid from "./components/grid";
import GridTablet from "./components/grid-tablet";

const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <div className={styles.diagonalcontainer}>
        <svg className={styles.svg}>
          <line className={styles.line} x1="0" y1="40px" x2="100%" y2="100%" />
          <line
            className={styles.line}
            x1="0"
            y1="40px"
            x2="100%"
            y2="100%"
            transform="translate(0,24)"
          />
        </svg>
      </div> */}

      <div className={styles.diagonalcontainerTablet}>
        <svg className={styles.svg}>
          <line className={styles.line} x1="0" y1="40px" x2="100%" y2="100%" />
          <line
            className={styles.line}
            x1="0"
            y1="40px"
            x2="100%"
            y2="100%"
            transform="translate(0,24)"
          />
        </svg>
      </div>

      {/* <Grid infront={false} />
      <Grid infront={true} /> */}
      <GridTablet infront={false} />
      <GridTablet infront={true} />
    </main>
  );
}
