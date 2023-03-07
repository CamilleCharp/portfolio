import styles from "./Project.module.scss";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export function Project() {
  return (
    <article className={styles.project}>
      <div
        className={styles.project__background}
        style={{ backgroundImage: "url(/project.jpg)" }}
      ></div>
      <div className={styles.project__content}>
        <h1 className={`${styles.project__name} ${roboto.className}`}>
          <span className={styles.name__emphasis}>Project</span>{" "}
          <span className={styles.name__standard}>name</span>
        </h1>
        <p className={styles.project__description}>
          A small description of project should go here.
        </p>
      </div>
    </article>
  );
}
