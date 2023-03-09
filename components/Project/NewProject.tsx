"use client";

import styles from "./NewProject.module.scss";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import { Project } from "@/types";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export function NewProject({
  emphasedTitle,
  title,
  description,
  projectUrl = "#",
  background,
}: Project) {
  return (
    <div className={styles.project}>
      <a href={projectUrl}>
        <div className={styles.project__background}>
          <Image
            className={styles.background__image}
            src={background}
            alt=""
            width={360}
            height={16 * 20}
          />
        </div>
        <div className={styles.project__content}>
          <h1
            className={`${roboto_condensed.className} ${styles.project__title}`}
          >
            <span className="font-bold">{emphasedTitle}</span> {title}
          </h1>

          <p className={styles.project__description}>{description}</p>
        </div>
      </a>
    </div>
  );
}
