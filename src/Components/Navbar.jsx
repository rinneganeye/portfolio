'use client'
import { useState } from 'react';
import Link from 'next/link';
import { navbar } from '../../public/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#0E0E0E] text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <p className="text-xl font-bold">Amey Shinde</p>
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-4 ml-10">
                            {
                                navbar.map(item => {
                                    return (
                                        <>
                                            <Link href={item.link}>
                                                <p className="hover:text-gradient ease-in-out duration-200 px-3 py-2 rounded-md text-sm font-semibold">{item.title}</p>
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar for mobile */}
            <div
                className={`fixed top-12 left-0 h-full w-64 bg-[#0E0E0E] z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="px-4 py-4">

                    <nav className="space-y-4">
                        {
                            navbar.map(item => {
                                return (
                                    <>
                                        <Link href={item.link}>
                                            <p className="block pl-1 py-2 rounded-md text-base font-semibold hover:text-gradient ease-in-out duration-200">{item.title}</p>
                                        </Link>
                                    </>
                                )
                            })
                        }
                    </nav>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
