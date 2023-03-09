import styles from "./HomeComponents.module.scss";
import { RollingItem } from "./RollingItem";

type Props = {
  items: string[];
};

export function RollingList({ items }: Props) {
  if (!items) return null;

  return (
    <div className={styles.rollingList}>
      {items.map((item: string, i: number) => (
        <RollingItem key={`${item} ${i}`} content={item} />
      ))}
    </div>
  );
}
