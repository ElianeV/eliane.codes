import styles from "./page.module.css";

import { Oswald } from "next/font/google";

const inter = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={inter.className}>Test this text</div>
      <div>Montserr</div>
    </main>
  );
}
