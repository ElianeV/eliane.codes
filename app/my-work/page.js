"use client";
import styles from "../../app/page.module.css";
import { Oswald } from "next/font/google";
import Work from "../components/work";

const oswald = Oswald({ subsets: ["latin"] });

const Mywork = () => {
  return (
    <>
      <Work />
    </>
  );
};

export default Mywork;
