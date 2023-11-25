import { Links } from "../data.jsx";

const Navbar = () => {
    return (
        <nav className='bg-blue-900'>
            <div className='align-element flex flex-col sm:flex-row sm:items-center justify-between py-4 sm:py-8'>
                <h2 className='text-red-600 text-3xl font-bold mb-4 sm:mb-0'>
                    Blake Geard
                </h2>
                <div className='flex gap-x-3'>
                    {Links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <a key={id} href={href}
                               className='text-white capitalize text-xl sm:text-2xl tracking-wide hover:text-red-600 duration-200'>
                                {text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
