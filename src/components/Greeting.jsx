import Me from '../assets/me.png';
import { FaGithubAlt, FaLinkedinIn} from 'react-icons/fa';
const Greeting = () => {
    return (
        <section id="home" className='bg-blue-50 py-24  '>
            <div className='align-element grid  md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='lg:text-7xl md:text-3xl text-2xl text-blue-900 font-bold tracking-wider'>Blake.</h1>
                    <p className='mt-4 lg:text-3xl md:text-2xl text-xl text-slate-800 capitalize tracking-wide'>
                        Full Stack Developer
                    </p>
                    <p className='mt-2 lg:text-xl md:text-l text-slate-700 capitalize tracking-wide'>
                        Enthusiast turned professional.
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href='https://github.com/engineergrowth' target='_blank' rel='noopener noreferrer'>
                            <FaGithubAlt className='icons' />
                        </a>
                        <a href='https://www.linkedin.com/in/blake-geard/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedinIn className=' icons' />
                        </a>
                    </div>
                </article>
                <article>
                    <img src={Me} alt="a picture of blake" className="h-25 w-auto sm:h-50 sm:w-auto md:h-96 md:w-auto" />


                </article>
            </div>
        </section>
    );
};
export default Greeting;