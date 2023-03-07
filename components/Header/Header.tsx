"use client";
import { Roboto_Condensed } from "next/font/google";
import { useState } from "react";
import MenuIcon from "../../public/menu.svg";
import styles from "./Header.module.scss";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-header",
});

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`${roboto_condensed.variable} ${styles.header}`}>
        <div className={styles.header__container}>
          <div
            className={`${styles.header__background} ${
              isMenuOpen ? styles["header__background--open"] : ""
            }`}
          ></div>
          <div className={styles.baseBar}>
            <div>
              <span>Camille</span> <span className="font-thin">Charp</span>
            </div>
            <button
              className={styles.menu__button}
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className={styles.menu__icon} />
            </button>
          </div>
          <nav
            className={`${styles.menu} ${
              isMenuOpen ? styles["menu--open"] : ""
            }`}
          >
            <ul className={styles.menu__list}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
