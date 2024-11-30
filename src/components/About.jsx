import SectionTitle from './SectionTitle';
import aboutImage from '../assets/about.png';

const About = () => {
    return (
        <section className='bg-blue-50 py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <article>
                    <SectionTitle text='About Me' />
                    <p className='text-black mt-8'>
                        <span className='font-bold'>Hi there!</span> I recently graduated with a Software Engineering degree from WGU, focusing on C#, and I also completed Fullstack Academy. I'm passionate about web development, with expertise ranging from vanilla JavaScript to React and backend technologies.
                    </p>

                    <p className='text-black mt-4'>
                        <span className='font-bold'>My Journey:</span> I founded Folly Web Design and Marketing, where I built custom web solutions for businesses in Charleston, SC, including liquor stores, construction companies, and restaurants. Although I closed the business in 2016 when I moved to Las Vegas, that experience has shaped my skills and approach to development.
                    </p>

                    <p className='text-black mt-4'>
                        <span className='font-bold'>Outside of Tech:</span> I’m an avid card game enthusiast, ranking among the top global Spades players and hosting online tournaments. I also enjoy bridge, poker, and have worked as a certified sommelier and sales manager in logistics.
                    </p>
                </article>

                <img src={aboutImage} alt='Coding, Cards, & Beyond' className='w-full h-full object-cover' />
            </div>
        </section>
    );
};


export default About;
