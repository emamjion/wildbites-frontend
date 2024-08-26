"use client";

import { AnimatePresence, motion } from "framer-motion";

const ResponsiveMenu = ({open}) => {
    return (
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0, y: -100}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{opacity: 0, y: -100}}
                        className="absolute top-20 left-0 w-full h-screen z-20"
                    >
                        <div className="font-semibold text-lg uppercase bg-primary text-white py-10 m-6 rounded-2xl">
                            <ul className="flex flex-col justify-center items-center gap-6">
                                <li>Home</li>
                                <li>About</li>
                                <li>Shop</li>
                                <li>Blogs</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default ResponsiveMenu;