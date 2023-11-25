import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { BiArrowToTop } from "react-icons/bi";

const Projects = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section className='py-20 align-element' id='projects'>
            <SectionTitle text='Portfolio' />
            <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {projects.map((project) => (
                    <ProjectsCard key={project.id} {...project} />
                ))}
            </div>
            <button onClick={scrollToTop} className="flex items-center justify-center w-full py-4 mt-8 text-lg font-medium text-red-600 duration-300">
                <BiArrowToTop className="text-red-600" /> Back to Top <BiArrowToTop className="text-red-600" />
            </button>
        </section>
    );
};

export default Projects;