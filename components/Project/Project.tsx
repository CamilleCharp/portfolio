import styles from "./Project.module.scss";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "700"],
});

type Props = {
  emphasedTitle: string;
  title?: string;
  description: string;
  projectUrl?: string;
  background: string;
};

export function Project({
  emphasedTitle,
  title,
  description,
  projectUrl = "#",
  background,
}: any) {
  return (
    <article className={styles.project}>
      <div
        className={styles.project__background}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className={styles.project__content}>
        <h1 className={`${styles.project__name} ${roboto.className}`}>
          <a href={projectUrl}>
            <span className={styles.name__emphasis}>{emphasedTitle}</span>{" "}
            {title && <span className={styles.name__standard}>{title}</span>}
          </a>
        </h1>
        <p className={styles.project__description}>{description}</p>
      </div>
    </article>
  );
}
