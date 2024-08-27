import '../styles/HeroSection.css';
import Button from './Button';
const HeroSection = () => {
    return (
        <section className="section-bg h-full">
            <div className="container mx-auto h-full">
                <div className='flex items-center xl:items-end flex-col justify-center h-full w-full'>
                    <div className='w-full lg:max-w-[460px] md:text-center lg:text-left'>
                        <h3 className='text-primary text-xl tracking-wider font-medium mb-4'>100% Genue products</h3>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight lg:leading-snug text-white mb-4 md:mb-6'>Experience the Wild with Wildbites</h1>
                        <p className='mb-8 md:mb-12 text-white'>
                            Wildbites brings you nature&apos;s best flavors. Enjoy fresh, wild ingredients that make every meal an adventure.
                        </p>
                        <div>
                            <Button >Shop Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;