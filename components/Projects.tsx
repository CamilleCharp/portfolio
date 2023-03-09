import styles from "./Projects.module.scss";
import { NewProject } from "./Project/NewProject";
import { SectionTitle } from "./Text/SectionTitle";
import { SectionEmphasis } from "./Text/SectionEmphasis";
import { Project, ProjectsProps } from "@/types";

export function Projects({ content }: ProjectsProps) {
  const ProjectsList = content.projects.map((project: Project, i: number) => (
    <NewProject
      key={`projects ${project?.emphasedTitle} ${i}`}
      emphasedTitle={project?.emphasedTitle}
      title={project?.title}
      description={project.description}
      background={project.background}
      projectUrl={project.projectUrl}
    />
  ));

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.project__presentation}>
        <SectionTitle>{content.title}</SectionTitle>
        <SectionEmphasis>{content.emphasis}</SectionEmphasis>
      </div>
      <div className={styles.projects__content}>{ProjectsList}</div>
    </section>
  );
}
