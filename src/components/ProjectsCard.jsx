import PropTypes from 'prop-types';
import { FaGithubAlt, FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({ url, img, github, title, text }) => {
    return (
        <article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'>
            <img
                src={img}
                alt={title}
                className='w-full object-cover rounded-t-lg h-64 '
            />
            <div className='capitalize p-8'>
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 text-blue-900 leading-loose'>{text}</p>
                <div className='mt-4 flex gap-x-4'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <FaGlobe className='icons' />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithubAlt className='icons' />
                    </a>
                </div>
            </div>
        </article>
    );
};

ProjectsCard.propTypes = {
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ProjectsCard;
