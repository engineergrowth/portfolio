import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

export const ProjectCard = ({ title, description, githubLink, liveLink, image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleModalClose = () => setIsModalOpen(false);

    return (
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-black">{title}</h3>
                <p className="text-black mt-3">{description}</p>
                <div className="mt-4 flex space-x-4 text-red-600">
                    {githubLink && githubLink !== "" && (
                        <>
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                GitHub
                            </a>
                            <span>|</span>
                        </>
                    )}
                    {liveLink && liveLink !== "" ? (
                        <>
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Live Demo
                            </a>
                            <span>|</span>
                        </>
                    ) : null}
                    <a
                        href="#"
                        onClick={handleModalOpen}
                        className="hover:underline"
                    >
                        View Screenshot
                    </a>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                image={image}
                title={title}
            />
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    image: PropTypes.string.isRequired,
};
