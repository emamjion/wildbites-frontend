"use client";
import Image from 'next/image';
import petFood from '../../../public/assets/images/about.webp';
import Button from '../Button';
const AboutBestFood = () => {
    return (
        <section className="pt-[124px] pb-[120px] bg-[#f6f6f6]">
            <div className="container mx-auto">
                {/* Content container */}
                <div className="flex lg:flex-row flex-col-reverse gap-8">
                    {/* image container */}
                    <div className="lg:w-1/2">
                        <Image
                            src={petFood}
                            alt="best food image"
                        />
                    </div>
                    
                    {/* text container */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="title-bg">
                            <h3 className="text-[#721b65] mb-2 text-base font-semibold tracking-widest uppercase">Best Product</h3>
                            <h1 className="text-5xl font-bold text-[#2c2c2c]">Best Pet Food</h1>
                        </div>
                        <div className="mt-12">
                            <p className="mb-8 text-[#181818] leading-relaxed">
                                At Wildbites, we offer premium pet food made with high-quality, natural ingredients to ensure optimal health for your furry friends. Our carefully crafted formulas cater to all life stages, providing balanced nutrition and delicious flavors. Make mealtime enjoyable and nourishing with Wildbites.
                            </p>
                            <p className="mb-8 text-[#181818] leading-relaxed">
                                We understand every pet is unique, so our range includes options for various dietary needs, from grain-free recipes to those enriched with probiotics. Our pet food supports optimal digestion, skin health, and energy levels, ensuring your pets thrive with every meal. At Wildbites, we’re dedicated to excellence in nutrition, helping your pets stay happy and healthy. Trust us to provide the care your pets deserve.
                            </p>
                        </div>
                        <div>
                            <Button>Shop Now</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutBestFood;