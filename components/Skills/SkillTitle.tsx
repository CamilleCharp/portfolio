import { cloneElement, ReactElement } from "react";
import styles from "./SkillsComponents.module.scss";

type Props = {
  icon: ReactElement;
  title: string;
};

export function SkillTitle({ icon, title }: Props) {
  const StyledIcon = cloneElement(icon, { className: styles.title__icon });

  return (
    <span className={styles.skill__title}>
      {StyledIcon}
      <h1 className={styles.title__name}>{title}</h1>
    </span>
  );
}
