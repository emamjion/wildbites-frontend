"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiHeartThin } from "react-icons/pi";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <section className="container mx-auto pt-[120px] pb-[90px]">
            {/* TODO: Top bar should be design */}
            <div>

            </div>

            {/* products */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                {
                    products.map(product => (
                        <motion.div 
                                className="" 
                                id={product.id}
                                key={product.id}
                                initial={{ opacity: 0, x: 10 }} 
                                whileInView={{ opacity: 1, x: 0 }} 
                        >
                            <div className="relative">
                                <Image
                                    src={product.image}
                                    alt="product image"
                                    width={270}
                                    height={320}
                                />
                                <div className="absolute top-3 right-20 lg:top-3 lg:right-3 bg-white w-[42px] h-[42px] flex items-center justify-center rounded-full cursor-pointer">
                                    <PiHeartThin className="text-2xl "/>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <h1 className="text-lg font-medium mb-2">{product.title}</h1>
                                <p className="text-lg font-bold text-[#721b65]"><span>$</span><span>{product.price}</span></p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    );
};

export default Products;