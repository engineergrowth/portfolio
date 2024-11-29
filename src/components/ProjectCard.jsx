export const ProjectCard = ({ title, description, githubLink, liveLink, image }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-700 mt-3">{description}</p>
                <div className="mt-4 flex space-x-4">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};