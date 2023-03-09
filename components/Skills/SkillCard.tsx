"use client";

import { useInView } from "react-intersection-observer";
import styles from "./SkillsComponents.module.scss";
import { SkillDescription } from "./SkillDescription";
import { SkillList } from "./SkillList";
import { SkillTitle } from "./SkillTitle";
import { Skill } from "@/types";

export function SkillCard({
  icon,
  title,
  description,
  languageTitle,
  languages,
  toolTitle,
  tools,
}: Skill) {
  const { ref, inView } = useInView({
    onChange: (inView, entry) =>
      inView && entry.target.classList.add(styles["skill--active"]),
    triggerOnce: true,
  });

  return (
    <article
      className={`${styles.skill} ${inView ? styles["skill--active"] : ""}`}
      ref={ref}
    >
      <SkillTitle icon={icon} title={title} />

      <SkillDescription content={description} />

      <section>
        <SkillList title={languageTitle} items={languages} />
      </section>

      <section>
        <SkillList title={toolTitle} items={tools} vertical />
      </section>
    </article>
  );
}
