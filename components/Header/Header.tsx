"use client";
import { Roboto_Condensed } from "next/font/google";

import MenuIcon from "../../public/menu.svg";
import styles from "./Header.module.scss";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-header",
});

export function Header() {
  return (
    <header className={`${roboto_condensed.variable} ${styles.header}`}>
      <div>
        <span>Camille</span> <span className="font-thin">Charp</span>
      </div>
      <button className={styles.menu__button}>
        <MenuIcon className={styles.menu__icon} />
      </button>
    </header>
  );
}
