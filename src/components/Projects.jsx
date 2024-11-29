import PropTypes from "prop-types";
import { projects } from '../data.jsx'
import SectionTitle from "./SectionTitle.jsx";
import { ProjectCard } from "./ProjectCard.jsx";

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

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

export default Portfolio;
