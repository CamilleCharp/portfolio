import styles from "./SkillsComponents.module.scss";
import { SkillSubTitle } from "./SkillSubTitle";

type Props = {
  title: string;
  items: string[];
  vertical?: boolean;
};

export function SkillList({ title, items, vertical = false }: Props) {
  const listClassNames = vertical
    ? `${styles.skill__list} ${styles["skill__list--vertical"]}`
    : styles.skill__list;

  const SkillItems = items.map((item: string, i: number) => (
    <li key={`${item} ${i}`}>
      {item}
      {i < items.length - 1 && ","}
    </li>
  ));

  return (
    <>
      <SkillSubTitle title={title} />
      <ul className={listClassNames}>{SkillItems}</ul>
    </>
  );
}
