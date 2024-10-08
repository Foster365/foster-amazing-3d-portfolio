import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    openshift,
    veracode,
    csharp,
    jenkins,
    unity,
    photoshop,
    illustrator,
    animate,
    audition,
    substance,
    autodeskdsmax,
    accenture
} from "../assets/icons";

export const artSkills = [
    {
        imageUrl: animate,
        name: "AdobeAnimate",
        type: "Art",
    },
    {
        imageUrl: audition,
        name: "AdobeAudition",
        type: "Art",
    },
    {
        imageUrl: illustrator,
        name: "AdobeIllustrator",
        type: "Art",
    },
    {
        imageUrl: photoshop,
        name: "AdobePhotoshop",
        type: "Art",
    },
    {
        imageUrl: substance,
        name: "AdobeSubstance",
        type: "Art",
    },
    {
        imageUrl: autodeskdsmax,
        name: "3dsmax",
        type: "Art",
    },

];

export const developerSkills = [
    {
        imageUrl: csharp,
        name: "CSharp",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Frontend",
    },
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: jenkins,
        name: "Jenkins",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: openshift,
        name: "RedHatOpenshift.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
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
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "GameDevelopment",
    },
    {
        imageUrl: veracode,
        name: "Veracode",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "#a2d2ff",
        date: "July 2021 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Shaders Project',
        description: 'This is a shaders project made for an university shaders subject. It was made in Unity, using HDRP and Shadergraph.',
        link: 'https://www.youtube.com/watch?v=GM0UUuO-CKk',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AI Project in Unity.',
        description: 'This is an AI project, using Unity and C#. It consists in two troops, with a leader for each one, both troops will patrol and search for each other until finding its enemy. After this, they will start to attack each other, until the leader of one troop dies.This project combines multiple structures such as FSM, Behaviour Trees, Steering Behaviours, Flocking, Line of Sight and Pathfinding, using AStar with Vectors. You can check out the code and play a build stored in the "build" branch.',
        link: 'https://github.com/Foster365/Foster_Final_IA',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Multiplayer Game in Unity',
        description: 'This is a game, between 2 or more players, where the main goal is to get to the end of the map, and touch a cyan ball to win. The first player stands as a host, and will not play or interact with the other players. This game was built with Unity and Photon Pun, and implements a Hybrid structure, between Full Authority and Non Authority Multiplayer structure. This game also implements a Chat and Voice features, using Photon Chat and Photon Voice, respectively. You can check out the code and play a build stored in the "build" branch. You should match the same room name for all players, in order for starting the game correctly.',
        link: 'https://github.com/Fos7er365/Final-VJRED',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];