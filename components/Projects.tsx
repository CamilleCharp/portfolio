import { Project } from "./Project/Project";
import styles from "./Projects.module.scss";

export function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <Project
        emphasedTitle="Paper"
        title="Recipes"
        description="I built a recipe sharing website using Next.js, Prisma, and Supabase. The website is designed to allow users to easily share and discover new recipes, while also providing an opportunity for me to deepen my understanding of React and Next.js."
        background="/paper-recipes.jpg"
        projectUrl="https://paper-recipes.ovh"
      />
      <Project
        emphasedTitle="Browsershot"
        description="A chrome extension I made to make it easier to take elegant screenshot of web pages"
        background="/browsershot.jpg"
        projectUrl="https://chrome.google.com/webstore/detail/browsershot/bcbbjngkibonjfkndbmicdobedcdgmhk?hl=fr"
      />
    </section>
  );
}
