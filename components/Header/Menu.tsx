import styles from "./Header.module.scss";

type Item = {
  name: string;
  anchor: string;
};

type Props = {
  items: Item[];
  isOpen: boolean;
};

export function Menu({ items, isOpen }: Props) {
  const menuClassNames = isOpen
    ? `${styles.menu} ${styles["menu--open"]}`
    : styles.menu;

  const menuItems = items.map((item: Item, i: number) => (
    <li key={`${item.name} ${i}`}>
      <a href={`#${item.anchor}`}>{item.name}</a>
    </li>
  ));

  return (
    <nav className={menuClassNames}>
      <ul className={styles.menu__list}>{menuItems}</ul>
    </nav>
  );
}
