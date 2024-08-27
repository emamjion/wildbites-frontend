"use client";
import '../../styles/AboutBanner.css';
const AboutBanner = ({pathname}) => {
    
    return (
        <section className="about-bg pt-[120px] pb-[122px]">
            <div className='container mx-auto'>
                <h1 className='mb-6 text-5xl font-bold text-[#2c2c2c]'>About Us</h1>
                <div className='flex items-center gap-1 font-semibold text-lg'>
                    <span>Home</span>
                    <span className='capitalize text-[#721b65]'>{pathname}</span>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;