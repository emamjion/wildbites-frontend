"use client";

import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCookieBite } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

const links = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/shop',
        title: 'Shop'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
    {
        path: '/blogs',
        title: 'Blogs'
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <nav className="container mx-auto flex justify-between items-center py-8">
                {/* logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold py-8">
                    <FaCookieBite/>
                    <p>Wild<span className="text-primary">bites</span></p>
                </div>
                {/* menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 ">
                        {
                            links.map((link, index) => {
                                return <Link className="inline-block py-1 px-3 hover:text-primary duration-500 font-semibold text-gray-600" key={index} href={link.path} >{link.title}</Link>
                            })
                        }
                    </ul>
                </div>
                {/* icon section */}
                <div className="flex items-center gap-4">
                    <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                        <CiSearch/>
                    </button>
                    <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                        <PiShoppingCartThin />
                    </button>
                    <button className="hover:bg-primary text-primary hover:text-white rounded-md border-2 border-primary px-8 py-2 duration-300 hidden md:block font-semibold" >Login</button>
                </div>
                {/* mobile hamburger menu section */}
                <div onClick={() => setOpen(!open)} className="md:hidden">
                    <MdMenu className="text-4xl cursor-pointer"  />
                </div>
            </nav>

            {/* Mobile sidebar section */}
            <ResponsiveMenu open={open} />
        </>
    );
};

export default Navbar;