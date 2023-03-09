"use client";
import { Roboto_Condensed } from "next/font/google";
import { useState } from "react";
import MenuIcon from "../../public/menu.svg";
import styles from "./Header.module.scss";
import { HeaderBackground } from "./HeaderBackground";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-header",
});

const menuItems = [
  { name: "Home", anchor: "#" },
  { name: "About", anchor: "#about" },
  { name: "Skills", anchor: "#skills" },
  { name: "Projects", anchor: "#projects" },
  { name: "Contact", anchor: "#contact" },
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`${roboto_condensed.variable} ${styles.header}`}>
        <HeaderBackground isOpen={isMenuOpen} />
        <div className={styles.header__container}>
          <Navbar
            isOpen={isMenuOpen}
            toggleMenu={() => setMenuOpen(!isMenuOpen)}
          />
          <Menu items={menuItems} isOpen={isMenuOpen} />
        </div>
      </header>
    </>
  );
}
