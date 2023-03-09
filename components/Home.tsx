import { HomeProps } from "@/types";
import styles from "./Home.module.scss";
import { RollingList } from "./Home/RollingList";

export function Home({ content }: HomeProps) {
  return (
    <article className={`${styles.hero}`}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          {content.presentationText}
          <RollingList items={content.rollingItems} />
        </h1>
      </div>
    </article>
  );
}
