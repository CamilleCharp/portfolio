"use client";

import { cloneElement } from "react";
import styles from "./skill.module.scss";

type Props = {
  Icon: any;
  title: string;
  description: string;
  langTitle: string;
  langList: string[];
  techTitle: string;
  techList: string[];
};

export function Skill({
  Icon,
  title,
  description,
  langTitle,
  langList,
  techTitle,
  techList,
}: Props) {
  const StyledIcon = cloneElement(Icon, { className: styles.title__icon });

  return (
    <article className={styles.skill}>
      <span className={styles.skill__title}>
        {StyledIcon}
        <h1 className={styles.title__name}>{title}</h1>
      </span>

      <p className={styles.skill_description}>{description}</p>

      <section>
        <h2 className={styles.content__title}>{langTitle}</h2>
        <ul className={styles.skill__likes}>
          {langList.map((item: string, i: number) => (
            <li key={`${item} ${i}`}>
              {item}
              {i < langList.length - 1 && ","}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.skill__content}>
        <h2 className={styles.content__title}>{techTitle}</h2>
        <ul className={styles.skill__list}>
          {techList.map((item: string, i: number) => (
            <li key={`${item} ${i}`}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
