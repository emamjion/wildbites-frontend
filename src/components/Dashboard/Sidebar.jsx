"use client";

import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft, FaCookieBite, FaProductHunt } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbUsers } from "react-icons/tb";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const menus = [
        {
            title: 'Dashboard', 
            link: '/dashboard',
            icon: <RxDashboard />
        },
        {
            title: 'Users', 
            link: '/dashboard/users',
            icon: <TbUsers />,
            gap: true
        },
        {
            title: 'Add Product', 
            link: '/dashboard/add-product',
            icon: <FaProductHunt />
        },
        {
            title: 'Add Blog', 
            link: '/dashboard/add-blog',
            icon: <MdOutlineArticle  />
        },
        {
            title: 'Home', 
            link: '/',
            gap: true
        },
        {
            title: 'About', 
            link: '/about',
        },
        {
            title: 'Shop', 
            link: '/shop',
        },
        {
            title: 'Blogs', 
            link: '/blogs',
        },
        {
            title: 'Contact', 
            link: '/contact',
        },
    ]
    return (
        <nav className={`bg-[#081a51] h-screen duration-300 p-5 pt-8 ${open ? 'w-72' : 'w-20'} relative`}>
            
            {/* sidebar fold button */}
            <button onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 w-9 h-9 rounded-full bg-white border-2 border-[#081a51] flex items-center justify-center duration-300 ${!open && 'rotate-180'}`}>
            <FaAngleLeft className="text-lg" />
            </button>
            
            {/* sidebar logo */}
            <div className="flex items-center gap-x-4">
                <span className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}>
                    <FaCookieBite className="text-2xl text-accent"/>
                </span>
                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Wild<span className="text-accent">bites</span></h1>
            </div>
            
            {/* nav list */}
            <ul className="pt-6">
                {
                    menus.map((menu, index) => {
                        return <Link 
                                    key={index} 
                                    href={menu.link}
                                    className={`text-gray-300 flex items-center ${!open && 'justify-center'} gap-x-4 cursor-pointer p-2 hover:bg-accent hover:text-[#721b65] rounded-md ${menu.gap ? "mt-9" : "mt-2"} `}
                                >
                            <span>{menu?.icon}</span>
                            <h1 className={`${!open && 'hidden'} origin-left duration-200`}>{menu?.title}</h1>
                        </Link>
                    })
                }
            </ul>
        </nav>
    );
};

export default Sidebar;