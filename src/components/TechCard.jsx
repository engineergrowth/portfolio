import PropTypes from 'prop-types';

const TechCard = ({ icon, title, text }) => {
    return (
        <article className='text-white'>
            <span className='h-16 w-16 text-red-600'>{icon}</span>
            <h4 className='mt-6 font-bold'>{title}</h4>
            <p className='mt-2'>{text}</p>
        </article>
    );
};


TechCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default TechCard;
