import styles from "./HomeComponents.module.scss";

type Props = {
  content: string;
};

export function RollingItem({ content }: Props) {
  return <span className={styles.rollingList__item}>{content}</span>;
}
