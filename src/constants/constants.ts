
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    sass,
    godot,
    go,
    angular,
    java,
    unity,
    tailwindcss,
    typescript,
    cortis,
    paleoscovery,
    uniface,
    crm,
    dumb
}
// @ts-ignore
from "../assets/icons";

export const skills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: go,
        name: "Go",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: godot,
        name: "Godot",
        type: "Game Development",

    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Development",
    },
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Cortis Lentini",
        icon: cortis,
        iconBg: "#ceffba",
        date: "Mar 2022 - Present",
        points: [
            "Developing and maintaining web applications using Angular and other related technologies.",
            "Collaborating with cross-functional teams to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contacts',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Silimim',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/simone-baptiste/',
    }
];

export const projects = [
    {
        iconUrl: paleoscovery,
        theme: 'btn-back-black',
        name: 'Paleoscovery',
        description: 'Developed and designed a unity platformer puzzle 2D game'
    },
    {
        iconUrl: uniface,
        theme: 'btn-back-blue',
        name: 'Uniface helper extension for vscode',
        description: 'Developed a Visual Studio Code extension that helps developers to create Uniface components faster.',
        link: 'https://github.com/Silimim/Uniface-Helper',
    },
    {
        iconUrl: dumb,
        theme: 'btn-back-orange',
        name: 'Dumbs',
        description: 'Developed and designed a multiplayer 2D platformer shooter game using Godot Engine.',
    },
    {
        iconUrl: crm,
        theme: 'btn-back-green',
        name: 'Full stack CRM application',
        description: 'Developed a light CRM application for managing companies and contacts.',
        link: 'https://github.com/Silimim/hrapid-frontend',
    }
];