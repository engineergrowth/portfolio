import { nanoid } from 'nanoid';
import { FaCss3, FaReact, FaGit } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { SiPostgresql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
export const Links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'tech' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaCss3 className='h-16 w-16 red-600' />,
    text: 'I have years of experience in HTML and CSS, building responsive, clean websites. I’ve worked with both vanilla CSS and frameworks like Bootstrap and Tailwind, always focusing on delivering elegant designs with great user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <IoLogoJavascript className='h-16 w-16 red-600' />,
    text: 'JavaScript is the core of my development skills. I use it extensively for building dynamic, interactive web apps, focusing on clean, efficient code and exploring its deeper functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 red-600' />,
    text: 'I’ve worked extensively with React, from building simple UIs to managing complex state and component architectures. I’m excited by its ecosystem and enjoy creating dynamic, responsive applications.',
  },
  {
    id: nanoid(),
    title: 'C# & .NET MAUI',
    icon: <TbBrandCSharp className='h-16 w-16 red-600' />,
    text: 'C# is central to my development journey. I’ve used it for backend systems, databases, and even mobile apps with .NET MAUI, combining my object-oriented programming skills with cross-platform app development.',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGit className='h-16 w-16 red-600' />,
    text: 'I’m skilled in Git for version control, including branching, merging, and conflict resolution. I also use GitHub and GitLab for task management and collaboration, ensuring smooth project workflows.',
  },
  {
    id: nanoid(),
    title: 'PostgreSQL',
    icon: <SiPostgresql className='h-16 w-16 red-600' />,
    text: 'I have extensive experience with PostgreSQL, having designed schemas for several full-stack apps. I’m proficient in writing complex SQL queries and managing database operations, which allows me to build efficient, scalable databases that meet project needs.',
  }

];
