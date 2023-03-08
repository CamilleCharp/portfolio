import styles from "./Skills.module.scss";
import { Skill } from "./Skills/Skill";

import DesignIcon from "@/public/design.svg";
import ServerIcon from "@/public/server.svg";
import CodeIcon from "@/public/code.svg";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-roboto",
});

export function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.skills__presentation}>
        <h1 className="section-title">My skills</h1>
        <h2 className="section-emphasis">What can I actually do ?</h2>
        <span className={styles.skills__detail}>
          Knowing the theory is good, but knowing how to use the right tool for
          the right job is the most important part, here are the language,
          concepts and tools I know how to use the best
        </span>
      </div>

      <div className={styles.skills__list}>
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
      </div>
    </section>
  );
}
