// TODO: Card Design should be improved

import Image from "next/image";
import Link from "next/link";
import discount1 from '../../public/assets/images/4.webp';
import discount2 from '../../public/assets/images/5.webp';
import discount3 from '../../public/assets/images/6.webp';

const DiscountSection = () => {
    return (
        <section className="container mx-auto pb-[90px]">
            {/* content container */}
            <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-[20px]">
                <div className="relative">
                    <div className="relative">
                        <Image
                            src={discount1}
                            width={370}
                            height={247}
                            alt=""
                        />
                    </div>
                    <div className="absolute top-12 left-8 z-20">
                        <h3 className="text-lg text-[#721b65] mb-2.5 font-semibold"> -25% Off</h3>
                        <h1 className="text-[#721b65] text-2xl font-bold mb-7">Dog Dry Food <br /> & Medicine</h1>
                        <Link className="border-b border-[#721b65] uppercase text-sm text-[#721b65]" href={'/shop'}>Shop Now</Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative">
                        <Image
                            src={discount2}
                            width={370}
                            height={247}
                            alt=""
                        />
                    </div>
                    <div className="absolute top-12 left-8 z-20">
                        <h3 className="text-lg text-[#721b65] mb-2.5 font-semibold"> -25% Off</h3>
                        <h1 className="text-[#721b65] text-2xl font-bold mb-7">Dog Dry Food <br /> & Medicine</h1>
                        <Link className="border-b border-[#721b65] uppercase text-sm text-[#721b65]" href={'/shop'}>Shop Now</Link>
                    </div>
                </div>
                <div className="relative ">
                    <div className="relative">
                        <Image
                            src={discount3}
                            width={370}
                            height={247}
                            alt=""
                        />
                    </div>
                    <div className="absolute top-12 left-8 z-20">
                        <h3 className="text-lg text-[#721b65] mb-2.5 font-semibold"> -25% Off</h3>
                        <h1 className="text-[#721b65] text-2xl font-bold mb-7">Dog Dry Food <br /> & Medicine</h1>
                        <Link className="border-b border-[#721b65] uppercase text-sm text-[#721b65]" href={'/shop'}>Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;