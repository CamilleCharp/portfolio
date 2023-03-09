import styles from "./SkillsComponents.module.scss";

type Props = {
  content: string;
};

export function SkillDescription({ content }: Props) {
  return <p className={styles.skill__description}>{content}</p>;
}
