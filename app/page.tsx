import { About, Contact, Home, Projects, Skills } from "@/components/";

import DesignIcon from "@/public/design.svg";
import ServerIcon from "@/public/server.svg";
import CodeIcon from "@/public/code.svg";

export default function Index() {
  return (
    <>
      <Home content={homeContent} />
      <About content={aboutContent} />
      <Skills content={skillContent} />
      <Projects content={projectsContent} />
      <Contact content={contactContent} />
    </>
  );
}

const homeContent = {
  presentationText: "Hi I'm Camille. I'm a",
  rollingItems: ["Webdev", "Designer", "Architect"],
};

const aboutContent = {
  title: "About me",
  emphasis: "Who am I ?",
  text: `Hey there! Thanks for stopping by my corner of the internet. My name is Camille, and I'm a passionnate full-stack freelance web developer based in Brussels.

  I love to design with big spaces and how to place every little elements in it and using simple and subtle animations to enhance the user experience without overcrowding the eye.
  
  I apply the same principle in my code where I prefer to work with very small reusable components that are easy to understand, which is why I use React and other JS libraries for the majority of my projects.
  
  I think every idea or project should be heard, whether it's a scribble on a napkin or a well-laid plan, and it would be my pleasure to hear your idea and see how I can work with you on it.`,
};

const skillContent = {
  title: "My skills",
  emphasis: "What can I actually do ?",
  detail:
    "Knowing the theory is good, but knowing how to use the right tool for the right job is the most important part. Here are the languages, concepts, and tools I know how to use the best.",
  skills: [
    {
      icon: <DesignIcon />,
      title: "Design",
      description:
        "My goal is to create designs focused on interactivity, readability, and accessibility, all without sacrificing satisfying animations.",
      languageTitle: "What I like to design",
      languages: ["UI", "Animations", "Prototypes"],
      toolTitle: "Design tools",
      tools: ["Framer", "Figma", "Canva", "Font Awesome"],
    },
    {
      icon: <CodeIcon />,
      title: "Front-end",
      description:
        "I think a strong foundation is what makes a website or application last over time.",
      languageTitle: "I fluently speak",
      languages: ["HTML", "CSS", "SCSS", "Javascript", "Typescript"],
      toolTitle: "Front techs I use",
      tools: [
        "React",
        "NextJS (12 and 13)",
        "Jest",
        "Framer Motion",
        "Styled Components",
        "Material UI",
      ],
    },
    {
      icon: <ServerIcon />,
      title: "Back-end",
      description:
        "Nowadays, I mostly use Node, either with Express or more abstractly with Next.js API routes. However, I still enjoy working with PHP and its clear structure.",
      languageTitle: "For my back-ends I speak",
      languages: ["PHP", "JS/TS", "Python"],
      toolTitle: "Techs I use",
      tools: [
        "Symfony (3 to 6)",
        "Express",
        "NextJS API",
        "Next-auth",
        "Prisma",
        "Supabase",
        "Wordpress",
        "Strapi",
      ],
    },
  ],
};

const projectsContent = {
  title: "My projects",
  emphasis: "What did I do recently ?",
  projects: [
    {
      emphasedTitle: "Paper",
      title: "Recipes",
      description:
        "A website I built to easily share recipes and deepen my knowledge of React/NextJS. It use NextAuth to handle authentication, and Supabase coupled with Prisma to manage datas",
      background: "/paper-recipes.jpg",
      projectUrl: "https://paper-recipes.ovh",
    },
    {
      emphasedTitle: "Browsershot",
      description:
        "A chrome extension I made to make it easier to take elegant screenshot of web pages",
      background: "/browsershot.jpg",
      projectUrl:
        "https://chrome.google.com/webstore/detail/browsershot/bcbbjngkibonjfkndbmicdobedcdgmhk",
    },
  ],
};

const contactContent = {
  title: "Contact me",
  emphasis: "Need my skills on your next project ?",
  detail:
    "I am currently available to help you with your project or to answer any questions you may have. You can send me an email by filling out this form.",
  formLabels: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Contact me",
  },
};
