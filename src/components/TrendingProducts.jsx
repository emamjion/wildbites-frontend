"use client";
import Image from "next/image";
import { PiHeartThin } from "react-icons/pi";
import Swal from "sweetalert2";
import tranding1 from '../../public/assets/images/tranding1.webp';
import tranding2 from '../../public/assets/images/tranding2.webp';

const TrendingProducts = () => {
    const handleHeartButton = () => {
        Swal.fire("Product added!");
    }
    return (
        <section className="bg-[#f2f2f2] pt-[120px] pb-[90px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-center flex-col mb-12">
                    <h3 className="text-[#721b65] mb-2 text-base font-semibold tracking-widest uppercase">Trending Products</h3>
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#2c2c2c]">Deal Of The Day</h1>
                </div>
                <div className="mt-6">
                    {/* content conatainer */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30px]">
                        {/* left content */}
                        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-[30px]">
                            {/* image part */}
                            <div className="relative w-full lg:w-1/2 border border-[#d7d7d7]">
                                <Image
                                    src={tranding1}
                                    alt="tranding product"
                                    width={268}
                                    height={316}
                                    className="w-full"
                                />
                                <div className="absolute top-4 right-6 lg:top-3 lg:right-3 bg-white w-[42px] h-[42px] flex items-center justify-center rounded-full cursor-pointer">
                                    <PiHeartThin onClick={handleHeartButton} className="text-2xl"/>
                                </div>
                            </div>
                            {/* text part */}
                            <div className="w-full lg:w-1/2">
                                <div>
                                    <h3 className="bg-accent px-4 py-1.5 w-[215px] text-[#721b65] font-bold rounded rounded-r-[50px] mb-6">End In: 00 : 00 : 00 : 00</h3>
                                    <h4 className="text-lg mb-2">Joust Duffle Bag</h4>
                                    <p className="text-lg font-bold text-[#721b65]">$20.19</p>
                                </div>
                                <p className="border-b-2 border-dotted border-accent my-8"></p>
                                <ul className="ml-6 list-disc text-[#721b65] space-y-1.5">
                                    <li>Predecessor : None.</li>
                                    <li>Support Type : Neutral.</li>
                                    <li>Cushioning : High Energizing.</li>
                                    <li>Total Weight : 300gm</li>
                                </ul>
                            </div>
                        </div>
                        {/* right content */}
                        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-[30px]">
                            {/* image part */}
                            <div className="relative w-full lg:w-1/2 border border-[#d7d7d7]">
                                <Image
                                    src={tranding2}
                                    alt="tranding product"
                                    width={268}
                                    height={316}
                                    className="w-full"
                                />
                                <div className="absolute top-4 right-6 lg:top-3 lg:right-3 bg-white w-[42px] h-[42px] flex items-center justify-center rounded-full cursor-pointer">
                                    <PiHeartThin onClick={handleHeartButton} className="text-2xl"/>
                                </div>
                            </div>
                            {/* text part */}
                            <div className="w-full lg:w-1/2">
                                <div>
                                    <h3 className="bg-accent px-4 py-1.5 w-[215px] text-[#721b65] font-bold rounded rounded-r-[50px] mb-6">End In: 00 : 00 : 00 : 00</h3>
                                    <h4 className="text-lg mb-2">Wayfarer Messenger Bag</h4>
                                    <p className="text-lg font-bold text-[#721b65]">$40.99</p>
                                </div>
                                <p className="border-b-2 border-dotted border-accent my-8"></p>
                                <ul className="list-disc text-[#721b65] ml-6 space-y-1.5">
                                    <li>Predecessor : None.</li>
                                    <li>Support Type : Neutral.</li>
                                    <li>Cushioning : High Energizing.</li>
                                    <li>Total Weight : 500gm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingProducts;