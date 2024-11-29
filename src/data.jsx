import { nanoid } from 'nanoid';
import { FaCss3, FaReact, FaGit } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { SiPostgresql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import PortfolioImage from './assets/p.png';
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
    id: nanoid(),
    img: PortfolioImage,
    url: 'https://www.netlify.app/',
    github: 'https://github.com/engineergrowth',
    title: 'first project',
    text: 'Project Description 1....',
  },
  {
    id: nanoid(),
    img: 'data:image/png;base64,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',
    url: 'https://www.netlify.app',
    github: 'https://github.com/engineergrowth',
    title: 'second project',
    text: 'Project description 2....',
  },
  {
    id: nanoid(),
    img: 'data:image/jpeg;base64,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',
    url: 'https://www.netlify.app/',
    github: 'https://github.com/engineergrowth',
    title: 'third project',
    text: 'Third project description.....',
  },
];
