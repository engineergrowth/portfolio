import PropTypes from 'prop-types';

const SectionTitle = ({ text }) => {
    return (
        <div className='border-b border-gray-300 pb-5'>
            <h2 className='text-3xl font-extrabold tracking-wider capitalize text-red-600'>{text}</h2>
        </div>
    );
};


SectionTitle.propTypes = {
    text: PropTypes.string.isRequired
};

export default SectionTitle;
