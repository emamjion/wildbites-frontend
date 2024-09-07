"use client";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Image from "next/image";
import { useEffect, useState } from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import quote from '../../public/assets/icons/quote.webp';
import WorkSliderBtns from './WorkSliderBtns';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('./testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, []);

    
    
    return (
        <div className="pt-[120px] pb-[90px] bg-[#f2f2f2]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-[#721b65] mb-2 text-base font-semibold tracking-widest uppercase">Testimonial</h3>
                    <h1 className="text-5xl font-bold text-[#2c2c2c]">What Client Says</h1>
                </div>
                <div className="mt-6 w-full lg:flex items-center justify-center">
                    <Swiper slidesPerView={3} spaceBetween={30} className=''>
                        {
                            testimonials.map(testimonial => (
                                <SwiperSlide key={testimonial.id} className="pt-10 pr-4 pb-4 pl-7 bg-white w-full h-full lg:w-[370px] lg:h-[350px] rounded-lg">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Image
                                            src={testimonial.image}
                                            alt=""
                                            width={90}
                                            height={90}
                                            className="rounded-full"
                                        />
                                        <div>
                                           <h1 className='text-lg font-medium'>{testimonial.name}</h1>
                                            <p>
                                                <Rating
                                                    style={{ maxWidth: 80 }}
                                                    value={testimonial.rating}
                                                    readOnly
                                                />
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <p className='italic'>{testimonial.description}</p>
                                    </div>
                                    <div className='flex items-center justify-end'>
                                        <Image
                                            src={quote}
                                            width={55}
                                            height={38}
                                            alt=''
                                        />
                                    </div>
                                </SwiperSlide>
                            )) 
                        }
                        {/*TODO: Button place should be align perfect Slider button */}
                        <WorkSliderBtns
                            containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-32 z-20 w-full justify-between lg:max-w-full lg:justify-between'
                            btnStyles='bg-accent hover:bg-accent-hover text-[22px] h-[44px] w-[44px] flex justify-center items-center text-[#721b65] transition-all'
                        />
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;