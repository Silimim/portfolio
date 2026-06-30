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

/* ───────────────── The player ───────────────── */
export const player = {
    name: "Simone Baptiste",
    title: "Full-stack Developer & DevOps",
    location: "Italy",
    players: "1 developer",
    ages: "22+",
    playtime: "∞ play time",
    difficulty: "Co-op friendly",
    tagline: "Building reliable software by day, designing little game worlds by night.",
    blurb:
        "I ship full-stack web apps and keep the infrastructure under them healthy — from Angular front-ends to Dockerized services and CI/CD pipelines. Off the clock I design games in Godot and Unity, which is where my love of board games and clean systems collide.",
};

/* ───────────────── Skills (level = dice pips, 1–6) ───────────────── */
export type Skill = {
    imageUrl: string;
    name: string;
    type: string;
    level: number;
};

export const skills: Skill[] = [
    { imageUrl: git, name: "Git", type: "Tooling", level: 6 },
    { imageUrl: github, name: "GitHub", type: "Tooling", level: 6 },
    { imageUrl: nodejs, name: "Node.js", type: "Backend", level: 5 },
    { imageUrl: mongodb, name: "MongoDB", type: "Database", level: 4 },
    { imageUrl: mysql, name: "MySQL", type: "Database", level: 5 },
    { imageUrl: java, name: "Java", type: "Backend", level: 4 },
    { imageUrl: go, name: "Go", type: "Backend", level: 4 },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend", level: 6 },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend", level: 6 },
    { imageUrl: react, name: "React", type: "Frontend", level: 5 },
    { imageUrl: angular, name: "Angular", type: "Frontend", level: 6 },
    { imageUrl: flutter, name: "Flutter", type: "Frontend", level: 4 },
    { imageUrl: godot, name: "Godot", type: "Game Dev", level: 5 },
    { imageUrl: unity, name: "Unity", type: "Game Dev", level: 4 },
];

/* category display order on the "components" manifest */
export const skillCategoryOrder = [
    "Frontend",
    "Backend",
    "Database",
    "Game Dev",
    "Tooling",
];

/* ───────────────── Rulebook (about, written as game instructions) ───────────────── */
export const rulebook = {
    objective:
        "Turn ideas into dependable, well-crafted software — and have fun doing it.",
    setup: [
        "Based in Italy, playing the developer class since 2022.",
        "Started as a full-stack web developer, leveled up into DevOps.",
        "Equally at home writing application code and tending the servers it runs on.",
    ],
    howToPlay: [
        "Design and build full-stack web apps (Angular, React, Node, Go, Java).",
        "Containerize with Docker & Docker Compose; automate with CI/CD pipelines.",
        "Harden, monitor and scale Linux infrastructure in production.",
        "Prototype games in Godot and Unity for the joy of systems and play.",
    ],
};

/* ───────────────── Campaign log (experience) ───────────────── */
export const experiences = [
    {
        title: "Full-stack Developer",
        company_name: "Cortis Lentini",
        icon: cortis,
        iconBg: "#ceffba",
        date: "Mar 2022 - 2025",
        level: 1,
        points: [
            "Developing and maintaining web applications using Angular and other related technologies.",
            "Collaborating with cross-functional teams to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Full-stack DevOps",
        company_name: "Cortis Lentini",
        icon: cortis,
        iconBg: "#ceffba",
        date: "2025 - Present",
        level: 2,
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

/* ───────────────── Social links ───────────────── */
export const socialLinks = [
    { name: "Contact", iconUrl: contact, link: "#join" },
    { name: "GitHub", iconUrl: github, link: "https://github.com/Silimim" },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/simone-baptiste/",
    },
];

/* ───────────────── Expansions (projects) ─────────────────
   color: box-cover theme color
   stats: shown on the flipped "back of the card"
*/
export type Project = {
    id: string;
    name: string;
    iconUrl: string;
    color: string;
    tagline: string;
    description: string;
    category: string;
    year: string;
    role: string;
    tech: string[];
    link?: string;
    internal?: boolean;
};

export const projects: Project[] = [
    {
        id: "paleoscovery",
        name: "Paleoscovery",
        iconUrl: paleoscovery,
        color: "#3F6B3E",
        tagline: "A 2D puzzle-platformer dig site",
        description:
            "Designed and developed a Unity 2D puzzle platformer where players excavate their way through prehistoric levels.",
        category: "Game · Unity",
        year: "2023",
        role: "Designer & Developer",
        tech: ["Unity", "C#", "Game Design", "2D"],
    },
    {
        id: "myfit",
        name: "MyFit",
        iconUrl: myfit,
        color: "#3E6B8C",
        tagline: "Track every workout & PR",
        description:
            "A cross-platform fitness app to plan workouts and track progress over time, built with Flutter.",
        category: "Mobile · Flutter",
        year: "2024",
        role: "Solo Developer",
        tech: ["Flutter", "Dart", "Mobile", "UX"],
        link: "/projects/myfit",
        internal: true,
    },
    {
        id: "dumbs",
        name: "Dumbs",
        iconUrl: dumb,
        color: "#C24B4B",
        tagline: "Couch-chaos multiplayer shooter",
        description:
            "A multiplayer 2D platformer shooter built in the Godot Engine — fast rounds, friends, and friendly fire.",
        category: "Game · Godot",
        year: "2024",
        role: "Designer & Developer",
        tech: ["Godot", "GDScript", "Multiplayer", "2D"],
    },
];
