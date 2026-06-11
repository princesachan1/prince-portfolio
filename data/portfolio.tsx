import { FaGithub, FaAws, FaLinkedin, FaTwitter, FaInstagram, FaCode, FaDatabase, FaTools, FaBrain, FaJava, FaLanguage } from "react-icons/fa";
import { SiJupyter, SiHuggingface, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiFigma, SiPython, SiCplusplus, SiJavascript, SiTensorflow, SiPytorch, SiScikitlearn, SiDocker, SiGit, SiPandas, SiRedis } from "react-icons/si";
import { TbPrompt } from "react-icons/tb";
import { CiCloud } from "react-icons/ci";
import { VscAzure } from "react-icons/vsc";
import { FaSquareXTwitter, FaMeta } from "react-icons/fa6";

export const portfolioData = {
    hero: {
        name: "Prince Sachan",
        title: "Fullstack Developer | AI Enthusiast | Turning Code into Intelligence",
        description: "I build AI-driven, scalable web applications using modern full-stack technologies. My focus is on integrating Artificial Intelligence, Machine Learning, and data driven systems into real world software solutions that improve efficiency and user experience.",
        avatar: "/images/avatar.png",
        actions: {
            primary: { text: "Contact Me", href: "#contact" },
            secondary: { text: "View Projects", href: "#projects" },
            resume: "https://docs.google.com/document/d/17ykH2kr8HaQUckETUVnvLXHSe2xMDS9eQTfL1Or6rzw/edit?usp=sharing"
        }
    },

    about: {
        title: "About Me",
        description: [
            "I am a passionate MCA student with a deep interest in Artificial Intelligence, Machine Learning, and Web Development. I love exploring new technologies and building capabilities that solve real-world problems.",
            "With a strong foundation in computer science and a creative mindset, I enjoy bridging the gap between complex algorithms and user friendly interfaces.",
            "Currently, I am focusing on advanced AI applications and full-stack web architectures."
        ],
        education: [
            {
                degree: "Master of Computer Applications (MCA)",
                institution: "Dev Bhoomi  Uttarakhand University, Dehradun",
                year: "2025 - Present",
                details: "Specializing in AI & Data Science"
            },
            {
                degree: "Bachelor of Computer Applications (BCA)",
                institution: "Babu Banarasi Das University , Lucknow",
                year: "2021 - 2024",
                details: "Specializing in AI & Data Science"
            }
        ],
        image: "/video2.mp4"
    },

    skills: {
        "Programming Languages": [
            { name: "Python", icon: <SiPython /> },
            { name: "Java", icon: <FaJava /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "TypeScript", icon: <SiTypescript /> }
        ],
        "Web Technologies": [
            { name: "React", icon: <FaCode /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
        "AI / ML Tools": [
            { name: "TensorFlow", icon: <SiTensorflow /> },
            { name: "PyTorch", icon: <SiPytorch /> },
            { name: "Scikit-Learn", icon: <SiScikitlearn /> },
            { name: "RAG", icon: null },
            { name: "HuggingFace", icon: <SiHuggingface /> },
            { name: "NLP", icon: <FaLanguage /> },
            { name: "Generative AI", icon: <FaBrain /> },
            { name: "Large Language Models(LLMs)" },
            { name: "Model Fine-Tuning & Prompt Engineering", icon: <TbPrompt /> },
        ],
        "Databases & Tools": [
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "FAISS", icon: <FaMeta /> },
            { name: "Pinecone", },
            { name: "Redis", icon: <SiRedis /> },
            { name: "Figma", icon: <SiFigma /> }

        ],
        "Cloud & DevOps": [
            { name: "Git & GitHub", icon: <SiGit /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "CI/CD Pipeline", icon: <SiGit /> },
            { name: "Cloud Deployment", icon: <CiCloud /> },
            { name: "Azure", icon: <VscAzure /> }
        ]
    },

    projects: [
        {
            title: "RAG-Based Legal Chatbot",
            description: "Built RAG-powered chatbot using LangChain & Qwen LLM for Indian legal queries. Implemented vector search with ChromaDB across 32 legal documents",
            tech: ["Streamlit", "Python", "ChromaDB", "LangChain", "Qwen LLM"],
            image: "/images/legal_bot.JPG",
            github: "https://github.com/princesachan1/Project-AiLegalBot",
            demo: "https://huggingface.co/spaces/Ragabhai/Legal-Bot"
        },
        {
            title: "Verdant-EcoSystem",
            description: "A full-stack food delivery platform featuring advanced AI analytics, real-time intelligence dashboards, and eco-rewards. Built with React, Flask, PostgreSQL, and high-performance C modules.",
            tech: ["Python", "Flask", "React", "PostgreSQL", "C"],
            image: "/images/verdantproject.JPG",
            github: "https://github.com/princesachan1/verdant-EcoSystem",
            demo: "https://verdant-eco-system.vercel.app/"
        },

        {
            title: "Portfolio V1",
            description: "The first iteration of my personal portfolio showcasing my early web development skills.",
            tech: ["next.js", "tailwindcss", "typescript"],
            image: "/images/portfolio.JPG",
            github: "https://github.com/princesachan1/prince-portfolio",
            demo: "https://princeportfolio2.vercel.app/"
        },
    ],

    contact: {
        title: "Get In Touch",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!",
        socials: [
            { icon: <FaGithub />, href: "https://github.com/princesachan1" },
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/princesachan/" },
            { icon: <FaSquareXTwitter />, href: "https://twitter.com" },
        ]
    }
};
