import TechCard from './TechCard.jsx';
import { skills } from '../data';
import SectionTitle from './SectionTitle';

const Tech = () => {
    return (
        <section id="skills" className='bg-blue-900 py-20 text-white'>
            <div className='align-element'>
                <SectionTitle text='Tech Toolbox' />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-16'>
                    {skills.map((skill) => {
                        return <TechCard key={skill.id} {...skill} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Tech;
