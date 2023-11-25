import SectionTitle from './SectionTitle';
import aboutImage from '../assets/about.png';

const About = () => {
    return (
        <section className='bg-blue-50 py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <article>
                    <SectionTitle text='About Me' />
                    <p className='text-black mt-8'>
                        <span className='font-bold'>Greetings!</span> I'm at the intersection of academia and coding, pursuing a Software Engineering degree at WGU with a focus on C#.
                        Adding to the mix, I'm currently enrolled in Fullstack Academy, where I'm deep diving into web development,
                        covering everything from vanilla to React and backend technologies.
                    </p>

                    <p className='text-black mt-4'>
                        <span className='font-bold'>Tech Voyage:</span> My journey involves not only a robust academic foundation but also hands-on experience. In the past, I founded Folly Web Design and Marketing,
                        where I sculpted tailored web solutions for a spectrum of businesses in Charleston, SC, including a liquor store, construction company, home remodel, and restaurants.
                        From crafting digital storefronts to enhancing online visibility, my technical prowess shines through in creating user-centric designs.
                        Although I closed Folly Web Design and Marketing in 2016 when I moved to Las Vegas, the experience remains a pivotal part of my trajectory in the tech world.
                    </p>

                    <p className='text-black mt-4'>
                        <span className='font-bold'>Beyond Code:</span> Away from the screen, I'm a card game enthusiast, excelling as one of the top spades players globally and hosting free online tournaments. My love for card games extends to bridge and poker.
                        Additionally, my diverse professional background includes roles as a certified sommelier, fine dining aficionado, and seasoned sales manager in the logistics realm.
                    </p>
                </article>

                <img src={aboutImage} alt='Coding, Cards, & Beyond' className='w-full h-full object-cover' />
            </div>
        </section>
    );
};

export default About;
