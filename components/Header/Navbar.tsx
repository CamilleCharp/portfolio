import ClosedMenuIcon from "@/public/menu.svg";
import OpenMenuIcon from "@/public/x.svg";

import styles from "./Header.module.scss";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function Navbar({ isOpen, toggleMenu }: Props) {
  return (
    <div className={styles.navbar}>
      <div>
        <span>Camille</span>{" "}
        <span className={styles["navbar__name--thin"]}>Charp</span>
      </div>
      <button
        className={styles["navbar__toggle-button"]}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <OpenMenuIcon className={styles["navbar__toggle-icon"]} />
        ) : (
          <ClosedMenuIcon className={styles["navbar__toggle-icon"]} />
        )}
      </button>
    </div>
  );
}

// () => setMenuOpen(!isMenuOpen)
