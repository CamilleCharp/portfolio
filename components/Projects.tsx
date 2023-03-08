import styles from "./Projects.module.scss";
import { NewProject } from "./Project/NewProject";

export function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.project__presentation}>
        <h1 className="section-title">My projects</h1>
        <h2 className="section-emphasis">The latests projects I worked on</h2>
      </div>
      <div className={styles.projects__content}>
        <NewProject
          emphasedTitle="Paper"
          title="Recipes"
          description="A website I built to easily share recipes and deepen my knowledge of React/NextJS. It use NextAuth to handle authentication, and Supabase coupled with Prisma to manage datas"
          background="/paper-recipes.jpg"
          projectUrl="https://paper-recipes.ovh"
        />
        <NewProject
          emphasedTitle="Browsershot"
          description="A chrome extension I made to make it easier to take elegant screenshot of web pages"
          background="/browsershot.jpg"
          projectUrl="https://chrome.google.com/webstore/detail/browsershot/bcbbjngkibonjfkndbmicdobedcdgmhk?hl=fr"
        />
      </div>
    </section>
  );
}
