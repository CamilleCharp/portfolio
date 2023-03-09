import styles from "./Header.module.scss";

type Props = {
  isOpen: boolean;
};

export function HeaderBackground({ isOpen }: Props) {
  const classNames = isOpen
    ? `${styles.header__background} ${styles["header__background--open"]}`
    : styles.header__background;

  return <div className={classNames}></div>;
}
