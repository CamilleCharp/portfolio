import styles from "./SkillsComponents.module.scss";

type Props = {
  title: string;
};

export function SkillSubTitle({ title }: Props) {
  return <h2 className={styles["skill__sub-title"]}>{title}</h2>;
}
