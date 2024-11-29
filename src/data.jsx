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
    text: 'With a decade dedicated to web development, my proficiency in HTML and CSS stands as a testament to my commitment to the craft. ' +
        'My experience spans creating a wide array of websites, predominantly focusing on front-end design without backend complexities. ' +
        'This journey has honed my skills in delivering visually appealing and highly responsive websites. My specialization in vanilla CSS is marked by an ability to produce clean, ' +
        'sophisticated, and efficient designs, ensuring a seamless user experience. While my expertise is deeply rooted in these foundational technologies, ' +
        'I have also incorporated popular frameworks like Bootstrap into my toolkit and recently started experimenting with the utility-first approach of Tailwind CSS. ' +
        'This blend of deep-rooted HTML and CSS knowledge with an understanding of contemporary frameworks positions me uniquely in delivering web solutions that are both ' +
        'aesthetically elegant and functionally sound, perfectly tailored to meet diverse project needs.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <IoLogoJavascript className='h-16 w-16 red-600' />,
    text: 'My journey with JavaScript has been one of deep engagement and enthusiasm. ' +
        'Embracing the language\'s versatility, I\'ve developed a strong proficiency in employing a functional programming paradigm, ' +
        'an approach that resonates with my preference for writing clean, efficient, and reusable code. I am particularly fascinated by JavaScript\'s ability to animate web interfaces, ' +
        'making them dynamic and user-friendly. This fascination extends to exploring the language\'s intricacies, always seeking to understand the \'under the hood\' aspects that make JavaScript so powerful and flexible.' +
        ' My experience is marked by a dedicated commitment to mastering JavaScript, ensuring that I can address complex web development challenges with innovative and effective solutions.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 red-600' />,
    text: 'My exploration into React represents my commitment to staying at the forefront of web development technologies. While my initial projects with React, including my personal website, have been fundamental, ' +
        'they paved the way for a deeper understanding of this powerful library. I am currently engaged in a more complex React project, which is allowing me to delve into the more intricate aspects of state management and component-based architecture. ' +
        'This experience is sharpening my skills in creating more dynamic and responsive user interfaces. My journey with React is marked by a keen enthusiasm for its ecosystem and a dedication to mastering its capabilities. ' +
        'As I continue to expand my React proficiency, I am excited about the opportunities to leverage its potential in building sophisticated and interactive web applications.\n',
  },
  {
    id: nanoid(),
    title: 'C#',
    icon: <TbBrandCSharp className='h-16 w-16 red-600' />,
    text: 'C# stands as the core focus of my Bachelor\'s degree in Computer Science at WGU, where I am engaged in multiple courses dedicated to mastering this language. Set to graduate in February, my academic journey with C# encompasses developing basic console applications and gradually advancing to complex projects that incorporate back-end systems and databases. ' +
        'This journey into C# has been pivotal in broadening my understanding of object-oriented programming, a shift from my earlier focus on functional programming in JavaScript. As I continue to deepen my proficiency in C#, I am building a robust foundation that is crucial for tackling a wide range of software development challenges.' +
        ' My dedication to mastering C# is not only about learning a language but about developing a comprehensive skill set that is essential for a versatile software developer.',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaGit className='h-16 w-16 red-600' />,
    text: ' My expertise in Git is a standout skill, allowing me to adeptly manage version control for various software projects. This includes a comprehensive understanding of Git operations such as branching, merging, and conflict resolution, which are essential for maintaining clean and efficient code repositories. ' +
        'In addition to my proficiency with Git, I am experienced in using project management tools such as issue trackers and project management boards, specifically with platforms like GitHub and GitLab. These tools have been instrumental in organizing tasks, tracking progress, and managing issues or \'tickets\' effectively. ' +
        'My ability to seamlessly integrate version control with project management practices makes me a valuable asset in any software development workflow, ensuring a disciplined and efficient approach to project execution.',
  },
  {
    id: nanoid(),
    title: 'PostgreSQL',
    icon: <SiPostgresql className='h-16 w-16 red-600' />,
    text: 'Through my academic journey at WGU, I have developed a solid understanding of PostgreSQL, honing my skills over three comprehensive courses. ' +
        'My proficiency lies in crafting efficient SQL queries and managing database operations, skills that I have applied in various academic projects. While I may not be an expert, my ability to navigate moderately advanced database tasks speaks to my analytical and problem-solving capabilities. ' +
        'My experience with PostgreSQL has equipped me with a practical grasp of database management, an essential skill in today\'s data-driven technology landscape. ' +
        'I am committed to further enhancing my proficiency in PostgreSQL, aiming to continuously evolve my capabilities in database administration and SQL.\n' +
        '\n',
  },
];

export const projects = [
  {
    title: "Project 1",
    description: "A description of project 1.",
    githubLink: "https://github.com/your-username/project1",
    liveLink: "https://your-live-link.com",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "Project 2",
    description: "A description of project 2.",
    githubLink: "https://github.com/your-username/project2",
    liveLink: "https://your-live-link.com",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "Project 3",
    description: "A description of project 3.",
    githubLink: "https://github.com/your-username/project3",
    liveLink: "https://your-live-link.com",
    image: "https://via.placeholder.com/800x400",
  },
];