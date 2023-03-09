import styles from "./Skills.module.scss";
import { SectionTitle } from "./Text/SectionTitle";
import { SectionEmphasis } from "./Text/SectionEmphasis";
import { SectionDetail } from "./Text/SectionDetail";
import { SkillCard } from "./Skills/SkillCard";
import { Skill, SkillsProps } from "@/types";

export function Skills({ content }: SkillsProps) {
  const SkillCards = content.skills.map((skill: Skill, i: number) => (
    <SkillCard
      key={`Skill card ${skill.title} ${i}`}
      icon={skill.icon}
      title={skill.title}
      description={skill.description}
      languageTitle={skill.languageTitle}
      languages={skill.languages}
      toolTitle={skill.toolTitle}
      tools={skill.tools}
    />
  ));

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.skills__presentation}>
        <SectionTitle>{content.title}</SectionTitle>
        <SectionEmphasis>{content.emphasis}</SectionEmphasis>
        <SectionDetail>{content.detail}</SectionDetail>
      </div>

      <div className={styles.skills__list}>{SkillCards}</div>
    </section>
  );
}
