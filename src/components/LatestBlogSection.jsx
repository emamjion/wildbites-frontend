"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const LatestBlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
    return (
        <section className="container mx-auto pt-[120px] pb-[90px]">
            <div className="flex items-center justify-center flex-col">
                <h3 className="text-[#721b65] mb-2 text-base font-semibold tracking-widest uppercase">New & Latest</h3>
                <h1 className="text-5xl font-bold text-[#2c2c2c]">Latest Blog</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-6">
                {
                    blogs.map(blog => (
                        <div key={blog.id} className="border border-[#dedede] rounded-lg p-2">
                            <div>
                                <Image
                                    src={blog.image}
                                    alt=""
                                    width={350}
                                    height={250}
                                />
                            </div>
                            <div className="">
                                <div className="flex items-center justify-center gap-3 pt-9">
                                    <p className="text-[#721b65] font-medium">by:{blog.author}</p>
                                    <p className="text-[#721b65] font-medium">{blog.date}</p>
                                </div>
                                <div className="relative">
                                    <h1 className="text-3xl font-semibold mt-3 mb-5 text-[#2c2c2c] px-4">{blog.title}</h1>
                                    <div className="text-center a">
                                        <button className="px-6 py-2 bg-accent rounded text-white hover:bg-[#721b65] duration-300">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default LatestBlogSection;