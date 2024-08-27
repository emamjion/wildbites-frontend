"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiHeartThin } from "react-icons/pi";

const TabComponent = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Trending', 'BestSeller', 'Featured', 'OnSell'];
    const filteredCards = activeTab === 'All' ? products : products.filter((card) => card.category === activeTab);
    return (
        <div className="my-12 md:my-16">
            {/* Tab button section */}
            <div className="flex space-x-4 flex-wrap justify-center mb-4 p-6">
                {
                    tabs.map((tab, index) => {
                        return <button 
                            onClick={() => setActiveTab(tab)} 
                            key={index}
                            className={`py-2 px-4 ${activeTab === tab ? "bg-accent text-[#721b65] font-semibold rounded" : ""}`}
                        >
                            {tab}
                        </button>
                    })
                }
            </div>

            {/* Tab cards section */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                {
                    filteredCards.map((card) => {
                        return (
                            <motion.div 
                                className="" 
                                id={card.id}
                                key={card.id}
                                initial={{ opacity: 0, x: 10 }} 
                                whileInView={{ opacity: 1, x: 0 }} 
                            >
                                <div className="relative">
                                    <Image
                                        src={card.image}
                                        alt="product image"
                                        width={270}
                                        height={320}
                                    />
                                    <div className="absolute top-3 right-20 lg:top-3 lg:right-3 bg-white w-[42px] h-[42px] flex items-center justify-center rounded-full cursor-pointer">
                                        <PiHeartThin className="text-2xl "/>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <h1 className="text-lg font-medium mb-2">{card.title}</h1>
                                    <p className="text-lg font-bold text-[#721b65]"><span>$</span><span>{card.price}</span></p>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TabComponent;