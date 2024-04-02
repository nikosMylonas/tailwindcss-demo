'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/img/logo.png';

export default function Header() {
    function menuBtnEvent() {
        const btn = document.getElementById('menu-btn');
        const nav = document.getElementById('menu');

        btn?.classList.toggle('open');
        nav?.classList.toggle('flex');
        nav?.classList.toggle('hidden');
    }

    return (
        <header className="fixed top-0 left-0 right-0 bg-seaGreen text-white py-4">
            <nav className="container relative">
                <div className="flex items-center justify-between">
                    <div className="pb-2 md:pb-0 -ml-4">
                        <Link href={'/'}>
                            <Image src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link
                            className="text-white no-underline hover:text-menuItemsHover hover:transition hover:duration-300"
                            href="#"
                        >
                            Pricing
                        </Link>
                        <Link
                            className="text-white no-underline hover:text-menuItemsHover hover:transition hover:duration-300"
                            href="#"
                        >
                            Products
                        </Link>
                        <Link
                            className="text-white no-underline hover:text-menuItemsHover hover:transition hover:duration-300"
                            href="#"
                        >
                            About Us
                        </Link>
                        <Link
                            className="text-white no-underline hover:text-menuItemsHover hover:transition hover:duration-300"
                            href="#"
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="hidden md:block md:pr-2">
                        <Link
                            href="#"
                            className="bg-menuBgSecondary px-4 py-2 rounded-md baseline text-white no-underline hover:bg-menuHoverSecondary hover:text-white hover:transition hover:duration-350"
                        >
                            Get Started
                        </Link>
                    </div>
                    {/* Hamburger Icon */}
                    <button
                        id="menu-btn"
                        className="block hamburger md:hidden focus:outline-none"
                        onClick={menuBtnEvent}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <div
                        id="menu"
                        className="absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-semibold bg-seaGreen/80 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
                    >
                        <Link className="no-underline text-white" href="#">
                            Pricing
                        </Link>
                        <Link className="no-underline text-white" href="#">
                            Products
                        </Link>
                        <Link className="no-underline text-white" href="#">
                            About Us
                        </Link>
                        <Link className="no-underline text-white" href="#">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
