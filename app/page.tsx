import styles from "./page.module.scss";
import Link from "next/link";

import DesignIcon from "@/public/design.svg";
import ServerIcon from "@/public/server.svg";
import CodeIcon from "@/public/code.svg";

import { Roboto } from "next/font/google";
import HomeSection from "@/components/Home";
import { Skill } from "@/components/Skills/Skill";
import { Server } from "http";
import { Project } from "@/components/Project/Project";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-roboto",
});

export default function Home() {
  return (
    <>
      <HomeSection />
      <section className={`${roboto.variable} ${styles.about}`} id="about">
        <h1 className={styles.about__title}>About me</h1>

        <p className={styles.about__presentation}>
          {`Hello and welcome to my corner of the internet ! I am a fullstack freelance webdev from Brussels.

          I aim to create website and webapp that are simple to use and maintain for both the final users and developpers. 

          For that I made sure to understand how to design from the first idea scribbled on a piece of paper to the deepest nooks of a relational database.

          This allows me to accompany you in your projects at every steps of your projects and make sure the product I deliver is as close as possible to your vision.
          `}
        </p>
      </section>
      <section className={`${styles.skills} ${roboto.variable}`} id="skills">
        <h1 className={styles.skills__title}>What can I actually do ?</h1>

        <Skill
          Icon={<DesignIcon />}
          title="Design"
          description="My goal is to make design focused on interactivity, readability and
            of course accessibility. All without sacrificing satisfying
            animations."
          langTitle="What I like to design"
          langList={["UI", "Animations", "Prototypes"]}
          techTitle="Design tools"
          techList={["Framer", "Figma", "Canva", "Font Awesome"]}
        />

        <Skill
          Icon={<CodeIcon />}
          title="Front-end"
          description="I think a strong foundation is what make a website or application last in time"
          langTitle="I fluently speak"
          langList={["HTML", "CSS", "SCSS", "Javascript", "Typescript"]}
          techTitle="Front techs I use"
          techList={[
            "React",
            "NextJS (12 and 13)",
            "Jest",
            "Framer Motion",
            "Styled Components",
            "Material UI",
          ]}
        />

        <Skill
          Icon={<ServerIcon />}
          title="Back-end"
          description="Nowaday I mostly use node either with Express or more abstractly with Next Api routes. But I still enjoy using PHP and its clear structure"
          langTitle="For my back-ends I speak"
          langList={["PHP", "JS/TS", "Python"]}
          techTitle="Techs I use"
          techList={[
            "Symfony (3 to 6)",
            "Express",
            "NextJS API",
            "Next-auth",
            "Prisma",
            "Supabase",
            "Wordpress",
            "Strapi",
          ]}
        />
      </section>

      <section className={styles.projects} id="projects">
        <Project
          emphasedTitle="Paper"
          title="Recipes"
          description="A recipe sharing website I built using NextJS, Prisma and Supabase"
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

      <section className={styles.contact} id="contact">
        <p className={styles.contact__description}>
          Do you have any question ? Would you like to work with me ?
        </p>
        <a
          href="mailto:camille.charpentier77@gmail.com"
          className={styles.contact__button}
        >
          Contact me
        </a>
      </section>
    </>
  );
}
