import { ReactElement, ReactNode } from 'react';

// Biggest components interface
interface HomeProps {
    content: HomeContent;
};

interface AboutProps {
    content: AboutContent;
};

interface SkillsProps {
    content: SkillsContent;
}

interface ProjectsProps {
    content: ProjectsContent;
}

interface ContactProps {
    content: ContactContent;
}

interface HomeContent {
    presentationText: string;
    rollingItems: string[];
}

interface AboutContent {
    title: string;
    emphasis: string;
    text: string;
}

interface  SkillsContent {
    title: string;
    emphasis: string;
    detail: string;
    skills: Skill[];
}

interface Skill {
    icon: ReactElement;
    title: string;
    description: string;
    languageTitle: string;
    languages: string[];
    toolTitle: string;
    tools: string[];
}

interface ProjectsContent {
    title: string;
    emphasis: string;
    projects: Project[]
}

interface Project {
    emphasedTitle: string;
    title?: string;
    description: string;
    background: string;
    projectUrl: string;
}

interface ContactContent {
    title: string;
    emphasis: string;
    detail: string;
    formLabels: FormLabels
}

interface FormLabels {
    name: string;
    email: string;
    message: string;
    submit: string;
}

// Smallest components interfaces

interface StylingComponent {
    children: ReactNode
}