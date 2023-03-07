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
      <section className={`${roboto.variable} ${styles.about}`}>
        <h1 className={styles.about__title}>About me</h1>

        <p className={styles.about__presentation}>
          {`Hello and welcome to my corner of the internet. I am Camille and I've passionate about software development and design for more than ten years, working on project for myself mostly. 
        
        Nowadays I'm a full stack web dev with 2 years of experience in the field, both in a company and as a freelance. I'm working mostly with React, Symfony and Wordpress but I'm always interested in discovering other technologies. 
        
        I am currently learning how to use Python and plan on learning C# in 2023.`}
        </p>
      </section>
      <section className={`${styles.skills} ${roboto.variable}`}>
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
            "Prisma",
            "Wordpress",
            "Strapi",
          ]}
        />
      </section>

      <section>
        <Project />
      </section>
    </>
  );
}
