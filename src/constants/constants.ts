
import {
    contact,
    git,
    github,
    linkedin,
    mongodb,
    nodejs,
    react,
    godot,
    go,
    angular,
    java,
    unity,
    tailwindcss,
    typescript,
    cortis,
    paleoscovery,
    myfit,
    dumb,
    flutter,
    mysql,
}
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
      name: "MySQL",
      type:  "Database"
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
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
        imageUrl: godot,
        name: "Godot",
        type: "Game Development",

    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Development",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Cortis Lentini",
        icon: cortis,
        iconBg: "#ceffba",
        date: "Mar 2022 - 2025",
        points: [
            "Developing and maintaining web applications using Angular and other related technologies.",
            "Collaborating with cross-functional teams to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
    {
        title: "Full stack DevOps",
        company_name: "Cortis Lentini",
        icon: cortis,
        iconBg: "#ceffba",
        date: "2025 - Present",
        points: [
            "Managing and maintaining Linux servers, including provisioning, configuration, security hardening, and performance monitoring.",
            "Containerizing applications using Docker and orchestrating multi-container environments with Docker Compose for consistent development and production deployments.",
            "Designing and implementing CI/CD pipelines to automate build, test, and deployment workflows.",
            "Developing and maintaining full stack web applications while bridging development and operations responsibilities.",
            "Monitoring system health, troubleshooting production issues, and optimizing infrastructure for reliability and scalability.",
            "Collaborating with development teams to ensure smooth integration between application code and infrastructure.",
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
        iconUrl: myfit,
        theme: 'btn-back-green',
        name: 'MyFit',
        description: 'Developed a fitness application to track workouts and progress, built with Flutter',
        link: '/projects/myfit',
        internal: true,
    },
    {
        iconUrl: dumb,
        theme: 'btn-back-orange',
        name: 'Dumbs',
        description: 'Developed and designed a multiplayer 2D platformer shooter game using Godot Engine.',
    }
];
