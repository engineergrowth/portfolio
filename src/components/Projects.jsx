import PropTypes from "prop-types";
import SectionTitle from "./SectionTitle.jsx";
import { ProjectCard } from "./ProjectCard.jsx";
import todaysGigImage from '../assets/todaysgig.png';
import eduTrackImage from '../assets/edutrack.png';
import puckerUpImage from '../assets/puckerup.png';
import globalSchedulerImage from '../assets/globalscheduler.png';
import codingVidzImage from '../assets/codingvidz.png';

const projects = [
    {
        title: "Coding Vidz",
        description: "Coding Vidz is a platform I built to make it easier for developers to share, discover, and organize their favorite coding videos. Inspired by my own journey as a developer, I wanted to create a tool that simplifies learning and helps others find the right resources quickly. Built with TypeScript, React, Node.js, and Prisma, the app features secure user authentication using JWT and bcrypt, a tagging system for easy video discovery, and bookmarking functionality to save videos for later. I designed the interface with Tailwind CSS to ensure it’s clean, responsive, and user-friendly. This project reflects my passion for building tools that enhance learning and showcases my ability to deliver a full-stack application with robust backend systems and intuitive design.",
        githubLink: "https://github.com/engineergrowth/CodingVidz",
        liveLink: "https://codingvidz.netlify.app/",
        image: codingVidzImage,
    },
    {
        title: "Today's Gig (Under Development)",
        description: "A full-stack web application built with Next.js, Supabase, and Stripe to connect gig workers with businesses posting short-term jobs. The platform features real-time job postings, secure user authentication, and easy payment processing. I developed a responsive, user-friendly interface using React, ensuring a seamless experience across all devices.\n" +
            "\n" +
            "While the project is paused due to funding, it demonstrates my ability to build scalable, secure, and intuitive web applications.",
        githubLink: "",
        liveLink: "https://www.todaysgig.com",
        image: todaysGigImage,
    },
    {
        title: "EduTrack",
        description: "This mobile application was developed as part of my Software Engineering capstone project at WGU. It allows students to track academic terms, courses, and assessments, with features like adding and managing courses, viewing progress, and receiving notifications. Built using .NET MAUI, the app’s architecture includes a scalable database design with entities for Terms, Courses, Assessments, and Users." +
            " I focused on ensuring a user-friendly interface, incorporating wireframes to iterate on design, and implemented testing using NUnit. The app is built using object-oriented principles, ensuring maintainability and scalability. This project demonstrates my ability to develop a fully functional, data-driven application from concept to deployment.",
        githubLink: "",
        liveLink: "",
        image: eduTrackImage,
    },
    {
        title: "Pucker Up",
        description: "This web application was developed collaboratively during my Fullstack Academy capstone project. Built with Node.js, Express, React, and Prisma, it is a dating platform featuring real-time messaging via WebSockets, authentication using JSON Web Tokens and bcrypt, and a matching system where users can heart profiles and connect upon mutual interest. " +
            "Our team utilized GitHub pull requests, a project board for task management, and Agile methodologies to ensure seamless collaboration. This project highlights my experience with full-stack development, database design, and implementing real-time functionality in user-focused applications.",
        githubLink: "https://github.com/engineergrowth/dating-app",
        liveLink: "",
        image: puckerUpImage,
    },
    {
        title: "Global Scheduler",
        description: "Developed a desktop scheduling application using C# and MySQL. Features include multilingual login, timezone-aware scheduling, calendar views, user alerts for upcoming appointments, and full CRUD functionality for customers and appointments. Highlights proficiency in scalable, user-centric application design and robust database integration.",
        githubLink: "https://github.com/engineergrowth/global-scheduler",
        liveLink: "",
        image: globalSchedulerImage,
    },


];


const Portfolio = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="projects" className="py-8 px-4 bg-blue-900">
            <div className="container mx-auto max-w-4xl">
                <SectionTitle text='Portfolio' />
                <div className='pt-6 mt-8'>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            image={project.image}
                        />
                    ))}
                </div>

            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={scrollToTop}
                    className="px-4 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-400 transition duration-300"
                >
                Back to Top
                </button>
            </div>
        </section>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};


export default Portfolio;
