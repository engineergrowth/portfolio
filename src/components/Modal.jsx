import PropTypes from 'prop-types';

const Modal = ({ image, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-400"
                >
                    X
                </button>
                <img
                    src={image}
                    alt="Project"
                    className="max-w-full max-h-[100vh] object-contain mx-auto"
                />
            </div>
        </div>
    );
};

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;

